import commonjs from "@rollup/plugin-commonjs";
import nodeExternals from "rollup-plugin-node-externals";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import banner from "rollup-plugin-banner2";
import esbuild from "rollup-plugin-esbuild";

export default {
  input: "./src/index.jsx",
  output: [
    {
      dir: "./dist/cjs",
      preserveModules: true,
      exports: "named",
      format: "cjs",
    },
    {
      dir: "./dist/esm",
      preserveModules: true,
      entryFileNames: "[name].mjs",
      format: "esm",
    },
  ],

  plugins: [
    esbuild({ minify: false, sourceMap: false, target: "es2015" }),
    nodeExternals(),
    nodeResolve(),
    commonjs(),
    replace({ preventAssignment: true }),
    banner((chunk) => {
      if (chunk.fileName === "index.js" || chunk.fileName === "index.mjs") {
        return "'use client';\n";
      }

      return undefined;
    }),
  ],
};
