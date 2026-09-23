import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
              Collaborative Study
            </span>{" "}
          </h1>{" "}
          & Assignment Management,{" "}
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
              Simplified.
            </span>
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          LetsBelajar is a Laravel-powered platform designed for students and teachers to organize assignments, coordinate tasks via Kanban boards, and track deadlines seamlessly.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <a
            rel="noreferrer noopener"
            href="https://github.com/amirqusairy99/LetsBelajar"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "default",
            })}`}
          >
            View on GitHub
            <GitHubLogoIcon className="ml-2 w-5 h-5" />
          </a>

          <a
            rel="noreferrer noopener"
            href="#demo"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            View Demo
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10 w-full">
        <div className="w-full h-[500px] bg-slate-200 dark:bg-slate-800 rounded-lg shadow-xl animate-pulse flex items-center justify-center">
          <span className="text-muted-foreground">App Screenshot Placeholder</span>
        </div>
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
