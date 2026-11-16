"use client";

import Image from "next/image";
import {
  ArrowRight,
  Download,
  Mail,
} from "lucide-react";
import { assets } from "@/assets/assets";
import { Reveal } from "./ui/Reveal";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/ajayxth",
    image: assets.github_icon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ajay-shrestha-28bb462aa/",
    image: assets.linkedin_icon,
  },
  {
    label: "Email",
    href: "mailto:ajayshrestha130@gmail.com",
    icon: Mail,
  },
];

const Header = () => {
  return (
    <section
      id="home"
      className="hero-grid relative flex min-h-[100svh] scroll-mt-16 items-center justify-center overflow-hidden px-5 pb-16 pt-28 text-center"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center">
        <Reveal trigger="mount" className="mb-4">
          <Image
            src={assets.profile_img}
            alt="Ajay Shrestha"
            loading="eager"
            sizes="(min-width: 640px) 112px, 96px"
            className="h-24 w-24 rounded-full object-cover ring-4 ring-white shadow-lg shadow-zinc-900/10 sm:h-28 sm:w-28"
          />
        </Reveal>

        <Reveal trigger="mount" delay={0.06} className="mb-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium tracking-wide text-emerald-800">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Available for work
          </span>
        </Reveal>

        <Reveal trigger="mount" delay={0.12} className="mb-3">
          <p className="rounded-full border border-zinc-200 bg-white/80 px-3 py-1 text-sm text-zinc-600 shadow-sm">
            Full Stack Developer <span className="px-1 text-zinc-300">/</span>{" "}
            Bhaktapur, Nepal
          </p>
        </Reveal>

        <Reveal
          as="h1"
          trigger="mount"
          delay={0.18}
          className="text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl md:text-6xl"
        >
          Fullstack Developer
        </Reveal>

        <Reveal
          as="p"
          trigger="mount"
          delay={0.24}
          className="mt-4 max-w-2xl text-base leading-7 text-zinc-600"
        >
          Full Stack Developer and BCA graduate with hands-on experience
          developing and deploying web applications using React, Next.js,
          Node.js, Express, and MongoDB. Experienced in responsive interfaces,
          REST APIs, database integration, and end-to-end application
          development.
        </Reveal>

        <Reveal
          trigger="mount"
          delay={0.3}
          className="mt-7 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-zinc-950 px-5 py-2.5 text-base font-medium text-white transition hover:bg-zinc-700"
          >
            Get in touch
            <ArrowRight aria-hidden="true" size={15} />
          </a>
          <a
            href="/aj-resume.pdf"
            download
            className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white/80 px-5 py-2.5 text-base font-medium text-zinc-800 transition hover:border-zinc-500 hover:bg-white"
          >
            View resume
            <Download aria-hidden="true" size={15} />
          </a>
        </Reveal>

        <Reveal
          as="ul"
          trigger="mount"
          delay={0.36}
          className="mt-6 flex items-center gap-5"
        >
          {socialLinks.map(({ label, href, icon: Icon, image }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={label}
                className="inline-flex items-center gap-1.5 text-sm text-zinc-500 transition hover:text-zinc-950"
              >
                {image ? (
                  <Image src={image} alt="" className="h-3.5 w-3.5" />
                ) : (
                  <Icon aria-hidden="true" size={14} />
                )}
                {label}
              </a>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
};

export default Header;
