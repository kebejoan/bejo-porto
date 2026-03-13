export default function ProjectExperience() {
	return (
		<div className="w-full flex flex-col px-4">
			<h2 className="text-3xl md:text-4xl lg:text-5xl font-pixel">
				Project Experience👷🏻
			</h2>
			<div className="w-full flex gap-2">
				{/* <<< */}
				<div className="hidden w-1/36">
					<div className="w-full h-full bg-bgblue rounded-md text-center content-center text-4xl font-bold">
						{"<"}
					</div>
				</div>
				{/* Content */}
				<div className="grow">
					<div className="w-full flex flex-col">
						<div className="w-full flex flex-col rounded-md gap-2">
							<div className="w-full bg-bgblue h-[400] rounded-md mb-2">
								picture placeholder
							</div>
							<div className="grow bg-bgblue rounded-md">Title</div>
							<div className="grow flex flex-col lg:flex-row gap-2">
								<div className="w-full bg-bgblue rounded-md">Description</div>
								<div className="w-full bg-bgblue rounded-md">Tech-Stack</div>
							</div>
						</div>
					</div>
				</div>
				{/* >>> */}
				<div className="hidden lg:flex w-1/36">
					<div className="w-full h-full bg-bgblue rounded-md text-center content-center text-4xl font-bold">
						{">"}
					</div>
				</div>
			</div>
			<div className="w-full flex justify-end">
				<p className="w-fit  font-pixel text-[1.4rem] lg:text-3xl hover:cursor-pointer hover:text-bgblue">
					...see all projects
				</p>
			</div>
		</div>
	);
}
