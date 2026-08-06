"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu } from "lucide-react";
import { useEffect, useState } from "react";

import { Wordmark } from "@/components/brand/Wordmark";
import { Container } from "@/components/layout/Container";
import { MobileNavSection, NavDropdown } from "@/components/layout/NavDropdown";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { navItems } from "@/lib/navigation";
import { cn } from "@/lib/utils";

function isActivePath(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-[background-color,border-color,box-shadow] duration-500",
        scrolled
          ? "border-white/[0.08] bg-background/90 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.55)] backdrop-blur-2xl"
          : "border-transparent bg-background/50 backdrop-blur-xl",
      )}
    >
      <Container wide as="div" className="flex h-16 items-center justify-between gap-6 md:h-[4.25rem]">
        <Link
          href="/"
          className="group shrink-0 outline-none transition-opacity duration-300 hover:opacity-90 focus:outline-none focus-visible:outline-none"
          aria-label="Noeris Analytics home"
        >
          <Wordmark size="md" layout="inline" />
        </Link>

        <div className="hidden items-center gap-3 lg:flex">
          <nav className="flex items-center gap-1" aria-label="Main navigation">
            {navItems.map((item) => (
              <NavDropdown
                key={item.href}
                item={item}
                pathname={pathname}
                active={isActivePath(pathname, item.href)}
              />
            ))}
          </nav>

          <div className="ml-1 h-6 w-px bg-white/[0.08]" aria-hidden="true" />

          <Button asChild size="sm" className="gap-1.5 pl-4 pr-3.5">
            <Link href="/contact">
              Book a call
              <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
            </Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <Wordmark size="md" layout="inline" className="mb-10" />
            <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <MobileNavSection
                  key={item.href}
                  item={item}
                  pathname={pathname}
                  onNavigate={() => setOpen(false)}
                />
              ))}
            </nav>
            <Button asChild className="mt-8 w-full gap-1.5">
              <Link href="/contact" onClick={() => setOpen(false)}>
                Book a call
                <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
              </Link>
            </Button>
          </SheetContent>
        </Sheet>
      </Container>
    </header>
  );
}
