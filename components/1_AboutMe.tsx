import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MotionWrapper from "./MotionWrapper";

export default function AboutMe() {
	return (
		<div className="w-full flex flex-col-reverse lg:flex-row gap-2 p-2">
			<div className="w-full lg:w-3/4">
				<div className="w-full flex flex-col items-center gap-4">
					<div className="w-full flex flex-col gap-2 p-2 ">
						<MotionWrapper type="spring-in" delay={0.4}>
							<div className="text-3xl md:text-4xl lg:text-5xl font-pixel">
								Hi, my name is Faishal! 👋
							</div>
						</MotionWrapper>
						<div className="w-full "></div>
						<div className="flex flex-col gap-4">
							<div>
								<MotionWrapper type="fade-in" delay={0.8}>
									But people call me{" "}
									<strong className="text-blue-500">Joe/Bejo</strong>. I'm a{" "}
									<strong className="text-blue-500">
										SCADA System Engineer turned Full-Stack Developer
									</strong>
									<br />
								</MotionWrapper>
							</div>
							<MotionWrapper type="fade-in" delay={1.2}>
								<p>
									With 4+ years of experience delivering mission-critical
									industrial solutions{" "}
									<strong className="text-blue-500">
										(STARDOM Controller, SCADA CI Server)
									</strong>
									, I apply engineering rigor to{" "}
									<strong className="text-blue-500">
										TypeScript, Next.js, and Nest.js.
									</strong>{" "}
									Recently graduated at the top of my Software Engineering
									bootcamp, and built{" "}
									<strong className="text-blue-500">Python ETL tools</strong>{" "}
									that reduced operational workflows by{" "}
									<strong className="text-blue-500">90%.</strong>
								</p>
							</MotionWrapper>
							<MotionWrapper type="fade-in" delay={1.6}>
								<div>
									I build for stability, scalability, and execution excellence.
								</div>
							</MotionWrapper>
						</div>
						<MotionWrapper type="fade-in" delay={2}>
							<MotionWrapper type="hover" className="">
								<MotionWrapper type="click" className="">
									<div className="w-full flex justify-end">
										<a
											href="https://docs.google.com/document/d/1We4WcVFcdeyw4pdwz7X7eRV_l82abK9BuYNwxpZJq34/"
											target="_blank"
											className="w-fit bg-bgblue grow rounded-md hover:bg-bgblueflip hover:text-bgblue cursor-pointer text-center py-1 lg:py-2 font-bold"
										>
											my résumé{"  "}
											<FontAwesomeIcon
												className="text-base"
												icon={faArrowUpRightFromSquare}
											/>
										</a>
									</div>
								</MotionWrapper>
							</MotionWrapper>
						</MotionWrapper>
					</div>
				</div>
			</div>
			<div className="w-full lg:w-1/4 flex flex-col justify-center items-center  p-2 lg:p-0">
				<MotionWrapper type="fade-in" delay={0.6}>
					<div className="w-48 lg:w-full max-w-sm pt-6 bg-bgblue rounded-full ">
						<img src="/ava.png" alt="me" className="w-full h-auto" />
					</div>
				</MotionWrapper>
			</div>
		</div>
	);
}
