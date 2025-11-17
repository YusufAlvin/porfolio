import {Mail, Sparkles} from 'lucide-react';
import {Button} from '@/components/ui/button.tsx';
import Section from './Section.tsx';

const Navbar = () => (
  <div className="sticky top-0 z-50 backdrop-blur supports-backdrop-filter:bg-slate-900/60">
    <Section id="Navbar" className="flex items-center justify-between py-4">
      <a href="#hero" className="group inline-flex items-center gap-2">
        <div className="grid h-9 w-9 place-items-center rounded-xl bg-linear-to-tr from-blue-500 to-fuchsia-500 text-white shadow-md shadow-blue-500/20">
          <Sparkles className="h-5 w-5" />
        </div>
      </a>
      <nav className="hidden items-center gap-2 sm:flex">
        {[
          {id: 'about', label: 'About'},
          {id: 'skills', label: 'Skills'},
          {id: 'projects', label: 'Projects'},
          {id: 'experience', label: 'Experience'},
          {id: 'contact', label: 'Contact'},
        ].map((item) => (
          <a key={item.id} href={`#${item.id}`} className="rounded-full px-3 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white">
            {item.label}
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-2">
        <Button asChild variant="secondary" className="rounded-full">
          <a href="#contact">
            <Mail className="mr-2 h-4 w-4" /> Contact
          </a>
        </Button>
      </div>
    </Section>
  </div>
);

export default Navbar;
