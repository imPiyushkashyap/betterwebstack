import { AnimatedTextGenerate } from "@/components/ui/animated-textgenerate";

const words = ` I build websites with built-in AI Agents that handle customer conversations, qualify leads, and follow up automatically.
`;

export default function AnimatedTextGenerateDemo() {
  return (
    <AnimatedTextGenerate
      className="text-center mb-8 p-4"
      textClassName="text-2xl md:text-3xl lg:text-4xl text-center"
      text={words}
      blurEffect
      speed={1}
      highlightWords={[
        "websites", "AI", "Agents", "customer", "conversations", 
        "qualify", "leads", "follow", "up", "automatically"
      ]}
      highlightClassName={[
        "text-cyan-500 dark:text-cyan-400 font-bold",
        "text-sky-500 dark:text-sky-400 font-bold",
        "text-blue-500 dark:text-blue-400 font-bold",
        "text-indigo-500 dark:text-indigo-400 font-bold",
        "text-cyan-500 dark:text-cyan-400 font-bold",
        "text-sky-500 dark:text-sky-400 font-bold",
        "text-blue-500 dark:text-blue-400 font-bold",
        "text-indigo-500 dark:text-indigo-400 font-bold",
        "text-cyan-500 dark:text-cyan-400 font-bold",
        "text-sky-500 dark:text-sky-400 font-bold",
        "text-blue-500 dark:text-blue-400 font-bold"
      ]}
      linkWords={["pressure", "night", "talent"]}
      linkClassNames={[
        "underline decoration-pink-500 dark:decoration-pink-400 hover:decoration-pink-400 dark:hover:decoration-pink-300 transition",
        "underline decoration-sky-500 dark:decoration-sky-400 hover:decoration-sky-400 dark:hover:decoration-sky-300 transition",
        "underline decoration-blue-500 dark:decoration-blue-400 hover:decoration-blue-400 dark:hover:decoration-blue-300 transition",
      ]}
    />
  );
}
