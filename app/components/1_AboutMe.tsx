export default function AboutMe() {
	return (
		<div className="w-full lg:flex gap-2">
			<div className="w-3/4">
				<div className="w-full flex flex-col items-center gap-4 outline-1">
					<div className="w-full flex flex-col gap-4 p-4 outline-2">
						<div className="text-5xl font-bold font-pixel">
							Hey there, My name is Faishal! 👋
						</div>
						<div className="w-full outline-1"></div>
						<div className="text-[18px] text-justify">
							People usually calls me <strong>Joe/Bejo</strong>. I am an{" "}
							<strong>SCADA System Engineer and a Full-Stack Developer.</strong>
							<br />
							{/* dedicated to architecting reliable, high-performance systems
							through data-driven and well-reasoned technical decisions.  */}
							With over four years of experience delivering mission-critical
							industrial solutions using{" "}
							<strong>
								STARDOM Controller, VDS HMI, SCADA CI Server, and 3rd Party HMI
								Touch Panel
							</strong>
							, I bring a disciplined engineering rigor to modern web ecosystems
							like <strong>TypeScript, Next.js, and Nest.js.</strong> Graduated
							at the top of my Full-Stack Software Engineering bootcamp, I have
							proven a rapid ability to build scalable software, including
							developing custom <strong>Python ETL tools</strong> that reduced
							operational workflows by <strong>90%.</strong>
							<br /> I am excited to leverage this system-driven mindset to
							develop applications that prioritize stability and execution
							excellence.
						</div>
					</div>
				</div>
			</div>
			<div className="w-1/4 flex flex-col justify-center outline-2">
				<div className="w-full">
					<img src="/ava.png" alt="me" className="w-full" />
				</div>
			</div>
		</div>
	);
}
