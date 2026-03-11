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
							{/* Timeline Item */}
							<div className="relative flex gap-x-4">
								{/* The Line and Dot Column */}
								<div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:left-1/2 after:w-px after:-translate-x-1/2 after:bg-black">
									<div className="relative z-10 flex size-3 items-center justify-center mt-2">
										●
									</div>
								</div>

								{/* The Content Column */}
								<div className="pb-8">
									<h3 className="font-bold ">Software Engineer</h3>
									<p className="text-sm lg:text-base">Tech Corp • Full-time</p>
									<p className="mt-2">
										Built some cool stuff with React and Tailwind.
									</p>
								</div>
							</div>

							{/* Repeat for next item */}
							<div className="relative flex gap-x-4">
								<div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:left-1/2 after:w-px after:-translate-x-1/2 after:bg-black">
									<div className="relative z-10 flex size-3 items-center justify-center mt-2">
										●
									</div>
								</div>
								<div className="pb-8">
									<h3 className="font-bold">Junior Developer</h3>
									<p className="text-sm lg:text-base">Tech Corp • Full-time</p>
									<p className="mt-2">
										Built some cool stuff with React and Tailwind. lorem50
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
