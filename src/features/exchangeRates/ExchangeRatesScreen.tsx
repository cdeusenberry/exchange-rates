import { useEffect } from 'react';

import { useExchangeRates } from './lib'
import ExchangeRatesDisplay from './components/ExchangeRatesDisplay';

const ExchangeRateScreen = () => {
    const {data: exchangeRates, isFetching} = useExchangeRates();

    // useEffect(() => {
    //     console.log(exchangeRates);
    // }, [exchangeRates])

    if (isFetching) {
        return (
            <p className="read-the-docs">
                Fetching Data!
            </p>
        )
    }

    if (!exchangeRates) {
        return (
            <p className="read-the-docs">
                No Exchange Rates!
            </p>
        )
    }

    return(
        <div className="App">
            <ExchangeRatesDisplay exchangeRates={exchangeRates} />
        </div>
    )
}

export default ExchangeRateScreen;