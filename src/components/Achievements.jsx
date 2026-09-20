import React from 'react';
import { motion } from 'framer-motion';

const milestones = [
  {
    year: '2024 - 2028',
    title: 'B.Tech in Computer Science and Engineering ',
    institution: 'Lucknow University',
    description: 'Pursuing undergraduate degree with a current CGPA of 8.0+. Awarded Outstanding Grade in Engineering Mathematics.'
  },
  {
    year: '2025',
    title: 'Frontend React Specialization',
    institution: 'Self-Taught & Projects',
    description: 'Mastered React.js, Tailwind CSS, and architecture design to build highly interactive and performant web applications.'
  },
  {
    year: '2025',
    title: 'Java Programming',
    institution: 'Self-Taught',
    description: 'Proficient in Java Programming with a solid understanding of Object-Oriented Programming(OOP) and Exception Handling, while actively learning and practicing Data Structures & Algorithms (DSA).'
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-32 px-6 md:px-12 max-w-5xl mx-auto border-t border-surfaceBorder">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-20 tracking-tight">
          Milestones.
        </h2>

        <div className="relative border-l border-white/20 ml-4 space-y-16">
          {milestones.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="relative pl-10 md:pl-20 group"
            >
              <div className="absolute -left-[7px] top-6 w-3 h-3 rounded-full bg-background border border-white group-hover:bg-white transition-colors duration-500 z-10" />

              <div className="group-hover:translate-x-2 transition-transform duration-500">
                <span className="text-white font-mono text-xs tracking-widest uppercase mb-4 block border-b border-surfaceBorder inline-block pb-1">{item.year}</span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{item.title}</h3>
                <h4 className="text-muted font-medium mb-6">{item.institution}</h4>
                <p className="text-muted leading-relaxed font-light max-w-2xl">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Achievements;
