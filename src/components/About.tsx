import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Linkedin, Globe } from "lucide-react";
import { buttonVariants } from "./ui/button";

export const About = () => {
  return (
    <section
      id="aboutBuilder"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <div className="w-[300px] h-[300px] bg-slate-200 dark:bg-slate-800 rounded-lg animate-pulse flex items-center justify-center shrink-0">
            <span className="text-muted-foreground">Builder Photo</span>
          </div>
          <div className="bg-green-0 flex flex-col justify-center">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                the Builder
              </h2>
              <p className="text-xl text-muted-foreground mt-4 space-y-4">
                <span>
                  This project was built by <strong>Mohammad Amir Qusairy Bin Arzri</strong>, an Infrastructure Engineer and Systems & Network Engineer based in Petaling Jaya, Selangor.
                </span>
                <br /><br />
                <span>
                  I built, containerized with Docker, and deployed the LetsBelajar web application on a Linux server utilizing Nginx and MySQL. My core expertise spans Linux and Windows server administration, virtualization (Hyper-V, VMware), and network security.
                </span>
              </p>
            </div>
            
            <div className="flex gap-4">
              <a
                rel="noreferrer noopener"
                href="https://github.com/amirqusairy99"
                target="_blank"
                className={buttonVariants({ variant: "outline", size: "icon" })}
                title="GitHub"
              >
                <GitHubLogoIcon className="w-5 h-5" />
              </a>
              <a
                rel="noreferrer noopener"
                href="https://linkedin.com/in/amir-qusairy"
                target="_blank"
                className={buttonVariants({ variant: "outline", size: "icon" })}
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                rel="noreferrer noopener"
                href="https://amirqusairy99.github.io"
                target="_blank"
                className={buttonVariants({ variant: "outline", size: "icon" })}
                title="Portfolio"
              >
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
