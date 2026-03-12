import { motion } from "motion/react";

export function BeyondResume() {
  return (
    <section className="py-20 md:py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 xl:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <div className="text-[11px] font-bold tracking-wider text-indigo-600 uppercase mb-3">
              Beyond the Résumé
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
              A little more about me.
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Full disclosure: I have a past life. Before healthcare tech, I was an independent
              singer-songwriter with a full album, an EP, and a lot of opinions about bridges and
              choruses. Turns out writing songs and building products aren't that different. Both
              require knowing your audience, killing your darlings, and bringing many voices into
              harmony. My superpower is orchestration: setting the tempo, making the calls, and
              helping teams deliver something worth hearing.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
            className="rounded-2xl overflow-hidden shadow-[0_16px_50px_-35px_rgba(15,23,42,0.35)] border border-slate-200/70"
          >
            <iframe
              src="https://open.spotify.com/embed/artist/5FuK2RdTPZaNBWKwullicQ?utm_source=generator&theme=0"
              width="100%"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              style={{ border: 0 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
