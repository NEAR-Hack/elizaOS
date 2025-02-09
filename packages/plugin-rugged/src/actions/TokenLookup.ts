import {
    elizaLogger,
    Action,
    ActionExample,
    HandlerCallback,
    IAgentRuntime,
    Memory,
    State,
    composeContext,
    generateMessageResponse,
    ModelClass,
} from "@elizaos/core";
import { validateRuggedConfig } from "../environment";
import {
    getTokenInformationExample,
    getTokenTopHoldersExample,
} from "../examples";
import { getTokenInformation, getTokenTopHolders } from "../services";
import { getTokenInformationTemplate } from "../templates";

export const GET_TOKEN_INFORMATION: Action = {
    name: "GET_TOKEN_INFORMATION",
    similes: [
        "TOKEN_LOOKUP",
        "TOKEN_INFO",
        "TOKEN_ANALYSIS",
        "TOKEN_DETAILS",
        "TOKEN_STATS",
    ],
    description:
        "Get detailed information about a token including trading volume, market cap, and other key metrics.",
    validate: async (runtime: IAgentRuntime) => {
        await validateRuggedConfig(runtime);
        return true;
    },
    handler: async (
        runtime: IAgentRuntime,
        message: Memory,
        state: State,
        _options: { [key: string]: unknown },
        callback: HandlerCallback
    ) => {
        // Initialize/update state
        let currentState: State = state;
        if (!currentState) {
            currentState = (await runtime.composeState(message)) as State;
        }
        currentState = await runtime.updateRecentMessageState(currentState);

        // state -> context
        const tokenContext = composeContext({
            state: currentState,
            template: getTokenInformationTemplate,
        });

        // context -> content
        const content = await generateMessageResponse({
            runtime,
            context: tokenContext,
            modelClass: ModelClass.SMALL,
        });

        // parse content
        const hasTokenAddress = content?.token_address && !content?.error;

        if (!hasTokenAddress) {
            return;
        }

        // Instantiate API service
        const config = await validateRuggedConfig(runtime);

        try {
            const tokenInformation = await getTokenInformation(
                String(content?.token_address || "")
            );
            elizaLogger.success(`Successfully fetched token information`);
            if (callback) {
                callback({
                    text: `Token Information for ${
                        tokenInformation.Trade.Currency.Name
                    } (${tokenInformation.Trade.Currency.Symbol}):
• Price: ${tokenInformation.Trade.end} WSOL
• 5min Price Change: ${(
                        ((tokenInformation.Trade.end -
                            tokenInformation.Trade.min5) /
                            tokenInformation.Trade.min5) *
                        100
                    ).toFixed(2)}%
• Volume: ${Number(tokenInformation.traded_volume).toFixed(2)} WSOL
• Trades: ${tokenInformation.trades} (${
                        tokenInformation.trades_5min
                    } in last 5min)
• Buyers/Sellers: ${tokenInformation.buyers}/${tokenInformation.sellers}`,
                    content: tokenInformation,
                });
                return true;
            }
        } catch (error: any) {
            elizaLogger.error("Error in token lookup handler:", error);
            callback({
                text: `Error fetching token information: ${error.message}`,
                content: { error: error.message },
            });
            return false;
        }
    },
    examples: getTokenInformationExample as ActionExample[][],
} as Action;

export const GET_TOKEN_TOP_HOLDERS: Action = {
    name: "GET_TOKEN_TOP_HOLDERS",
    similes: ["TOKEN_TOP_HOLDERS", "TOKEN_HOLDERS", "TOKEN_HOLDERS_LIST"],
    description: "Get the top holders of a token",
    validate: async (runtime: IAgentRuntime) => {
        await validateRuggedConfig(runtime);
        return true;
    },
    handler: async (
        runtime: IAgentRuntime,
        message: Memory,

        state: State,
        _options: { [key: string]: unknown },
        callback: HandlerCallback
    ) => {
        // Initialize/update state
        let currentState: State = state;
        if (!currentState) {
            currentState = (await runtime.composeState(message)) as State;
        }
        currentState = await runtime.updateRecentMessageState(currentState);

        // state -> context
        const tokenContext = composeContext({
            state: currentState,
            template: getTokenInformationTemplate,
        });

        // context -> content
        const content = await generateMessageResponse({
            runtime,
            context: tokenContext,
            modelClass: ModelClass.SMALL,
        });

        // parse content
        const hasTokenAddress = content?.token_address && !content?.error;

        if (!hasTokenAddress) {
            return;
        }

        // Instantiate API service
        const config = await validateRuggedConfig(runtime);

        try {
            const tokenTopHolders = await getTokenTopHolders(
                String(content?.token_address || "")
            );
            elizaLogger.success(`Successfully fetched token top holders`);
            if (callback) {
                const title = `Top Holders for ${tokenTopHolders[0].token_name} (${tokenTopHolders[0].symbol})`;
                const header = `| Rank | Address | Percentage |`;
                const separator = `|------|---------|------------|`;
                const rows = tokenTopHolders
                    .map((holder, index) => 
                        `| ${index + 1} | ${holder.holder_address} | ${holder.percentage}% |`
                    )
                    .join("\n");
                
                callback({
                    text: `${title}\n\n${header}\n${separator}\n${rows}`
                });
            }
        } catch (error: any) {
            elizaLogger.error("Error in token top holders handler:", error);
            callback({
                text: `Error fetching token top holders: ${error.message}`,
            });
        }
    },
    examples: getTokenTopHoldersExample as ActionExample[][],
} as Action;
