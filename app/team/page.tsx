"use client";

import TeamMemberCard, { TeamMember } from "@/components/TeamMemberCard";
import { Users } from "lucide-react";
import { motion } from "framer-motion";

const teamMembers: TeamMember[] = [
  {
    name: "Mahesh S",
    role: "Founder, CEO",
    quirkyTitle: "Visionary Vortex",
    image: "team/mahesh.png",
    links: {
      linkedin: "https://www.linkedin.com/in/mkayes/",
      email: "synalytica@gmail.com",
    },
  },
  {
    name: "Pratik K",
    role: "Founder, CTO",
    quirkyTitle: "Tech Shaman",
    image: "team/pratik.png",
    links: {
      website: "https://pk13055.com",
      linkedin: "https://www.linkedin.com/in/pk13055/",
      github: "https://github.com/pk13055/",
    },
  },
];

const headerVariants = {
  hidden: { opacity: 0, y: -50 },
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
      duration: 0.7,
    },
  },
};

const iconVariants = {
  hidden: { rotate: -180, opacity: 0 },
  visible: {
    rotate: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12,
      duration: 0.6,
    },
  },
};

const TeamPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <motion.section
        className="text-center my-12"
        initial="hidden"
        animate="visible"
        variants={headerVariants}
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight flex items-center justify-center gap-4">
          <motion.div variants={iconVariants}>
            <Users className="h-10 w-10" />
          </motion.div>
          Meet the Team
        </h1>
      </motion.section>

      <motion.section
        className="flex flex-wrap justify-center items-start gap-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {teamMembers.map((member) => (
          <motion.div key={member.name} variants={cardVariants}>
            <TeamMemberCard member={member} />
          </motion.div>
        ))}
      </motion.section>
    </div>
  );
};

export default TeamPage;
