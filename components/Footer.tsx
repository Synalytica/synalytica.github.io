import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { getAssetPath } from "@/lib/utils";

const Footer = () => {
  const socialLinks = [
    {
      href: "https://github.com/synalytica",
      icon: <Github className="h-4 w-4" />,
    },
    {
      href: "https://www.linkedin.com/company/synalytica",
      icon: <Linkedin className="h-4 w-4" />,
    },
    {
      href: "https://twitter.com/synalytica",
      icon: <Twitter className="h-4 w-4" />,
    },
    {
      href: "https://facebook.com/synalytica",
      icon: <Facebook className="h-4 w-4" />,
    },
    {
      href: "https://instagram.com/synalytica",
      icon: <Instagram className="h-4 w-4" />,
    },
  ];

  return (
    <footer
      className="text-white relative"
      style={{
        background:
          "linear-gradient(-225deg, rgba(0,0,0,0.9) 0%, rgba(238,65,72,0.8) 12%, rgba(247,151,36,0.8) 24%, rgba(248,198,79,0.8) 36%, rgba(144,192,109,0.8) 48%, rgba(59,170,138,0.8) 60%, rgba(87,120,145,0.8) 72%, rgba(0,0,0,0.9) 100%)",
      }}
    >
      {/* Top gradient overlay for theme blending */}
      <div className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-background to-transparent dark:from-background dark:to-transparent" />

      <div className="container flex flex-col items-center justify-between gap-3 py-6 md:h-16 md:flex-row md:py-0 relative z-10">
        <div className="flex flex-col items-center gap-2 px-8 md:flex-row md:gap-2 md:px-0">
          <Image
            src={getAssetPath("logo-dark.png")}
            alt="Synalytica"
            width={32}
            height={32}
            className="rounded-full"
          />
          <p className="text-center text-xs leading-tight md:text-left">
            &copy; {new Date().getFullYear()} Synalytica. All rights reserved.
          </p>
        </div>
        <div className="flex items-center space-x-3">
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
