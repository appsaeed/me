import { Link } from '@solidjs/router'
import { BsGithub } from 'solid-icons/bs'
import { VsLiveShare } from 'solid-icons/vs'
import { createSignal, For, JSX } from 'solid-js'
import Animate from '../../animation'
import ButtonGradient from '../../components/buttons/ButtonGradient'
import Image from '../../components/Image'
import SectionDescription from '../../components/SectionDescription'
import SectionHeader from '../../components/SectionHeader'
import projects from '../../data/projects'
export default function ProjectSection(props: JSX.HTMLAttributes<HTMLElement>) {

  const chunkSize = 3; // Number of projects to load per batch
  const [visibleProjects, setVisibleProjects] = createSignal(projects.slice(0, chunkSize));
  const [isLoading, setIsLoading] = createSignal(false);

  const loadMore = () => {
    if (isLoading()) return; // Prevent multiple clicks
    setIsLoading(true); // Show loading state

    const nextBatch = projects.slice(0, visibleProjects().length + chunkSize);

    // Simulating API delay
    setTimeout(() => {
      setVisibleProjects(nextBatch);
      setIsLoading(false); // Hide loading state after fetching
    }, 1000);
  };

  return (
    <section {...props}>
      <SectionHeader>Projects</SectionHeader>
      <SectionDescription>
        The following projects showcase my skills and experience through real-world examples of my work. Each project is
        briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex
        problems, work with different technologies, and manage projects effectively.
      </SectionDescription>
      <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <For each={visibleProjects()}>
          {(project, index) => {
            return <ProjectCard index={index()} {...project} />
          }}
        </For>
      </div>

      {/* Load More Button */}
      <div class="w-full flex justify-center mt-6">
        {visibleProjects().length < projects.length && (
          <Animate.button motion="slideInUp" onClick={loadMore} disabled={isLoading()}>
            <ButtonGradient class="text-white flex items-center justify-center gap-2 px-6 py-2">
              {isLoading() ? (
                <>
                  <span class="animate-spin border-2 border-t-transparent border-white rounded-full w-5 h-5"></span>
                  Loading...
                </>
              ) : (
                'Load more'
              )}
            </ButtonGradient>
          </Animate.button>
        )}
      </div>

    </section>
  )
}

type PProps = { index: number } & (typeof projects)[number]
export function ProjectCard({ title, image, description, tags, link, github_link }: PProps) {
  return (
    <div
      // motion="slideInUp"
      // duration={`1.${index}s`}
      class=" bg-slate-900 p-4 rounded-2xl w-full transition scale-100 hover:scale-105 flex flex-col"
    >
      <div class="relative w-full h-48">
        <Image src={image} alt={title} class="w-full h-full rounded-2xl" />
        <div class="absolute inset-0 flex  m-3 gap-2 justify-between">
          {github_link && (
            <div class="w-8 h-8 p-1  rounded-full bg-gray-500 text-center items-start text-2xl hover:bg-gray-600">
              <Link target="_blank" href={github_link || ''}>
                <BsGithub />
              </Link>
            </div>
          )}
          {link && (
            <div class="w-8 h-8 p-1  rounded-full bg-gray-500 text-center items-center align-middle text-2xl hover:bg-gray-600">
              <Link href={link || ''} target="_blank">
                <VsLiveShare
                  role="img"
                  aria-label={title}
                  style={{
                    overflow: 'hidden',
                  }}
                />
              </Link>
            </div>
          )}
        </div>
      </div>
      <div class="mt-5 cursor-pointer">
        <h3 class="text-white font-bold text-2xl">{title}</h3>
        <p class="my-2 text-[14px] text-slate-300" ref={elm => (elm.innerHTML = description)}></p>
      </div>
      <div class="mt-auto py-4 flex flex-wrap">
        <For each={tags}>{tag => <span class="link lowercase m-1">#{tag}</span>}</For>
      </div>
    </div>
  )
}
