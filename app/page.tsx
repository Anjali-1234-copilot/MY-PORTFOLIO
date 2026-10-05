import { Navbar } from "@/components/navbar/Navbar";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { Skills } from "@/components/skills/Skills";
import { Projects } from "@/components/projects/Projects";
import { Education } from "@/components/education/Education";
import { Certifications } from "@/components/certifications/Certifications";
import { BeyondCode } from "@/components/beyond-code/BeyondCode";
import { Contact } from "@/components/contact/Contact";
import { Footer } from "@/components/footer/Footer";
import { BackToTop } from "@/components/footer/BackToTop";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <BeyondCode />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
