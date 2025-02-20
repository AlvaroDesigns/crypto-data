import { cn } from "@/lib/utils";

import { ReactNode } from "react";

interface NavbarProps {
  className?: string;
  children: ReactNode;
}

export function Navbar({ className, children }: NavbarProps) {
  return (
    <header className="w-full">
      <nav className={cn("text-white py-4 px-2  border-b w-full", className)}>
        <div className="container mx-auto flex justify-between items-center">
          {children}
        </div>
      </nav>
    </header>
  );
}
