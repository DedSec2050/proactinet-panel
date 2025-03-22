"use client";
import React from "react";
import "../../animations/fade-in.css";
import { motion } from "framer-motion";
import Card from "@/components/molecules/Card";
import features from "@/staticData/features";
import Image from "next/image";
import alert from "@/public/features/alerts.jpg";

const Features = () => {
  const featuresData = features;
  console.log("this is framer :", motion);
  console.log(featuresData);
  return (
    <section className="w-full py-10 flex flex-col justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="w-full py-10 flex flex-col justify-center items-center"
      >
        <div className=" w-full min-w-[280px] max-w-[1600px] flex flex-col bg-white">
          {/* First Row  */}
          {/* <div className="xl:flex-row flex-col flex justify-center items-center ">
            <div className="min-w-[260px] relative xl:min-w-[42%] min-h-[199px] m-2 flex flex-col h-full border justify-center object">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="top-0 absolute h-full z-[-1] max-h-full min-w-full"
              >
                <source src="/features/cloud.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="w-full m-2 xl:m-4 xl:text-3xl top-0 absolute font-bold">
                Centralised Monitoring System
              </div>
            </div>
            <div className="m-2 w-full bg-blue-500 flex flex-col xl:flex-row">
              <div className="min-w-[280px] xl:min-w-[48%] h-10 bg-red-500 m-2"></div>
              <div className="min-w-[280px] xl:min-w-[48%] h-10 flex flex-col justify-center items-center bg-yellow-500 m-2 relative overflow-hidden">
                <Image
                  src={alert}
                  alt=""
                  className="absolute top-0 max-w-[450px]"
                ></Image>
                <div className="absolute top-2">
                  <span className="">Get notifications</span>
                </div>
              </div>
            </div>
          </div> */}
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
