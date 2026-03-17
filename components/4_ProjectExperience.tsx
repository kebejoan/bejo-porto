"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";
import MotionWrapper from "./MotionWrapper";

export default function ProjectExperience() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const project = projects[currentIndex];

	const handleNext = () => {
		setCurrentIndex((prev) => (prev + 1) % projects.length);
	};

	const handlePrev = () => {
		setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
	};

	return (
		<div className="w-full flex flex-col px-4">
			<MotionWrapper type="spring-in" delay={0.4}>
				<h2 className="text-3xl md:text-4xl lg:text-5xl font-pixel mb-2">
					Project Experience👷🏻
				</h2>
			</MotionWrapper>
			<MotionWrapper type="fade-in" delay={0.8}>
				<div className="w-full flex flex-row gap-2 mb-2">
					<ProjectCard data={project} />
				</div>
			</MotionWrapper>
			<div className="w-full flex justify-between">
				<MotionWrapper type="fade-in" delay={1}>
					<div className="w-fit flex gap-5 ">
						<button
							onClick={handlePrev}
							disabled={currentIndex === 0}
							className={`w-fit font-pixel text-[1.4rem] lg:text-3xl transition-colors
              ${
								currentIndex === 0
									? "opacity-30 cursor-not-allowed"
									: "hover:cursor-pointer hover:text-bgblue"
							}`}
						>
							prev
						</button>
						<button
							onClick={handleNext}
							disabled={currentIndex === projects.length - 1}
							className={`w-fit font-pixel text-[1.4rem] lg:text-3xl transition-colors
              ${
								currentIndex === projects.length - 1
									? "opacity-30 cursor-not-allowed"
									: "hover:cursor-pointer hover:text-bgblue"
							}`}
						>
							next
						</button>
					</div>
				</MotionWrapper>
				{/* <p className="w-fit  font-pixel text-[1.4rem] lg:text-3xl hover:cursor-pointer hover:text-bgblue">
          ...see all projects
          </p> */}
			</div>
		</div>
	);
}
