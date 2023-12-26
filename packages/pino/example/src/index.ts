import pino from "pino";
const transport = pino.transport({
	target: "@loggregator/pino-adapter",
	options: {
		token: process.env.LOGGREGATOR_TOKEN,
		apiURL: "http://localhost:5173/api/logger",
	},
});

const logger = pino(transport);
logger.info("TEST");
