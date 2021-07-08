import svelte from "rollup-plugin-svelte";
import typescript from "@rollup/plugin-typescript";
import css from "rollup-plugin-css-only";
import json from "@rollup/plugin-json";
import resolve from "@rollup/plugin-node-resolve";
import livereload from "rollup-plugin-livereload";
import serve from "rollup-plugin-serve";
import { terser } from "rollup-plugin-terser";
import preprocess from "svelte-preprocess";

const production = !process.env.ROLLUP_WATCH;

export default {
  input: "src/main.ts",
  output: {
    sourcemap: true,
    format: "iife",
    name: "app",
    file: "public/build/bundle.js",
  },
  plugins: [
    svelte({
      compilerOptions: {
        dev: !production,
      },
    }),
    preprocess({
      sourceMap: !production,
    }),
    resolve({
      browser: true,
      dedupe: ["svelte"],
    }),
    typescript({
      sourceMap: !production,
      inlineSources: !production,
    }),
    css({
      output: "bundle.css",
    }),
    json(),
    !production && serve("public"),
    !production && livereload("public"),
    production && terser(),
  ],
};
