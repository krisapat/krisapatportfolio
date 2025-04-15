import "../style/style.css"
import FadeUpWhenVisible from "@/components/FadeUpWhenVisible";
import TypingHeader from '@/components/TypingHeader';
import AnimatedCard from "@/components/AnimatedCard";
import CircleBackground from "@/components/CircleBackground";

import { FaFacebookF} from 'react-icons/fa6';

import { DM_Serif_Text } from 'next/font/google'
import { Noto_Sans_Thai } from 'next/font/google'
import SkillSection from "@/components/SkillSection";

const dmSerif = DM_Serif_Text({
  subsets: ['latin'],
  weight: '400',
})
const notoThai = Noto_Sans_Thai({
  subsets: ['thai'],
  weight: ['400', '700'],
})

export default function Home() {
  return (
    <main className="bg-[#131212] text-white">
      <section id="Home">
        <div className="relative w-full h-screen overflow-hidden">
          <CircleBackground />
          <div className="absolute top-0 left-0 w-full h-full z-10" />
          {/* Content Centered */}
          <div className="relative z-10 flex items-center justify-center h-full">
            <div className="text-center text-white px-4 space-y-5">
              <FadeUpWhenVisible>
                <TypingHeader
                  className={`${dmSerif.className} text-4xl md:text-6xl mb-4`}
                  words={['Welcome to my portfolio', 'Welcome to my website', 'Welcome to my projects']}
                />
              </FadeUpWhenVisible>
              <FadeUpWhenVisible>
                <div className="flex justify-center">
                  <img
                    src="/img/profile.png"
                    alt="profile"
                    className="w-50 aspect-square object-cover rounded-full shadow-lg mb-2"
                  />
                </div>
              </FadeUpWhenVisible>
              <FadeUpWhenVisible>
                <p className={`${notoThai.className} text-xl md:text-2xl`}>รับออกแบบและสร้างเว็บไซต์หน้าเดียว
                  <br /> ที่ดูดี ใช้งานง่าย และแสดงผลได้ดีบนทุกอุปกรณ์</p>
              </FadeUpWhenVisible>
              <div>
                <FadeUpWhenVisible>
                  <a
                    href="#Projects"
                    className={`${notoThai.className} border-animation text-center px-6 py-3 font-bold rounded-xl text-lg mt-auto`}
                  >
                    ดูผลงาน
                  </a>
                </FadeUpWhenVisible>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="About Me">
        <div className="flex flex-col md:flex-row-reverse items-center justify-center w-full min-h-screen gap-8 p-8">
          {/* Content */}
          <div className="w-full md:w-1/2">
            <FadeUpWhenVisible>
              <h1 className={`${dmSerif.className} text-4xl mb-4`}>About Me</h1>
            </FadeUpWhenVisible>
            <FadeUpWhenVisible>
              <p className={`${notoThai.className} text-lg mb-2`}>
                ชอบตกแต่งและออกแบบเว็บไซต์ให้ดูดีและตอบโจทย์ กำลังหาโอกาสรับงานเพื่อเก็บประสบการณ์และพัฒนาฝีมือให้ดียิ่งขึ้น จะพยายามทำทุกงานให้ออกมาดีครับ
              </p>
            </FadeUpWhenVisible>
            <FadeUpWhenVisible>
              <p className={`${notoThai.className} text-lg mb-2`}>
                การศึกษา : กำลังศึกษาที่สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบังชั้นปีที่ 2 คณะวิศวกรรมศาสตร์ สาขาวิศวกรรมระบบไอโอทีและสารสนเทศ
              </p>
            </FadeUpWhenVisible>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/img/aboutme.png"
              alt="About me"
              className="w-[300px] h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

      </section>
      <section id="Projects">
        <div className={`${dmSerif.className} text-5xl text-center mt-15`}>Project</div>
        <div className="min-h-screen flex flex-col items-center justify-center p-15 gap-10">
          <AnimatedCard
            imageUrl="/img/project/3.png"
            title="My Project"
            linkUrl="https://portfolio3-beta-ten.vercel.app/"
            linkLabel="myproject.example.com"
          />
          <AnimatedCard
            imageUrl="/img/project/2.png"
            title="My Project"
            linkUrl="https://portfolio2-steel-alpha.vercel.app/"
            linkLabel="myproject.example.com"
          />
          <AnimatedCard
            imageUrl="/img/project/1.png"
            title="My Project"
            linkUrl="https://portfolio-krisapats-projects.vercel.app/"
            linkLabel="myproject.example.com"
          />
        </div>

      </section>
      <section id="Skills">
        <SkillSection />
      </section>
      <section id="Contact">
        <div className="flex items-center justify-center px-4 py-20">
          <div className="mb-5 space-y-3 max-w-md w-full text-center">
            <FadeUpWhenVisible>
              <h1 className={`${dmSerif.className} text-4xl`}>Contact</h1>
            </FadeUpWhenVisible>

            <FadeUpWhenVisible>
              <div className="flex justify-center space-x-2 items-center">
                <p className="text-lg">Social:</p>

                {/* Facebook */}
                <div className="relative group">
                  <a
                    href="https://www.facebook.com/krisapat?locale=th_TH"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white/50 block text-white bg-black/50 p-2 rounded-full hover:bg-blue-600 transition"
                  >
                    <FaFacebookF />
                  </a>
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs bg-gray-700 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300">
                    Facebook
                  </span>
                </div>
              </div>
            </FadeUpWhenVisible>
            <FadeUpWhenVisible>
              <p className="text-lg">Gmail : Pluemkrisapat@gmail.com</p>
            </FadeUpWhenVisible>
          </div>
        </div>

      </section>
    </main>
  );
}
