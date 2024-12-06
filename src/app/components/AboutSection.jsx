"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Python</li>
        <li>C++</li>
        <li>React</li>
        <li>TensorFlow(Keras)</li>
        <li>PyTorch</li>
        <li>NumPy</li>
        <li>Pandas</li>
        <li>SciPy</li>
        <li>NLP</li>
        <li>Machine Learning</li>
        <li>Deep Learning</li>
        <li>Data Analysis</li>
      </ul>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li>Data Science Intern at DeepRoot Minds [3 Months]</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Northeastern University - MS in Artificial Intelligence (present)</li>
        <li>VIT Bhopal University - B.Tech in Computer Science and Engineering with specialization in AI and ML (2020-2024)</li>
        <li>St.Josephs Pre-University College (2019-2020)</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Digital Skills: Artificial Intelligence | Accenture</li>
        <li>Python for Everybody | Coursera (University of Michigan)</li>
        <li>Applied Machine Learning in Python | Coursera (University of Michigan)</li>
        <li>AWS Cloud Masterclass - Cloud Practitioner Essentials | FutureSkills Prime</li>
        <li>TensorFlow Developer Professional Certificate | Coursera (DeepLearning.AI)</li>
        <li>Generative Adversarial Networks Specialization | Coursera (DeepLearning.AI)</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          I possess a robust programming skill set with a solid foundation, 
          demonstrating an intermediate proficiency in Python. My expertise 
          extends to Artificial Neural Networks and TensorFlow, and I am 
          actively expanding my knowledge by delving into PyTorch. I am proficient 
          in several essential libraries and tools commonly utilized in 
          Machine Learning and Data Science, including NumPy, Pandas, SciPy, 
          Scikit-Learn, among others. Presently, I am immersing myself further 
          into the realm of Deep Learning, exploring various algorithms and 
          actively contributing to multiple projects within this domain. 
          I am a quick learner and I am always looking to expand my 
          knowledge and skill set. I am a team player and I am excited 
          to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              {" "}
              Experience{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            > 
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
