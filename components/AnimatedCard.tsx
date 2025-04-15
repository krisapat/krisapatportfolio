'use client'
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { DM_Serif_Text } from 'next/font/google'
import { Noto_Sans_Thai } from 'next/font/google'

const dmSerif = DM_Serif_Text({
  subsets: ['latin'],
  weight: '400',
})
const notoThai = Noto_Sans_Thai({
  subsets: ['thai'],
  weight: ['400', '700'],
})
interface AnimatedCardProps {
    imageUrl: string;
    title: string;
    linkUrl: string;
    linkLabel: string;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({ imageUrl, title, linkUrl, linkLabel }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, amount: 0.5 });

    return (
        <motion.div
            ref={ref}
            initial={{ scale: 0.95, opacity: 0.8 }}
            animate={isInView
                ? { scale: 1.05, opacity: 1 }
                : { scale: 0.95, opacity: 0.8 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.08 }}
            className="w-full max-w-7xl p-2 flex flex-col md:flex-row items-center bg-[#4c4a4a] shadow-xl rounded-xl overflow-hidden transition-colors duration-100 transform-gpu will-change-transform"
        >
            <img
                src={imageUrl}
                alt={title}
                className="w-full md:w-1/2 aspect-video object-contain rounded-lg pointer-events-none select-none"
            />
            <div className="p-6 md:w-1/2 text-center md:text-left">
                <h2 className={`${dmSerif.className} text-2xl font-semibold mb-2 text-white`}>{title}</h2>
                <p className={`${notoThai.className} text-lg text-white`}>
                    ตัวอย่างเว็บไซต์ :{" "}
                    <a
                        href={linkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${dmSerif.className} text-lg text-white hover:underline`}
                    >
                        {linkLabel}
                    </a>
                </p>
            </div>
        </motion.div>
    );
};

export default AnimatedCard;
