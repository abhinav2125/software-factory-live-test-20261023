import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { once } from "node:events";
import { setTimeout as delay } from "node:timers/promises";

const origin = "http://127.0.0.1:3210";
const server = spawn(process.execPath, [
  "node_modules/next/dist/bin/next", "start", "--hostname", "127.0.0.1", "--port", "3210",
], { stdio: ["ignore", "pipe", "pipe"], env: { ...process.env, NEXT_TELEMETRY_DISABLED: "1" } });
let logs = "";
let startupError: Error | undefined;
server.on("error", (error) => { startupError = error; });
for (const stream of [server.stdout, server.stderr]) {
  stream.on("data", (chunk: Buffer) => { logs = (logs + chunk).slice(-16384); });
}
const text = (html: string) => html.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
async function page(path: string) {
  const response = await fetch(origin + path, { signal: AbortSignal.timeout(5000) });
  assert.equal(response.status, 200, path);
  return response.text();
}
function heading(html: string) {
  return text(html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1] ?? "");
}
function primaryNav(html: string) {
  const nav = html.match(/<nav\b[^>]*aria-label="Primary"[^>]*>[\s\S]*?<\/nav>/i)?.[0];
  assert.ok(nav, "Shared primary navigation is rendered");
  const links = [...nav.matchAll(/<a\b[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi)]
    .map((match) => ({ href: match[1], label: text(match[2]) }));
  for (const [label, href] of [["Home", "/"], ["About Us", "/about"]]) {
    assert.ok(links.some((link) => link.label === label && link.href === href), `${label} links to ${href}`);
  }
  for (const id of ["capabilities", "how-it-works", "preview"]) {
    assert.ok(links.some((link) => link.href === `/#${id}`), `Home section link /#${id}`);
  }
}
try {
  let ready = false;
  for (let attempt = 0; attempt < 100; attempt++) {
    if (startupError) throw startupError;
    assert.equal(server.exitCode, null, logs);
    try {
      const response = await fetch(origin, { signal: AbortSignal.timeout(500) });
      await response.body?.cancel();
      if (response.ok) { ready = true; break; }
    } catch { /* Wait for the production listener. */ }
    await delay(150);
  }
  assert.ok(ready, logs);
  const home = await page("/");
  assert.match(heading(home), /Ship software at the speed of ideas/);
  for (const id of ["capabilities", "how-it-works", "preview"]) {
    assert.ok(home.includes(`id="${id}"`), `Retained landing section ${id}`);
  }
  primaryNav(home);
  const about = await page("/about");
  assert.equal(heading(about), "About Us");
  primaryNav(about);
  for (const section of ["Our purpose", "How we approach quality", "The team"]) {
    assert.ok(about.includes(section), `About content: ${section}`);
  }
  assert.ok(about.includes("<!-- factory-live-e2e:20261030-about-us -->"));
  assert.equal(heading(await page("/about")), "About Us", "Direct About refresh");
  assert.equal(heading(await page("/")), heading(home), "Home navigation returns to the full landing page");
  for (const html of [home, about]) {
    assert.equal((html.match(/<main\b/g) ?? []).length, 1, "One main landmark per route");
    assert.equal((html.match(/<footer\b/g) ?? []).length, 1, "One shared footer per route");
    const scripts = [...html.matchAll(/<script\b[^>]*src="([^"]+)"/g)].map((match) => match[1]);
    assert.ok(scripts.length > 0, "Hydration scripts are present");
    assert.ok(scripts.every((src) => src.startsWith("/_next/")), "Scripts are self hosted");
    for (const src of scripts) {
      const response = await fetch(origin + src, { signal: AbortSignal.timeout(5000) });
      assert.equal(response.status, 200, `Hydration script ${src}`);
      await response.body?.cancel();
    }
  }
  console.log(JSON.stringify({ passed: true, productionServer: true, homeStatus: 200,
    aboutStatus: 200, retainedLandingSections: 3, sharedNavigation: true,
    directAboutRefresh: true, hydrationScriptsAvailable: true, externalScripts: false }));
} finally {
  if (server.exitCode === null && !startupError) {
    const stopped = once(server, "exit");
    server.kill("SIGTERM");
    await Promise.race([stopped, delay(5000)]);
    if (server.exitCode === null) { server.kill("SIGKILL"); await stopped; }
  }
}
