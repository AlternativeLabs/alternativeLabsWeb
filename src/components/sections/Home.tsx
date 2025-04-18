import Image from "next/image";
import * as motion from "motion/react-client";
import Marquee from "react-fast-marquee";
import N8n from "../../../public/8n8.svg";
import Python from "../../../public/python.svg";
import Ai from "../../../public/ai.svg";
import Data from "../../../public/data.svg";
import React from "../../../public/react.svg";
import Fastapi from "../../../public/fastapi.svg";
import Typescript from "../../../public/typescript.svg";
import Nextjs from "../../../public/nextjs.svg";
import Machinelearning from "../../../public/machinelearning.svg";
import Cloudnative from "../../../public/cloudnative.svg";
import { useTranslations } from "next-intl";

export function HomeSection() {
  const t = useTranslations("HomePage");

  const technologies = [
    {
      name: "N8N",
      icon: <N8n className="fill-black dark:fill-white w-5 h-5" />,
    },
    {
      name: "Python",
      icon: <Python className="fill-black dark:fill-white w-5 h-5" />,
    },
    {
      name: "AI",
      icon: <Ai className="fill-black dark:fill-white w-5 h-5" />,
    },
    {
      name: "Data Driven",
      icon: <Data className="fill-black dark:fill-white w-5 h-5" />,
    },
    {
      name: "React",
      icon: <React className="fill-black dark:fill-white w-5 h-5" />,
    },
    {
      name: "FastAPI",
      icon: <Fastapi className="fill-black dark:fill-white w-5 h-5" />,
    },
    {
      name: "TypeScript",
      icon: <Typescript className="fill-black dark:fill-white w-5 h-5" />,
    },
    {
      name: "Next.js",
      icon: <Nextjs className="fill-black dark:fill-white w-5 h-5" />,
    },
    {
      name: "Machine Learning",
      icon: <Machinelearning className="fill-black dark:fill-white w-5 h-5" />,
    },
    {
      name: "Cloud Native",
      icon: <Cloudnative className="fill-black dark:fill-white w-5 h-5" />,
    },
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
              {t("title")}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t("description")}
            </p>
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
              {t("button")}
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
              src="/landing_image.png"
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
              className="flex items-center justify-center w-[250px] flex-shrink-0 px-6 py-3 bg-background/50 backdrop-blur-sm rounded-lg border border-border/50 mr-8 gap-2"
            >
              {tech.icon}
              <span className="text-lg font-medium">{tech.name}</span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
