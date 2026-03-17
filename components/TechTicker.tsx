"use client";
import { motion } from "framer-motion";
import Badge from "./badges";

export default function TechTicker({ items }: { items: string[] }) {
	// Duplicate the items to create a seamless loop
	const tickerItems = [...items, ...items, ...items, ...items, ...items];

	return (
		<div className="w-full overflow-hidden whitespace-nowrap mask-fade-edges">
			<motion.div
				className="flex gap-2 w-max"
				animate={{
					x: [0, "-20%"], // Adjust this number based on your total list width
				}}
				transition={{
					x: {
						repeat: Infinity,
						repeatType: "loop",
						duration: 30, // Lower = Faster ticker
						ease: "linear",
					},
				}}
			>
				{tickerItems.map((stack, index) => (
					// <MotionWrapper type="spring-in" delay={0.2} key={index}>
					<Badge text={stack} key={index} />
					// </MotionWrapper>
				))}
			</motion.div>
		</div>
	);
}
