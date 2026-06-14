import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-32 px-6 md:px-12 max-w-5xl mx-auto border-t border-surfaceBorder mt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 tracking-tight">
          About Me.
        </h2>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="text-muted text-lg space-y-6 leading-relaxed font-light">
            <p>
              Hello, I'm Shreyashi Jain. I am a Software Developer and Computer Science student at <span className="text-white font-medium">Lucknow University (LU)</span>, maintaining an 8.5+ CGPA.
            </p>
            <p>
              My passion lies at the intersection of complex algorithms and beautiful, intuitive user interfaces. I specialize in building responsive architectures using React.js and Tailwind CSS, focusing on performance, accessibility, and pixel-perfect design.
            </p>
            <p>
              Beyond the frontend, I have solved many Data Structures & Algorithms challenges, mastering analytical problem solving. This rigor translates directly to how I structure state, optimize rendering, and architect scalable applications.
            </p>
          </div>

          <div className="relative flex justify-center items-center">
            {/* Minimal grayscale portrait block */}
            <div className="w-full aspect-square max-w-sm glass relative overflow-hidden group">
              <div className="absolute inset-0 bg-white/5 transition-opacity duration-500 group-hover:opacity-0 z-10"></div>
              <div className="w-full h-full bg-surface flex flex-col items-center justify-center p-8 text-center grayscale transition-all duration-700 group-hover:grayscale-0">
                <span className="text-7xl mb-6">👩🏻‍💻</span>
                <span className="text-white font-mono tracking-widest uppercase text-sm">Shreyashi Jain</span>
                <span className="text-muted font-mono tracking-widest uppercase text-xs mt-2">LU'28</span>
              </div>
            </div>
            {/* Offset border accent */}
            <div className="absolute top-4 -right-4 w-full aspect-square max-w-sm border border-surfaceBorder -z-10 transition-transform duration-500 hover:translate-x-2 hover:-translate-y-2"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
