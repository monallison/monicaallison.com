import React from "react";
import { useForm } from "react-hook-form";
import { Mail, MapPin, Linkedin, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    alert("Thanks for your message! This is a demo form.");
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's build something great together.</h2>
            <p className="text-slate-300 text-lg mb-12 max-w-lg leading-relaxed">
              Open to new opportunities, speaking engagements, or just a chat about the future of product management.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <a href="mailto:monica@monicaallison.com" className="text-slate-300 hover:text-white transition-colors">monica@monicaallison.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-indigo-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Location</h3>
                  <p className="text-slate-300">Columbus, OH (Remote Friendly)</p>
                </div>
              </div>

              <div className="pt-8">
                <h3 className="font-semibold text-lg mb-4">Connect</h3>
                <div className="flex gap-4">
                  <a href="https://www.linkedin.com/in/monicaallison1/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-indigo-600 flex items-center justify-center transition-all">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                  <input
                    {...register("name", { required: true })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 text-white transition-colors"
                    placeholder="John Doe"
                  />
                  {errors.name && <span className="text-red-400 text-xs mt-1">Required</span>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                  <input
                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 text-white transition-colors"
                    placeholder="john@example.com"
                  />
                  {errors.email && <span className="text-red-400 text-xs mt-1">Valid email required</span>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Subject</label>
                 <select 
                    {...register("subject")}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 text-white transition-colors [&>option]:text-slate-900"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Project Proposal">Project Proposal</option>
                    <option value="Speaking">Speaking Opportunity</option>
                    <option value="Hiring">Hiring</option>
                  </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                <textarea
                  {...register("message", { required: true })}
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-indigo-500 text-white transition-colors"
                  placeholder="Tell me about your project..."
                />
                {errors.message && <span className="text-red-400 text-xs mt-1">Required</span>}
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 group"
              >
                Send Message
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
