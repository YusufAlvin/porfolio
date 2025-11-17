import type {IExperience, IProject} from './model';

export const experiences: Array<IExperience> = [
  {
    role: 'Frontend Engineer',
    company: 'Formulatrix',
    period: '2021 — now',
    points: [],
  },
];

export const projects: Array<IProject> = [
  {
    title: 'aµtoPulse',
    desc: 'The aµtoPulse - TFF System is a fully automated, walk-away system that uses Tangential Flow Filtration (TFF) for high-throughput sample concentration and diafiltration (buffer exchange, desalting).',
    tags: ['React'],
    link: 'https://formulatrix.com/autopulse-tangential-flow-filtration-system/',
    image: null,
  },
  {
    title: 'Reagent Exchanger (RX)',
    desc: 'The Reagent Exchanger (RX) is a versatile automated plate washer designed to support a wide range of microplate formats and complex laboratory workflows. It features integrated automation for delidding, plate tilting, dispensing, aspiration, and nozzle cleaning—delivering streamlined, unattended operation. The RX easily integrates with automation platforms and supports robotic reagent loading to maximize efficiency and consistency.',
    tags: ['React'],
    link: 'https://formulatrix.com/automated-plate-washer/',
    image: null,
  },
];
