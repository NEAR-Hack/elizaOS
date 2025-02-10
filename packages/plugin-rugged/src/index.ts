import type { Plugin } from "@elizaos/core";
import {
    GET_TOKEN_INFORMATION,
    GET_TOKEN_TOP_HOLDERS,
    GET_SLEEPER_TOKENS,
} from "./actions/TokenLookup";

export const ruggedPlugin: Plugin = {
    name: "rugged",
    description: "Rugged plugin for Eliza",
    actions: [GET_TOKEN_INFORMATION, GET_TOKEN_TOP_HOLDERS, GET_SLEEPER_TOKENS],
    evaluators: [],
    providers: [],
};
export default ruggedPlugin;
