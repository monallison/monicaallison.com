import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

type Outcome = {
  label: string;
  value: string;
};

type Project = {
  title: string;
  category: string;
  impact: string;
  outcomes: Outcome[];
  tags: string[],
  image: string;
  link: string;
};

const projects: Project[] = [
  {
    title: "CV Research Mobile Platform",
    category: "Digital Health • Mobile Research Infrastructure",
    impact:
      "Built a multi-study mobile platform at Mayo Clinic collecting hundreds of thousands of voice samples and millions of wearable sensor readings to power AI-driven cardiovascular diagnostics.",
    outcomes: [
      { label: "Voice samples", value: "100Ks collected" },
      { label: "Sensor readings", value: "Millions captured" },
      { label: "Platform", value: "Multi-study, 0→1" }
    ],
    tags: ["Product Strategy", "0→1 Platform", "iOS/Android", "Data Pipelines"],
    image: "/images/projects/cv-platform.png",
    link: "#"
  },
  {
    title: "Clinical Trial Adverse Event Reporting System",
    category: "Clinical Research • EHR Integration",
    impact:
      "Led development of an Epic-integrated adverse event reporting system adopted across 820+ therapeutic trials at Memorial Sloan Kettering, replacing manual processes with structured, data-driven documentation.",
    outcomes: [
      { label: "Trial adoption", value: "820+ trials" },
      { label: "Integration", value: "Epic + EHR" },
      { label: "Impact", value: "Enterprise-wide" }
    ],
    tags: ["Epic Integration", "Clinical Research", "Data Modeling", "Stakeholder Alignment"],
    image: "/images/projects/epic-dashboard.png",
    link: "#"
  },
  {
    title: "Patient-Reported Outcomes Platform",
    category: "Patient Experience • PRO Collection at Scale",
    impact:
      "Scaled an EHR-integrated PRO platform from 12 to 110+ instruments at MSK, supporting 1M+ patient submissions and using data analysis to eliminate 100K+ unnecessary surveys per month.",
    outcomes: [
      { label: "Patient submissions", value: "1M+" },
      { label: "Surveys eliminated", value: "100K+/month" },
      { label: "Instruments scaled", value: "12 → 110+" }
    ],
    tags: ["Mobile UX", "Behavioral Nudges", "Study Ops", "Measurement Design"],
    image: "/images/projects/pro-platform.png",
    link: "#"
  }
];

function MetricChip({ label, value }: Outcome) {
  return (
    <div className="rounded-xl border border-slate-200/70 bg-white/70 px-3 py-2">
      <div className="text-[11px] font-semibold text-slate-500">{label}</div>
      <div className="text-sm font-semibold text-slate-900">{value}</div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
              Featured Projects
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl">
              A few representative builds where I led strategy, aligned stakeholders, and shipped outcomes.
            </p>
          </div>

          <a
            href="#"
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
          >
            View all projects <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.08 }}
              className="group rounded-2xl overflow-hidden border border-slate-200/70 bg-white
                         shadow-[0_16px_50px_-35px_rgba(15,23,42,0.45)]
                         hover:shadow-[0_24px_70px_-40px_rgba(15,23,42,0.55)]
                         transition-shadow"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-50">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/0 via-white/0 to-white/20" />
              </div>

              <div className="p-6">
                <div className="text-[11px] font-bold tracking-wider text-indigo-600 uppercase">
                  {project.category}
                </div>

                <h3 className="mt-2 text-xl font-semibold tracking-tight text-slate-900">
                  {project.title}
                </h3>

                <p className="mt-3 text-slate-600 leading-relaxed">
                  {project.impact}
                </p>

                <div className="mt-5 grid grid-cols-3 gap-3">
                  {project.outcomes.map((m) => (
                    <MetricChip key={m.label} label={m.label} value={m.value} />
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-semibold
                                 bg-slate-100 text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-indigo-600"
                >
                  Case Study <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 md:hidden">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
          >
            View all projects <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}