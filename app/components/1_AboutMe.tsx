export default function AboutMe() {
  return (
    <div className="w-full flex flex-col-reverse lg:flex-row gap-2">
      <div className="w-full lg:w-3/4">
        <div className="w-full flex flex-col items-center gap-4 outline-1">
          <div className="w-full flex flex-col gap-2 p-2 outline-2">
            <div className="text-3xl md:text-4xl lg:text-5xl font-pixel">
              Hey there, My name is Faishal! 👋
            </div>
            <div className="w-full outline-1"></div>
            <div className="">
              People usually calls me <strong>Joe/Bejo</strong>. I am a{" "}
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
            <div className="w-full flex justify-end">
              <div className="text-blue-700">...tell me more</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/4 flex flex-col justify-center items-center outline-2 p-2 lg:p-0">
        <div className="w-48 lg:w-full max-w-sm px-2">
          <img src="/ava.png" alt="me" className="w-full h-auto rounded-xl" />
        </div>
      </div>
    </div>
  );
}
