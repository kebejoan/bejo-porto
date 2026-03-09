export default function HeaderPorto() {
	return (
		<div className="w-full h-[72px] sticky bottom-0 p-2 flex justify-center content-center">
			<div className="w-full h-full">
				<div className="flex items-center justify-between w-full h-full text-3xl text-emerald-900 font-bold opacity-80 px-4 py-2">
					<div className="cursor-pointer">.kebejoan</div>
					<div className="hidden sm:flex gap-4 ">
						<div className="cursor-pointer">_</div>
						<div className="cursor-pointer">|||</div>
					</div>
				</div>
			</div>
		</div>
	);
}
