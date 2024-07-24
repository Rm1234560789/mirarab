import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getObida} from "../../reducer/obidaReducer.js";
import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import {useNavigate} from "react-router-dom";
import "../../styles/BuxoroIslom.css";

function ObidaUser(props) {
    const dispatch = useDispatch();
    const {obida} = useSelector((state) => state.obidaReducer);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getObida());
    }, [dispatch]);

    return (
        <div className="buxoro-islom">
            <Header/>
            <div className="wrapper main-box-buxoro">
                <h2 className="title-buxoro">Buxoro obidalari</h2>
                <div className="buxoro-boxes">
                    {obida.map((item, index) => (
                        <div onClick={() => navigate(`/buxoro/obidalari/${item.id}`)} key={index}
                             className="buxoro-box">
                            <img className="buxoro-img" src={`http://localhost:8080/api/files/img?name=${item.img}`}
                                 alt=""/>
                            <div className="box-text">
                                <h4 className="text-h4">{item.title}</h4>
                                <p className="text-p">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div style={{marginTop: "30px"}}>
                <Footer/>
            </div>
        </div>
    );
}

export default ObidaUser;