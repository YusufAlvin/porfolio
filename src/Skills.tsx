import {motion} from 'framer-motion';
import {Badge} from '@/components/ui/badge.tsx';
import Section from './Section.tsx';
import FadeIn from './FadeIn.tsx';

const skills = ['React', 'TypeScript', 'Next.js', 'TailwindCSS', 'Framer Motion'];

const Skills = () => (
  <Section id="skills" className="pb-24">
    <FadeIn>
      <h2 className="mb-6 text-2xl font-bold tracking-tight text-slate-100 md:text-3xl">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((s, i) => (
          <motion.div key={s} initial={{opacity: 0, y: 10}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{delay: i * 0.03}}>
            <Badge className="rounded-full bg-white/10 px-4 py-2 text-slate-200 hover:bg-white/20">{s}</Badge>
          </motion.div>
        ))}
      </div>
    </FadeIn>
  </Section>
);

export default Skills;
