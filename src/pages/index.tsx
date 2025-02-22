import Footer from "../views/layout/Footer";
import Navbar from "../views/layout/Navbar";
import AISections from "../views/sections/AISections";
import BusinessSection from "../views/sections/BusinessSection";
import CompaniesSection from "../views/sections/CompaniesSection";
import ContactSection from "../views/sections/ContactSection";
import ExploreSection from "../views/sections/ExploreSection";
import HeroSection from "../views/sections/HeroSection";
import ProjectSection from "../views/sections/ProjectSection";
import SkillSection from "../views/sections/SkillSection";
import TestimonialSection from "../views/sections/TestimonialSection";

export default function Views() {
  const container = "px-4 py-20 border-light sm:px-20";

  return (
    <>
      <Navbar />
      <HeroSection class={container} id="home" />
      <SkillSection class={container} id="skills" />
      <ProjectSection class={container} id="projects" />
      <BusinessSection class={container} id="business" />
      <AISections class={container} id="ai" />
      <ExploreSection class={container} id="explore" />
      <ContactSection class={container} id="contact" />
      <TestimonialSection class={container} id="reviews" />
      <CompaniesSection class={container} id="companies" />
      <Footer />
    </>
  );
}
