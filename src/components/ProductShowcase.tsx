'use client';
import appScreen from "../assets/images/app-screen.png";
import Image from "next/image";
import { motion , useScroll, useTransform} from "framer-motion";
import {  useRef } from "react";
export const ProductShowcase = () => {
  const appImage = useRef<HTMLImageElement>(null);
  const{scrollYProgress } = useScroll ({
    target: appImage,
    offset :
      ["start end","end end"],
  });
  const opacity = useTransform(scrollYProgress,[0,1],[0.5,1])
  const rotateX = useTransform(scrollYProgress,[0,1],[15,0])
  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8]  py-24">
      <div className="container">
        <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter">
          Lorem ipsum dolor sit amet.
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-xl text-center text-white/70 mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum porro maiores blanditiis aliquid necessitatibus ab sint minus! Excepturi, tenetur labore quibusdam qui beatae debitis sit vitae asperiores natus rerum cupiditate?
          </p>
        </div>
        <motion.div
          style ={{
            opacity: opacity,
            rotateX: rotateX,
            transformPerspective: "800px",
          }}
        >
        <div className="flex justify-center mt-14">
          <Image src={appScreen} alt="The Product Screenshot" ref={appImage}/>
        </div>
        </motion.div>
      </div>
    </div>
  );
};
