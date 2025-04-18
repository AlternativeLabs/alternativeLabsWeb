import Link from "next/link";
import { Github, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 w-full">
      <div className="flex flex-col items-center justify-between gap-4 py-10 px-10 md:h-24 md:flex-row md:py-0 w-full">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by{" "}
            <Link
              href="https://github.com/sanieni6"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4 hover:text-primary"
            >
              Luis Sanchez
            </Link>
            {" "}in Ecuador. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/AlternativeLabs"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl bg-muted p-2.5 hover:bg-muted/80"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://x.com/labsAlternative"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl bg-muted p-2.5 hover:bg-muted/80"
          >
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
        </div>
      </div>
    </footer>
  );
} 