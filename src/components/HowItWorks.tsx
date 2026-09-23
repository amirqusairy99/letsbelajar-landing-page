import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "1. Create & Organize",
    description:
      "Set up assignments and invite project members with role-based access.",
  },
  {
    icon: <MapIcon />,
    title: "2. Task Breakdown",
    description:
      "Use the integrated Kanban board to divide work into manageable tasks (To Do, In Progress, Completed).",
  },
  {
    icon: <PlaneIcon />,
    title: "3. Collaborate & Share",
    description:
      "Upload files, organize them into folders, and share essential resources.",
  },
  {
    icon: <GiftIcon />,
    title: "4. Track Deadlines",
    description:
      "Use the interactive calendar to monitor due dates, tasks, and project milestones in real time.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        How It{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Works{" "}
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        A logical workflow designed for students and teachers to coordinate seamlessly.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
