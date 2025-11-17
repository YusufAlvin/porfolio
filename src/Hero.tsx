/* eslint-disable jsx-a11y/anchor-is-valid */
import {motion} from 'framer-motion';
import {ArrowRight, Github, Linkedin, Rocket, Globe2} from 'lucide-react';
import {Button} from '@/components/ui/button.tsx';
import {Card} from '@/components/ui/card.tsx';
import {Badge} from '@/components/ui/badge.tsx';
import FadeIn from './FadeIn';
import Section from './Section';
import {glow} from './style';

const Hero = () => (
  <Section id="hero" className="pt-16">
    <div className="grid items-center gap-10 pb-24 md:grid-cols-2">
      <FadeIn>
        <Badge className="mb-4 w-fit bg-white/10 text-slate-200 hover:bg-white/20">Available for Freelance</Badge>
        <h1 className="text-balance bg-linear-to-br from-white via-slate-200 to-slate-300 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-6xl">
          Building delightful web experiences.
        </h1>
        <p className="mt-4 max-w-xl text-pretty text-slate-300/90">
          I’m a frontend engineer focused on crafting fast, accessible, and animated interfaces with React, TypeScript, and Tailwind.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button asChild size="lg" className={`rounded-full px-6 ${glow}`}>
            <a href="#projects" className="inline-flex items-center">
              <Rocket className="mr-2 h-4 w-4" /> See Projects <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
        <div className="mt-6 flex items-center gap-4 text-slate-300">
          <a href="#" aria-label="GitHub" className="transition hover:scale-105 hover:text-white">
            <Github />
          </a>
          <a href="#" aria-label="LinkedIn" className="transition hover:scale-105 hover:text-white">
            <Linkedin />
          </a>
          <a href="#" aria-label="Website" className="transition hover:scale-105 hover:text-white">
            <Globe2 />
          </a>
        </div>
      </FadeIn>

      <FadeIn delay={0.1}>
        <motion.div
          whileHover={{rotate: 0.3, scale: 1.01}}
          className="relative rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl shadow-blue-500/10 backdrop-blur-lg"
        >
          <div className="absolute -inset-0.5 -z-10 rounded-3xl bg-linear-to-tr from-blue-500/20 via-fuchsia-500/20 to-transparent blur" />
          <Card className="overflow-hidden border-none bg-slate-900/40 h-75"></Card>
        </motion.div>
      </FadeIn>
    </div>
  </Section>
);

export default Hero;
