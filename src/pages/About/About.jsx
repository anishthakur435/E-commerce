import { Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import denim from "../../assets/images/denim.jpg";

function About() {
  return (
    <main className="min-h-full lg:pt-24 pb-20 px-6 bg-[#fafafa]">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        <div className="w-full lg:w-1/2 flex justify-center mt-16 lg:mt-0">
          <div className="relative z-10 w-full max-w-md">
            <div className="absolute top-4 -left-4 md:top-8 md:-left-8 w-full h-full border-2 border-[#d33a11]/30 z-0 pointer-events-none"></div>
            <img
              src={denim}
              alt="Essential Street Tear"
              className="relative z-10 w-full h-auto object-cover shadow-2xl"
            />

            <Typography
              component={motion.h1}
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 20,
                duration: 0.4,
              }}
              variant="h3"
              className="absolute -top-12 left-1/2 -translate-x-1/2 lg:-right-16 lg:left-auto lg:translate-x-0 z-20 text-[#d33a11] font-black tracking-widest drop-shadow-md text-6xl md:text-8xl"
            >
              [E-S-T]
            </Typography>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-12">
          <div className="space-y-4">
            <div className="relative inline-block">
              <Typography
                variant="h4"
                component="h2"
                className="text-gray-900 font-black uppercase tracking-widest"
              >
                Born In The Streets
              </Typography>
              <span className="absolute -bottom-2 left-0 w-16 h-1 bg-[#d33a11]"></span>
            </div>

            <Typography
              variant="body1"
              className="text-gray-600 font-mono text-lg leading-relaxed mt-6"
            >
              Built for the concrete jungle survivor. We craft clothes with
              oversized fits and classic vintage washes, designed to withstand
              the grit of the city while keeping you effortlessly stylish.
            </Typography>
          </div>

          <div className="space-y-4">
            <div className="relative inline-block">
              <Typography
                variant="h4"
                component="h2"
                className="text-gray-900 font-black uppercase tracking-widest"
              >
                Heavyweight Comfort
              </Typography>
              <span className="absolute -bottom-2 left-0 w-16 h-1 bg-[#d33a11]"></span>
            </div>

            <Typography
              variant="body1"
              className="text-gray-600 font-mono text-lg leading-relaxed mt-6"
            >
              Our pieces aren't just made to look good; they're built to last.
              Experience the unmatched feel of premium heavyweight materials
              that offer uncompromising comfort from day to night.
            </Typography>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
