import z from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  DATABASE_URL: z.string().min(1).startsWith("postgresql://"),
  NEXT_PUBLIC_URL: z.string().min(1),
  BETTER_AUTH_SECRET: z.string().min(1),
  BETTER_AUTH_URL: z.string().url().default("http://localhost:3000"),
});

export const env = envSchema.parse(process.env);
