export default function Education() {
  return (
    <div className="w-full grid grid-cols-4 gap-2">
      <div className="w-full col-span-4">
        <div className="w-full flex flex-col items-center gap-4 outline-1 grid-span-2">
          <div className="w-full flex flex-col gap-4 p-4 outline-2">
            <div className="text-3xl md:text-4xl lg:text-5xl font-pixel">
              Education
            </div>
            <div className="w-full outline-1"></div>
            <div className="w-full grid grid-cols-6 gap-2">
              <div className="w-full outline-2 row-span-3 text-center content-center">
                Picture
              </div>
              <div className="w-full outline-2 col-span-3 font-bold">RevoU</div>
              <div className="w-full outline-2 col-span-2 text-end font-bold">
                Feb 2025 - Aug 2025
              </div>
              <div className="w-full outline-2 col-span-5 italic">
                Full-Stack Software Engineering
              </div>
              <div className="w-full outline-2 col-span-5">
                Mastered full-stack development through an intensive program,
                engineering end-to-end applications with TypeScript, Next.js,
                and Nest.js while architecting type-safe databases using
                PostgreSQL, Prisma ORM, and Supabase
              </div>
            </div>
            <div className="w-full grid grid-cols-6 gap-2">
              <div className="w-full outline-2 row-span-3 text-center content-center">
                Picture
              </div>
              <div className="w-full outline-2 col-span-3 font-bold">
                Telkom University
              </div>
              <div className="w-full outline-2 col-span-2 text-end font-bold">
                Aug 2016 - March 2020
              </div>
              <div className="w-full outline-2 col-span-5 italic">
                Bachelor’s of Physics Engineering
              </div>
              <div className="w-full outline-2 col-span-5">
                <strong>GPA </strong>: 3.72/4.00 <br />
                <strong>Final Project</strong>: “Alat Pemantau Kualitas Udara
                Dalam Ruang Berbasis Internet of Things” <br />
                <strong>Publication</strong>: “Analysis of Indoor Air Quality
                Based on Low-Cost Sensor”
                <br />
                <strong>Patent</strong>: DJKI - S00202006865
              </div>
            </div>
            {/* <div className="w-full flex justify-end">...more</div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
