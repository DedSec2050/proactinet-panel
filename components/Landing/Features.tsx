"use client";
import React from "react";
import Image from "next/image";
import img from "@/public/test.png";
import logo from "@/public/vercel.svg";
import bg from "@/public/bg-shapes-single.webp";
import "../../animations/fade-in.css";
import { motion } from "framer-motion";

interface FeatureItem {
  title: string;
  logo: string;
  image: string;
}

interface FeatureProps {
  features?: FeatureItem[];
}

interface FeatureCardProps {
  logo: string;
  title: string;
  image: string;
}

const Features: React.FC<FeatureProps> = () => {
  console.log("this is framer :", motion);
  return (
    <section className="w-full py-10 flex flex-col justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="w-full py-10 flex flex-col justify-center items-center"
      >
        <div className="border-[0.8px] border-pink-accent overflow-hidden min-w-[290px] w-[70%] rounded-[0.5rem] fade-in-up">
          {[1, 2, 3].map((_: number, i: number) => (
            <div
              key={i}
              className={`flex items-center flex-col md:flex-row ${
                i % 2 !== 0 ? "xl:flex-row-reverse" : ""
              } justify-center gap-x-4 gap-y-4 px-6 py-4 bg-transparent bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30`}
            >
              <div className="bg-red-400 md:w-[45%] px-4 gap-x-4 leading-snug flex">
                <span className="overflow-hidden min-w-4 min-h-4 max-w-12 max-h-12 bg-red-600 rounded-[50%] translate-y-2">
                  <Image src={logo} alt="" width={48} height={48} />
                </span>
                <span className="text-[1.1rem] md:text-[2.0rem] font-[500]">
                  Manage Your Metrics like never before
                </span>
              </div>
              <div className="bg-green-400 w-full md:w-[55%] overflow-hidden object-contain border-[0.8px] border-pink-accent rounded-[0.5rem]">
                <Image
                  src={img}
                  alt="Feature image"
                  width={500}
                  height={500}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="z-[-1] fixed glow-effect-common w-[10px] h-[10px] bottom-[50%] xl:flex hidden left-[50%]"></div>
      {/* <Image
        src={bg}
        className="relative right-[-50%] z-[-1] top-0 xl:flex hidden"
        alt="Feature image"
        width={500}
        height={500}
        objectFit="cover"
      /> */}
    </section>
  );
};

export default Features;
