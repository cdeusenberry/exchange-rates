import { useEffect } from 'react';

import { getExchangeRates } from './lib'

const ExchangeRateScreen = () => {
    // TODO - for testing, remove this.
    useEffect(() => {
        getExchangeRates()
        .then(text => console.log(text))
        .catch(err => console.log(err));
    }, [])

    return(
        <p className="read-the-docs">
        Start of Czech Exchange Rate app.
      </p>
    )
}

export default ExchangeRateScreen;