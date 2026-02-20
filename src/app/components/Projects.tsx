import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "FinDash Analytics",
    category: "SaaS • Fintech",
    description: "A comprehensive dashboard for financial advisors to track client portfolios in real-time. Reduced reporting time by 40%.",
    image: "https://images.unsplash.com/photo-1695742968496-2b0127f103cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwcHJvZHVjdCUyMHdpcmVmcmFtZSUyMHNrZXRjaHxlbnwxfHx8fDE3NzA3NDUwMjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React", "D3.js", "Python", "PostgreSQL"],
    link: "#"
  },
  {
    title: "TaskMaster Pro",
    category: "Productivity • Mobile",
    description: "An AI-powered task management app that prioritizes your day automatically. 100k+ downloads on App Store.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1080",
    tags: ["Mobile Strategy", "UX Research", "AI Integration"],
    link: "#"
  },
  {
    title: "EcoCommerce",
    category: "E-commerce • Sustainability",
    description: "Marketplace for sustainable goods. Built the MVP and scaled to $1M GMV in the first year.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1080",
    tags: ["Marketplace", "Growth Hacking", "Stripe API"],
    link: "#"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
            <p className="text-lg text-slate-600 max-w-xl">
              A selection of products I've built, managed, and scaled.
            </p>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-indigo-600 font-medium hover:underline mt-4 md:mt-0">
            View all projects <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group rounded-2xl overflow-hidden border border-slate-100 bg-white hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors" />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-xs font-bold tracking-wider text-indigo-600 uppercase mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-indigo-700 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 mb-6 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.link}
                  className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-indigo-600 transition-colors"
                >
                  Case Study <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
           <a href="#" className="inline-flex items-center gap-2 text-indigo-600 font-medium hover:underline">
            View all projects <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
