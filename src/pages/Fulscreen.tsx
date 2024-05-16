import SectionHeader from "../components/SectionHeader";
import ButtonGradient from "../components/buttons/ButtonGradient";
import sections from "../data/classNames/sections";
import BlogWrapper from "../views/layout/BlogWrapper";
import Footer from "../views/layout/Footer";
import Navbar from "../views/layout/Navbar";

export default function Fullscreen() {
  return (
    <>
      <Navbar />
      <section class={`${sections.common}`}>
        <SectionHeader text="License" />
        <BlogWrapper class="mx-auto w-[300px]">
          <div>
            <ButtonGradient onclick={() => document.body.requestFullscreen()} class="w-full">
              Full screen
            </ButtonGradient>
          </div>
          <div>
            <ButtonGradient onclick={() => document.exitFullscreen()} class="w-full">
              {" "}
              Exit fullscreen
            </ButtonGradient>
          </div>
        </BlogWrapper>
      </section>
      <Footer />
    </>
  );
}
