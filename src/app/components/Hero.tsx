import React from "react";
import { motion } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-indigo-200/50 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-blue-200/50 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-indigo-50 text-indigo-700 text-sm font-semibold tracking-wide">
            Product Leader | AI, Research, & Patient Experience
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6">
            Turning <span className="text-indigo-600">complex health data</span> into next-generation diagnostics.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-lg leading-relaxed">
            I lead the design and delivery of digital health platforms that help researchers, clinicians, and patients work together to detect disease earlier and improve outcomes. My work spans AI-driven voice analysis, wearable data, and large-scale research systems that turn real-world data into meaningful insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="px-8 py-4 bg-slate-900 text-white font-medium rounded-full hover:bg-indigo-600 transition-all flex items-center justify-center gap-2 group"
            >
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white text-slate-900 border border-slate-200 font-medium rounded-full hover:border-slate-400 transition-colors flex items-center justify-center"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/images/MA_PMHero.png"
              alt="Monica Allison"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
          </div>

          {/* Floater Card 1 */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="absolute bottom-8 left-[-20px] md:left-[-40px] bg-white p-4 rounded-xl shadow-xl border border-slate-100 max-w-[200px]"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">
                +45%
              </div>
              <div className="text-sm font-bold text-slate-800">User Growth</div>
            </div>
            <p className="text-xs text-slate-500">Achieved in Q3 for Project Alpha</p>
          </motion.div>


        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block"
      >
        <ChevronDown className="text-slate-400" />
      </motion.div>
    </section>
  );
}
