export default {
  input: "dist/esm/index.js",
  output: [
    {
      file: "dist/plugin.js",
      format: "iife",
      name: "jigraLocalNotifications",
      globals: {
        "@jigra/core": "jigraExports",
      },
      sourcemap: true,
      inlineDynamicImports: true,
    },
    {
      file: "dist/plugin.cjs.js",
      format: "cjs",
      sourcemap: true,
      inlineDynamicImports: true,
    },
  ],
  external: ["@jigra/core"],
};
