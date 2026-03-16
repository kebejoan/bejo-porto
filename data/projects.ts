export interface ImageItf {
	id: number;
	src: string;
}

export interface VideoItf {
	id: number;
	src: string;
}

export interface Project {
	id: number;
	title: string;
	description: string;
	summary: string;
	background: string;
	methods: string[];
	results: string[];
	responsibility: string;
	video?: VideoItf[];
	image: ImageItf[];
	techstack: string[];
	repo?: string;
	live?: string;
}

export const projects: Project[] = [
	{
		id: 1,
		title: "Tokopaedi",
		description:
			"Engineered a high-fidelity Tokopedia clone to demonstrate proficiency in replicating complex, production-grade e-commerce interfaces using Next.js and TypeScript. I prioritized a desktop-first development approach, reverse-engineering the intricate layout and navigation patterns. To handle dynamic content, I integrated External REST APIs, managing asynchronous data fetching and state to ensure a seamless product browsing experience. I implemented secure user authentication via NextAuth.js, JWT, and developed Custom Next.js Middleware to manage server-side route protection for private user areas. The project utilizes Tailwind CSS to achieve pixel-perfect UI fidelity, focusing on high-density data display and modular component structures. Furthermore, I developed custom Next.js Middleware to handle server-side route protection and optimized the interface for high-performance interaction. This project demonstrates my ability to translate professional web designs into functional code while maintaining high standards for security and state management.",
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
		responsibility:
			"Solely responsible for the entire project from reverse-engineering design, coding all features, to protecting routes",
		image: [
			{
				id: 1,
				src: "/Ground.png",
			},
			{
				id: 2,
				src: "/Ground_Night.png",
			},
		],
		video: [{ id: 1, src: "/Tokopaedi_vid.webm" }],
		techstack: [
			"Next.js",
			"Typescript",
			"Tailwind",
			"JWT",
			"NextAuth.js",
			"REST API",
			"Custom Middleware",
		],
		repo: "https://github.com/kebejoan/toko-pa-edi",
		live: "https://toko-pa-edi.vercel.app/",
	},
	{
		id: 2,
		title: "RevoFun",
		description:
			"Engineered a modular web-game portal featuring three interactive titles: a precision clicker, a logic-based number guesser, and a classic Rock Paper Scissors game. I engineered the platform using Vanilla TypeScript and Object-Oriented Programming (OOP) principles, architecting reusable classes to manage distinct game states and logic. By leveraging a Vite-based build process, I ensured efficient asset bundling and high-speed performance for a seamless 'game-hub' user experience. I implemented custom algorithmic logic to handle real-time user feedback—such as proximity hints in the number guesser—demonstrating a deep understanding of asynchronous event handling and DOM manipulation. The UI was styled with Tailwind CSS, focusing on a clean, centralized layout that maintains visual consistency across various interactive modules. This project showcases my ability to build feature-rich, scalable applications from the ground up while prioritizing type safety and clean code architecture.",
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
		responsibility:
			"Handled entire project solo — from design and coding to testing and optimization.",
		image: [
			{
				id: 1,
				src: "link1",
			},
			{
				id: 2,
				src: "link2",
			},
		],
		video: [{ id: 1, src: "/Revofun_vid.webm" }],
		techstack: ["Typescript", "Tailwind", "OOP", "Vite"],
		repo: "https://github.com/kebejoan/bejo-game-portal",
		live: "https://kebejoan.github.io/bejo-game-portal/",
	},
	{
		id: 3,
		title: "STARDOM Basic Design Engineering Tool",
		description:
			"Engineered a specialized automation tool in Python to streamline the Basic Design Engineering (BDE) process, reducing project turnaround time from 5 days to under 3 hours. I developed an automated ETL pipeline that parses pre-formatted Excel data and generates three proprietary files for the STARDOM Logic Designer environment. By architecting this tool, I established a unified variable naming convention, eliminating inconsistencies across engineering teams and ensuring high-quality, standardized logic generation. To protect intellectual property and prevent reverse-engineering, I implemented advanced distribution security by compiling and obfuscating the application into a standalone executable using Nuitka. The tool was designed as a headless utility to prioritize raw processing speed and reliability. In a technical workflow like Basic Design Engineering, a CLI is more efficient as it allows for direct data piping and removes the overhead of a graphical layer. This project demonstrates my ability to identify business inefficiencies and deploy custom technical solutions that deliver measurable ROI.",
		summary:
			"A Python-based automation tool that speeds up Basic Design Engineering by automating data processing and logic file generation. ⏱️ (company property, not available for public use)",
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
		responsibility:
			"Solely responsible for design, development, optimization, and lifecycle of the entire tool. ",
		image: [
			{
				id: 1,
				src: "link1",
			},
			{
				id: 2,
				src: "link2",
			},
		],
		video: [{ id: 1, src: "/Engtool_vid.webm" }],
		techstack: ["Python", "Pandas", "ETL", "Nuitka", "CLI"],
		// repo: "https://github.com/kebejoan/bejo-portal-game",
		// live: "https://kebejoan.repo.io/bejo-game-portal/",
	},
];
