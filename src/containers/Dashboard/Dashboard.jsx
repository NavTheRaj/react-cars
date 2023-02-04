import React from 'react'
import AddCar from '../../components/AddCar/AddCar'
import Car from '../../components/Car/Car'
import EditCar from '../../components/EditCar/EditCar'
import Cars from '../../pages/Cars/Cars'
import Header from '../Header/Header'
import PagesRoutes from './PagesRoutes'

const Dashboard = () => {
    return (
        <React.Fragment>
            <div className='header'>
                <Header />
            </div>
            <div className="Product">
                <PagesRoutes>
                    <Cars />
                    <Car />
                    <AddCar />
                    <EditCar />
                </PagesRoutes>
            </div>

        </React.Fragment>
    )
}

export default Dashboard