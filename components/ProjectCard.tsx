"use client";

import { useState } from "react";
import { Project } from "@/data/projects";
import Badge from "./badges";
import ProjectModal from "./ProjectModal";

interface ProjectCardProps {
  data: Project;
}

export default function ProjectCard({ data }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { title, summary, video, techstack, repo, live } = data;

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="w-full flex flex-row gap-2 rounded-md bg-bgblue">
        {/* <<< */}
        {/* <div className="w-1/36">
					<div className="w-full h-full bg-bgblue rounded-md text-center content-center text-4xl font-bold">
						{"<"}
					</div>
				</div> */}
        {/* Content */}
        <div className="grow h-full">
          <div className="w-full flex flex-col ">
            <div className="w-full flex flex-col rounded-md gap-2">
              <div className="relative w-full aspect-[16/7] bg-bgblue rounded-md mb-2 overflow-hidden">
                <video
                  autoPlay
                  muted
                  loop
                  src={video?.[0]?.src || "blank"}
                  className="absolute inset-0 w-full h-full object-cover object-top hover:play"
                />
              </div>
              <div className="w-full flex flex-col gap-2 px-2 lg:px-4 mb-6">
                <div className=" font-bold">{title}</div>
                <div className="">{summary}</div>
                <div className="w-fit flex flex-row flex-wrap gap-2">
                  {techstack.map((tech, index) => (
                    <Badge key={index} text={tech} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* >>> */}
        {/* <div className="hidden lg:flex w-1/36">
					<div className="w-full h-full bg-bgblue rounded-md text-center content-center text-4xl font-bold">
						{">"}
					</div>
				</div> */}
      </div>
      <div className="flex flex-col lg:flex-row w-full gap-2">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-bgblue grow rounded-md hover:bg-bgblueflip hover:text-bgblue cursor-pointer text-center py-1 lg:py-2 font-bold"
        >
          Detail
        </button>
        <a
          href={live}
          target="_blank"
          className="bg-bgblue grow rounded-md hover:bg-bgblueflip hover:text-bgblue cursor-pointer text-center py-1 lg:py-2 font-bold"
        >
          Live
        </a>
        <a
          href={repo}
          target="_blank"
          className="bg-bgblue grow rounded-md hover:bg-bgblueflip hover:text-bgblue cursor-pointer text-center py-1 lg:py-2 font-bold"
        >
          Repo
        </a>
      </div>
      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={data}
      />
    </div>
  );
}
