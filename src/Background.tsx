import {motion, useScroll, useTransform} from 'framer-motion';

const Background = () => {
  const {scrollY} = useScroll();
  const y1 = useTransform(scrollY, [0, 600], [0, -80]);
  const y2 = useTransform(scrollY, [0, 600], [0, 120]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient base */}
      <div className="absolute inset-0 bg-linear-to-b from-slate-950 via-slate-900 to-slate-950" />

      {/* Soft radial highlights */}
      <motion.div
        style={{y: y1}}
        className="absolute -top-40 left-1/2 h-200 w-200 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.25),transparent_60%)] blur-3xl"
      />
      <motion.div
        style={{y: y2}}
        className="absolute bottom-0 right-0 h-160 w-160 translate-x-1/3 translate-y-1/4 rounded-full bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.15),transparent_60%)] blur-3xl"
      />

      {/* Animated orbs */}
      <motion.div
        className="absolute left-10 top-20 h-40 w-40 rounded-full bg-blue-500/20 blur-2xl"
        animate={{y: [0, -20, 0], x: [0, 10, 0]}}
        transition={{duration: 8, repeat: Infinity, ease: 'easeInOut'}}
      />
      <motion.div
        className="absolute bottom-24 right-16 h-32 w-32 rounded-full bg-fuchsia-500/20 blur-2xl"
        animate={{y: [0, 16, 0], x: [0, -12, 0]}}
        transition={{duration: 7, repeat: Infinity, ease: 'easeInOut'}}
      />
    </div>
  );
};

export default Background;
