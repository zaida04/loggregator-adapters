import build from "pino-abstract-transport";
import { AdapterOptions } from "./types";
import { sendLog } from "./request";

async function createTransport(options: AdapterOptions) {
	return build(async (source) => {
		for await (const obj of source) {
			sendLog(obj.msg, options);
		}
	});
}

export default createTransport;
