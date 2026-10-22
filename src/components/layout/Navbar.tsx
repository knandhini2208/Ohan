"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Leaf, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { mainNav } from "@/data/navigation";

export function Navbar() {
  const [open, setOpen] = useState(false);

  // Close the mobile menu when the Escape key is pressed.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-sage-100 bg-white/90 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between gap-6">
          {/* Brand */}
          <Link
            href="/"
            className="flex items-center gap-2.5"
            onClick={() => setOpen(false)}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sage-700 text-white">
              <Leaf className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="font-heading text-2xl font-semibold tracking-tight text-sage-900">
              OHAN
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-sage-800 transition-colors hover:bg-sage-100"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop buttons */}
          <div className="hidden items-center gap-2 lg:flex">
            <Button href="/login" variant="ghost">
              Log in
            </Button>
            <Button href="/register">Get started</Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-sage-800 transition-colors hover:bg-sage-100 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile menu panel: any link clicked inside it closes the menu */}
      {open && (
        <div
          id="mobile-menu"
          className="border-t border-sage-100 bg-white lg:hidden"
          onClick={(event) => {
            if ((event.target as HTMLElement).closest("a")) setOpen(false);
          }}
        >
          <Container>
            <nav aria-label="Mobile" className="flex flex-col gap-1 py-4">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-3 py-3 text-base font-medium text-sage-900 transition-colors hover:bg-sage-50"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex flex-col gap-2 border-t border-sage-100 py-4 sm:flex-row">
              <Button href="/login" variant="secondary" className="sm:flex-1">
                Log in
              </Button>
              <Button href="/register" className="sm:flex-1">
                Get started
              </Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}