import axios from 'axios';
import React, { useContext, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router';
import { getCars } from '../../apis/Endpoints';
import CurrencyContext from '../../context/CurrencyContext';
import CurrentCurrency from '../CurrentCurrency/CurrentCurrency';

const AddCar = () => {

    const make = useRef();
    const model = useRef();
    const year = useRef();
    const price = useRef();
    const navigate = useNavigate();
    const { currency, setCurrency } = useContext(CurrencyContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(getCars, {
            make: make.current.value,
            model: model.current.value,
            year: year.current.value,
            price: currency === "USD" ? price.current.value : price.current.value / 0.92
        }).then((res) => {
            navigate("/cars")
        })
    }


    const handleCurrencyChange = () => {
        // Currently on EURO {state is only changed to usd not value}
        if (currency === "USD") {
            console.log("to_usd")
            price.current.value = price.current.value / 0.92
        }

        // Currently on USD {state is only changed to euro not value}
        if (currency === "EURO") {
            console.log("to_euro")
            price.current.value = price.current.value * 0.92
        }
    }

    useEffect(() => {
        handleCurrencyChange()
    }, [currency])

    return (
        <>
            <CurrentCurrency />
            <div className="NewProduct">
                <form  >
                    <h1>Add Car</h1>

                    <label>Make</label>
                    <input type="text"
                        ref={make}
                        label={'make'}
                        name={'make'}
                    />

                    <label>Model</label>
                    <input type="text"
                        label={'model'}
                        name={'model'}
                        ref={model}
                    />

                    <label>Year</label>
                    <input type="text"
                        label={'year'}
                        name={'year'}
                        ref={year}
                    />



                    <label>Price in {currency}</label>
                    <input type="number"
                        label={'Price'}
                        name={'Price'}
                        ref={price}
                    />
                    <button onClick={e => handleSubmit(e)}>Add Car </button>

                </form>
            </div>
        </>
    )
}

export default AddCar