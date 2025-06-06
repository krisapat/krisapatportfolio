'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { DM_Serif_Text } from 'next/font/google'
import FadeUpWhenVisible from './FadeUpWhenVisible';

const dmSerif = DM_Serif_Text({
  subsets: ['latin'],
  weight: '400',
})

const skills = [
  { name: 'HTML', image: '/img/skills/HTML.png' },
  { name: 'CSS', image: '/img/skills/CSS.png' },
  { name: 'JavaScript', image: '/img/skills/JS.png' },
  { name: 'React', image: '/img/skills/react.png' },
  { name: 'Next.js', image: '/img/skills/nextjs.png' },
  { name: 'Tailwind', image: '/img/skills/tailwind.png' },
];

const SkillSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="flex flex-col items-center justify-center text-white h-[800px] px-4 py-20">
      <FadeUpWhenVisible>
        <h2 className={`${dmSerif.className} text-4xl font-bold mb-12`}>My Skills</h2>
      </FadeUpWhenVisible>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
              ease: 'easeOut',
            }}
            className="flex flex-col items-center"
          >
            <img
              src={skill.image}
              alt={skill.name}
              className="w-16 h-16 object-contain mb-2"
            />
            <span className={`${dmSerif.className} text-sm`}>{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillSection;
