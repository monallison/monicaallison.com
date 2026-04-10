import { motion } from "motion/react";

type Publication = {
  title: string;
  venue: string;
  year: number;
  note?: string;
  url?: string;
};

type Project = {
  title: string;
  category: string;
  impact: string;
  platform: string;
  focus: string[];
  image: string;
  publications?: Publication[];
};

const projects: Project[] = [
  {
    title: "Digital Biobank & CV Research Platform",
    category: "Digital Health • Mobile Research Infrastructure",
    impact:
      "Led development of a scalable digital biobank powering AI-driven cardiovascular research at Mayo Clinic — 350K+ voice samples, 3.3B sensor readings, and sustained 48% WAU/MAU engagement among research participants.",
    platform: "iOS • Android • Apple HealthKit • Google Health Connect • Azure",
    focus: ["Product Strategy", "Platform Architecture", "0→1 Platform Launch", "Data Pipelines"],
    image: "/images/projects/cv-platform.png",
  },
  {
    title: "Clinical Trial Safety Reporting Platform",
    category: "Clinical Research • EHR Integration",
    impact:
      "Replaced fragmented manual adverse event reporting with a structured platform adopted across 820+ therapeutic trials at Memorial Sloan Kettering — integrated directly into clinical workflows.",
    platform: "EHR Integration • Clinical Data Systems • SQL",
    focus: ["Product Strategy", "0→1 Platform Launch", "Clinical Workflow Transformation"],
    image: "/images/projects/CRT_tracking.png",
    publications: [
      {
        title: "A New Approach to Documenting and Reporting of Clinical Trial-Emergent Adverse Events.",
        venue: "AMIA Clinical Informatics Conference",
        year: 2020,
      },
    ],
  },
  {
    title: "Patient-Reported Outcomes Platform",
    category: "Patient Experience • PRO Collection at Scale",
    impact:
      "Transformed a stalled PRO program into a scaled platform — 110+ instruments, 1M+ patient submissions, and 100K+ unnecessary surveys eliminated per month.",
    platform: "Custom-built",
    focus: ["Product Strategy", "Patient Engagement", "Product Turnaround"],
    image: "/images/projects/Survey.png",
    publications: [
      {
        title: "Case Study of Integrating Electronic Patient-Reported Outcomes as Standard of Care in a Head and Neck Oncology Practice: Obstacles and Opportunities.",
        venue: "Cancer",
        year: 2021,
        note: "Named author",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8375640/",
      },
      {
        title: "MSK Engage: A Comprehensive Program for Collection of Patient Reported Outcomes at Scale.",
        venue: "Journal of Clinical Oncology",
        year: 2024,
        note: "Platform featured",
        url: "https://ascopubs.org/doi/10.1200/JCO.2024.42.16_suppl.e13666",
      },
    ],
  },
];

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
              A few representative builds where I led strategy, aligned stakeholders, and delivered meaningful outcomes.
            </p>
          </div>
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

                <div className="mt-5 space-y-3">
                  <div>
                    <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-1">Platform</div>
                    <div className="text-sm text-slate-700">{project.platform}</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-1">Focus</div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.focus.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.publications && (
                    <div>
                      <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-2">Publications</div>
                      <ul className="space-y-2">
                        {project.publications.map((pub) => (
                          <li key={pub.title} className="text-xs text-slate-600 leading-snug">
                            {pub.url ? (
                              <a
                                href={pub.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-indigo-600 transition-colors"
                              >
                                <span className="italic">{pub.title}</span>
                              </a>
                            ) : (
                              <span className="italic">{pub.title}</span>
                            )}
                            <span className="text-slate-400"> {pub.venue}, {pub.year}.</span>
                            {pub.note && (
                              <span className="ml-1.5 px-1.5 py-0.5 rounded text-[10px] font-semibold bg-indigo-50 text-indigo-600">
                                {pub.note}
                              </span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
