import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Stores from '../pages/Stores';
import Portal from '../pages/Portal';
import Institute from '../pages/Institute';

type IRoutes = {
    path: string;
    element: any;
};

const routesData: IRoutes[] = [
    {
        path: "/",
        element: Home,
    },
    {
        path: "/stores",
        element: Stores,
    },
    {
        path: "/portal",
        element: Portal,
    },
    {
        path: "/institute",
        element: Institute,
    }
];

export default function CustomRoutes() {
    return (
        <Routes>
            {routesData.map((route, index) => (
                <Route key={index} path={route.path} element={<route.element />} />
            ))}
        </Routes>
    )
}