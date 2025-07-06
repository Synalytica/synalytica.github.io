import { Mail } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <section className="text-center my-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight flex items-center justify-center gap-4">
          <Mail className="h-10 w-10" />
          Reach Out!
        </h1>
      </section>

      <section className="flex flex-col items-center gap-12">
        <div className="w-full max-w-4xl">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeq4IvaCETa0Ty-mVR49VprCh2T3ymOaqHkU7Nzkvv4kEDZ1w/viewform?embedded=true"
            width="100%"
            height="1452"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Contact Form"
          >
            Loading…
          </iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
