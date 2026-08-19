import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import model from "../../assets/images/model.jpg";
import fashion from "../../assets/images/fashion.jpg";

export default function Banner() {
  return (
    <section className="relative w-full bg-[#F7F6F2] overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        <motion.div
          initial={{ x: "-10%", opacity: 0 }}
          whileInView={{ x: "0%", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute -top-10 md:-top-20 left-0 whitespace-nowrap"
        >
          <span className="text-[18vw] md:text-[15vw] font-black uppercase leading-none text-[#e8e5de]">
            STREET
          </span>
        </motion.div>

        <motion.div
          initial={{ x: "10%", opacity: 0 }}
          whileInView={{ x: "0%", opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            delay: 0.15,
            ease: "easeOut",
          }}
          className="absolute bottom-0 right-0 whitespace-nowrap"
        >
          <span className="text-[18vw] md:text-[15vw] font-black uppercase leading-none text-[#e8e5de]">
            CULTURE
          </span>
        </motion.div>
      </div>

      <div className="relative z-10 w-full mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          <motion.div
            initial={{
              opacity: 0,
              y: 60,
              rotate: -3,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              rotate: -3,
            }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="lg:col-span-3 order-2 lg:order-1"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-[#C13018] translate-x-3 translate-y-3" />

              <div className="relative overflow-hidden bg-black">
                <img
                  src={fashion}
                  alt="E-S-T streetwear fashion"
                  className="w-full aspect-[3/4] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>

              <div className="absolute -bottom-5 -right-3 bg-black text-white px-4 py-2">
                <span className="font-mono text-[10px] uppercase tracking-widest">
                  EST / 001
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="lg:col-span-6 order-1 lg:order-2 text-center px-2 md:px-8"
          >
            {/* Eyebrow */}

            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-[#C13018]" />

              <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#C13018]">
                The E-S-T Manifesto
              </span>

              <span className="w-8 h-[2px] bg-[#C13018]" />
            </div>

            {/* Heading */}

            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] xl:text-[7rem] font-black uppercase leading-[0.8] tracking-[-0.06em] text-black">
              Wear
              <br />
              <span className="text-[#C13018]">Your</span>
              <br />
              <span className="relative inline-block">
                Reality
                <span className="absolute left-0 bottom-1 w-full h-2 md:h-3 bg-[#C13018] -z-10" />
              </span>
            </h2>

            {/* Description */}

            <p className="max-w-xl mx-auto mt-8 text-sm md:text-base leading-relaxed text-gray-600">
              We don't make clothes for everyone. We make them for the ones who
              move different, think different, and refuse to disappear into the
              crowd.
            </p>

            {/* CTA */}

            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mt-8">
              <Link
                to="/shop"
                className="group inline-flex items-center justify-center gap-4 bg-[#C13018] text-white px-8 py-4 uppercase text-sm font-bold tracking-wider transition-all duration-300 hover:bg-black"
              >
                Explore The Collection
                <span className="text-lg transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </Link>

              <Link
                to="/shop"
                className="inline-flex items-center justify-center border-2 border-black px-8 py-[14px] uppercase text-sm font-bold tracking-wider text-black transition-all duration-300 hover:bg-black hover:text-white"
              >
                Shop Now
              </Link>
            </div>

            {/* Small metadata */}

            <div className="mt-10 flex justify-center gap-8 md:gap-12 font-mono text-[10px] uppercase tracking-widest text-gray-500">
              <span>RAW / 001</span>
              <span>EST. 2026</span>
              <span>NO RULES</span>
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 60,
              rotate: 3,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              rotate: 3,
            }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: "easeOut",
            }}
            className="lg:col-span-3 order-3"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-black translate-x-3 translate-y-3" />

              <div className="relative overflow-hidden bg-black">
                <img
                  src={model}
                  alt="E-S-T streetwear model"
                  className="w-full aspect-[3/4] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>

              <div className="absolute -top-5 -left-3 bg-[#C13018] text-white px-4 py-2">
                <span className="font-mono text-[10px] uppercase tracking-widest">
                  Concrete Jungle
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 md:mt-24 border-y-2 border-black py-4 overflow-hidden">
          <motion.div
            className="flex w-max whitespace-nowrap"
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...Array(28)].map((_, groupIndex) => (
              <div key={groupIndex} className="flex items-center shrink-0">
                {[
                  "NO RULES",
                  "NO FILTER",
                  "NO APOLOGIES",
                  "JUST E-S-T",
                  "BUILT FOR THE CONCRETE JUNGLE",
                ].map((text) => (
                  <div
                    key={`${groupIndex}-${text}`}
                    className="flex items-center"
                  >
                    <span className="px-6 md:px-10 text-xs md:text-sm font-black uppercase tracking-[0.2em]">
                      {text}
                    </span>

                    <span className="text-[#C13018] text-xl">+</span>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

//  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center w-full px-4 lg:px-0 md:mt-12 lg:max-h-[70vh]">
//           <motion.div
//             initial={{ opacity: 0, y: 40, rotate: -2 }}
//             whileInView={{ opacity: 1, y: 0, rotate: -2 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             className="lg:col-span-3 flex flex-col items-center lg:items-end gap-1 z-20 order-2 lg:order-1 relative lg:-left-10 "
//           >
//             {[
//               "Raw Stitches",
//               "And",
//               "Unapologetic",
//               "Fits",
//               "Built For",
//               "The",
//               "Concrete",
//               "Jungle",
//             ].map((text, idx) => (
//               <span
//                 key={idx}
//                 className="bg-black text-white font-black uppercase text-sm md:text-xl lg:text-2xl px-3 py-1 tracking-wider shadow-sm items-center"
//               >
//                 {text}
//               </span>
//             ))}
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 60 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
//             className="lg:col-span-6 z-10 w-full order-1 lg:order-2 flex justify-center"
//           >
//             <div className="relative group w-full max-w-sm sm:max-w-md xl:min-w-[700px]">
//               <div className="absolute inset-0 bg-[#C13018] translate-x-3 translate-y-3 lg:translate-x-4 lg:translate-y-4" />

//               <div className="relative overflow-hidden bg-black">
//                 <img
//                   src={imagebg1}
//                   alt="[E-S-T] Concrete Jungle"
//                   className="w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
//                 />
//               </div>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 40, rotate: 2 }}
//             whileInView={{ opacity: 1, y: 0, rotate: 2 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
//             className="lg:col-span-3 flex flex-col items-center lg:items-start gap-8 z-20 w-full order-3 relative lg:-right-4"
//           >
//             <motion.div
//               className="text-center lg:text-left font-mono text-xs md:text-sm text-gray-800 tracking-widest w-fit leading-relaxed"
//               animate={{ y: [0, -6, 6, -6, 6, 0] }}
//               transition={{
//                 duration: 4,
//                 repeat: Infinity,
//                 repeatType: "loop",
//                 ease: "easeInOut",
//               }}
//             >
//               <p className="font-extrabold uppercase">
//                 &nbsp;//&nbsp;RAW_STITCHES
//                 <br />
//                 &nbsp;//&nbsp;UNAPOLOGETIC_FITS
//               </p>
//               <p className="font-extrabold text-[#C13018] mt-1">
//                 // CONCRETE JUNGLE
//               </p>
//             </motion.div>

//             <Link
//               to="/shop"
//               className="group inline-flex items-center justify-center gap-4 bg-[#C13018] text-white px-8 py-4 uppercase text-sm font-bold tracking-wider transition-all duration-300 hover:bg-black w-full sm:w-auto"
//             >
//               Shop New Drops
//               <span className="text-lg transition-transform duration-300 group-hover:translate-x-2">
//                 →
//               </span>
//             </Link>
//           </motion.div>
//         </div>
