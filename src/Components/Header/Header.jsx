import {useEffect, useState} from "react";
import axios from "axios";
import {fixedNumber} from "../../helpers/fixedNumber";
import {API_KEY} from "../../api";
import './Header.scss'

const Header = () => {
    const [staticCurrency, setStaticCurrency] = useState({
        EUR: 0,
        USD: 0
    })
    const setData = (values) => {
        setStaticCurrency({EUR: 1 / values.EUR, USD: 1 / values.USD})
    }

    useEffect(() => {
        axios.get(`https://api.fastforex.io/fetch-all?from=UAH&api_key=${API_KEY}`)
            .then(response => {
                setData(response.data.results)
            })
    }, [])

    return (
        <header>
            <h3>Currency converter</h3>
            <div className="currency">
                <p>USD: {fixedNumber(staticCurrency.USD)}</p>
                <p>EUR: {fixedNumber(staticCurrency.EUR)}</p>
            </div>
        </header>
    )
}
export default Header