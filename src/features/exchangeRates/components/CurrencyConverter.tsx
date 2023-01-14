import {useState} from 'react';

import { ExchangeRate } from '../lib'

const CurrencyConverter = ({exchangeRates}: {exchangeRates: ExchangeRate[]}) => {
    const [amount, setAmount] = useState(0);
    const [code, setCode] = useState(exchangeRates[0].code)
    const [result, setResult] = useState('0.00');

    const handleAmountChange = (rawValue: string) => {
        let numValue = Number(rawValue);

        if (Number.isNaN(numValue)) {
            numValue = 0;
        }

        setAmount(numValue);
    }

    const calculateExchange = () => {
        const selectedRate = exchangeRates.find(rate => rate.code === code);
        if (!selectedRate) {
            return;
        }

        const converted = amount / selectedRate.rate * selectedRate.amount;

        setResult(converted.toFixed(2).toString())
    }

    return (
        <div className="space-y-2">
            <span className="space-x-2">
                <span>Amount:</span>
                <input className="rounded px-1" type='number' name='amount' value={amount} onChange={e => handleAmountChange(e.target.value)}/>
            </span>
            <span className="space-x-2 ml-2">
                <span>Currency:</span>
                <select className="rounded" id='currency' value={code} onChange={e => setCode(e.target.value)}>
                    {exchangeRates.map(rate => <option value={rate.code}>{rate.code}</option>)}
                </select>
            </span>
            <button className="bg-green-500 hover:bg-green-700 text-white m-8 py-2 px-2 rounded" type='submit' onClick={() => calculateExchange()}>Calculate</button>
            <div className="m-0 space-x-2">
                <span>Result:</span>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default CurrencyConverter