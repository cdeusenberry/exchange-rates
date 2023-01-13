import { useEffect } from 'react';

import { useExchangeRates } from './lib'

const ExchangeRateScreen = () => {
    const {data: exchangeRates, isLoading, isFetching} = useExchangeRates();

    useEffect(() => {
        console.log(exchangeRates);
    }, [exchangeRates])

    return(
        <p className="read-the-docs">
        Start of Czech Exchange Rate app.
      </p>
    )
}

export default ExchangeRateScreen;