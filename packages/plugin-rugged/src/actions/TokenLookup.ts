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
    getSleeperTokensExample,
} from "../examples";
import {
    getTokenInformation,
    getTokenTopHolders,
    getTokenVolumeMarketcap,
    getTopTokenMarketcap,
} from "../services";
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
                    .map(
                        (holder, index) =>
                            `| ${index + 1} | ${holder.holder_address} | ${
                                holder.percentage
                            }% |`
                    )
                    .join("\n");

                callback({
                    text: `${title}\n\n${header}\n${separator}\n${rows}`,
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

// ... existing code ...

export const GET_SLEEPER_TOKENS: Action = {
    name: "GET_SLEEPER_TOKENS",
    similes: [
        "FIND_SLEEPER_COINS",
        "POTENTIAL_PUMPS",
        "HIDDEN_GEMS",
        "UNDERVALUED_TOKENS",
        "LOW_VOLUME_STRONG_HOLDERS",
    ],
    description:
        "Identify potential 'sleeper' tokens with strong holders but low trading volume/hype",
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
        // Instantiate API service
        const config = await validateRuggedConfig(runtime);

        try {
            // Get tokens with strong holders
            const topTokenMarketcap = await getTopTokenMarketcap();
            const sleeperTokens = [];

            // Process each token from top market cap list
            for (const token of topTokenMarketcap) {
                try {
                    // Get token address from market cap data
                    const tokenAddress =
                        token.TokenSupplyUpdate.Currency.MintAddress;

                    // Get volume data for this token
                    const volumeData = await getTokenVolumeMarketcap(
                        tokenAddress
                    );

                    // Get top holders for this token
                    const topHolders = await getTokenTopHolders(tokenAddress);

                    // Skip if we don't have all the data
                    if (!volumeData?.data?.[0] || !topHolders?.length) continue;

                    // Get market cap and volume metrics
                    const marketCapInfo = volumeData.data[0][
                        "data.Solana.marketcap"
                    ]?.find(
                        (v) =>
                            v.TokenSupplyUpdate.Currency.MintAddress ===
                            tokenAddress
                    );

                    if (!marketCapInfo) continue;

                    const marketCap = parseFloat(
                        marketCapInfo.TokenSupplyUpdate.PostBalanceInUSD
                    );
                    const volume24h = parseFloat(
                        volumeData.metadata.time_1h_ago
                    );
                    const volumeToMarketCapRatio = volume24h / marketCap;

                    // Calculate total percentage held by top holders
                    const topHoldersPercentage = topHolders.reduce(
                        (sum, holder) => sum + parseFloat(holder.percentage),
                        0
                    );

                    // Criteria for sleeper token:
                    // 1. Top holders own >50% combined
                    // 2. Low volume relative to market cap (<5%)
                    // 3. Has meaningful market cap (filter out very small caps)
                    if (
                        topHoldersPercentage > 50 &&
                        volumeToMarketCapRatio < 0.05 &&
                        marketCap > 100000 // $100k minimum market cap
                    ) {
                        sleeperTokens.push({
                            token_name: token.TokenSupplyUpdate.Currency.Name,
                            symbol: token.TokenSupplyUpdate.Currency.Symbol,
                            mint_address: tokenAddress,
                            top_holders_percentage:
                                topHoldersPercentage.toFixed(2),
                            volume_to_mcap: (
                                volumeToMarketCapRatio * 100
                            ).toFixed(2),
                            market_cap: marketCap.toFixed(2),
                        });
                    }
                } catch (error) {
                    elizaLogger.error(
                        `Error processing token ${token.TokenSupplyUpdate.Currency.Symbol}:`,
                        error
                    );
                    continue;
                }
            }

            if (callback && sleeperTokens.length > 0) {
                const title = "🔍 Potential Sleeper Tokens Analysis";
                const header =
                    "| Token | Top Holders % | Vol/MCap % | Market Cap ($) |";
                const separator =
                    "|--------|--------------|------------|---------------|";
                const rows = sleeperTokens
                    .map(
                        (token) =>
                            `| ${token.token_name} (${token.symbol}) | ${
                                token.top_holders_percentage
                            }% | ${token.volume_to_mcap}% | $${Number(
                                token.market_cap
                            ).toLocaleString()} |`
                    )
                    .join("\n");

                callback({
                    text: `${title}\n\n${header}\n${separator}\n${rows}\n\n💡 These tokens show strong accumulation patterns with high holder concentration and low trading volume relative to their market cap. This could indicate potential future price movement.`,
                    content: sleeperTokens,
                });
                return true;
            } else {
                callback({
                    text: "No potential sleeper tokens found matching the criteria at this time.",
                    content: [],
                });
                return true;
            }
        } catch (error: any) {
            elizaLogger.error("Error in sleeper tokens handler:", error);
            callback({
                text: `Error analyzing sleeper tokens: ${error.message}`,
                content: { error: error.message },
            });
            return false;
        }
    },
    examples: getSleeperTokensExample as ActionExample[][], // You'll need to create this
} as Action;

// ... existing code ...
