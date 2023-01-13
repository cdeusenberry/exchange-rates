import { useExchangeRates } from './lib'
import ExchangeRatesDisplay from './components/ExchangeRatesDisplay';
import CurrencyConverter from './components/CurrencyConverter';

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
            <CurrencyConverter exchangeRates={exchangeRates} />
        </div>
    )
}

export default ExchangeRateScreen;