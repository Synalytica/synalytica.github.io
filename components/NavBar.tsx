"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";
import { Briefcase, Mail, Menu, Moon, Orbit, Sun, Users } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  const { theme, setTheme } = useTheme();

  const navLinks = [
    { href: "/", label: "Offerings", icon: <Orbit className="h-5 w-5" /> },
    { href: "/team", label: "Team", icon: <Users className="h-5 w-5" /> },
    {
      href: "/board",
      label: "Board",
      icon: <Briefcase className="h-5 w-5" />,
      disabled: true,
    },
    { href: "/contact", label: "Contact", icon: <Mail className="h-5 w-5" /> },
  ];

  return (
    <header
      className="sticky top-0 z-50 w-full text-white"
      style={{
        background:
          "linear-gradient(225deg, rgba(0,0,0,0.9) 0%, rgba(238,65,72,0.8) 12%, rgba(247,151,36,0.8) 24%, rgba(248,198,79,0.8) 36%, rgba(144,192,109,0.8) 48%, rgba(59,170,138,0.8) 60%, rgba(87,120,145,0.8) 72%, rgba(0,0,0,0.9) 100%)",
      }}
    >
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image
              src="/logo-light.png"
              alt="Synalytica"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="hidden font-bold sm:inline-block">Synalytica</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Button
                key={link.href}
                asChild
                variant="ghost"
                disabled={link.disabled}
              >
                <Link href={link.href}>{link.label}</Link>
              </Button>
            ))}
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <nav className="grid gap-6 text-lg font-medium">
                  <Link
                    href="/"
                    className="flex items-center gap-2 text-lg font-semibold"
                  >
                    <Image
                      src="/logo-light.png"
                      alt="Synalytica"
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
            />
            <label htmlFor="dark-mode" className="ml-2">
              {theme === "dark" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </label>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
