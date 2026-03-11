export default function WorkExperience() {
	return (
		<div className="w-full grid grid-cols-4 gap-2">
			<div className="w-full col-span-4">
				<div className="w-full flex flex-col items-center gap-4 w-full grid-span-2">
					<div className="w-full flex flex-col gap-2 p-4 ">
						<div className="text-3xl md:text-4xl lg:text-5xl font-pixel">
							Work Experience
						</div>
						{/* <div className="w-1/2 outline-1"></div> */}
						<div className="space-y-0">
							{/* Digital Solutions Engineer */}
							<div className="relative flex gap-x-4">
								{/* The Line and Dot Column */}
								<div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:left-1/2 after:w-px after:-translate-x-1/2 after:bg-black">
									<div className="relative z-10 flex size-3 items-center justify-center mt-2">
										●
									</div>
								</div>
								{/* The Content Column */}
								<div className="pb-8">
									<h3 className="font-bold ">Digital Solutions Engineer</h3>
									<p className="text-sm lg:text-base">
										Yokogawa • Full-time • Apr 2026 - Now
									</p>
									<p className="text-sm lg:text-base mt-2">
										Be the first Indonesia's LIMS Eng. Associate and
										orchestrated the first local Procedural Automation
										implementation at the Jakarta Wastewater Treatment Plant.
									</p>
								</div>
							</div>

							{/* Senior SCADA System Engineer */}
							<div className="relative flex gap-x-4">
								{/* The Line and Dot Column */}
								<div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:left-1/2 after:w-px after:-translate-x-1/2 after:bg-black">
									<div className="relative z-10 flex size-3 items-center justify-center mt-2">
										●
									</div>
								</div>
								{/* The Content Column */}
								<div className="pb-8">
									<h3 className="font-bold">Senior SCADA System Engineer</h3>
									<p className="text-sm lg:text-base">
										Yokogawa • Full-time • Apr 2024 - Apr 2026
									</p>
									<p className="text-sm lg:text-base mt-2">
										Innovate by creating internal tooling which saved
										engineering time from 5 days to 2-5 hours while being the
										mentor for the next generation of engineers.
									</p>
								</div>
							</div>

							{/* Junior SCADA System Engineer */}
							<div className="relative flex gap-x-4">
								{/* The Line and Dot Column */}
								<div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:left-1/2 after:w-px after:-translate-x-1/2 after:bg-black">
									<div className="relative z-10 flex size-3 items-center justify-center mt-2">
										●
									</div>
								</div>
								{/* The Content Column */}
								<div className="pb-8">
									<h3 className="font-bold">Junior SCADA System Engineer</h3>
									<p className="text-sm lg:text-base">
										Yokogawa • Full-time • Feb 2022 - Apr 2024
									</p>
									<p className="text-sm lg:text-base mt-2">
										Rapidly scaled from supporting minor assignments to
										independently executing complex 8-controller industrial
										automation projects under minimum senior guidance.
									</p>
								</div>
							</div>

							{/* Product Development */}
							<div className="relative flex gap-x-4">
								{/* The Line and Dot Column */}
								<div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:left-1/2 after:w-px after:-translate-x-1/2 after:bg-black">
									<div className="relative z-10 flex size-3 items-center justify-center mt-2">
										●
									</div>
								</div>
								{/* The Content Column */}
								<div className="pb-2">
									<h3 className="font-bold">Product Development</h3>
									<p className="text-sm lg:text-base">
										Matra Kreasi • Full-time • Mar 2021 - Feb 2022
									</p>
									<p className="text-sm lg:text-base mt-2">
										Managed the full-cycle development of embedded products,
										from 3D enclosure and PCB design to firmware engineering and
										manufacturing coordination.
									</p>
								</div>
							</div>

							{/* Repeat for next item */}
						</div>
						<div className="font-pixel text-[1.4rem] lg:text-3xl">See more</div>
					</div>
				</div>
			</div>
		</div>
	);
}
