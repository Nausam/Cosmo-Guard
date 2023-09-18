import About from "@/Components/About";
import ChoosePlan from "@/Components/ChoosePlan";
import Footer from "@/Components/Footer";
import GlobalNetwork from "@/Components/GlobalNetwork";
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";
import Offers from "@/Components/Offers";
import Testimonials from "@/Components/Testimonials";

export default function Home() {
  return (
    <section>
      <Navbar />
      <Hero />
      <About />
      <Offers />
      <ChoosePlan />
      <GlobalNetwork />
      <Testimonials />
      <Footer />
    </section>
  );
}
