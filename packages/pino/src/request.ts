import { AdapterOptions } from "./types";

export async function sendLog(content: string, options: AdapterOptions) {
	const request = await fetch(options.apiURL ?? "https://loggregator.co/api/logger", {
		method: "POST",
		body: JSON.stringify({ content }),
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${options.token}`,
		},
	});

	const body = (await request.json()) as { success: true } | { success: false; error: string };

	const success = body.success;
	if (!success) console.warn("[PINO-LOGGREGATOR] request to API failed!", body.error);
}
