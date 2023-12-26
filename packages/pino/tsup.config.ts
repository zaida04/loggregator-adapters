import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/index.ts"],
	external: [],
	noExternal: [],
	platform: "node",
	format: ["esm", "cjs"],
	target: "es2022",
	skipNodeModulesBundle: true,
	clean: true,
	shims: false, // Updated based on the default value of format
	cjsInterop: false, // Updated based on the default value of format
	minify: false,
	splitting: false,
	keepNames: true,
	dts: true,
	sourcemap: true,
	treeshake: false,
	outDir: "dist",
});
