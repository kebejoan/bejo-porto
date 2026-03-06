"use client";

import { useEffect, useState } from "react";
import GroundHero from "./components/GroundHero";
import SkyContent from "./components/SkyContent";
import Header from "./components/HeaderPorto";

export default function Home() {
	const [isReady, setIsReady] = useState(false);

	useEffect(() => {
		// 1. Prevent browser from remembering old scroll position
		if ("scrollRestoration" in history) {
			history.scrollRestoration = "manual";
		}

		// 2. Perform the jump immediately
		window.scrollTo(0, document.documentElement.scrollHeight);

		// 3. Small timeout to ensure the jump happened, then fade in
		const timer = setTimeout(() => {
			setIsReady(true);
		}, 100);

		return () => clearTimeout(timer);
	}, []);

	return (
		<main
			className={`
        flex flex-col items-center min-h-screen transition-opacity duration-1000
        ${isReady ? "opacity-100" : "opacity-0"}
      `}
		>
			{/* <div className="flex flex-col min-h-screen w-full lg:w-3/4 xl:w-2/3"> */}
			<div className="flex-grow">
				<SkyContent />
			</div>
			<GroundHero />
			<Header />
			{/* </div> */}
		</main>
	);
}
