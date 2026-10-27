import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { Capabilities } from "@/components/landing/capabilities";
import { HowItWorks } from "@/components/landing/how-it-works";
import { ProductPreview } from "@/components/landing/product-preview";
import { FinalCta } from "@/components/landing/final-cta";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Capabilities />
        <HowItWorks />
        <ProductPreview />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
