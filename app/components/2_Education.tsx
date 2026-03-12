export default function Education() {
	return (
		<div className="w-full grid grid-cols-4 gap-2">
			<div className="w-full col-span-4">
				<div className="w-full flex flex-col items-center gap-4  grid-span-2">
					<div className="w-full flex flex-col gap-4 px-4 ">
						<div className="text-3xl md:text-4xl lg:text-5xl font-pixel">
							Education
						</div>
						{/* <div className="w-full outline-1"></div> */}
						{/* Revou */}
						<div className="w-full flex flex-col bg-bgblue rounded-md gap-1 p-2">
							<div className="w-full flex flex-col">
								<div className="flex gap-2 items-center">
									<div className="font-bold">RevoU</div>
									<p className="w-fit h-fit text-[0.7rem] lg:text-sm cursor-default default px-2 font-google font-bold bg-bgblueflip text-bgblue rounded-full">
										Exemplary
									</p>
								</div>
								<div className="text-sm lg:text-base mb-2  text-blue-500 font-bold">
									Full-Stack Software Engineering • Feb 2025 - Aug 2025
								</div>
							</div>
							<div className="text-sm lg:text-base mb-2">
								Intensive engineering of type-safe, end-to-end applications
								using TypeScript, Nest.js, Next.js and PrismaORM.
								<br />
								<strong>Final Projects</strong>: ENG-Tracker (Next.js, Tailwind,
								ShadCN, NestJS, PrismaORM and PostgreSQL)
							</div>
						</div>
						{/* TelU */}
						<div className="w-full flex flex-col bg-bgblue rounded-md p-2">
							<div className="w-full flex flex-col">
								<div className="flex gap-2 items-center">
									<div className="font-bold">Telkom University</div>
									<p className="w-fit h-fit text-[0.7rem] lg:text-sm cursor-default default px-2 font-google font-bold bg-bgblueflip text-bgblue rounded-full">
										Cum Laude
									</p>
								</div>
								<div className="text-sm lg:text-base mb-2 text-blue-500 font-bold">
									Bachelor's of Engineering Physics • Aug 2016 - Mar 2020
								</div>
							</div>
							<div className="text-sm lg:text-base mb-2">
								<strong>GPA </strong>: 3.72/4.00 <br />
								<strong>Publication</strong>: “Analysis of Indoor Air Quality
								Based on Low-Cost Sensor”
								<br />
								<strong>Patent</strong>: DJKI - S00202006865
							</div>
						</div>
						{/* <div className="w-full grid grid-cols-6 gap-2">
							<div className="w-full outline-2 col-span-3 font-bold">RevoU</div>
							<div className="w-full outline-2 col-span-3 text-end font-bold">
								Feb 2025 - Aug 2025
							</div>
							<div className="w-full outline-2 col-span-6 italic">
								Full-Stack Software Engineering
							</div>
							<div className="w-full outline-2 col-span-6">
								Intensive engineering of type-safe, end-to-end applications
								using TypeScript, Nest.js, and PostgreSQL.
								<br />
								<strong>Final Projects</strong>: ENG-Tracker (Next.js, Tailwind,
								ShadCN, NestJS, PrismaORM PostgreSQL)
							</div>
						</div>
						<div className="w-full grid grid-cols-6 gap-2">
							<div className="w-full outline-2 col-span-3 font-bold">
								Telkom University
							</div>
							<div className="w-full outline-2 col-span-3 text-end font-bold">
								Aug 2016 - Mar 2020
							</div>
							<div className="w-full outline-2 col-span-6 italic">
								Bachelor’s of Physics Engineering
							</div>
							<div className="w-full outline-2 col-span-6">
								<strong>GPA </strong>: 3.72/4.00 <br />
								<strong>Publication</strong>: “Analysis of Indoor Air Quality
								Based on Low-Cost Sensor”
								<br />
								<strong>Patent</strong>: DJKI - S00202006865
							</div>
						</div> */}
					</div>
				</div>
			</div>
		</div>
	);
}
