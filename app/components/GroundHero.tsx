import AboutMe from "./1_AboutMe";

export default function GroundHero() {
	return (
		<div className="relative w-full h-screen ">
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
			<div className="absolute top-45 w-full flex flex-col justify-center items-center gap-4">
				<div className="w-full lg:w-[1024]  flex flex-col justify-center items-center text-[4rem] md:text-[6rem] lg:text-[8rem] text-wrap font-pixel">
					<div>Faishal Tahsiin</div>
				</div>
				<div className="w-full lg:w-[1024]  flex flex-col justify-center items-center text-xl md:text-2xl lg:text-3xl font-bold text-wrap text-center">
					<div>
						SCADA System Engineer • Industrial Automation • Full-Stack Developer
					</div>
				</div>
			</div>
			<div className="absolute bottom-20 w-full flex flex-col justify-center items-center gap-4">
				<div className="w-full lg:w-[1024] flex flex-col justify-center items-center text-3xl md:text-4xl lg:text-5xl font-pixel">
					<p className="flex lg:hidden bg-background px-2 rounded-2xl">
						Swipe down, take the tour!
					</p>
					<p className="hidden lg:flex bg-background px-2 rounded-2xl">
						Scroll up, take the tour!
					</p>
				</div>
			</div>
		</div>
	);
}
