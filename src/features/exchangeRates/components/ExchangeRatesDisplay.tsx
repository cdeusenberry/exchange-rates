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
            <div style={{width: '100px'}}>Country</div>
            <div style={{width: '100px'}}>Currency</div>
            <div style={{width: '100px'}}>Amount</div>
            <div style={{width: '100px'}}>Code</div>
            <div style={{width: '100px'}}>Rate</div>
        </div>
    )
}

const ExchangeRateItem = ({exchangeRate}: {exchangeRate: ExchangeRate}) => {
    return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', padding: 5}}>
            <div style={{width: '100px'}}>{exchangeRate.country}</div>
            <div style={{width: '100px'}}>{exchangeRate.currency}</div>
            <div style={{width: '100px'}}>{exchangeRate.amount}</div>
            <div style={{width: '100px'}}>{exchangeRate.code}</div>
            <div style={{width: '100px'}}>{exchangeRate.rate}</div>
        </div>
    )
}

export default ExchangeRatesDisplay;