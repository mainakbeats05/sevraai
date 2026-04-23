import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { SevraAi } from "@/components/site/SevraAi";
import { Ecosystem } from "@/components/site/Ecosystem";
import { SevraOs } from "@/components/site/SevraOs";
import { Helios } from "@/components/site/Helios";
import { Imcs } from "@/components/site/Imcs";
import { Showcase } from "@/components/site/Showcase";
import { Security } from "@/components/site/Security";
import { UseCases } from "@/components/site/UseCases";
import { Vision } from "@/components/site/Vision";
import { Cta } from "@/components/site/Cta";
import { MyCare } from "@/components/site/MyCare";
import { Footer } from "@/components/site/Footer";

const Index = () => {
  return (
    <main className="relative bg-background text-foreground">
      <Nav />
      <h1 className="sr-only">SEVRA AI — Intelligent Healthcare Infrastructure</h1>
      <Hero />
      <SevraAi />
      <Ecosystem />
      <SevraOs />
      <Helios />
      <Imcs />
      <Showcase />
      <Security />
      <UseCases />
      <Vision />
      <Cta />
      <MyCare />
      <Footer />
    </main>
  );
};

export default Index;
