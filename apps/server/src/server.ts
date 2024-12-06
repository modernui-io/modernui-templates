import { Hono } from "hono";
import { cache } from "hono/cache";
import { cors } from "hono/cors";

interface Bindings {
  OPEN_AI_KEY: string;
  AI: Ai;
}

const app = new Hono<{ Bindings: Bindings }>();

app.use(
  "/*",
  cors({
    origin: "*", // Allow requests from your Next.js app
    allowHeaders: [
      "X-Custom-Header",
      "Upgrade-Insecure-Requests",
      "Content-Type",
    ], // Add Content-Type to the allowed headers to fix CORS
    allowMethods: ["POST", "GET", "OPTIONS", "PUT"],
    exposeHeaders: ["Content-Length", "X-Kuma-Revision"],
    maxAge: 600,
    credentials: true,
  }),
);

app.get(
  "*",
  cache({
    cacheName: "my-app",
    cacheControl: "max-age=86400",
  }),
);

app.get("/health", async (_c) => {
  return new Response("OK");
});

app.get("/version", async (_c) => {
  return new Response("1.0.0");
});

app.get("/", async (_c) => {
  return new Response("Nothing to see here");
});

export default app;
