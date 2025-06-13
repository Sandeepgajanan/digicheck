"use client";

import { stripeData } from "@/data/stripedata";
import StripeCard from "@/components/StripeCard";
import Heading from "@/components/Heading";
import { Fragment } from "react";
import { motion } from "framer-motion";

export default function Brand() {
  const reversedBrands = [...stripeData].reverse();

  return (
    <section className="w-full  text-center min-h-fit lg:py-20">
      <div className="max-w-screen-xl mx-auto w-full h-full px-6">
        <Heading
          title="Trusted by these companies"
          subtitle="Used by forward-thinking companies worldwide"
        />
        <div className="flex overflow-hidden  my-16  [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)] mx-auto w-2/3">
          <motion.div
            animate={{
              x: "-50%",
            }}
            transition={{
              duration: 10,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex flex-none gap-32 pr-32"
          >
            {Array.from({ length: 2 }).map((_, i) => (
              <Fragment key={i}>
                {stripeData.map((brand, index) => (
                  <StripeCard image={brand.image} key={index} />
                ))}
              </Fragment>
            ))}
          </motion.div>
        </div>

        <div className="flex overflow-hidden  my-16  [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]  mx-auto w-2/3">
          <motion.div
            initial={{ x: "-50%" }}
            animate={{ x: "0%" }}
            transition={{
              duration: 10,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex flex-none gap-32 pr-32"
          >
            {Array.from({ length: 2 }).map((_, i) => (
              <Fragment key={i}>
                {stripeData.map((brand, index) => (
                  <StripeCard image={brand.image} key={index} />
                ))}
              </Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
