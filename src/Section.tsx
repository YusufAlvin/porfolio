import {type ReactNode} from 'react';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({id, children, className = ''}) => (
  <section id={id} className={`relative mx-auto w-full max-w-6xl px-6 md:px-8 ${className}`}>
    {children}
  </section>
);

export default Section;
