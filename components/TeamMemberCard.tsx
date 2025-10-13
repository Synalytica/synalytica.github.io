import { Card, CardFooter } from "@/components/ui/card";
import { Github, Globe, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { getAssetPath } from "@/lib/utils";

export type TeamMember = {
  name: string;
  role: string;
  quirkyTitle: string;
  image: string;
  links: {
    website?: string;
    linkedin?: string;
    github?: string;
    email?: string;
  };
};

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <Card className="w-full max-w-sm rounded-2xl overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
      <div className="relative">
        <Image
          src={getAssetPath(member.image)}
          alt={`Photo of ${member.name}`}
          width={420}
          height={420}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <h3 className="text-2xl font-bold">{member.name}</h3>
          <p className="text-sm uppercase tracking-wider">{member.role}</p>
        </div>
      </div>
      <CardFooter className="flex justify-between items-center p-2 bg-background">
        <span className="text-sm font-semibold uppercase">
          {member.quirkyTitle}
        </span>
        <div className="flex space-x-2">
          {member.links.website && (
            <Button asChild variant="ghost" size="icon">
              <Link href={member.links.website} target="_blank">
                <Globe className="h-5 w-5" />
              </Link>
            </Button>
          )}
          {member.links.linkedin && (
            <Button asChild variant="ghost" size="icon">
              <Link href={member.links.linkedin} target="_blank">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
          )}
          {member.links.github && (
            <Button asChild variant="ghost" size="icon">
              <Link href={member.links.github} target="_blank">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
          )}
          {member.links.email && (
            <Button asChild variant="ghost" size="icon">
              <Link href={`mailto:${member.links.email}`}>
                <Mail className="h-5 w-5" />
              </Link>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default TeamMemberCard;
