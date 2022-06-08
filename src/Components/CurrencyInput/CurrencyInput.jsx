import PropTypes from 'prop-types'
import './CurrencyInput.scss'

const CurrencyInput = (props) => {
    const ratesList = () => {
        return props.currencies.map((currency => <option value={currency}>{currency}</option>))
    }
    return (
        <div className='currency-input_container'>
            <input type="number" value={props.amount} onChange={e => props.onInputChange(e.target.value, 'input')}/>
            <select value={props.currency} onChange={e => props.onInputChange(e.target.value, 'currency')}>
                {ratesList()}
            </select>
        </div>
    )
}

CurrencyInput.propTypes = {
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    currencies: PropTypes.array,
    onInputChange: PropTypes.func,

}

export default CurrencyInput