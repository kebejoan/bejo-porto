export default function AdditionalInfo() {
	return (
		<div className="w-full flex flex-col px-4">
			<h2 className="text-3xl md:text-4xl lg:text-5xl font-pixel mb-2">
				Additonal Information
			</h2>
			<div className="w-full flex gap-2">
				{/* Content */}
				<div className="grow">
					<div className="w-full flex flex-col gap-4">
						<div className="w-full flex flex-col rounded-md gap-2">
							<div className="grow font-pixel text-[1.4rem] lg:text-3xl">
								• My Tech Stack
							</div>
							<div className="flex flex-col lg:flex-row gap-2 ">
								<div className="w-full flex flex-col bg-bgblue rounded-md p-2 pb-10">
									<p className="mb-2 font-bold text-bgblueflip">Front-End</p>
									<div className="w-full flex flex-wrap gap-4 leading-none">
										<p className="text-sm lg:text-base cursor-default default px-2 py-1 font-google font-bold bg-bgblueflip text-bgblue hover:bg-blue-500 rounded-full">
											Next.js
										</p>
										<p className="text-sm lg:text-base cursor-default default px-2 py-1 font-google font-bold bg-bgblueflip text-bgblue hover:bg-blue-500 rounded-full">
											React
										</p>
										<p className="text-sm lg:text-base cursor-default default px-2 py-1 font-google font-bold bg-bgblueflip text-bgblue hover:bg-blue-500 rounded-full">
											Typescript
										</p>
										<p className="text-sm lg:text-base cursor-default default px-2 py-1 font-google font-bold bg-bgblueflip text-bgblue hover:bg-blue-500 rounded-full">
											Javascript
										</p>
										<p className="text-sm lg:text-base cursor-default default px-2 py-1 font-google font-bold bg-bgblueflip text-bgblue hover:bg-blue-500 rounded-full">
											Tailwind
										</p>
										<p className="text-sm lg:text-base cursor-default default px-2 py-1 font-google font-bold bg-bgblueflip text-bgblue hover:bg-blue-500 rounded-full">
											HTML5
										</p>
										<p className="text-sm lg:text-base cursor-default default px-2 py-1 font-google font-bold bg-bgblueflip text-bgblue hover:bg-blue-500 rounded-full">
											CSS
										</p>
									</div>
								</div>
								<div className="w-full flex flex-col bg-bgblue rounded-md p-2 pb-10">
									<p className="mb-2 font-bold text-bgblueflip">Back-End</p>
									<div className="w-full flex flex-wrap gap-4 leading-none">
										<p className="text-sm lg:text-base cursor-default default px-2 py-1 font-google font-bold bg-bgblueflip text-bgblue hover:bg-blue-500 rounded-full">
											Nest.js
										</p>
										<p className="text-sm lg:text-base cursor-default default px-2 py-1 font-google font-bold bg-bgblueflip text-bgblue hover:bg-blue-500 rounded-full">
											PrismaORM
										</p>
										<p className="text-sm lg:text-base cursor-default default px-2 py-1 font-google font-bold bg-bgblueflip text-bgblue hover:bg-blue-500 rounded-full">
											Typescript
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="w-full flex flex-col rounded-md gap-2">
							<div className="grow font-pixel text-[1.4rem] lg:text-3xl">
								• Others
							</div>
							<div className="flex flex-col lg:flex-row gap-2 ">
								<div className="w-full flex flex-col bg-bgblue rounded-md p-2 pb-10 text-wrap">
									<p className="font-bold text-bgblueflip">Certificate:</p>
									<p className="text-sm lg:text-base font-bold cursor-default hover:text-blue-500 cursor-pointer">
										• RevoU • Full-Stack Software Engineering Bootcamp • 2025(⬆)
									</p>
								</div>
								<div className="w-full flex flex-col bg-bgblue rounded-md p-2 pb-10 text-wrap">
									<p className="font-bold text-bgblueflip">Publication:</p>
									<p className="text-sm lg:text-base font-bold cursor-default hover:text-blue-500 cursor-pointer">
										• Telkom University • Analysis of Indoor Air Quality Based
										on Low-Cost Sensor • 2020(⬆)
									</p>
								</div>
								<div className="w-full flex flex-col bg-bgblue rounded-md p-2 pb-10 text-wrap">
									<p className="font-bold text-bgblueflip">Patent:</p>
									<p className="text-sm lg:text-base font-bold cursor-default hover:text-blue-500 cursor-pointer">
										• DJKI • S00202006865 • 2021(⬆)
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <div className="w-full flex justify-end">
				<p className="w-fit  font-pixel text-[1.4rem] lg:text-3xl hover:cursor-pointer hover:text-bgblue">
					...see all projects
				</p>
			</div> */}
		</div>
	);
}
