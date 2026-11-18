import About from "./about/page";
import Header from "./components/Header";
import Skills from "./skills/page";
import Project from "./project/page";
import Contact from "./contact/page";


// Replace this with your actual deployed portfolio URL.
const SITE_URL = "https://ajaysthportfolio.netlify.app/";

export const metadata = {
  title: "Ajay Shrestha | Full Stack Developer",
  description:
    "I'm Ajay Shrestha, a BCA graduate and aspiring Full Stack Developer interested in building modern web applications using React, Next.js and Node.js.",
  openGraph: {
    title: "Ajay Shrestha | Full Stack Developer",
    description:
      "Explore my portfolio, technical skills and development projects.",
    url: SITE_URL,
    type: "website",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Ajay Shrestha",
      url: SITE_URL,
      jobTitle: "Aspiring Full Stack Developer",
      description:
        "BCA student interested in full-stack web development and building modern web applications.",
      knowsAbout: [
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "Web Development",
      ],
      sameAs: [
        "https://github.com/ajayxth",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "Ajay Shrestha Portfolio",
      url: SITE_URL,
      description:
        "Personal portfolio showcasing Ajay Shrestha's skills and development projects.",
      author: {
        "@id": `${SITE_URL}/#person`,
      },
      inLanguage: "en",
    },
  ],
};


export default function Home() {
  return (
    <>

    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <Header />
      <About />
      <Skills />
      <Project />
      <Contact />
    </>
  );
}
