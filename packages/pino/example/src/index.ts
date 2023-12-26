import pino from "pino";
const transport = pino.transport({
	target: "@loggregator/pino-adapter",
	options: {
		token: process.env.LOGGREGATOR_TOKEN,
	},
});

const logger = pino(transport);
logger.info("TEST");
