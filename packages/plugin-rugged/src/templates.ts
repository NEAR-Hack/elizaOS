export const getTokenInformationTemplate = `Respond with a JSON object containing token information for lookup.
Extract the token identifier from the most recent message. If no specific token is provided, respond with an error.

The response must include:
- token_address: The token's mint address
Example response:
\`\`\`json
{
    "token_address": "J9o1ghFLBUV76pNzpXGAzdQTkZi46mnFWcbpMmTdpump",
}
\`\`\`
{{recentMessages}}
Extract the token information from the most recent message.
Respond with a JSON markdown block containing both token_address`;
