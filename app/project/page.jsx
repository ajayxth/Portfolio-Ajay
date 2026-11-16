"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projectData } from "@/assets/assets";

const Project = () => {
  return (
    <section id="project" className="scroll-mt-20 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="mb-9 text-center">
          <p className="section-kicker">MY PORTFOLIO</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
            My Projects
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-zinc-500">
            Selected projects from my software development work and independent
            portfolio.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {projectData.map((project) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} project`}
              className="group overflow-hidden rounded-xl border border-zinc-200 bg-white transition-all duration-200 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-lg hover:shadow-zinc-900/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500"
            >
              <div className="relative aspect-[1.65/1] overflow-hidden bg-zinc-100">
                <Image
                  src={project.bgImage}
                  alt={`${project.title} preview`}
                  width={660}
                  height={400}
                  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs font-semibold tracking-[0.16em] text-zinc-500">
                    {project.category}
                  </p>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-zinc-200 text-zinc-500 transition-colors group-hover:border-zinc-900 group-hover:bg-zinc-900 group-hover:text-white">
                    <ArrowUpRight aria-hidden="true" size={14} />
                  </span>
                </div>
                <h3 className="mt-1 text-base font-semibold text-zinc-900">
                  {project.title}
                </h3>
                <p className="mt-1.5 line-clamp-2 text-sm leading-6 text-zinc-500">
                  {project.description}
                </p>
                <ul className="mt-3 flex flex-wrap gap-1">
                  {project.stack.map((technology) => (
                    <li
                      key={technology}
                      className="rounded border border-zinc-100 bg-zinc-50 px-1.5 py-0.5 text-xs text-zinc-500"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
