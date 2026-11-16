import Image from "next/image";
import { Mail } from "lucide-react";
import { assets } from "@/assets/assets";
import { Reveal } from "./ui/Reveal";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/ajaysth", icon: assets.github_icon },
  {
    label: "Instagram",
    href: "https://www.instagram.com/aj.s.10/",
    icon: assets.insta_icon,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/ajay.shrest.110",
    icon: assets.fb_icon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ajay-shrestha-28bb462aa/",
    icon: assets.linkedin_icon,
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-zinc-200 bg-white px-5 py-9">
      <Reveal className="mx-auto flex max-w-6xl flex-col items-center text-center">
        <a
          href="#home"
          className="text-lg font-semibold tracking-tight text-zinc-900"
        >
          Ajay<span className="text-orange-500">.</span>
        </a>
        <a
          href="mailto:ajayshrestha130@gmail.com"
          className="mt-2 inline-flex items-center gap-1.5 text-sm text-zinc-500 transition hover:text-zinc-900"
        >
          <Mail aria-hidden="true" size={13} />
          ajayshrestha130@gmail.com
        </a>

        <ul className="mt-4 flex items-center gap-3">
          {socialLinks.map(({ label, href, icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 text-zinc-500 transition hover:border-zinc-800 hover:text-zinc-900"
              >
                <Image
                  src={icon}
                  alt=""
                  sizes="14px"
                  className="h-3.5 w-3.5"
                />
              </a>
            </li>
          ))}
        </ul>

        <p className="mt-5 text-xs text-zinc-500">
          &copy; 2025 Ajay Shrestha. All rights reserved.
        </p>
      </Reveal>
    </footer>
  );
};

export default Footer;
