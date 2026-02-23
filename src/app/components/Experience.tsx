import React from "react";
import { motion } from "motion/react";

const jobs = [
  {
    company: "Mayo Clinic",
    role: "Senior Product Manager",
    period: "2021 – Present",
    description:
      "Leading digital platforms for cardiovascular research and next-generation diagnostics. Built a multi-study mobile ecosystem collecting voice, wearable, and longitudinal health data to enable earlier disease detection and AI-driven insights.",
    logo: "MC"
  },
  {
    company: "Memorial Sloan Kettering Cancer Center",
    role: "Product & Research Operations Leader",
    period: "2004 – 2021",
    description:
      "Spent 17 years improving patient experience and clinical research operations in cancer care. Led initiatives that streamlined workflows, enhanced patient engagement, and supported research teams in delivering high-quality care and data-driven insights.",
    logo: "MSK"
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Experience & Track Record</h2>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            I've had the privilege of working with diverse teams across different stages of company growth, from early-stage startups to established enterprises.
          </p>
          <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl hidden lg:block">
             <img 
               src="https://images.unsplash.com/photo-1743385779347-1549dabf1320?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwbWFuYWdlbWVudCUyMHN0aWNreSUyMG5vdGVzJTIwcGxhbm5pbmd8ZW58MXx8fHwxNzcwODE4MzM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
               alt="Product planning"
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-indigo-900/20 mix-blend-multiply" />
          </div>
        </div>

        <div className="space-y-8">
          {jobs.map((job, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex gap-4 group"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-white border-2 border-indigo-100 flex items-center justify-center text-indigo-700 font-bold shadow-sm group-hover:border-indigo-600 transition-colors z-10">
                  {job.logo}
                </div>
                {index !== jobs.length - 1 && (
                  <div className="w-0.5 h-full bg-slate-200 my-2 group-hover:bg-indigo-100 transition-colors" />
                )}
              </div>
              <div className="pb-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-xl font-bold text-slate-900">{job.role}</h3>
                  <span className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full w-fit mt-1 sm:mt-0">
                    {job.period}
                  </span>
                </div>
                <div className="text-indigo-600 font-medium mb-2">{job.company}</div>
                <p className="text-slate-600 leading-relaxed">
                  {job.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
