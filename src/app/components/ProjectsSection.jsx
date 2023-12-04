"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "PromptlyPost",
    description: "AI Email Marketing Assisstant.",
    image: "/images/projects/promptlypost.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/CR1502/Recommender",
  },
  {
    id: 2,
    title: "SoundScape",
    description: "Translates Audio into Images.",
    image: "/images/projects/soundscape.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/CR1502/tech-titans",
  },
  {
    id: 3,
    title: "SoundForge",
    description: "Evolutionary Algorithm that generates 8-bit music.",
    image: "/images/projects/soundforge.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/CR1502/Sound_Forge",
  },
  {
    id: 4,
    title: "NeuralPaint",
    description: "GAN model that generates unique art.",
    image: "/images/projects/NeuralPaint.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/CR1502/NeuralPaint",
  },
  {
    id: 5,
    title: "SmartSprout",
    description: "ANN that works along with a IoT devices to predict whether crops required irrigation or not.",
    image: "/images/projects/SmartSprout.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/CR1502/Smart-Irrigation",
  },
  {
    id: 6,
    title: "MultiMed",
    description: "A combination of multiple Artificial Neural Networks that help to predict 3 types of diseases.",
    image: "/images/projects/Multimed.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/CR1502/MultiMed",
  },
  {
    id: 7,
    title: "DriveSafe",
    description: "Application that would alert drivers if they are drowsy while driving.",
    image: "/images/projects/Drivesafe.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/CR1502/DriveSafe",
  },
  {
    id: 8,
    title: "Occipital",
    description: "Application that detects which language a given text is in.",
    image: "/images/projects/Occipital.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/CR1502/Occipital",
  },
  {
    id: 9,
    title: "SudokuSolver",
    description: "Application that helps you solve your sudoku.",
    image: "/images/projects/sudokusolver.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/CR1502/SudokuSolver",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
