import {useState} from "react";

import { ExchangeRate } from "../lib"

const CurrencyConverter = ({exchangeRates}: {exchangeRates: ExchangeRate[]}) => {
    const [amount, setAmount] = useState<number>();
    const [code, setCode] = useState(exchangeRates[0].code)
    const [result, setResult] = useState("0.00");

    const handleAmountChange = (rawValue: string) => {
        if(rawValue === "") {
            setAmount(undefined);
            return;
        }

        let numValue: number | undefined = Number(rawValue);

        if (Number.isNaN(numValue)) {
            numValue = undefined;
        }

        setAmount(numValue);
    }

    const calculateExchange = () => {
        if (amount === undefined) {
            setResult("0.00");
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
        <div className="space-y-2">
            <span className="space-x-2">
                <span>Amount:</span>
                <input className="rounded px-1" type="number" name="amount" value={amount} onChange={e => handleAmountChange(e.target.value)}/>
            </span>
            <span className="space-x-2 ml-2">
                <span>Currency:</span>
                <select className="rounded" id="currency" value={code} onChange={e => setCode(e.target.value)}>
                    {exchangeRates.map(rate => <option value={rate.code}>{rate.code}</option>)}
                </select>
            </span>
            <button className="bg-green-500 hover:bg-green-700 text-white m-8 py-2 px-2 rounded" type="submit" onClick={() => calculateExchange()}>Calculate</button>
            <div className="m-0 space-x-2">
                <span>Result:</span>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default CurrencyConverter