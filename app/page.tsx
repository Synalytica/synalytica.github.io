import OfferingCard, { Offering } from "@/components/OfferingCard";
import TypewriterText from "@/components/TypewriterText";

const offerings: Offering[] = [
  {
    id: 2,
    vertical: "Q3 2025",
    title: "QuadCaffe",
    tags: ["Education", "EdTech", "Collegiate"],
    description:
      "Simplify college research and selection using big data - for high school students",
    logo: "logos/quadcaffe.png",
    url: "https://quadcaffe.synalytica.com",
  },
  {
    id: 3,
    vertical: "Q4 2025",
    title: "Energylicious",
    tags: ["Energy", "Climate Tech", "Sustainability"],
    description:
      "Analyze and optimize energy costs and consumption - for residential energy consumers seeking efficiency and savings",
    logo: "logos/energylicious.png",
    url: "https://happyjoule.synalytica.com/home",
  },
  {
    id: 4,
    vertical: "Q4 2024",
    title: "FolioWiz",
    tags: ["Finance", "Fintech", "Investments"],
    description:
      "A sophisticated AI-driven stock portfolio management platform, enabling optimal and automated investment decisions.",
    logo: "logos/foliowiz.png",
    url: "https://foliowiz.synalytica.com",
  },
];

export default function Home() {
  const heroText = `A "Startup Studio" catalyzing ideas using AI and big data to solve real-world shortcomings`;

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center my-12">
        <h1
          className="text-4xl md:text-6xl font-extrabold tracking-tight lg:text-7xl bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-purple-500 to-black bg-clip-text text-transparent animated-gradient pb-4"
          style={{
            backgroundImage:
              "linear-gradient(215deg, rgba(238, 65, 72, 1) 12%, rgba(247, 151, 36, 1) 24%, rgba(248, 198, 79, 1) 36%, rgba(144, 192, 109, 1) 48%, rgba(59, 170, 138, 1) 60%, rgba(87, 120, 145, 1) 72%)",
          }}
        >
          <TypewriterText text={heroText} speed={25} />
        </h1>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings
            .sort((a, b) => a.id - b.id)
            .map((offering) => (
              <OfferingCard key={offering.id} offering={offering} />
            ))}
        </div>
      </section>
    </div>
  );
}
