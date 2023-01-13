import { ExchangeRate } from '../lib'

const ExchangeRatesDisplay = ({exchangeRates}: {exchangeRates: ExchangeRate[]}) => {
    return(
        <div style={{ width: '800px'}}>
            <Header />
            <div style={{ height: '500px', overflowY: 'scroll' }}>
                
                {exchangeRates.map(exchangeRate => <ExchangeRateItem key={exchangeRate.code} exchangeRate={exchangeRate}/>)}
            </div>
        </div>
    )
}

const Header = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', padding: 10}}>
            <div>Country</div>
            <div>Currency</div>
            <div>Amount</div>
            <div>Code</div>
            <div>Rate</div>
        </div>
    )
}

const ExchangeRateItem = ({exchangeRate}: {exchangeRate: ExchangeRate}) => {
    return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', padding: 5}}>
            <div>{exchangeRate.country}</div>
            <div>{exchangeRate.currency}</div>
            <div>{exchangeRate.amount}</div>
            <div>{exchangeRate.code}</div>
            <div>{exchangeRate.rate}</div>
        </div>
    )
}

export default ExchangeRatesDisplay;