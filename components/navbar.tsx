"use client";

import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background backdrop-blur-sm">
      <div className="mx-auto px-4 h-14 flex items-center justify-end">
        <ThemeToggle />
      </div>
    </nav>
  );
}
