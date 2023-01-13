import { ExchangeRate } from "./types";

const corsAnywhereUrl = 'http://localhost:8080/'
const exchangeRateUrl = 'https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt';

// HOW TO MAKE THIS WORK!!!
// Open a terminal at the root folder of this project and run yarn cors
// This will run a local proxy to prevent cors pain.
const getExchangeRatesText = async () => {
    const response = await fetch(corsAnywhereUrl + exchangeRateUrl
        );

    const text = await response.text();
    return text;
}

export const getExchangeRates = async (): Promise<ExchangeRate[]> => {
    const rawText = await getExchangeRatesText();

    const rawExchangeRates = rawText.trim().split('\n');
    if (rawExchangeRates.length < 3) {
        throw new Error('Invalid exchange rates')
    }

    // Remove the date and column names
    rawExchangeRates.shift();
    rawExchangeRates.shift();

    return rawExchangeRates.map(rawExchangeRate => parseExchangeRate(rawExchangeRate))
}

const parseExchangeRate = (rawExchangeRate: string): ExchangeRate => {
    const chunks = rawExchangeRate.split('|');
    if (chunks.length < 5) {
        throw new Error('Invalid exchange rate');
    }

    return {
        country: chunks[0],
        currency: chunks[1],
        amount: Number(chunks[2]),
        code: chunks[3],
        rate: Number(chunks[4])
    }
}

export default {
    getExchangeRates,
}
