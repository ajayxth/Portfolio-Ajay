
import { Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageLoadAnimation from "./components/PageLoadAnimation";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Ajay Shrestha | Full Stack Developer",
  description:
    "Explore the portfolio of Ajay Shrestha, a Full Stack Developer specializing in React, Next.js, and the MERN stack.",

  verification: {
    google: "ys6Qg6DM6XIYgX",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <Script id="portfolio-theme-init" strategy="beforeInteractive">
          {`(() => {
            const root = document.documentElement;
            let savedTheme = null;
            try {
              savedTheme = window.localStorage.getItem("portfolio-theme");
            } catch (error) {
              console.error("Unable to read the saved theme preference.", error);
            }
            const theme =
              savedTheme === "light" || savedTheme === "dark"
                ? savedTheme
                : window.matchMedia("(prefers-color-scheme: dark)").matches
                  ? "dark"
                  : "light";
            root.dataset.theme = theme;
            root.style.colorScheme = theme;
          })();`}
        </Script>
      </head>
      <body
        suppressHydrationWarning
        className={`${outfit.className} antialiased leading-8 overflow-x-hidden`}
      >
        <PageLoadAnimation />
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
