import AboutMe from "./1_AboutMe";

export default function GroundHero() {
	return (
		<div className="relative w-full h-screen">
			<div className="flex flex-col justify-end items-center w-full h-full">
				<img
					src="/me.png"
					alt="Bejoy.png"
					className="w-full h-auto opacity-50 block z-0"
				/>
			</div>
			<div className="absolute flex flex-col items-center justify-start lg:justify-center top-0 w-screen h-screen">
				<div className="w-full lg:w-1/2">
					<AboutMe />
				</div>
			</div>
		</div>
	);
}
