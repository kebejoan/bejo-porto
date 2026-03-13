export default function ProjectCard() {
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
									src="/Tokopaedi_vid.webm"
									className="absolute inset-0 w-full h-full object-cover object-top hover:play"
								/>
							</div>
							<div className="w-full flex flex-col gap-2 px-2 lg:px-4 mb-6">
								<div className="rounded-md font-bold">Tokopaedi</div>
								<div className="rounded-md">
									A high-fidelity Tokopedia clone built with Next.js and
									TypeScript, showcasing a complex, production-level e-commerce
									interface. 🛍️
								</div>
								<div className="rounded-md">Tech-Stack</div>
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
				<div className="bg-bgblue grow rounded-md hover:bg-bgblueflip hover:text-bgblue cursor-pointer text-center py-1 lg:py-2 font-bold">
					Detail
				</div>
				<div className="bg-bgblue grow rounded-md hover:bg-bgblueflip hover:text-bgblue cursor-pointer text-center py-1 lg:py-2 font-bold">
					Live
				</div>
				<div className="bg-bgblue grow rounded-md hover:bg-bgblueflip hover:text-bgblue cursor-pointer text-center py-1 lg:py-2 font-bold">
					Repo
				</div>
			</div>
		</div>
	);
}
