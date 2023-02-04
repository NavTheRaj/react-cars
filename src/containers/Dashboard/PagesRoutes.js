import { Route, Routes, Navigate } from "react-router";
import AddCar from "../../components/AddCar/AddCar";
import CarDetail from "../../components/CarDetail/CarDetail";
import EditCar from "../../components/EditCar/EditCar";
import Cars from "../../pages/Cars/Cars";

const PagesRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate replace to="/cars" />} />
            <Route path="cars" element={<Cars />} >
                <Route path=":carId" element={<CarDetail />} />
            </Route>

            <Route path="create-car" element={<AddCar />} />
            <Route path="edit-car" element={<EditCar />} />
        </Routes>
    );
}

export default PagesRoutes