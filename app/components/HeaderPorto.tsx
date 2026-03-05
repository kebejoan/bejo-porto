export default function HeaderPorto() {
	return (
		<div className="w-full h-[72px] sticky top-0 p-2 flex justify-center">
			<div className="md:w-3/4 sm:w-full sm:w-1/2 h-full">
				<div className="flex items-center justify-between w-full h-full  text-black opacity-80 px-4 py-2">
					<div className="font-bold text-2xl cursor-pointer">kebejoan.app</div>
					<div className="flex gap-4 font-bold text-2xl">
						<div className="cursor-pointer">About</div>
						<div className="cursor-pointer">Projects</div>
						<div className="cursor-pointer">Contact</div>
					</div>
				</div>
			</div>
		</div>
	);
}
