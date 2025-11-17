/* eslint-disable jsx-a11y/anchor-is-valid */
import {Github, Linkedin, Mail} from 'lucide-react';
import Section from './Section';

const Footer = () => (
  <footer className="border-t border-white/10 py-10 text-center text-sm text-slate-400">
    <Section id="footer">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="transition hover:text-white">
            <Github className="h-4 w-4" />
          </a>
          <a href="#" className="transition hover:text-white">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="#" className="transition hover:text-white">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </Section>
  </footer>
);

export default Footer;
