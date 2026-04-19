import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Stack } from "@/components/Stack";
import { Work } from "@/components/Work";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Work />
        <Projects />
        <Education />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
