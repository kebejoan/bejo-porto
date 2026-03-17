import { AllStack } from "@/data/techstack";
import MotionWrapper from "./MotionWrapper";
import TechTicker from "./TechTicker";
import { useRef } from "react";

interface GroundHeroProps {
	onNavigate: (id: string) => void;
}

export default function GroundHero({ onNavigate }: GroundHeroProps) {
	const scrollContainerRef = useRef<HTMLDivElement>(null);

	return (
		<div className="relative w-full h-screen">
			<div className="flex flex-col justify-end items-center w-full h-full">
				<MotionWrapper type="fade-in" delay={0.6} className="w-full">
					<img
						src="/Ground.png"
						alt="RancaUpas"
						className="w-full h-auto opacity-100 block dark:hidden z-0"
					/>
					<img
						src="/Ground_Night.png"
						alt="RancaUpas"
						className="w-full h-auto opacity-100 hidden dark:block z-0"
					/>
				</MotionWrapper>
			</div>
			<div className="absolute bottom-0 w-full flex justify-center">
				<MotionWrapper type="fade-in" delay={1}>
					<img
						src="/Hero.png"
						alt="Bejoy"
						className="w-auto h-[250px] md:h-[320px] lg:h-[400px] opacity-100 block dark:hidden z-0"
					/>
					<img
						src="/Hero_Torch.png"
						alt="Bejoy"
						className="w-auto h-[250px] md:h-[320px] lg:h-[400px] opacity-100 hidden dark:block z-0"
					/>
				</MotionWrapper>
			</div>
			<div className="absolute top-55 w-full flex flex-col justify-center items-center">
				<div className="w-full leading-none lg:w-[1024]  flex flex-col justify-center items-center text-[4rem] text-center text-wrap md:text-[6rem] lg:text-[8rem] text-wrap font-pixel">
					<div>Faishal Tahsiin</div>
				</div>
				<div className="w-full leading-none lg:w-[1024]  flex flex-col justify-center items-center text-[1.4rem] text-center text-wrap md:text-4xl lg:text-5xl text-wrap font-pixel mb-6 text-bgblueflip">
					<div>"Industrial Grade Modern Web Application"</div>
				</div>
				<div className="w-full lg:w-[1024]  flex flex-col justify-center items-center text-xl md:text-2xl lg:text-3xl font-bold text-wrap text-center gap-4">
					<div>
						SCADA System Engineer • Industrial Automation • Full-Stack Developer
					</div>
					<div className="left-20 w-full md:w-[768] flex items-center px-2">
						<div className="w-full overflow-x-auto no-scrollbar scroll-smooth">
							<div className="w-full flex flex-nowrap gap-2 pb-2 ">
								<TechTicker items={AllStack} />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="absolute bottom-20 w-full flex flex-col justify-center items-center gap-4  overflow-hidden">
				<div className="w-full lg:w-[1024] flex flex-col justify-center items-center text-3xl md:text-4xl lg:text-5xl font-pixel">
					<MotionWrapper type="spring-in" delay={1.4}>
						<MotionWrapper type="click">
							<button
								onClick={() => onNavigate("about")}
								className="flex xl:hidden bg-background px-2 rounded-2xl"
							>
								Swipe down, take a tour!
							</button>
							<a
								href="#about"
								className="hidden xl:flex bg-background px-2 rounded-2xl"
							>
								Scroll up, take a tour!
							</a>
						</MotionWrapper>
					</MotionWrapper>
				</div>
				{/* <div className="font-bold flex flex-row text-lg md:text-xl lg:text-3xl text-red-500 bg-black">
					<div>{"🚧 UNDERCONSTRUCTION 🚧"}</div>
				</div> */}
			</div>
		</div>
	);
}
