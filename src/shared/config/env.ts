import { z } from "zod";

/**
 * Runtime-safe access to client environment configuration.
 *
 * Notes:
 * - We intentionally do **not** provide a production default for `VITE_API_BASE_URL`
 *   so that outbound network calls are always explicitly configured.
 * - In local development you can still point this at a mock server, e.g.
 *   `http://localhost:3000`.
 */
const clientEnvSchema = z.object({
  VITE_API_BASE_URL: z
    .string()
    .url()
    .describe("Base URL for backend API (e.g. https://api.example.com)"),
});

type ClientEnv = z.infer<typeof clientEnvSchema>;

const getClientEnv = (): ClientEnv => {
  const parsed = clientEnvSchema.safeParse(import.meta.env);

  if (!parsed.success) {
    // Surface a clear, actionable error message during startup.
    // This fails fast in development and in production builds if the env
    // var is missing or malformed, instead of silently calling the wrong URL.
    throw new Error(
      [
        "Invalid client environment configuration.",
        "Expected a valid URL in `VITE_API_BASE_URL`.",
        "Define this in your Vite environment files (e.g. `.env.local`).",
      ].join(" "),
    );
  }

  return parsed.data;
};

export const env = getClientEnv();
