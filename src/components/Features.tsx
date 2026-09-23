import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import image1 from "../assets/looking-ahead.png";
import image2 from "../assets/reflecting.png";
import image3 from "../assets/growth.png";

interface FeatureProps {
  title: string;
  description: string;
  image?: string;
}

const features: FeatureProps[] = [
  {
    title: "Kanban Board Task Management",
    description:
      "Break down assignments and track progress dynamically with To Do, In Progress, and Completed states.",
    image: image1,
  },
  {
    title: "Interactive Calendar",
    description:
      "Stay on top of deadlines, tasks, and assignment schedules in one unified view.",
    image: image2,
  },
  {
    title: "File & Folder Sharing",
    description:
      "Organize resources effortlessly with built-in, in-browser PDF previews.",
    image: image3,
  },
  {
    title: "Role-Based Access",
    description:
      "Manage member contributions and permissions within specific assignments.",
  },
  {
    title: "Real-Time Notifications",
    description:
      "Get instantly updated on newly uploaded files, assigned tasks, and membership changes.",
  },
];

export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Core{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Features
        </span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
        {/* Top 3 vertical cards */}
        {features.slice(0, 3).map(({ title, description, image }: FeatureProps) => (
          <Card key={title} className="flex flex-col">
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent className="flex-1">{description}</CardContent>

            {image && (
              <CardFooter>
                <img
                  src={image}
                  alt={title}
                  className="w-[200px] lg:w-[250px] mx-auto object-contain"
                />
              </CardFooter>
            )}
          </Card>
        ))}

        {/* Bottom 2 wide/horizontal cards */}
        <div className="col-span-full grid md:grid-cols-2 gap-8">
          {features.slice(3).map(({ title, description }: FeatureProps) => (
            <Card key={title} className="flex flex-col justify-center">
              <CardHeader>
                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent>{description}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
