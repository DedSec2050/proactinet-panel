import React from "react";
import { Button } from "../ui/button";
import "../../animations/fade-in.css";
import Link from "next/link";

const Landing = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col">
      <div className="w-[80%] 2xl:max-w-[70%] justify-center items-center flex flex-col [&>span]:text-center">
        <span className="font-semibold text-title-2xl fade-in-up">
          Build and run battery simulations at scale
        </span>
        <span className="md:max-w-[70%] 2xl:max-w-[60%] md:pt-4 fade-in-up">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum facilis
          quidem sed temporibus, placeat dolorem dolorum veniam reprehenderit
          tempore fuga eius illo!
        </span>
      </div>
      <div className="w-full flex md:flex-row flex-col gap-y-4 items-center justify-center gap-x-4 pt-4 [&>a>button]:text-lg [&>a>button]:py-6 [&>a>button]:px-8 [&>a>button]:hover:text-white fade-in-up">
        <Link href="/">
          <Button className="" variant={"default"}>
            Check Demo
          </Button>
        </Link>
        <Link href="/auth">
          <Button className="" variant={"ghost"}>
            Get Started
          </Button>
        </Link>
      </div>
      <div className="z-[-1] glow-effect top-0 left-10"></div>
      <div className="z-[-1] glow-effect-xl hidden xl:flex top-20 left-10"></div>
      <div className="z-[-1] glow-effect bottom-10 right-10"></div>
      <div className="z-[-1] glow-effect bottom-0 xl:hidden right-10"></div>
      <div className="z-[-1] glow-effect-xl bottom-0 xl:flex hidden right-10"></div>
      <div className="z-[-1] glow-effect-xl bottom-50 float right-50"></div>
      {/* <div className="z-[-1] glow-effect bottom-10 right-10"></div> */}
    </div>
  );
};

export default Landing;
