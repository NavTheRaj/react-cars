import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getCarById } from '../../apis/Endpoints'
import CurrencyContext from '../../context/CurrencyContext'

const CarDetail = () => {

    const [carData, setCarData] = useState()
    const { currency } = useContext(CurrencyContext)

    const { carId } = useParams()

    const fetchCarById = () => {
        axios.get(getCarById(carId))
            .then((res) => {
                setCarData(res.data)
            })
    }

    useEffect(() => {
        fetchCarById()
    }, [carId])

    if (!carData) {
        return <div className='global-body-container' >No Data</div >
    }


    return (
        <div className='global-body-container'>
            <strong>Car Detail</strong>
            <div>
                <strong><p>{carData.make}</p></strong>
                <p><strong>Model :</strong> {carData.model}</p>
                <p><strong>Year :</strong>{carData.year}</p>
                <p><strong>Price :</strong>
                    {currency === "USD" ? "$" + carData.price : "€" + carData.price * 0.92}
                </p>
            </div>
        </div>
    )
}
export default CarDetail