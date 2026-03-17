"use client";

import { useEffect, useRef, useState } from "react";
import GroundHero from "@/components/0_GroundHero";
import SkyContent from "@/components/SkyContent";
import HeaderPorto from "@/components/HeaderPorto";

export default function Home() {
	const [isReady, setIsReady] = useState(false);

	const scrollContainerRef = useRef<HTMLDivElement>(null);

	const scrollToSection = (id: string) => {
		const container = scrollContainerRef.current;
		const target = document.getElementById(id);

		if (container && target) {
			// 1. Disable snapping to allow free movement
			container.setAttribute("style", "scroll-snap-type: none !important;");

			// 2. Use getBoundingClientRect to find exact distance relative to viewport
			// then add current scroll position to get absolute destination
			const containerRect = container.getBoundingClientRect();
			const targetRect = target.getBoundingClientRect();
			const relativeOffset =
				targetRect.top - containerRect.top + container.scrollTop;

			container.scrollTo({
				top: relativeOffset,
				behavior: "smooth",
			});

			setTimeout(() => {
				container.scrollTo({
					top: target.offsetTop,
					behavior: "smooth",
				});
			}, 10);

			// 3. Re-enable snapping
			setTimeout(() => {
				container.style.scrollSnapType = "y mandatory";
			}, 1000); // Increased to 1s to ensure smooth motion finishes
		}
	};

	useEffect(() => {
		if ("scrollRestoration" in history) {
			history.scrollRestoration = "manual";
		}

		if (scrollContainerRef.current) {
			const container = scrollContainerRef.current;
			container.scrollTop = container.scrollHeight;
		}

		const timer = setTimeout(() => {
			setIsReady(true);
		}, 100);

		return () => clearTimeout(timer);
	}, []);

	return (
		<div
			className={`
        flex flex-col items-center min-h-screen transition-opacity duration-1200 cursor-default
        ${isReady ? "opacity-100" : "opacity-0"}
      `}
		>
			<main
				ref={scrollContainerRef}
				className="h-screen overflow-y-scroll snap-y snap-mandatory no-scrollbar"
			>
				<SkyContent />
				<section className="h-screen w-screen snap-start shrink-0 overflow-hidden">
					<GroundHero onNavigate={scrollToSection} />
				</section>
			</main>
			<HeaderPorto />
		</div>
	);
}
