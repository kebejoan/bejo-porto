import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareWhatsapp,
  faLinkedin,
  faSquareGithub,
  faSquareInstagram,
  faSquareThreads,
} from "@fortawesome/free-brands-svg-icons";
import { faSquareEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function ContactSocials() {
  return (
    <div className="w-full flex flex-col items-center px-4">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-pixel mb-2">
        Contact and Socials☎️
      </h2>
      <p className="font-bold mb-8 text-wrap text-center text-bgblueflip">
        Hey, you can reach out to me through these means:
      </p>
      <div className="w-full flex flex-row flex-wrap gap-4 leading-none justify-center font-bold">
        {/* This definitely can be a component */}
        <a
          href="mailto:jmailed.joe@gmail.com"
          className="bg-bgblue w-fit rounded-xl hover:bg-bgblueflip hover:text-bgblue cursor-pointer flex flex-row items-center justify-between gap-2 pr-4"
        >
          <div className="w-[3rem] h-[3rem] md:w-[3.6rem] md:h-[3.6rem] lg:w-[4rem] lg:h-[4rem] rounded-xl content-center text-center">
            <FontAwesomeIcon
              icon={faSquareEnvelope}
              className="text-[2.5rem] lg:text-[3rem]"
            />
          </div>
          <p>Email</p>
        </a>
        <a
          href="https://wa.me/628561511419"
          target="_blank"
          className="bg-bgblue w-fit rounded-xl hover:bg-bgblueflip hover:text-bgblue cursor-pointer flex flex-row items-center justify-between gap-2 pr-4"
        >
          <div className="w-[3rem] h-[3rem] md:w-[3.6rem] md:h-[3.6rem] lg:w-[4rem] lg:h-[4rem] rounded-xl content-center text-center">
            <FontAwesomeIcon
              icon={faSquareWhatsapp}
              className="text-[2.5rem] lg:text-[3rem]"
            />
          </div>
          <p>WhatsApp</p>
        </a>
        {/* <div className="bg-bgblue w-fit rounded-xl hover:bg-bgblueflip hover:text-bgblue cursor-pointer flex flex-row items-center justify-between gap-2 pr-4">
					<div className="w-[3rem] h-[3rem] md:w-[3.6rem] md:h-[3.6rem] lg:w-[4rem] lg:h-[4rem] rounded-xl content-center text-center">
						pict
					</div>
					<p>Facebook</p>
				</div> */}
        <a
          href="https://www.linkedin.com/in/faishal-bejo/"
          target="_blank"
          className="bg-bgblue w-fit rounded-xl hover:bg-bgblueflip hover:text-bgblue cursor-pointer flex flex-row items-center justify-between gap-2 pr-4"
        >
          <div className="w-[3rem] h-[3rem] md:w-[3.6rem] md:h-[3.6rem] lg:w-[4rem] lg:h-[4rem] rounded-xl content-center text-center">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-[2.5rem] lg:text-[3rem]"
            />
          </div>
          <p>LinkedIn</p>
        </a>
        <a
          href="https://github.com/kebejoan"
          target="_blank"
          className="bg-bgblue w-fit rounded-xl hover:bg-bgblueflip hover:text-bgblue cursor-pointer flex flex-row items-center justify-between gap-2 pr-4"
        >
          <div className="w-[3rem] h-[3rem] md:w-[3.6rem] md:h-[3.6rem] lg:w-[4rem] lg:h-[4rem] rounded-xl content-center text-center">
            <FontAwesomeIcon
              icon={faSquareGithub}
              className="text-[2.5rem] lg:text-[3rem]"
            />
          </div>
          <p>Github</p>
        </a>
        <a
          href="https://www.instagram.com/kebejoan/"
          target="_blank"
          className="bg-bgblue w-fit rounded-xl hover:bg-bgblueflip hover:text-bgblue cursor-pointer flex flex-row items-center justify-between gap-2 pr-4"
        >
          <div className="w-[3rem] h-[3rem] md:w-[3.6rem] md:h-[3.6rem] lg:w-[4rem] lg:h-[4rem] rounded-xl content-center text-center">
            <FontAwesomeIcon
              icon={faSquareInstagram}
              className="text-[2.5rem] lg:text-[3rem]"
            />
          </div>
          <p>Instagram</p>
        </a>
        <a
          href="https://threads.com/@kebejoan"
          target="_blank"
          className="bg-bgblue w-fit rounded-xl hover:bg-bgblueflip hover:text-bgblue cursor-pointer flex flex-row items-center justify-between gap-2 pr-4"
        >
          <div className="w-[3rem] h-[3rem] md:w-[3.6rem] md:h-[3.6rem] lg:w-[4rem] lg:h-[4rem] rounded-xl content-center text-center">
            <FontAwesomeIcon
              icon={faSquareThreads}
              className="text-[2.5rem] lg:text-[3rem]"
            />
          </div>
          <p>Threads</p>
        </a>
      </div>
    </div>
  );
}
