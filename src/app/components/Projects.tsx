"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  live: string | null;
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const hasLiveLink = Boolean(project.live && project.live.trim().length > 0);

  return (
    <ScrollReveal delay={index * 100}>
      <article className="group rounded-2xl overflow-hidden bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-300 flex flex-col h-full">
        {/* Preview Image */}
        <div className="relative aspect-video w-full overflow-hidden bg-zinc-950 border-b border-zinc-800/60">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
          />
        </div>

        {/* Card Details */}
        <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
          <div>
            {/* Title */}
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 tracking-tight group-hover:text-zinc-200 transition-colors">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
              {project.description}
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-[11px] font-mono text-zinc-300 bg-zinc-800/60 border border-zinc-700/40 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-3 pt-2 border-t border-zinc-800/60">
            {/* GitHub Link (Always displayed) */}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-medium rounded-lg bg-zinc-800/80 text-zinc-200 hover:text-white hover:bg-zinc-700 border border-zinc-700/60 transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </a>

            {/* Live Link (Only shown when available) */}
            {hasLiveLink && (
              <a
                href={project.live as string}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-lg bg-white text-black hover:bg-zinc-200 transition-colors"
              >
                <span>Live Demo</span>
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            )}
          </div>
        </div>
      </article>
    </ScrollReveal>
  );
}

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="relative py-20 md:py-28 px-6 border-t border-zinc-900">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block mb-2">
              Portofolio Proyek
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white tracking-tight">
              Aplikasi dan sistem yang pernah saya bangun.
            </h2>
          </div>
        </ScrollReveal>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
