import AboutMe from "./1_AboutMe";

export default function GroundHero() {
	return (
		<div className="relative w-full h-screen ">
			<div className="flex flex-col justify-end items-center w-full h-full">
				<img
					src="/Ground.png"
					alt="RancaUpas"
					className="w-full h-auto opacity-100 block z-0"
				/>
			</div>
			<div className="absolute bottom-0 w-full flex justify-center">
				<img
					src="/Hero.png"
					alt="Bejoy"
					className="w-auto h-[250px] md:h-[320px] lg:h-[400px] opacity-100 block z-0"
				/>
			</div>
			<div className="absolute top-45 w-full flex flex-col justify-center items-center gap-4">
				<div className="w-full lg:w-[1024]  flex flex-col justify-center items-center text-[4rem] md:text-[6rem] lg:text-[8rem] text-wrap font-pixel">
					<div>Faishal Tahsiin</div>
				</div>
				<div className="w-full lg:w-[1024]  flex flex-col justify-center items-center text-xl md:text-2xl lg:text-3xl font-bold text-wrap text-center">
					<div>
						SCADA System Engineer | Industrial Automation | Full-Stack Developer
					</div>
				</div>
			</div>
			<div className="absolute bottom-20 w-full flex flex-col justify-center items-center gap-4">
				<div className="w-full lg:w-[1024] flex flex-col justify-center items-center text-3xl md:text-4xl lg:text-5xl font-pixel">
					<div className="bg-blue-100 px-2">↑ The only way is up! ↑</div>
				</div>
			</div>
		</div>
	);
}
