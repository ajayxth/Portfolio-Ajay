"use client";
import Image from "next/image";
import { BriefcaseBusiness, MapPin } from "lucide-react";
import { assets, infoList } from "@/assets/assets";
import { Reveal } from "../components/ui/Reveal";
import { Timeline } from "../components/ui/timeline";

const About = () => {
  return (
    <>
      <section
        id="about"
        className="scroll-mt-20 bg-zinc-50 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <Reveal className="mb-10 text-center">
            <p className="section-kicker">INTRODUCTION</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
              About me
            </h2>
          </Reveal>

          <div className="grid items-center gap-8 md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-14">
            <Reveal
              delay={0.06}
              className="mx-auto w-full max-w-[280px] overflow-hidden rounded-2xl border border-zinc-200 bg-white p-2 shadow-sm"
            >
              <Image
                src={assets.profile_img_about}
                alt="Ajay Shrestha"
                sizes="(min-width: 768px) 220px, 280px"
                className="aspect-[4/4.5] w-full rounded-xl object-cover"
              />
              <div className="px-3 pb-3 pt-4">
                <h3 className="font-semibold text-zinc-900">Ajay Shrestha</h3>
                <p className="mt-1 text-sm text-zinc-500">
                  Full Stack Developer
                </p>
                <p className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-800">
                  <MapPin aria-hidden="true" size={12} />
                  Bhaktapur, Nepal
                </p>
              </div>
            </Reveal>

            <div className="space-y-7">
              <Reveal
                as="p"
                delay={0.12}
                className="max-w-3xl text-base leading-7 text-zinc-600"
              >
                Full Stack Developer and BCA graduate with hands-on experience
                building and deploying modern web applications. I work across
                responsive user interfaces, REST APIs, database integration,
                and end-to-end features, with a focus on maintainable code and
                practical solutions.
              </Reveal>

              <section aria-labelledby="experience-heading">
                <p className="section-kicker mb-3">EXPERIENCE</p>
                <Reveal
                  as="article"
                  delay={0.18}
                  className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm sm:p-6"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-zinc-100 text-zinc-700">
                        <BriefcaseBusiness aria-hidden="true" size={17} />
                      </span>
                      <div>
                        <h3
                          id="experience-heading"
                          className="font-semibold text-zinc-900"
                        >
                          Software Developer Intern
                        </h3>
                        <p className="mt-1 text-sm text-zinc-500">
                          GoingGenius Group of Companies | Baneshwor, Kathmandu
                        </p>
                      </div>
                    </div>
                    <span className="whitespace-nowrap rounded-full bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-800">
                      Aug 2025 - Nov 2025
                    </span>
                  </div>

                  <ul className="mt-4 space-y-2 border-t border-zinc-100 pt-4 text-sm leading-6 text-zinc-600 sm:text-base">
                    <li>
                      Contributed to Antique Nepal, an e-commerce platform for
                      sustainable hemp goods, using Next.js, Clerk, Prisma ORM,
                      and Supabase.
                    </li>
                    <li>
                      Prototyped and iterated on UI components with Vercel v0,
                      and collaborated through code reviews and Git/GitHub
                      workflows.
                    </li>
                    <li>
                      Worked with Supabase for database management and
                      authentication.
                    </li>
                  </ul>
                </Reveal>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Timeline data={infoList} />
    </>
  );
};

export default About;


// "use client";
// import { assets, toolsData, infoList } from "@/assets/assets";
// import React from "react";
// import Image from "next/image";
// import { motion, useScroll, useTransform } from "framer-motion";
// import  { Timeline } from "../components/ui/timeline"
// const About = () => {

//   // 🎯 scroll tracking
//   const { scrollY } = useScroll();

//   // 🎯 image moves up slightly
//   const imageY = useTransform(scrollY, [0, 500], [0, -60]);

//   // 🎯 text effects
//   const textOpacity = useTransform(scrollY, [0, 300], [1, 0]);
//   const textX = useTransform(scrollY, [0, 300], [0, -30]);

//   return (
//     <div className="w-full px-[12%] py-10">

//       {/* HEADER */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="text-center"
//       >
//         <h4 className="mb-2 text-lg">Introduction</h4>
//         <h2 className="text-5xl">About me</h2>
//       </motion.div>

//       {/* MAIN SECTION */}
//       <div className="flex flex-col lg:flex-row items-start gap-20 my-20">

//         {/* IMAGE */}
//         <motion.div
//           style={{ y: imageY }}
//           initial={{ scale: 0.8, opacity: 0 }}
//           whileInView={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.6 }}
//           className="w-64 sm:w-80 rounded-3xl flex-shrink-0"
//         >
//           <Image
//             src={assets.profile_img}
//             alt="user"
//             className="w-full rounded-3xl object-cover"
//           />
//         </motion.div>

//         {/* RIGHT CONTENT */}
//         <motion.div
//           style={{ opacity: textOpacity, x: textX }}
//           className="flex-1 flex flex-col gap-8"
//         >

//           {/* TEXT */}
//           <p className="max-w-2xl text-gray-700">
//             I am an intern in fullstack development. Enthusiastic, energetic,
//             and eager to learn and grow my skills.
//           </p>

//           {/* TIMELINE */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <Timeline />
//           </motion.div>

//           {/* TOOLS */}
//           <div>
//             <h4 className="mb-2 text-gray-700 font-semibold">Tools I Use</h4>

//             <ul className="flex flex-wrap items-center gap-3 sm:gap-5">
//               {toolsData.map((tool, index) => (
//                 <motion.li
//                   key={index}
//                   initial={{ opacity: 0, scale: 0 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.3, delay: index * 0.05 }}
//                   className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-300 rounded-lg cursor-pointer hover:-translate-y-1 hover:shadow-md transition-transform duration-300"
//                 >
//                   <Image src={tool} alt="tool" className="w-5 sm:w-7" />
//                 </motion.li>
//               ))}
//             </ul>
//           </div>

//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default About;