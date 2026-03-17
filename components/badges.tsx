import MotionWrapper from "./MotionWrapper";

export default function Badge({ text }: { text: string }) {
	return (
		<MotionWrapper type="hover">
			<p className="whitespace-nowrap leading-none text-sm lg:text-base cursor-default default py-1 px-2 h-fit font-google font-bold bg-bgblueflip text-bgblue hover:bg-blue-500 rounded-full">
				{text}
			</p>
		</MotionWrapper>
	);
}
