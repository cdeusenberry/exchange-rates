import { ExchangeRate } from "../lib"

const ExchangeRatesDisplay = ({exchangeRates}: {exchangeRates: ExchangeRate[]}) => {
    return(
        <div className="bg-gray-100 rounded shadow-md">
            <Header />
            <div className="h-96 overflow-y-auto">
                {exchangeRates.map(exchangeRate => <ExchangeRateItem key={exchangeRate.code} exchangeRate={exchangeRate}/>)}
            </div>
        </div>
    )
}

const Header = () => {
    return (
        <div className="flex row-auto justify-evenly">
            <span className="w-24 mx-2">Country</span>
            <span className="w-24 mx-2">Currency</span>
            <span className="w-24 mx-2">Amount</span>
            <span className="w-24 mx-2">Code</span>
            <span className="w-24 mx-2">Rate</span>
        </div>
    )
}

const ExchangeRateItem = ({exchangeRate}: {exchangeRate: ExchangeRate}) => {
    return (
        <div className="flex row-auto justify-evenly rounded border-2 border-gray-100 hover:bg-white hover:border-2 hover:border-solid hover:border-gray-800">
            <span className="w-24 mx-2">{exchangeRate.country}</span>
            <span className="w-24 mx-2">{exchangeRate.currency}</span>
            <span className="w-24 mx-2">{exchangeRate.amount}</span>
            <span className="w-24 mx-2">{exchangeRate.code}</span>
            <span className="w-24 mx-2">{exchangeRate.rate}</span>
        </div>
    )
}

export default ExchangeRatesDisplay;