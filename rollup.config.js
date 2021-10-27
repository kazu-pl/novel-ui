import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import multiInput from "rollup-plugin-multi-input";

const rollupConfig = {
  input: ["src/**/*.tsx", "src/**/index.ts"],
  output: {
    format: "esm", // "esm" | "ejs"
    dir: "lib",
  },
  plugins: [
    multiInput(),
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({
      extensions: [".css"],
    }),
  ],
};

export default rollupConfig;
