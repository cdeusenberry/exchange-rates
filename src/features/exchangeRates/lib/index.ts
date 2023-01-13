export type ExchangeRate = {
    country: string,
    currency: string,
    amount: number,
    code: string,
    rate: number
}

const corsAnywhereUrl = 'http://localhost:8080/'
const exchangeRateUrl = 'https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt';

// HOW TO MAKE THIS WORK!!!
// Open a terminal at the root folder of this project and run yarn cors
// This will run a local proxy to prevent cors pain.
export const getExchangeRates = async () => {
    const response = await fetch(corsAnywhereUrl + exchangeRateUrl
        );

    const text = await response.text();
    return text;
}
