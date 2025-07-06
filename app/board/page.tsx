import { Briefcase } from "lucide-react";

const BoardPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center my-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight flex items-center justify-center gap-4">
          <Briefcase className="h-10 w-10" />
          Advisory Board
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Our advisory board is composed of experienced leaders and innovators.
          <br />
          Full details coming soon.
        </p>
      </section>
    </div>
  );
};

export default BoardPage;
