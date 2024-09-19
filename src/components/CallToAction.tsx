'use client'
import heliximage from '../assets/images/helix2.png';
import emojistar from '../assets/images/emojistar.png';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
export const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const{ scrollYProgress} = useScroll({
    target : containerRef,
    offset: ['start end','end end']
  });
  const translateY = useTransform(scrollYProgress,[0,1],[40,-40])

  return (
    <div className="bg-black text-white py-[72px] sm:py-24 text-center overflow-hidden" ref = {containerRef}>
      <div className="container max-w-xl relative">
        <motion.div style = {{translateY}}>
        <Image src={heliximage} className="absolute top-6 left-[calc(100%+36px)]" alt="Helix Image"/>
        </motion.div>
        <motion.div
        style = {{translateY}}> 
        <Image src={emojistar} className="absolute -top-[61px] right-[calc(100%+24px)]" alt="Emoji Star"/>
        </motion.div>
        <h2 className="font-bold text-5xl tracking-tighter sm:text-6xl">Get Instant access</h2>
        <p className="text-xl text-white/70 mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Quas nihil autem consequuntur cum facere eius nostrum!
        </p>
        <form className="mt-10 flex flex-col gap-2.5 max-sm max-auto sm:flex-row">
          <input type="email" placeholder="your@email.com" className="h-12 bg-white/20 px-5 font-medium placeholder:text-[#9CA3AF] sm:flex-1 rounded-lg"/>
          <button className="bg-white text-black h-12 rounded-lg px-5">Get Access</button>
        </form>
      </div>
    </div>
  );
};
