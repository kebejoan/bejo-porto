export interface ImageItf {
	alt: string;
	image: string;
}

export interface Project {
	id: number;
	title: string;
	description: {
		summary: string;
		background: string;
		methods: string[];
		results: string[];
	};
	responsibility: string;
	image: ImageItf[];
	techstack: string[];
	github?: string;
	live?: string;
}

export const projects: Project[] = [
	{
		id: 1,
		title: "Tokopaedi",
		description: {
			summary:
				"A high-fidelity Tokopedia clone built with Next.js and TypeScript, showcasing a complex, production-level e-commerce interface. 🛍️",
			background:
				"Designed to replicate Tokopedia’s intricate layout and navigation patterns, demonstrating skills in building desktop-first, dynamic e-commerce platforms.",
			methods: [
				"Desktop-first development with pixel-perfect UI using Tailwind CSS",
				"Data fetching from External REST APIs with asynchronous state management",
				"Secure user authentication via NextAuth.js and JWT",
				"Custom Next.js Middleware for server-side route protection",
			],
			results: [
				"Seamless product browsing with dynamic content handling",
				"Protected private user areas with secure authentication",
			],
		},
		responsibility:
			"Solely responsible for the entire project from reverse-engineering design, coding all features, to protecting routes",
		image: [
			{
				alt: "alt1",
				image: "./Ground.png",
			},
			{
				alt: "alt2",
				image: "./Ground_Night.png",
			},
		],
		techstack: [
			"Next.js",
			"Typescript",
			"Tailwind",
			"JWT",
			"NextAuth.js",
			"REST API",
			"Custom Middleware",
		],
		github: "https://github.com/kebejoan/toko-pa-edi",
		live: "https://toko-pa-edi.vercel.app/",
	},
	{
		id: 2,
		title: "RevoFun",
		description: {
			summary:
				"A modular web game portal featuring three interactive games, built with Vanilla TypeScript and OOP principles.🎮✨",
			background:
				"Created to deliver a seamless, engaging game-hub experience, combining multiple games into one clean, scalable platform. ",
			methods: [
				"Used Vanilla TypeScript with Object-Oriented Programming for reusable, maintainable game logic",
				"Built with Vite for fast asset bundling and optimized performance ",
				"Developed custom algorithms for real-time feedback and event handling",
				"Styled UI with Tailwind CSS for consistent and game aestethic visuals",
			],
			results: [
				"Three fully interactive games: precision clicker, number guesser with proximity hints, and Rock Paper Scissors.",
				"Fully functional difficulty selection with custom algorithms",
				"Smooth, responsive user experience with modular, scalable code architecture",
			],
		},
		responsibility:
			"Handled entire project solo — from design and coding to testing and optimization.",
		image: [
			{
				alt: "alt1",
				image: "link1",
			},
			{
				alt: "alt2",
				image: "link2",
			},
		],
		techstack: ["Typescript", "Tailwind", "OOP", "Vite"],
		github: "https://github.com/kebejoan/bejo-portal-game",
		live: "https://kebejoan.github.io/bejo-game-portal/",
	},
	{
		id: 3,
		title: "STARDOM Basic Design Engineering Tool",
		description: {
			summary:
				"A Python-based automation tool that speeds up Basic Design Engineering by automating data processing and logic file generation. ⏱️",
			background:
				"Developed to reduce the lengthy BDE workflow, aiming to boost efficiency and standardize variable naming across teams.",
			methods: [
				"Created an ETL pipeline to parse Excel data and generate STARDOM Logic Designer files",
				"Established unified variable naming conventions to maintain consistency",
				"Compiled and obfuscated the tool into a standalone executable with Nuitka for IP protection",
				"Built as a headless CLI utility for fast, reliable processing without UI overhead ",
			],
			results: [
				"Cut project BDE time from 5 days to under 3 hours",
				"Delivered standardized, high-quality logic files",
				"Secured proprietary code against reverse engineering",
			],
		},
		responsibility:
			"Solely responsible for design, development, optimization, and lifecycle of the entire tool. ",
		image: [
			{
				alt: "alt1",
				image: "link1",
			},
			{
				alt: "alt2",
				image: "link2",
			},
		],
		techstack: ["Python", "Pandas", "ETL", "Nuitka", "CLI"],
		// github: "https://github.com/kebejoan/bejo-portal-game",
		// live: "https://kebejoan.github.io/bejo-game-portal/",
	},
];
