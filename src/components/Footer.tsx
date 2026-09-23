import { LogoIcon } from "./Icons";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Linkedin } from "lucide-react";
import { buttonVariants } from "./ui/button";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <LogoIcon />
          <span className="font-bold text-xl">LetsBelajar</span>
        </div>

        <div className="text-center text-muted-foreground text-sm flex-1">
          &copy; {new Date().getFullYear()} LetsBelajar. Built by Mohammad Amir Qusairy.
        </div>

        <div className="flex gap-4">
          <a
            rel="noreferrer noopener"
            href="https://github.com/amirqusairy99/LetsBelajar"
            target="_blank"
            className={buttonVariants({ variant: "ghost", size: "sm" })}
          >
            <GitHubLogoIcon className="w-5 h-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            rel="noreferrer noopener"
            href="https://linkedin.com/in/amir-qusairy"
            target="_blank"
            className={buttonVariants({ variant: "ghost", size: "sm" })}
          >
            <Linkedin className="w-5 h-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </section>
    </footer>
  );
};
