import React, {useEffect} from 'react';
import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import {getTurliMavzular} from "../../reducer/turliMavzularReducer.js";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import "../../styles/BuxoroIslom.css";

function TurliMavzuUser(props) {

    const dispatch = useDispatch();
    const {turliMavzular} = useSelector((state) => state.turliMavzularReducer);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getTurliMavzular())
    }, []);
    return (
        <div>
            <Header/>
            <div className="wrapper main-box-buxoro">
                <h2 className="title-buxoro">Turli mavzular</h2>
                <div className="buxoro-boxes">
                    {turliMavzular.map((item, index) => (
                        <div key={index}
                             className="buxoro-box">
                            <img className="buxoro-img" src={`http://localhost:8080/api/files/img?name=${item.img}`}
                                 alt=""/>
                            <div className="box-text">
                                <h4 className="text-h4" style={{textDecoration:"none"}}>{item.title}</h4>
                                <p className="text-p">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div style={{marginTop:"30px"}}>
                <Footer/>
            </div>
        </div>
    );
}

export default TurliMavzuUser;