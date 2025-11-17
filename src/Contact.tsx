import {ArrowRight} from 'lucide-react';
import {Button} from '@/components/ui/button.tsx';
import {Card, CardContent} from '@/components/ui/card.tsx';
import {Input} from '@/components/ui/input.tsx';
import {Textarea} from '@/components/ui/textarea.tsx';
import Section from './Section';
import FadeIn from './FadeIn';
import {glow} from './style';

const Contact = () => (
  <Section id="contact" className="pb-32">
    <FadeIn>
      <div className="mb-6 flex items-end justify-between">
        <h2 className="text-2xl font-bold tracking-tight text-slate-100 md:text-3xl">Let’s work together</h2>
        <p className="text-sm text-slate-400">I’ll get back within 24 hours</p>
      </div>
      <Card className="border-white/10 bg-slate-900/60">
        <CardContent className="grid gap-4 p-6 md:grid-cols-2">
          <div className="grid gap-4">
            <Input placeholder="Your name" className="bg-slate-950/40" />
            <Input placeholder="Email address" type="email" className="bg-slate-950/40" />
            <Input placeholder="Company / Project" className="bg-slate-950/40" />
          </div>
          <div className="grid">
            <Textarea placeholder="Tell me about your project..." className="min-h-40 bg-slate-950/40" />
          </div>
          <div className="md:col-span-2">
            <Button className={`rounded-full px-6 ${glow}`} size="lg">
              Send message <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </FadeIn>
  </Section>
);

export default Contact;
