import {useState} from 'react';

import { ExchangeRate } from '../lib'

const CurrencyConverter = ({exchangeRates}: {exchangeRates: ExchangeRate[]}) => {
    const [amount, setAmount] = useState(0);
    const [code, setCode] = useState(exchangeRates[0].code)
    const [result, setResult] = useState('');

    const handleAmountChange = (rawValue: string) => {
        let numValue = Number(rawValue);

        if (Number.isNaN(numValue)) {
            numValue = 0;
        }

        setAmount(numValue);
    }

    const calculateExchange = () => {
        if (amount === 0) {
            return;
        }

        const selectedRate = exchangeRates.find(rate => rate.code === code);
        if (!selectedRate) {
            return;
        }

        const converted = amount / selectedRate.rate * selectedRate.amount;

        setResult(converted.toFixed(2).toString())
    }

    return (
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', width: '500px', padding: '30px'}}>
            <label>
                Amount:
                <input type='text' name='amount' value={amount} onChange={e => handleAmountChange(e.target.value)}/>
            </label>
            <label>
                Currency:
                <select id='currency' value={code} onChange={e => setCode(e.target.value)}>
                    {exchangeRates.map(rate => <option value={rate.code}>{rate.code}</option>)}
                </select>
            </label>
            <button type='submit' onClick={() => calculateExchange()}>Calculate</button>
            <div>{'Result: ' + result}</div>
        </div>
    )
}

export default CurrencyConverter