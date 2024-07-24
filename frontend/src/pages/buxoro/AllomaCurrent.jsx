import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import "../../styles/OneBuxoroIslom.css"
import {getAllomaget} from "../../reducer/allomaReducer.js";

function OneBuxoroIslom(props) {
    const {id} = useParams()
    const dispatch = useDispatch();
    const {allomaget} = useSelector(state => state.allomaReducer);
    useEffect(() => {
        dispatch(getAllomaget(id))
    }, []);

    return (
        <div className="buxoro-islom1">
            <Header/>
            <div className={"wrapper main-box-buxoro1"}>
                {
                    <div className="buxoro-box1">
                        <img className="buxoro-img1" style={{marginRight: "20px"}}
                             src={`http://localhost:8080/api/files/img?name=${allomaget.img}`}
                             alt=""/>
                        <h4 className="text-h41">{allomaget.title}</h4>
                        <p className="text-p1">{allomaget.description}</p>
                    </div>
                }
            </div>
            <div style={{marginTop:"30px"}}>
                <Footer/>
            </div>
        </div>
    );
}

export default OneBuxoroIslom;