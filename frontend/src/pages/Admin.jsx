import React from 'react';
import './Admin.css';
import AdminHeader from "../components/AdminHeader.jsx";
import {Outlet} from "react-router-dom";

function Admin() {
    return (
        <div className="App">
            <AdminHeader />
            <Outlet/>
        </div>
    );
}

export default Admin;
