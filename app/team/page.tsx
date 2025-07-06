import TeamMemberCard, { TeamMember } from "@/components/TeamMemberCard";
import { Users } from "lucide-react";

const teamMembers: TeamMember[] = [
  {
    name: "Mahesh S",
    role: "Founder",
    quirkyTitle: "Visionary Vortex",
    image: "team/mahesh.png",
    links: {
      linkedin: "https://www.linkedin.com/in/mkayes/",
      email: "synalytica@gmail.com",
    },
  },
  {
    name: "Pratik K",
    role: "Founder",
    quirkyTitle: "Tech Shaman",
    image: "team/pratik.png",
    links: {
      linkedin: "https://www.linkedin.com/in/pk13055/",
      github: "https://github.com/pk13055/",
    },
  },
];

const TeamPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center my-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight flex items-center justify-center gap-4">
          <Users className="h-10 w-10" />
          Meet the Team
        </h1>
      </section>

      <section className="flex flex-wrap justify-center items-start gap-8">
        {teamMembers.map((member) => (
          <TeamMemberCard key={member.name} member={member} />
        ))}
      </section>
    </div>
  );
};

export default TeamPage;
