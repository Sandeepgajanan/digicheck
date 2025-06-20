"use client";

import { brandImgdata } from "@/data/common/brandimgdata";
import BrandCard from "@/components/BrandCard";
import Heading from "@/components/Heading";
import { Fragment } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { getData } from "@/utils/getData";

export default function Brand() {
  const { language } = useLanguage();
  const brandHeading = getData(language, "brandHeading");
  const { title, subtitle } = brandHeading;
  return (
    <section className="w-full  text-center min-h-fit lg:py-20">
      <div className="max-w-screen-xl mx-auto w-full h-full px-6">
        <Heading title={title} subtitle={subtitle} />
        <div className="flex overflow-hidden mt-8  lg:my-16  [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)] mx-auto w-2/3">
          <motion.div
            animate={{
              x: "-50%",
            }}
            transition={{
              duration: 10,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex flex-none  gap-16 pr-16 lg:gap-32 lg:pr-32"
          >
            {Array.from({ length: 2 }).map((_, i) => (
              <Fragment key={i}>
                {brandImgdata?.map((brand, index) => (
                  <BrandCard image={brand.image} key={index} />
                ))}
              </Fragment>
            ))}
          </motion.div>
        </div>

        <div className="flex overflow-hidden mt-8 lg:my-16  [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]  mx-auto w-2/3">
          <motion.div
            initial={{ x: "-50%" }}
            animate={{ x: "0%" }}
            transition={{
              duration: 10,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex flex-none  gap-16 pr-16 lg:gap-32 lg:pr-32"
          >
            {Array.from({ length: 2 }).map((_, i) => (
              <Fragment key={i}>
                {brandImgdata?.map((brand, index) => (
                  <BrandCard image={brand.image} key={index} />
                ))}
              </Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
