import type { Plugin } from "@elizaos/core";
import {
    GET_TOKEN_INFORMATION,
    GET_TOKEN_TOP_HOLDERS,
} from "./actions/TokenLookup";

export const ruggedPlugin: Plugin = {
    name: "rugged",
    description: "Rugged plugin for Eliza",
    actions: [GET_TOKEN_INFORMATION, GET_TOKEN_TOP_HOLDERS],
    evaluators: [],
    providers: [],
};
export default ruggedPlugin;
