import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  server: {
    // NodeEnv
    NODE_ENV: z
      .enum(["development", "production", "test"])
      .optional()
      .default("development"),
  },
  runtimeEnvStrict: {
    // NodeEnv
    NODE_ENV: process.env.NODE_ENV,
  },
  skipValidation: !!process.env.CI || !!process.env.SKIP_ENV_VALIDATION,
});
