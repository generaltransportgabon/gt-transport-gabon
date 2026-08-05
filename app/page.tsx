import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Fleet from "@/components/Fleet";
import Projects from "@/components/Projects";
import WhyChooseUs from "@/components/WhyChooseUs";
import Clients from "@/components/Clients";
import Testimonials from "@/components/Testimonials";
import Quote from "@/components/Quote";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BackToTop from "@/components/BackToTop";
import TopBar from "@/components/TopBar";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Fleet />
      <Projects />
      <WhyChooseUs />
      <Clients />
      <Testimonials />
      <Quote />
      <Gallery />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <WhatsAppButton />
      <BackToTop />
      
    </>
  );
}