import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import Work from "./components/sections/Work";
import Platforms from "./components/sections/Platforms";
import Stack from "./components/sections/Stack";
import Mindset from "./components/sections/Mindset";
import Experience from "./components/sections/Experience";
import Certificates from "./components/sections/Certificates";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Platforms />
        <Stack />
        <Mindset />
        <Experience />
        <Certificates />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}