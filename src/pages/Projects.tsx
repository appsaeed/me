import Footer from "../views/layout/Footer";
import Navbar from "../views/layout/Navbar";
import ProjectSection from "../views/sections/ProjectSection";

export default function ProjectsPage() {
    const container = "px-4 py-20 border-light sm:px-20";

    return (
        <>
            <Navbar />
            <ProjectSection class={container} id="projects" chunkSize={10} />
            <Footer />
        </>
    );
}
