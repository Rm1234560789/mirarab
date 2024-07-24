import React, { useEffect } from 'react';
import Header from "../../components/Header.jsx";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../components/Footer.jsx";
import { getIslom } from "../../reducer/buxoroReducer.js";
import "../../styles/BuxoroIslom.css";
import {useNavigate} from "react-router-dom";

function BuxoroIslom(props) {
    const dispatch = useDispatch();
    const { islom } = useSelector(state => state.buxoroReducer);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getIslom());
    }, [dispatch]);

    return (
        <div className="buxoro-islom">
            <Header />
            <div className="wrapper main-box-buxoro">
                <h2 className="title-buxoro">Buxoro islom madaniyati poytaxti</h2>
                <div className="buxoro-boxes">
                    {islom.map((item, index) => (
                        <div onClick={()=>navigate(`/buxoro/islom/poytaxti/${item.id}`)} key={index} className="buxoro-box">
                            <img className="buxoro-img" src={`http://localhost:8080/api/files/img?name=${item.img}`} alt="" />
                            <div className="box-text">
                                <h4 className="text-h4">{item.title}</h4>
                                <p className="text-p">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div style={{ marginTop: "30px" }}>
                <Footer />
            </div>
        </div>
    );
}

export default BuxoroIslom;
