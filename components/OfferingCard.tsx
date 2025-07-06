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
    default:
      return "from-foreground to-foreground";
  }
};

const OfferingCard: React.FC<OfferingCardProps> = ({ offering }) => {
  return (
    <Card className="flex flex-col h-full transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
      <CardHeader className="text-center">
        <div className="text-xs uppercase text-muted-foreground">
          Launch: {offering.vertical}
          <Link
            href={offering.url}
            target="_blank"
            rel="noreferrer"
            className="ml-2"
          >
            <ExternalLink className="inline h-4 w-4" />
          </Link>
        </div>
        <CardTitle
          className={`text-3xl font-bold bg-gradient-to-r ${getGradientClass(
            offering.title
          )} bg-clip-text text-transparent`}
        >
          {offering.title}&trade;
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col flex-grow items-center text-center">
        <div className="relative h-48 w-48 mb-4">
          <Image
            src={getAssetPath(offering.logo)}
            alt={`${offering.title} logo`}
            fill
            style={{ objectFit: "contain" }}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <CardDescription className="flex-grow">
          {offering.description}
        </CardDescription>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {offering.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default OfferingCard;
