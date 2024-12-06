import type { Config } from "tailwindcss";

import containerQueriesPlugin from "@tailwindcss/container-queries";

import base from "./base";

export default {
  content: base.content,
  presets: [base],
  plugins: [containerQueriesPlugin],
  theme: {},
} satisfies Config;
