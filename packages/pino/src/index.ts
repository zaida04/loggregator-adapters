import build from "pino-abstract-transport";
import { sendLog } from "./request";
import { AdapterOptions } from "./types";

async function createTransport(options: AdapterOptions) {
	return build(async (source) => {
		for await (const obj of source) {
			sendLog(obj.msg, options);
		}
	});
}

export default createTransport;
