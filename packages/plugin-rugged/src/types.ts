export interface TokenHolder {
    holder_address: string;
    percentage: number; // Changed from string to number to match the new response format
    token_name: string;
    symbol: string;
}

export type TokenHolderResponse = { data: TokenHolder[] }; // Updated to match the new response structure

export type TokenDevHoldingResponse = `${number}.${number}`;

export interface Currency {
    Decimals: number;
    Fungible: boolean;
    MintAddress: string;
    Name: string;
    Symbol: string;
}

export interface TokenSupplyUpdate {
    Currency: Currency;
    Marketcap: string;
}

export type TopTokenMarketCapResponse = {
    TokenSupplyUpdate: TokenSupplyUpdate;
}[];

export interface PumpVolumeMetadata {
    token_mint_address: string;
    side: 'buy' | 'sell';
    time_1h_ago: string;
}

export interface TokenSupplyUpdateWithUSD {
    Currency: {
        MintAddress: string;
        Name: string;
        Symbol: string;
    };
    PostBalanceInUSD: string;
}

export interface SolanaData {
    'data.Solana.liquidity': any[];
    'data.Solana.marketcap': {
        TokenSupplyUpdate: TokenSupplyUpdateWithUSD;
    }[];
}

export interface TokenVolumeMarketcapResponse {
    metadata: PumpVolumeMetadata;
    data: SolanaData[];
}


export interface TradeCurrency {
    MintAddress: string;
    Name: string;
    Symbol: string;
}

export interface Dex {
    ProgramAddress: string;
    ProtocolFamily: string;
    ProtocolName: string;
}

export interface Market {
    MarketAddress: string;
}

export interface Side {
    Currency: TradeCurrency;
}

export interface Trade {
    Currency: TradeCurrency;
    Dex: Dex;
    Market: Market;
    Side: Side;
    end: number;
    min5: number;
    start: number;
}

export interface TokenInfoResponse {
    Trade: Trade;
    buy_volume: string;
    buy_volume_5min: string;
    buyers: string;
    buyers_5min: string;
    buys: string;
    buys_5min: string;
    makers: string;
    makers_5min: string;
    sell_volume: string;
    sell_volume_5min: string;
    sellers: string;
    sellers_5min: string;
    sells: string;
    sells_5min: string;
    traded_volume: string;
    traded_volume_5min: string;
    trades: string;
    trades_5min: string;
}

