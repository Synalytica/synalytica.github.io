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
    <footer className="bg-transparent text-black dark:text-white relative">
      <div className="w-full flex flex-col items-center justify-between gap-3 py-6 md:h-16 md:flex-row md:py-0 px-4 md:px-8">
        <div className="flex flex-col items-center gap-2 md:flex-row md:gap-2">
          <Image
            src={getAssetPath("logo-dark.png")}
            alt="Synalytica"
            width={32}
            height={32}
            className="rounded-full"
          />
          <p className="text-center text-xs leading-tight md:text-left text-black dark:text-white">
            &copy; {new Date().getFullYear()} Synalytica&trade;. All rights
            reserved.
          </p>
        </div>
        <div className="flex items-center space-x-3">
          {socialLinks.map((social) => (
            <Link
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
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
