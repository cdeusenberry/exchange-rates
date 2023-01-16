import { useExchangeRates } from "./lib"
import ExchangeRatesDisplay from "./components/ExchangeRatesDisplay";
import CurrencyConverter from "./components/CurrencyConverter";

const ExchangeRateScreen = () => {
    const {data: exchangeRates, isFetching} = useExchangeRates();

    if (isFetching) {
        return (
            <p>
                Fetching Data!
            </p>
        )
    }

    if (!exchangeRates) {
        return (
            <p>
                No Exchange Rates!
            </p>
        )
    }

    return(
        <div className="flex justify-center p-4">
            <div className="flex-col max-w-fit justify-center space-y-2 rounded bg-gray-300 p-2 shadow-md">
                <ExchangeRatesDisplay exchangeRates={exchangeRates} />
                <CurrencyConverter exchangeRates={exchangeRates} />
            </div>
        </div>
    )
}

export default ExchangeRateScreen;