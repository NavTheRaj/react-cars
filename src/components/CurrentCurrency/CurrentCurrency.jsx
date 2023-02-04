import React, { useContext } from 'react'
import CurrencyContext from '../../context/CurrencyContext'

const CurrentCurrency = () => {
    const { currency, setCurrency } = useContext(CurrencyContext)


    const handleCurrency = () => {
        if (currency === "USD") {
            setCurrency("EURO")
        } else {
            setCurrency("USD")
        }
    }

    return (
        <div>
            <strong>Current Currency:</strong><span className='currency-label'>{currency}</span>
            <button onClick={handleCurrency}>Change Currency</button>
        </div>
    )
}

export default CurrentCurrency