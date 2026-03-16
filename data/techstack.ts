export const FEStack = [
	"Next.js",
	"React",
	"Typescript",
	"Javascript",
	"Tailwind",
	"HTML",
	"CSS",
];

export const BEStack = [
	"Nest.js",
	"PrismaORM",
	"Typescript",
	"PostgreSQL",
	"MSSQL",
	"Supabase",
];

export const IAStack = [
	"PLC",
	"SCADA",
	"CI Server",
	"STARDOM",
	"OPC-UA",
	"Modbus",
];

export const AllStack = [...new Set([...IAStack, ...FEStack, ...BEStack])];
