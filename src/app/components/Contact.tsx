import { Mail, MapPin, Linkedin } from "lucide-react";
import { motion } from "motion/react";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's build something great together.</h2>
          <p className="text-slate-300 text-lg mb-12 leading-relaxed">
            Open to new opportunities, speaking engagements, or just a conversation about building better products in healthcare and research.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <Mail className="text-indigo-400" size={18} />
              </div>
              <a href="mailto:monica@monicaallison.com" className="text-slate-300 hover:text-white transition-colors">
                monica@monicaallison.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="text-indigo-400" size={18} />
              </div>
              <p className="text-slate-300">Columbus, OH (Remote Friendly)</p>
            </div>

            <a
              href="https://www.linkedin.com/in/monicaallison1/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-full bg-white/10 hover:bg-indigo-600 flex items-center justify-center transition-all">
                <Linkedin size={18} />
              </div>
              <span className="text-slate-300 group-hover:text-white transition-colors">LinkedIn</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
