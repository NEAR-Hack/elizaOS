import type { IAgentRuntime } from "@elizaos/core";
import { z } from "zod";

export const ruggedEnvSchema = z.object({
    BACKEND_URL: z
        .string()
        .min(1, "BACKEND_URL is required")
        .regex(
            /^https?:\/\//,
            "BACKEND_URL must start with http:// or https://"
        ),
});

export type ruggedConfig = z.infer<typeof ruggedEnvSchema>;

export async function validateRuggedConfig(
    runtime: IAgentRuntime
): Promise<ruggedConfig> {
    try {
        const config = {
            BACKEND_URL: runtime.getSetting("BACKEND_URL"),
        };

        return ruggedEnvSchema.parse(config);
    } catch (error) {
        if (error instanceof z.ZodError) {
            const errorMessages = error.errors
                .map((err) => `${err.path.join(".")}: ${err.message}`)
                .join("\n");
            throw new Error(
                `Rugged configuration validation failed:\n${errorMessages}`
            );
        }
        throw error;
    }
}
