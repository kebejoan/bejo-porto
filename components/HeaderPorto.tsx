import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function HeaderPorto() {
	const { resolvedTheme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	if (!mounted)
		return (
			/* Return a placeholder to prevent the layout from jumping */
			<div className="w-full h-[72px] fixed bottom-0 left-0 p-4 opacity-0" />
		);

	return (
		<div className="w-full h-[72px] fixed bottom-0 left-0 p-2 flex justify-center content-center z-9999">
			<div className="w-full h-full">
				<div className="hidden xl:flex items-center justify-between w-full h-full text-3xl text-white font-bold px-4 py-2">
					<a href="https://kebejoan.vercel.app" className="cursor-pointer">
						.kebejoan
					</a>
					<button
						onClick={() =>
							setTheme(resolvedTheme === "dark" ? "light" : "dark")
						}
						className="hidden sm:flex gap-4 "
					>
						<div className="cursor-pointer">
							<FontAwesomeIcon
								icon={resolvedTheme === "dark" ? faSun : faMoon}
							/>
						</div>
					</button>
				</div>
			</div>
		</div>
	);
}
