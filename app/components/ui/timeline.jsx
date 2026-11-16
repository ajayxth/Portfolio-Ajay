import { Reveal } from "./Reveal";

export const Timeline = ({ data }) => {
  return (
    <section
      id="education"
      className="scroll-mt-20 border-y border-zinc-100 bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <Reveal className="mb-9 text-center">
          <p className="section-kicker">ACADEMIC BACKGROUND</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
            Education
          </h2>
        </Reveal>

        <div className="relative space-y-3">
          <div className="absolute bottom-5 left-[11px] top-5 w-px bg-zinc-200" />

          {data.map((item, index) => (
            <Reveal
              as="article"
              key={item.title}
              delay={index * 0.06}
              className="relative pl-8"
            >
              <span className="absolute left-[5px] top-6 h-3.5 w-3.5 rounded-full border-[3px] border-white bg-zinc-800 ring-1 ring-zinc-300" />
              <div className="rounded-xl border border-zinc-200 bg-zinc-50/70 p-4 transition-colors hover:bg-white sm:px-5">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <span className="w-fit rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold tracking-wide text-amber-800">
                    {item.duration}
                  </span>
                  <span className="text-sm text-zinc-500">{item.location}</span>
                </div>
                <h3 className="mt-2 text-base font-semibold text-zinc-900 sm:text-lg">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-zinc-500">
                  {item.institution}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
