import { Hero } from "@/components/landing/hero";
import { Capabilities } from "@/components/landing/capabilities";
import { HowItWorks } from "@/components/landing/how-it-works";
import { ProductPreview } from "@/components/landing/product-preview";
import { FinalCta } from "@/components/landing/final-cta";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <Capabilities />
      <HowItWorks />
      <ProductPreview />
      <FinalCta />
    </main>
  );
}
