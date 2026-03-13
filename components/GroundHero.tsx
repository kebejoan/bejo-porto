import AboutMe from "./1_AboutMe";
import { AllBadges, BEBadges, FEBadges } from "./badges";

export default function GroundHero() {
	return (
		<div className="relative w-full h-screen">
			<div className="flex flex-col justify-end items-center w-full h-full">
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
			</div>
			<div className="absolute bottom-0 w-full flex justify-center">
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
					<div className="left-20 w-full lg:w-[768] flex items-center justify-center translate-x--10 overflow-hidden px-2">
						<div className="-ml-1">
							<AllBadges />
						</div>
					</div>
				</div>
			</div>
			<div className="absolute bottom-20 w-full flex flex-col justify-center items-center gap-4  overflow-hidden">
				<div className="w-full lg:w-[1024] flex flex-col justify-center items-center text-3xl md:text-4xl lg:text-5xl font-pixel">
					<p className="flex lg:hidden bg-background px-2 rounded-2xl">
						Swipe down, take the tour!
					</p>
					<p className="hidden lg:flex bg-background px-2 rounded-2xl">
						Scroll up, take the tour!
					</p>
				</div>
				<div className="font-bold flex flex-row text-3xl text-red-500 bg-black">
					<div>{"🚧 UNDERCONSTRUCTION 🚧"}</div>
				</div>
			</div>
		</div>
	);
}
