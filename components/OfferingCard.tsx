import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getAssetPath } from "@/lib/utils";

// Define the type for the offering content
export type Offering = {
  id: number;
  vertical: string;
  title: string;
  tags: string[];
  description: string;
  logo: string;
  url: string;
};

interface OfferingCardProps {
  offering: Offering;
}

const getGradientClass = (title: string) => {
  switch (title) {
    case "Energylicious":
      return "from-[#1e8a5c] to-[#ffde33]";
    case "QuadCaffe":
      return "from-[#cc2323] to-[#1a5eb3]";
    case "FolioWiz":
      return "from-[#003300] to-[#a6ff8a]";
    case "NIshtAI Labs":
      return "from-[#6b7280] to-[#14b8a6]";
    default:
      return "from-foreground to-foreground";
  }
};

const OfferingCard: React.FC<OfferingCardProps> = ({ offering }) => {
  return (
    <Card className="flex flex-col h-full transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl bg-white/10 dark:bg-black/10 backdrop-blur-md border-white/20 dark:border-white/10 shadow-lg">
      <CardHeader className="text-center p-4 sm:p-5 lg:p-6 flex-shrink-0">
        <div className="text-sm sm:text-base lg:text-lg uppercase text-foreground/80 font-medium mb-2 sm:mb-3">
          Launch: {offering.vertical}
          <Link
            href={offering.url}
            target="_blank"
            rel="noreferrer"
            className="ml-2"
          >
            <ExternalLink className="inline h-4 w-4 sm:h-5 sm:w-5" />
          </Link>
        </div>
        <CardTitle
          className={`text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold bg-gradient-to-r ${getGradientClass(
            offering.title
          )} bg-clip-text text-transparent leading-tight`}
        >
          {offering.title}&trade;
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col flex-grow items-center text-center p-4 sm:p-5 lg:p-6 pt-0">
        <div className="relative h-32 w-32 sm:h-40 sm:w-40 lg:h-48 lg:w-48 xl:h-56 xl:w-56 mb-4 sm:mb-5 lg:mb-6 flex-shrink-0">
          <Image
            src={getAssetPath(offering.logo)}
            alt={`${offering.title} logo`}
            fill
            style={{ objectFit: "contain" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </div>
        <CardDescription className="flex-grow text-foreground/90 font-medium text-sm sm:text-base lg:text-lg leading-relaxed">
          {offering.description}
        </CardDescription>
        <div className="mt-4 sm:mt-5 lg:mt-6 flex flex-wrap justify-center gap-2 sm:gap-3">
          {offering.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="bg-white/20 dark:bg-black/20 backdrop-blur-sm border-white/30 dark:border-white/20 text-foreground/90 text-xs sm:text-sm px-3 py-1"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default OfferingCard;
