import React from "react";
import CurrencyInput from "../CurrencyInput/CurrencyInput";
import {useEffect, useState} from "react";
import axios from "axios";
import {fixedNumber} from "../../helpers/fixedNumber";
import {API_KEY} from "../../api";
import './ConverterCard.scss'

const ConverterCard = () => {
    const [amounts, setAmounts] = useState({
        one: 1,
        two: 1
    })
    const [currencies, setCurrencies] = useState({
        one: 'USD',
        two: 'USD'
    })

    const [rates, setRates] = useState([])
    const handleInputChange = (inputToHandleNumber) => (value, type) => {
        const arr = ['one', 'two']
        const opposite = arr.filter(el => inputToHandleNumber !== el)
        if (type === 'input') {
            setAmounts({
                [inputToHandleNumber]: value,
                [opposite]: fixedNumber(value * rates[currencies[opposite]] / rates[currencies[inputToHandleNumber]])
            })
        } else {
            setAmounts({
                ...amounts,
                [opposite]: fixedNumber(amounts[inputToHandleNumber] * rates[currencies[opposite]] / rates[value])
            })
            setCurrencies(
                {
                    ...currencies,
                    [inputToHandleNumber]: value,
                })
        }
    }

    useEffect(() => {
        axios.get(`https://api.fastforex.io/fetch-all?&api_key=${API_KEY}`).then(res => setRates(res.data.results))
    }, [])

    return (
        <div className='converterCard'>
            <CurrencyInput
                currencies={Object.keys(rates)}
                amount={amounts.one}
                currency={currencies.one}
                onInputChange={handleInputChange('one')}>
            </CurrencyInput>
            <CurrencyInput
                currencies={Object.keys(rates)}
                amount={amounts.two}
                currency={currencies.two}
                onInputChange={handleInputChange('two')}>
            </CurrencyInput>
        </div>
    )
}


export default ConverterCard