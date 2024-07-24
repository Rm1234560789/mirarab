import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getOneIslomBuxoro} from "../../reducer/buxoroReducer.js";
import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import "../../styles/OneBuxoroIslom.css"

function OneBuxoroIslom(props) {
    const {id} = useParams()
    const dispatch = useDispatch();
    const {oneIslomBuxoro} = useSelector(state => state.buxoroReducer);
    useEffect(() => {
        dispatch(getOneIslomBuxoro(id))
    }, []);

    console.log(oneIslomBuxoro)
    return (
        <div className="buxoro-islom1">
            <Header/>
            <div className={"wrapper main-box-buxoro1"}>
                {
                    <div className="buxoro-box1">
                        <img className="buxoro-img1" style={{marginRight: "20px"}}
                             src={`http://localhost:8080/api/files/img?name=${oneIslomBuxoro.img}`}
                             alt=""/>
                        <h4 className="text-h41">{oneIslomBuxoro.title}</h4>
                        <p className="text-p1">{oneIslomBuxoro.description}</p>
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