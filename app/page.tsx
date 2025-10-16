"use client";

import OfferingCard, { Offering } from "@/components/OfferingCard";
import TypewriterText from "@/components/TypewriterText";
import { motion } from "framer-motion";

const offerings: Offering[] = [
  {
    id: 2,
    vertical: "Q4 2025",
    title: "QuadCaffe",
    tags: ["Education", "EdTech", "Collegiate"],
    description: "Personalized college fit. Human-first. AI-smart.",
    logo: "logos/quadcaffe.png",
    url: "https://quadcaffe.com",
  },
  {
    id: 3,
    vertical: "Q1 2026",
    title: "Energylicious",
    tags: ["Energy", "Climate Tech", "Sustainability"],
    description:
      "Analyze and optimize energy costs and consumption - for residential energy consumers seeking efficiency and savings",
    logo: "logos/energylicious.png",
    url: "https://happyjoule.synalytica.com/home",
  },
  {
    id: 4,
    vertical: "Q2 2026",
    title: "FolioWiz",
    tags: ["Finance", "Fintech", "Investments"],
    description:
      "A sophisticated AI-driven stock portfolio management platform, enabling optimal and automated investment decisions.",
    logo: "logos/foliowiz.png",
    url: "https://foliowiz.synalytica.com",
  },
  {
    id: 5,
    vertical: "Q3 2025",
    title: "NIshtAI Labs",
    tags: ["AI", "ML", "Consulting", "Automation"],
    description:
      "Human-first AI innovation — where Natural Intelligence guides Artificial Intelligence to amplify judgment, strategy, and scale.",
    logo: "logos/nishtai.png",
    url: "#!",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12,
      duration: 0.6,
    },
  },
};

const heroVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 80,
      damping: 15,
      duration: 0.8,
    },
  },
};

export default function Home() {
  const heroText = `A "Startup Studio" catalyzing ideas using AI and big data to solve real-world shortcomings`;

  return (
    <div className="flex flex-col">
      <motion.section
        className="text-center pt-24 pb-8 px-4 flex-shrink-0"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-purple-500 to-black bg-clip-text text-transparent animated-gradient leading-tight"
          style={{
            backgroundImage:
              "linear-gradient(215deg, rgba(238, 65, 72, 1) 12%, rgba(247, 151, 36, 1) 24%, rgba(248, 198, 79, 1) 36%, rgba(144, 192, 109, 1) 48%, rgba(59, 170, 138, 1) 60%, rgba(87, 120, 145, 1) 72%)",
          }}
        >
          <TypewriterText text={heroText} speed={25} />
        </h1>
      </motion.section>

      <motion.section
        className="flex-1 flex items-center justify-center px-2 sm:px-4 lg:px-6 xl:px-8 pb-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 xl:gap-8 auto-rows-fr">
            {offerings
              .sort((a, b) => a.id - b.id)
              .map((offering) => (
                <motion.div
                  key={offering.id}
                  variants={itemVariants}
                  className="h-full"
                >
                  <OfferingCard offering={offering} />
                </motion.div>
              ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
