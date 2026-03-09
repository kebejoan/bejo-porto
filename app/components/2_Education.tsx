export default function Education() {
	return (
		<div className="w-full grid grid-cols-4 gap-2">
			<div className="w-full col-span-4">
				<div className="w-full flex flex-col items-center gap-4 w-full outline-1 grid-span-2">
					<div className="w-full flex flex-col gap-2 p-4 outline-2">
						<div className="text-4xl font-bold">Education</div>
						<div className="w-full outline-1"></div>
						<div className="w-full grid grid-cols-6 gap-2">
							<div className="w-full outline-2 row-span-3">Picture</div>
							<div className="w-full outline-2 col-span-3">Faculty</div>
							<div className="w-full outline-2 col-span-2">Time</div>
							<div className="w-full outline-2 col-span-5">Major</div>
							<div className="w-full outline-2 col-span-5">Content</div>
						</div>
						<div className="w-full grid grid-cols-6 gap-2">
							<div className="w-full outline-2 row-span-3">Picture</div>
							<div className="w-full outline-2 col-span-3">Faculty</div>
							<div className="w-full outline-2 col-span-2">Time</div>
							<div className="w-full outline-2 col-span-5">Major</div>
							<div className="w-full outline-2 col-span-5">Content</div>
						</div>
						<div className="w-full flex justify-end">...more</div>
					</div>
				</div>
			</div>
		</div>
	);
}
