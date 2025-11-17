import {motion} from 'framer-motion';
import {ExternalLink} from 'lucide-react';
import {Button} from '@/components/ui/button.tsx';
import {Card, CardContent, CardHeader, CardTitle, CardDescription} from '@/components/ui/card.tsx';
import {Badge} from '@/components/ui/badge.tsx';
import Section from './Section.tsx';
import FadeIn from './FadeIn.tsx';
import {projects} from './data.tsx';

const Projects = () => (
  <Section id="projects" className="pb-24">
    <FadeIn>
      <div className="mb-6 flex items-end justify-between">
        <h2 className="text-2xl font-bold tracking-tight text-slate-100 md:text-3xl">Projects</h2>
        <p className="text-sm text-slate-400">Selected work I loved building</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.div key={p.title} initial={{opacity: 0, y: 16}} whileInView={{opacity: 1, y: 0}} viewport={{once: true}} transition={{delay: i * 0.06}}>
            <Card className="group overflow-hidden border-white/10 bg-slate-900/60">
              <div className="relative">
                <div className="aspect-video w-full bg-linear-to-br from-blue-500/30 via-indigo-500/20 to-fuchsia-500/20">{p.image}</div>
                <motion.div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent opacity-0 transition group-hover:opacity-100" />
              </div>
              <CardHeader>
                <CardTitle className="text-slate-100">{p.title}</CardTitle>
                <CardDescription className="text-slate-400">{p.desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Badge key={t} className="bg-white/10">
                      {t}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button asChild size="sm" className="rounded-full">
                    <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex items-center">
                      Live <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </FadeIn>
  </Section>
);

export default Projects;
