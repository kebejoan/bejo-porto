export default function AboutMe() {
	return (
		<div className="w-full flex flex-col-reverse lg:flex-row gap-2 p-2">
			<div className="w-full lg:w-3/4">
				<div className="w-full flex flex-col items-center gap-4">
					<div className="w-full flex flex-col gap-2 p-2 ">
						<div className="text-3xl md:text-4xl lg:text-5xl font-pixel">
							Hi, my name is Faishal! 👋
						</div>
						<div className="w-full "></div>
						<div className="flex flex-col gap-4">
							<div>
								But people call me <strong>Joe/Bejo</strong>. I'm a{" "}
								<strong>
									SCADA System Engineer turned Full-Stack Developer
								</strong>
								<br />
							</div>
							<div>
								With 4+ years of experience delivering mission-critical
								industrial solutions{" "}
								<strong>(STARDOM Controller, SCADA CI Server)</strong>, I apply
								engineering rigor to{" "}
								<strong>TypeScript, Next.js, and Nest.js.</strong> Recently
								graduated at the top of my Software Engineering bootcamp, and
								built <strong>Python ETL tools</strong> that reduced operational
								workflows by <strong>90%.</strong>
							</div>
							<div>
								I build for stability, scalability, and execution excellence.
							</div>
						</div>
						<div className="w-full flex justify-end">
							<div className="text-blue-700">...tell me more</div>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full lg:w-1/4 flex flex-col justify-center items-center  p-2 lg:p-0">
				<div className="w-48 lg:w-full max-w-sm px-2">
					<img src="/ava.png" alt="me" className="w-full h-auto rounded-xl" />
				</div>
			</div>
		</div>
	);
}
