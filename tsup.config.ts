import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  sourcemap: true,
  clean: true,
  minify: true,
  splitting: true,
  treeshake: true,
  external: ['react', 'react-dom'],
  noExternal: [], // Bundles all other dependencies into the output
  esbuildOptions(options) {
    options.banner = {
      js: '"use client";',
    };
  },
});
