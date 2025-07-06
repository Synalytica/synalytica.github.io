import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getAssetPath } from "@/lib/utils";

const Footer = () => {
  const socialLinks = [
    {
      href: "https://github.com/synalytica",
      icon: <Github className="h-5 w-5" />,
    },
    {
      href: "https://www.linkedin.com/company/synalytica",
      icon: <Linkedin className="h-5 w-5" />,
    },
    {
      href: "https://twitter.com/synalytica",
      icon: <Twitter className="h-5 w-5" />,
    },
    {
      href: "https://facebook.com/synalytica",
      icon: <Facebook className="h-5 w-5" />,
    },
    {
      href: "https://instagram.com/synalytica",
      icon: <Instagram className="h-5 w-5" />,
    },
  ];

  return (
    <footer
      className="text-white"
      style={{
        background:
          "linear-gradient(-225deg, rgba(0,0,0,0.9) 0%, rgba(238,65,72,0.8) 12%, rgba(247,151,36,0.8) 24%, rgba(248,198,79,0.8) 36%, rgba(144,192,109,0.8) 48%, rgba(59,170,138,0.8) 60%, rgba(87,120,145,0.8) 72%, rgba(0,0,0,0.9) 100%)",
      }}
    >
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Image
            src={getAssetPath("logo-dark.png")}
            alt="Synalytica"
            width={40}
            height={40}
            className="rounded-full"
          />
          <p className="text-center text-sm leading-loose md:text-left">
            &copy; {new Date().getFullYear()} Synalytica. All rights reserved.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          {socialLinks.map((social) => (
            <Link
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noreferrer"
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
