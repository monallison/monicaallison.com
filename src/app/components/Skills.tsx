import React from "react";
import { 
  BarChart3, 
  Users, 
  Zap, 
  Target, 
  Layout, 
  MessageSquare,
  Search,
  Code2
} from "lucide-react";
import { motion } from "motion/react";

const skills = [
  {
    category: "Next-Generation Diagnostics",
    icon: <Zap className="w-6 h-6 text-indigo-600" />,
    items: [
      "Voice & wearable data platforms",
      "Early detection & longitudinal insights",
      "AI-enabled research translation",
      "Patient-centered diagnostic innovation"
    ]
  },
  {
    category: "Digital Health Platforms",
    icon: <Layout className="w-6 h-6 text-indigo-600" />,
    items: [
      "Multi-study research systems",
      "HealthKit & wearable integrations",
      "Scalable patient engagement",
      "Cross-platform mobile strategy"
    ]
  },
  {
    category: "Research → Product Translation",
    icon: <BarChart3 className="w-6 h-6 text-indigo-600" />,
    items: [
      "Clinician & data science collaboration",
      "Regulatory & compliance awareness",
      "Operationalizing AI in healthcare",
      "Turning research into usable tools"
    ]
  },
  {
    category: "Strategic Leadership",
    icon: <Users className="w-6 h-6 text-indigo-600" />,
    items: [
      "Executive stakeholder alignment",
      "Global engineering teams",
      "Vision through delivery",
      "Culture of patient-centered innovation"
    ]
  }
];

export function Skills() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Core Competencies</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A comprehensive toolkit developed over 8+ years of building and launching successful digital products.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:shadow-lg hover:border-indigo-100 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">{skill.category}</h3>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-center text-sm text-slate-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
