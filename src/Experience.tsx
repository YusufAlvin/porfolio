import {motion} from 'framer-motion';
import Section from './Section';
import FadeIn from './FadeIn';
import {experiences} from './data';

const Experience = () => (
  <Section id="experience" className="pb-24">
    <FadeIn>
      <h2 className="mb-6 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl">Experience</h2>
      <div className="relative ml-2 border-l border-white/10 pl-6">
        {experiences.map((e, i) => (
          <motion.div
            key={e.company}
            initial={{opacity: 0, x: -12}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true}}
            transition={{delay: i * 0.05}}
            className="mb-8"
          >
            <div className="absolute -left-[9px] mt-1 h-2.5 w-2.5 rounded-full bg-blue-400" />
            <h3 className="text-lg font-semibold text-slate-100">
              {e.role} · {e.company}
            </h3>
            <p className="mb-2 text-sm text-slate-400">{e.period}</p>
            <ul className="space-y-2 text-slate-300">
              {e.points.map((pt) => (
                <li key={pt} className="flex gap-2">
                  <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500" /> {pt}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </FadeIn>
  </Section>
);

export default Experience;
