import React from 'react'
import { Link } from 'react-router-dom'

const Car = ({ carId, make, model }) => {
    return (
        <Link to={carId} >
            <div className='global-body-container'>
                <p>{make}</p>
                <p>{model}</p>
            </div>
        </Link >
    )
}

export default Car