import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Badge from "./badges";
import { FEStack, BEStack, IAStack } from "@/data/techstack";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

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
								<div className="w-full flex flex-col bg-bgblue rounded-md p-2 pb-5">
									<p className="mb-2 font-bold text-bgblueflip">
										Industrial Automation
									</p>
									<div className="w-full flex flex-wrap gap-2">
										{IAStack.map((stack) => (
											<Badge text={stack} key={stack} />
										))}
									</div>
								</div>
								<div className="w-full flex flex-col bg-bgblue rounded-md p-2 pb-5">
									<p className="mb-2 font-bold text-bgblueflip">Front-End</p>
									<div className="w-full flex flex-wrap gap-2">
										{FEStack.map((stack) => (
											<Badge text={stack} key={stack} />
										))}
									</div>
								</div>
								<div className="w-full flex flex-col bg-bgblue rounded-md p-2 pb-5">
									<p className="mb-2 font-bold text-bgblueflip">Back-End</p>
									<div className="w-full flex flex-wrap gap-2">
										{BEStack.map((stack) => (
											<Badge text={stack} key={stack} />
										))}
									</div>
								</div>
							</div>
						</div>
						<div className="w-full flex flex-col rounded-md gap-2">
							<div className="grow font-pixel text-[1.4rem] lg:text-3xl">
								• Others
							</div>
							<div className="flex flex-col lg:flex-row gap-2 ">
								<div className="w-full flex flex-col bg-bgblue rounded-md p-2 pb-5 text-wrap">
									<p className="font-bold text-bgblueflip">
										Supplementary Links:
									</p>
									<a
										href="https://drive.google.com/file/d/1dUWXe12BGEdFPMB6gSfytTmZn29oMZvu/view?usp=drive_link"
										target="_blank"
										className="flex gap-1 text-sm lg:text-base font-bold cursor-default hover:text-blue-500 cursor-pointer underline"
									>
										• Certificate • Software Eng. RevoU • 2025
										<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
									</a>

									<a
										href="https://ijaseit.insightsociety.org/index.php/ijaseit/article/view/12989/pdf_1653"
										target="_blank"
										className="text-sm lg:text-base font-bold cursor-default hover:text-blue-500 cursor-pointer underline "
									>
										• Publication • Analysis of Indoor Air Quality Based on
										Low-Cost Sensor • 2020
										<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
									</a>
									<a
										href="https://drive.google.com/file/d/1c1e5m_6C6EXFQIdUktnEuvnTa-atIrk7/view?usp=sharing"
										target="_blank"
										className="text-sm lg:text-base font-bold cursor-default hover:text-blue-500 cursor-pointer underline"
									>
										• Patent • DJKI • S00202006865 • 2021
										<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
									</a>
								</div>
							</div>
							<div className="w-full flex flex-col bg-bgblue rounded-md p-2 pb-5 text-wrap">
								<p className="font-bold text-bgblueflip">Soft Skills:</p>
								<p className="text-sm lg:text-base font-bold ">
									• Critical Thinking
								</p>
								<p className="text-sm lg:text-base font-bold ">
									• High Attention to Detail
								</p>
								<p className="text-sm lg:text-base font-bold ">
									• High Attention to Detail
								</p>
								<p className="text-sm lg:text-base font-bold ">
									• Cross Disciplinary Collaboration
								</p>
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
