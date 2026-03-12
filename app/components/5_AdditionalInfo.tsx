import { BEBadges, FEBadges } from "./badges";

export default function AdditionalInfo() {
	return (
		<div className="w-full flex flex-col px-4">
			<h2 className="text-3xl md:text-4xl lg:text-5xl font-pixel mb-2">
				Additonal Informationℹ️
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
									<FEBadges />
								</div>
								<div className="w-full flex flex-col bg-bgblue rounded-md p-2 pb-10">
									<p className="mb-2 font-bold text-bgblueflip">Back-End</p>
									<BEBadges />
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
									<a
										href="https://drive.google.com/file/d/1dUWXe12BGEdFPMB6gSfytTmZn29oMZvu/view?usp=drive_link"
										target="_blank"
										className="text-sm lg:text-base font-bold cursor-default hover:text-blue-500 cursor-pointer underline"
									>
										• RevoU • Full-Stack Software Engineering Bootcamp • 2025(⬆)
									</a>
								</div>
								<div className="w-full flex flex-col bg-bgblue rounded-md p-2 pb-10 text-wrap">
									<p className="font-bold text-bgblueflip">Publication:</p>
									<a
										href="https://ijaseit.insightsociety.org/index.php/ijaseit/article/view/12989/pdf_1653"
										target="_blank"
										className="text-sm lg:text-base font-bold cursor-default hover:text-blue-500 cursor-pointer underline "
									>
										• Telkom University • Analysis of Indoor Air Quality Based
										on Low-Cost Sensor • 2020(⬆)
									</a>
								</div>
								<div className="w-full flex flex-col bg-bgblue rounded-md p-2 pb-10 text-wrap">
									<p className="font-bold text-bgblueflip">Patent:</p>
									<a
										href="https://drive.google.com/file/d/1c1e5m_6C6EXFQIdUktnEuvnTa-atIrk7/view?usp=sharing"
										target="_blank"
										className="text-sm lg:text-base font-bold cursor-default hover:text-blue-500 cursor-pointer underline"
									>
										• DJKI • S00202006865 • 2021(⬆)
									</a>
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
