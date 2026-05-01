import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Founder from "../components/Founder";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Treatments from "../components/Treatments";
import Quotes from "../components/Quotes";  
import WhyUs from "../components/whyUs";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Founder />
      <Treatments />
      <Quotes />
      <Services />
      <WhyUs />
      <Footer />
    </>
  );
}