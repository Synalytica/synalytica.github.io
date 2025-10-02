"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";
import {
  IconBriefcase,
  IconMail,
  IconMenu2,
  IconMoon,
  IconPlanet,
  IconSun,
  IconUsers,
} from "@tabler/icons-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getAssetPath } from "@/lib/utils";

const NavBar = () => {
  const { theme, setTheme } = useTheme();

  const navLinks = [
    { href: "/", label: "Offerings", icon: <IconPlanet className="h-5 w-5" /> },
    { href: "/team", label: "Team", icon: <IconUsers className="h-5 w-5" /> },
    {
      href: "/board",
      label: "Board",
      icon: <IconBriefcase className="h-5 w-5" />,
      disabled: true,
    },
    {
      href: "/contact",
      label: "Contact",
      icon: <IconMail className="h-5 w-5" />,
    },
  ];

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-auto">
      <div
        className="flex items-center px-6 py-3 rounded-full backdrop-blur-md border border-white/20 shadow-lg"
        style={{
          background:
            "linear-gradient(225deg, rgba(0,0,0,0.3) 0%, rgba(238,65,72,0.2) 12%, rgba(247,151,36,0.2) 24%, rgba(248,198,79,0.2) 36%, rgba(144,192,109,0.2) 48%, rgba(59,170,138,0.2) 60%, rgba(87,120,145,0.2) 72%, rgba(0,0,0,0.3) 100%)",
        }}
      >
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={getAssetPath("logo-light.png")}
              alt="Synalytica Logo"
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="font-bold text-sm [font-variant:small-caps]">
              Synalytica
            </span>
          </Link>
          <nav className="flex items-center space-x-1">
            {navLinks.map((link) => (
              <Button
                key={link.href}
                asChild
                variant="ghost"
                size="sm"
                disabled={link.disabled}
                className="h-8 px-3 text-xs font-medium hover:bg-white/10"
              >
                <Link href={link.href} className="flex items-center gap-2">
                  {link.icon}
                  {link.label}
                </Link>
              </Button>
            ))}
          </nav>
        </div>

        <div className="flex items-center space-x-2">
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0 hover:bg-white/10"
                >
                  <IconMenu2 className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <nav className="grid gap-6 text-lg font-medium">
                  <Link
                    href="/"
                    className="flex items-center gap-2 text-lg font-semibold"
                  >
                    <Image
                      src={getAssetPath("logo-light.png")}
                      alt="Synalytica Logo"
                      width={30}
                      height={30}
                      className="rounded-full"
                    />
                    <span>Synalytica</span>
                  </Link>
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center gap-4"
                      // This is a simplistic way to handle disabled links in mobile
                      onClick={(e) => link.disabled && e.preventDefault()}
                    >
                      {link.icon}
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          <div className="flex items-center">
            <Switch
              id="dark-mode"
              checked={theme === "dark"}
              onCheckedChange={() =>
                setTheme(theme === "dark" ? "light" : "dark")
              }
              className="scale-75"
            />
            <label htmlFor="dark-mode" className="ml-1">
              {theme === "dark" ? (
                <IconMoon className="h-4 w-4" />
              ) : (
                <IconSun className="h-4 w-4" />
              )}
            </label>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
