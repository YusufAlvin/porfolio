import {type ReactNode, useMemo} from 'react';
import {motion} from 'framer-motion';

interface FadeInProps {
  as?: React.ElementType;
  delay?: number;
  duration?: number;
  y?: number;
  children: ReactNode;
  className?: string;
}

const FadeIn: React.FC<FadeInProps> = ({as: Tag = 'div', delay = 0, duration = 0.6, y = 20, children, className = ''}) => {
  const MotionTag = useMemo(() => motion(Tag), [Tag]);

  return (
    <MotionTag
      initial={{opacity: 0, y}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, amount: 0.2}}
      transition={{duration, delay}}
      className={className}
    >
      {children}
    </MotionTag>
  );
};

export default FadeIn;
