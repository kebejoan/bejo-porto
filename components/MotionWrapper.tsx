"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MotionWrapperProps {
	children: ReactNode;
	type?: "hover" | "fade-in" | "click" | "spring-in";
	className?: string;
	delay?: number;
	key?: number;
}

export default function MotionWrapper({
	children,
	type = "hover",
	className = "",
	delay = 0,
}: MotionWrapperProps) {
	// Define our "Industrial" spring physics
	const springConfig = { type: "spring" as const, stiffness: 400, damping: 17 };
	const fadeConfig = { stiffness: 400, damping: 17 };

	const variants = {
		hover: {
			whileHover: { scale: 1.02 },
			whileTap: { scale: 0.98 },
			transition: springConfig,
		},
		click: {
			whileTap: { scale: 0.99 },
			transition: { type: "spring" as const, stiffness: 500, damping: 15 },
		},
		"fade-in": {
			initial: { opacity: 0, y: 20 },
			whileInView: { opacity: 1, y: 0 },
			viewport: { once: false },
			transition: { ...fadeConfig, delay },
		},
		"spring-in": {
			initial: { opacity: 0, y: 20 },
			whileInView: { opacity: 1, y: 0 },
			viewport: { once: false },
			transition: { ...springConfig, delay },
		},
	};

	const motionProps = variants[type];

	return (
		<motion.div {...motionProps} className={className}>
			{children}
		</motion.div>
	);
}
