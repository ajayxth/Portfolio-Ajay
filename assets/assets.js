import user_image from "./user-image.jpeg";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import figma from "./figma.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.jpg";
import profile_img_about from "./profile-img2.jpg";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";
import fb_icon from "./fb-icon.png";
import dc_icon from "./dc-icon.png";

import github_icon from "./github-icon.png";

import insta_icon from "./insta-icon.png";

import linkedin_icon from "./linkedin-icon.png";
import linux_icon from "./linux-icon.png";
import vscode_icon from "./vscode-icon.png";
import slack_icon from "./slack-icon.png";
import ms_icon from "./ms-icon.png";
import my_logo from "./my-logo.png";
import bgo from "./bgo.jpg";
import bgt from "./bg2.jpg";
import call from "./call.png";
import edu from "./edu.png";
import project from "./project.png";
import tool from "./tool.png";
import setting from "./setting.png";
import db from "./db.png";
import os from "./os.png";
import code from "./code.png";

export const assets = {
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  // vscode,
  firebase,
  figma,
  git,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  profile_img_about,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
  fb_icon,
  dc_icon,
  github_icon,
  insta_icon,
  linkedin_icon,
  linux_icon,
  vscode_icon,
  slack_icon,
  ms_icon,
  my_logo,
  bgo,
  bgt,
  call,
  edu,
  project,
  os,
  db,
  tool,
  setting,
  code,
};

export const projectData = [
  {
    title: "Blogo",
    category: "FULL-STACK",
    description:
      "A modern blog with authentication, profile management, rich-text publishing, search, likes, threaded comments, author dashboards, media uploads, and pagination.",
    stack: ["React", "TypeScript", "MongoDB", "Express", "Node.js", "AWS"],
    bgImage: "/work-1.png",
    link: "https://github.com/ajayxth/Mern-Blog-Proj8",
  },
  {
    title: "Antique Nepal",
    category: "E-COMMERCE",
    description:
      "An online store for sustainable hemp goods, with product listings and cart functionality, developed during my internship.",
    stack: ["Next.js", "Clerk", "Prisma", "Supabase"],
    bgImage: "/work-2.png",
    link: "https://github.com/GoingGeniusGroup/antique-nepal",
  },
  {
    title: "Brainwaves",
    category: "WEB APPLICATION",
    description:
      "A full-featured blog platform supporting post creation, editing, and user authentication, backed by a relational data model.",
    stack: ["Next.js", "Prisma", "Supabase"],
    bgImage: "/work-3.png",
    link: "https://github.com/ajaysth/The-Blog-Platform-BRAINWAVES.git",
  },
  {
    title: "AI Image Generator",
    category: "AI APPLICATION",
    description:
      "An AI image-generation app using Stable Diffusion XL, with prompt input, live image previews, and downloads.",
    stack: ["React", "TypeScript", "Express", "Hugging Face API"],
    bgImage: "/work-4.png",
    link: "https://github.com/ajayxth/ai-img-gen.git",
  },
  {
    title: "GPT-3 Landing Page",
    category: "FRONTEND",
    description:
      "A responsive AI product landing page with reusable components and mobile-friendly navigation.",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    bgImage: "/work-1.png",
    link: "https://gpt-3-design-sigma.vercel.app",
  },
  {
    title: "MERN Auth System",
    category: "FULL-STACK",
    description:
      "A responsive authentication system with reusable components and a modern, mobile-friendly interface.",
    stack: ["React", "TypeScript", "MongoDB", "Express", "Node.js"],
    bgImage: "/work-2.png",
    link: "https://github.com/ajaysth/Auth-System-MERN",
  },
];

export const skillData = [
  {
    icon: assets.code,
    title: "Programming Languages",
    description: "JavaScript, TypeScript",
    link: "",
  },
  {
    icon: assets.project,
    title: "Frameworks & Libraries",
    description:
      "React.js, Next.js, Node.js, Express.js, Tailwind CSS, Bootstrap, Redux Toolkit",
    link: "",
  },
  {
    icon: assets.db,
    title: "Databases & ORMs",
    description: "MongoDB, MySQL, SQLite, Supabase, Prisma ORM, Mongoose",
    link: "",
  },
  {
    icon: assets.tool,
    title: "Development Tools",
    description: "Git, GitHub, Vercel, VS Code, Antigravity, Postman",
    link: "",
  },
  {
    icon: assets.code,
    title: "Markup & Styling",
    description: "HTML5, CSS3, Tailwind CSS, SCSS",
    link: "",
  },
  {
    icon: assets.project,
    title: "Management & Spoken Languages",
    description: "Jira, Agile, Scrum, Figma, Nepali (native), English",
    link: "",
  },
];

export const infoList = [
  {
    title: "Bachelor of Computer Applications (BCA)",
    duration: "Jun 2023 - Present",
    institution: "Everest College",
    location: "Thapathali, Kathmandu",
  },
  {
    title: "Higher Secondary Education (+2)",
    duration: "May 2020 - Apr 2022",
    institution: "Sainik Awasiya Mahavidyalaya",
    location: "Sallaghari, Bhaktapur",
  },
  {
    title: "Secondary Education Examination (SEE)",
    duration: "Apr 2014 - Mar 2019",
    institution: "Sainik Awasiya Mahavidyalaya",
    location: "Sallaghari, Bhaktapur",
  },
];

export const toolsData = [
  { name: "VS Code", icon: assets.vscode_icon },
  { name: "GitHub", icon: assets.github_icon },
  { name: "Vercel", icon: assets.web_icon },
  { name: "Figma", icon: assets.figma },
];
