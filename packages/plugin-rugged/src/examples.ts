import { ActionExample } from "@elizaos/core";

export const getTokenInformationExample: ActionExample[][] = [
    [
        {
            user: "{{user1}}",
            content: {
                text: "Can you check the information for this token address: J9o1ghFLBUV76pNzpXGAzdQTkZi46mnFWcbpMmTdpump?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll fetch the token information for the address J9o1ghFLBUV76pNzpXGAzdQTkZi46mnFWcbpMmTdpump.",
                action: "GET_TOKEN_INFORMATION",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "What's the trading volume and market cap for token J9o1ghFLBUV76pNzpXGAzdQTkZi46mnFWcbpMmTdpump?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll look up the token information for J9o1ghFLBUV76pNzpXGAzdQTkZi46mnFWcbpMmTdpump.",
                action: "GET_TOKEN_INFORMATION",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "Show me the latest trading stats for token 2qEHjDLDLbuBgRYvsxhc5D6uDWAivNFZGan56P1tpump",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll retrieve the trading information for token 2qEHjDLDLbuBgRYvsxhc5D6uDWAivNFZGan56P1tpump.",
                action: "GET_TOKEN_INFORMATION",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "Can you tell me about the buyer/seller ratio and volume for Peanut the Squirrel token (2qEHjDLDLbuBgRYvsxhc5D6uDWAivNFZGan56P1tpump)?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll analyze the trading metrics for the Peanut the Squirrel token.",
                action: "GET_TOKEN_INFORMATION",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "What's the current price trend for 7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll check the price trend for this token.",
                action: "GET_TOKEN_INFORMATION",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "Is EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v a good investment right now?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "Let me analyze this token's metrics for you.",
                action: "GET_TOKEN_INFORMATION",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "How volatile is this token DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll check the volatility metrics for this token.",
                action: "GET_TOKEN_INFORMATION",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "What's the liquidity like for So11111111111111111111111111111111111111112?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll look up the liquidity information for this token.",
                action: "GET_TOKEN_INFORMATION",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "Can you analyze this token for me? mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll analyze this token's data for you.",
                action: "GET_TOKEN_INFORMATION",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "How many holders does 4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R have?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll check the holder information for this token.",
                action: "GET_TOKEN_INFORMATION",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "What's the total supply of Ea5SjE2Y6yvCeW5dYTn7PYMuW5ikXkvbGdcmSnXeaLjS?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll look up the supply information for this token.",
                action: "GET_TOKEN_INFORMATION",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "Show me the price history of 7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll retrieve the price history for this token.",
                action: "GET_TOKEN_INFORMATION",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "What's the 24h trading volume of AFbX8oGjGpmVFywbVouvhQSRmiW2aR1mohfahi4Y2AdB?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll check the 24-hour trading volume for this token.",
                action: "GET_TOKEN_INFORMATION",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "Is this token legit? 9n4nbM75f5Ui33ZbPYXn59EwSgE8CGsHtAeTH5YFeJ9E",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll analyze this token's metrics to assess its legitimacy.",
                action: "GET_TOKEN_INFORMATION",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "Give me a quick analysis of BXXkv6z8ykpG1yuvUDPgh732wzVHB69RnB9YgSYh3itW",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll pull up an analysis of this token.",
                action: "GET_TOKEN_INFORMATION",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "What's the market sentiment for 7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll check the market metrics for this token.",
                action: "GET_TOKEN_INFORMATION",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "How old is this token Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll look up when this token was created and its history.",
                action: "GET_TOKEN_INFORMATION",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "What's the all-time high for AGFEad2et2ZJif9jaGpdMixQqvW5i81aBdvKe7PHNfz3?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll check the price history and ATH for this token.",
                action: "GET_TOKEN_INFORMATION",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "Tell me about the token at DUSTawucrTsGU8hcqRdHDCbuYhCPADMLM2VcCb8VnFnQ",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll gather the information about this token.",
                action: "GET_TOKEN_INFORMATION",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "What are the key metrics for kinXdEcpDQeHPEuQnqmUgtYykqKGVFq6CeVX5iAHJq6?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll retrieve the key metrics for this token.",
                action: "GET_TOKEN_INFORMATION",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "How's 5tN42n9vMi6ubp67Uy4NnmM5DMZYN8aS8GeB3bEDHr6E performing today?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll check today's performance metrics for this token.",
                action: "GET_TOKEN_INFORMATION",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "What's the current state of 4vMMkp5ar8YqWHKw5UYqGnpZ6E4XWqz8aYGxptwzNHxs?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll look up the current state and metrics of this token.",
                action: "GET_TOKEN_INFORMATION",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "Check this token for me: 8upjSpvjcdpuzhfR1zriwg5NXkwDruejqNE9WNbPRtyA",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll check and analyze this token for you.",
                action: "GET_TOKEN_INFORMATION",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "Is Saber2gLauYim4Mvftnrasomsv6NvAuncvMEZwcLpD1 trending right now?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll check the current trend and popularity of this token.",
                action: "GET_TOKEN_INFORMATION",
            },
        },
    ],
];

export const getTokenTopHoldersExample: ActionExample[][] = [
    [
        {
            user: "{{user1}}",
            content: {
                text: "What are the top holders of this token? 8upjSpvjcdpuzhfR1zriwg5NXkwDruejqNE9WNbPRtyA",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll check the top holders for this token.",
                action: "GET_TOKEN_TOP_HOLDERS",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "Show me who owns the most 4vMMkp5ar8YqWHKw5UYqGnpZ6E4XWqz8aYGxptwzNHxs",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll look up the largest holders of this token for you.",
                action: "GET_TOKEN_TOP_HOLDERS",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "Can you list the biggest wallets holding Saber2gLauYim4Mvftnrasomsv6NvAuncvMEZwcLpD1?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll retrieve the list of largest wallets holding this token.",
                action: "GET_TOKEN_TOP_HOLDERS",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "Who are the whales for 8upjSpvjcdpuzhfR1zriwg5NXkwDruejqNE9WNbPRtyA?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll find the whale wallets holding this token.",
                action: "GET_TOKEN_TOP_HOLDERS",
            },
        },
    ],
];

export const getSleeperTokensExample: ActionExample[][] = [
    [
        {
            user: "{{user1}}",
            content: {
                text: "Can you find some sleeper tokens with strong holders but low trading volume?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll search for tokens with strong holders and low trading volume.",
                action: "GET_SLEEPER_TOKENS",
                response: {
                    text: `🔍 Potential Sleeper Tokens Analysis

| Token | Top Holders % | Vol/MCap % | Market Cap ($) |
|--------|--------------|------------|---------------|
| Bonk (BONK) | 65.32% | 2.1% | $125,000,000 |
| Meme Coin (MEME) | 72.15% | 1.8% | $5,230,450 |
| Sample Token (SAMP) | 58.90% | 3.2% | $890,230 |

💡 These tokens show strong accumulation patterns with high holder concentration and low trading volume relative to their market cap. This could indicate potential future price movement.`,
                    content: [
                        {
                            token_name: "Bonk",
                            symbol: "BONK",
                            mint_address:
                                "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263",
                            top_holders_percentage: "65.32",
                            volume_to_mcap: "2.1",
                            market_cap: "125000000.00",
                        },
                        {
                            token_name: "Meme Coin",
                            symbol: "MEME",
                            mint_address:
                                "MeMeX8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263",
                            top_holders_percentage: "72.15",
                            volume_to_mcap: "1.8",
                            market_cap: "5230450.00",
                        },
                        {
                            token_name: "Sample Token",
                            symbol: "SAMP",
                            mint_address:
                                "SaMpXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263",
                            top_holders_percentage: "58.90",
                            volume_to_mcap: "3.2",
                            market_cap: "890230.00",
                        },
                    ],
                },
            },
        },
    ],
];
