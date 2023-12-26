import build from "pino-abstract-transport";
import { AdapterOptions } from "./types";

async function createTransport(options: AdapterOptions) {
	return build(async (source) => {
		for await (const obj of source) {
			const request = await fetch(
				options.apiURL ?? "https://loggregator.co/api/logger",
				{
					method: "POST",
					body: JSON.stringify({ content: obj.msg }),
					headers: {
						"Content-Type": "application/json",
						Authorization: `Bearer ${options.token}`,
					},
				},
			);

			const body = (await request.json()) as
				| { success: true }
				| { success: false; error: string };

			const success = body.success;
			if (!success)
				console.warn("[PINO-LOGGREGATOR] request to API failed!", body.error);
		}
	});
}

export default createTransport;
