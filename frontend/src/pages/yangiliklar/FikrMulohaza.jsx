import React, {useEffect} from 'react';
import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import {useDispatch, useSelector} from "react-redux";
import "./SavolJavob.css"
import {useNavigate} from "react-router-dom";
import {getFikr} from "../../reducer/fikrmulohazaReducer.js";
function FikrMulohaza() {
    const dispatch = useDispatch();
    const {fikrmulohaza} = useSelector((state) => state.fikrmulohazaReducer);

    useEffect(() => {
        dispatch(getFikr())
    }, [dispatch]);

    return (
        <div>
            <Header/>
            <div className={"newnews"}>
                <div className={"wrapper"}>
                    <p className={"uzb"}>Fikr-Mulohaza</p>
                    <div className={"savol"}>
                        {fikrmulohaza.map((item, index) => (
                            <div style={{display:"flex",gap:"21px",marginBottom:"77px"}}>
                                <img width={632} height={336}
                                     src={`http://localhost:8081/api/files/img?name=${item.img}`} alt=""/>
                                <div>
                                    <p className={"text-news"}>{item.title}</p>
                                    <p>{item.description}</p>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>


    );
}

export default FikrMulohaza;