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
				[&_*]:outline-black
        ${isReady ? "opacity-100" : "opacity-0"}
      `}
		>
			<div className="flex-grow z-9999 w-screen">
				<SkyContent />
			</div>
			<GroundHero />
			{/* <div className="relative flex-grow z-0 w-screen">
				<GroundHero />
				<div className="absolute bottom-0 w-screen">
					<Header />
				</div>
			</div> */}
		</main>
	);
}
