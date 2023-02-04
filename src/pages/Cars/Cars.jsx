import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { getCars } from '../../apis/Endpoints'
import Car from '../../components/Car/Car'
import CarDetail from '../../components/CarDetail/CarDetail'
import CurrentCurrency from '../../components/CurrentCurrency/CurrentCurrency'
import CurrencyContext from '../../context/CurrencyContext'

const Cars = () => {

    const [cars, setCars] = useState([])

    const fetchCars = () => {
        axios.get(getCars)
            .then((res) => {
                setCars(res.data)
            })
    }

    useEffect(() => {
        fetchCars()
    }, [])

    if (cars) {
        return (
            <>
                <CurrentCurrency />
                <div className='cars-container'>
                    {cars.map((car, id) => {
                        return <Car
                            key={id}
                            carId={car.id}
                            make={car.make}
                            model={car.model} />
                    })}
                </div>
                <CarDetail />
            </>

        )
    } else {
        <div className='cars-container'>
            <p>Loading ...</p>
        </div>
    }
}

export default Cars