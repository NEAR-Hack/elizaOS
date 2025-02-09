import {
    TokenInfoResponse,
    TokenHolderResponse,
    TokenDevHoldingResponse,
    TokenVolumeMarketcapResponse,
    TopTokenMarketCapResponse,
} from "./types";

const SERVER_URL = process.env.BACKEND_URL;

export const getTokenInformation = async (
    token_address: string
): Promise<TokenInfoResponse> => {
    try {
        const response = await fetch(
            `${SERVER_URL}/tools/pump-info/${token_address}`
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching token_address information:", error);
        throw error;
    }
};

export const getTokenTopHolders = async (
    token_address: string
): Promise<TokenHolderResponse> => {
    try {
        const response = await fetch(
            `${SERVER_URL}/tools/pumpfun-top-holders/${token_address}`
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching token_address top holders:", error);
        throw error;
    }
};

export const getTokenDevHolding = async (
    token_address: string,
    dev_address: string
): Promise<TokenDevHoldingResponse> => {
    try {
        const response = await fetch(
            `${SERVER_URL}/tools/pumpfun-dev-holding/${dev_address}/${token_address}`
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching dev holding token_address:", error);
        throw error;
    }
};

export const getTokenMarketcap = async (
    token_address: string
): Promise<TokenVolumeMarketcapResponse> => {
    try {
        const response = await fetch(
            `${SERVER_URL}/tools/pump-volume-marketcap/${token_address}`
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching token_address marketcap:", error);
        throw error;
    }
};

export const getTopTokenMarketcap =
    async (): Promise<TopTokenMarketCapResponse> => {
        try {
            const response = await fetch(`${SERVER_URL}/pump-top-market-cap`);

            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error fetching top token marketcap:", error);
            throw error;
        }
    };

