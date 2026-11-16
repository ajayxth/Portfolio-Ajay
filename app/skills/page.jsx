"use client";

import Image from "next/image";
import { skillData, toolsData } from "@/assets/assets";

const Skills = () => {
  return (
    <section id="skills" className="scroll-mt-20 bg-zinc-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="text-center">
          <p className="section-kicker">TOOLS I USE</p>
          <ul className="mt-4 inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-zinc-200 bg-white p-1.5 shadow-sm">
            {toolsData.map(({ name, icon }) => (
              <li
                key={name}
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium text-zinc-600"
              >
                <Image
                  src={icon}
                  alt=""
                  sizes="14px"
                  className="h-3.5 w-3.5 object-contain"
                />
                {name}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-9 mt-14 text-center">
          <p className="section-kicker">WHAT I DO</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
            My Skills
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-zinc-500">
            Technologies and tools I use to build and deploy full-stack web
            applications.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillData.map(({ icon, title, description }) => (
            <article
              key={title}
              className="group rounded-xl border border-zinc-200 bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-300 hover:shadow-md hover:shadow-zinc-900/5"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-50">
                <Image src={icon} alt="" className="h-4 w-4 object-contain" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-zinc-900">
                {title}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {description.split(",").map((skill) => (
                  <li
                    key={skill.trim()}
                    className="rounded-md border border-zinc-100 bg-zinc-50 px-2 py-1 text-xs leading-5 text-zinc-600"
                  >
                    {skill.trim()}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
