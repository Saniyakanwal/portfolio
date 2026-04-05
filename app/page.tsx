import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Project";
// import Projects from "@/components/Projects"; // Jab aap banayengi tab unlock kar lena

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
      
    </div>
  );
}