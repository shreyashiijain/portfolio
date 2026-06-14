import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend Architecture',
    skills: ['React.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'Framer Motion', 'HTML5/CSS3', 'Responsive UI']
  },
  {
    title: 'Developer Tools',
    skills: ['Git & GitHub', 'VS Code', 'Vite']
  },
  {
    title: 'Core Fundamentals',
    skills: ['Analytical Problem Solving', 'Object Oriented Programming','Java Programming']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 px-6 md:px-12 max-w-5xl mx-auto border-t border-surfaceBorder">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 tracking-tight">
          Technical Arsenal.
        </h2>

        <div className="grid md:grid-cols-2 gap-px bg-surfaceBorder">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-background p-10 lg:p-12 group hover:bg-surface/30 transition-colors"
            >
              <h3 className="text-xl font-semibold text-white mb-8 tracking-wide font-mono uppercase text-sm border-b border-surfaceBorder pb-4">{category.title}</h3>
              <ul className="flex flex-col gap-4">
                {category.skills.map(skill => (
                  <li
                    key={skill}
                    className="text-muted font-light group-hover:text-gray-300 transition-colors flex items-center before:content-[''] before:w-1 before:h-1 before:bg-white/20 before:rounded-full before:mr-4"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
