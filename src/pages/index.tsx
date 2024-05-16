import Footer from "../views/layout/Footer";
import Navbar from "../views/layout/Navbar";
import AISections from "../views/sections/AISections";
import BusinessSection from "../views/sections/BusinessSection";
import CompaniesSection from "../views/sections/CompaniesSection";
import ContactSection from "../views/sections/ContactSection";
import ExploreSection from "../views/sections/ExploreSection";
import HeroSection from "../views/sections/HeroSection";
import ProjectSection from "../views/sections/ProjectSection";
import SkilSection from "../views/sections/SkilSection";
import TestimonialSection from "../views/sections/TestimonialSection";

export default function Views() {
  const container = "px-4 py-20 border-light sm:px-20";

  return (
    <>
      <Navbar />
      <HeroSection class={container} id="home" />
      <SkilSection class={container} id="skils" />
      <ProjectSection class={container} id="project" />
      <BusinessSection class={container} id="business" />
      <ContactSection class={container} id="contact" />
      <TestimonialSection class={container} />
      <ExploreSection class={container} id="explore" />
      <AISections class={container} id="ai" />
      <CompaniesSection class={container} id="companies" />
      <Footer />
    </>
  );
}
