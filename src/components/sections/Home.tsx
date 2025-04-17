import Image from "next/image";
import * as motion from "motion/react-client";
import Marquee from "react-fast-marquee";

export function HomeSection() {
  const technologies = [
    "N8N",
    "Python",
    "AI",
    "Data Driven",
    "React",
    "FastAPI",
    "TypeScript",
    "Next.js",
    "Machine Learning",
    "Cloud Native",
  ];

  return (
    <section className="h-[calc(100vh-64px)] flex flex-col">
      {/* Hero Section */}
      <div className="flex-1 container px-4 flex items-center mx-auto">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center w-full">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
              Scale Your Business with Advanced Technology
            </h1>
            <p className="text-xl text-muted-foreground">
              Leverage cutting-edge AI, data-driven insights, and agentic
              technology to transform your ideas into production-ready solutions
              faster than ever.
            </p>
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
              Get Started
            </button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[400px] w-full rounded-lg overflow-hidden"
          >
            <Image
              src="/ai-business.jpg"
              alt="AI Business Technology"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>

      {/* Technologies Marquee */}
      <div className="w-full bg-muted/30 py-8">
        <Marquee className="flex space-x-8 whitespace-nowrap">
          {[...technologies, ...technologies].map((tech, index) => (
            <div
              key={`${tech}-${index}`}
              className="flex items-center justify-center w-[250px] flex-shrink-0 px-6 py-3 bg-background/50 backdrop-blur-sm rounded-lg border border-border/50 mr-8"
            >
              <span className="text-lg font-medium">{tech}</span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
