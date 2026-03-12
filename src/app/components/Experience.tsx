import React from "react";
import { motion } from "motion/react";

const jobs = [
  {
    company: "Mayo Clinic",
    role: "Senior Product Manager",
    period: "2021 – Present",
    description:
      "Leading product strategy for a multi-study mobile research platform that has collected hundreds of thousands of voice samples and millions of wearable sensor readings to power AI-driven cardiovascular diagnostics and early disease detection.",
    logo: "MC",
  },
  {
    company: "Memorial Sloan Kettering Cancer Center",
    role: "Product & Operations Leader",
    period: "2005 – 2021",
    description:
      "Scaled a patient-reported outcomes platform from 12 to 110+ instruments, supporting 1M+ patient submissions and 300K+ patient engagements. Led development of an adverse event reporting system adopted across 820+ clinical trials, and used SQL analysis to eliminate 100K+ unnecessary surveys per month.",
    logo: "MSK",
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="py-20 md:py-24 bg-gradient-to-b from-white via-slate-50 to-slate-50"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 xl:gap-16 items-start">
          {/* Left */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
              Experience & Track Record
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-slate-600 max-w-xl">
              I lead product strategy and execution at the intersection of healthcare, AI, and
              mobile technology. I build scalable platforms, launch multi-study infrastructure,
              and partner with clinicians, engineers, and data scientists to turn complex ideas
              into measurable outcomes.
            </p>

            <motion.div
              className="mt-10 hidden lg:block"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="relative h-[400px] rounded-2xl overflow-hidden
                           bg-white/70 backdrop-blur
                           border border-slate-200/70
                           shadow-[0_18px_60px_-30px_rgba(15,23,42,0.45)]
                           ring-1 ring-white/60"
              >
                <motion.img
                  src="/images/arch_diagram.png"
                  alt="Product architecture visualization"
                  className="w-full h-full object-cover
                             grayscale-[10%] contrast-105 brightness-[0.99]"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                />

                {/* subtle top sheen */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/20" />
              </motion.div>
            </motion.div>
          </div>

          {/* Right */}
          <div className="space-y-10">
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.08 }}
                className="flex gap-5"
              >
                {/* Timeline */}
                <div className="flex flex-col items-center">
                  <div
                    className="w-12 h-12 rounded-full bg-white
                               border border-slate-200
                               flex items-center justify-center
                               text-slate-900 font-semibold tracking-tight
                               shadow-sm
                               ring-1 ring-white/60"
                  >
                    {job.logo}
                  </div>

                  {index !== jobs.length - 1 && (
                    <div className="w-px flex-1 bg-gradient-to-b from-slate-200 via-slate-200 to-transparent mt-3" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-2">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <h3 className="text-xl font-semibold text-slate-900 tracking-tight">
                      {job.role}
                    </h3>
                    <span
                      className="text-sm font-medium text-slate-600
                                 bg-white/70 border border-slate-200/70
                                 px-3 py-1 rounded-full w-fit"
                    >
                      {job.period}
                    </span>
                  </div>

                  <div className="mt-2 text-slate-700 font-medium">
                    <span className="text-slate-500">at </span>
                    <span className="text-indigo-600">{job.company}</span>
                  </div>

                  <p className="mt-3 text-slate-600 leading-relaxed max-w-xl">
                    {job.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}