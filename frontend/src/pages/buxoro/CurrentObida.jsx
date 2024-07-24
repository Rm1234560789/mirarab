import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {fetchCurrentObida} from "../../reducer/obidaReducer.js";
import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import "../../styles/OneBuxoroIslom.css"

function CurrentObida(props) {
    const {id} = useParams()
    const dispatch = useDispatch();
    const {currentObida} = useSelector((state) => state.obidaReducer);
    useEffect(() => {
        dispatch(fetchCurrentObida(id))
    }, []);

    return (
        <div className="buxoro-islom1">
            <Header/>
            <div className={"wrapper main-box-buxoro1"}>
                {
                    <div className="buxoro-box1">
                        <img className="buxoro-img1" style={{marginRight: "20px"}}
                             src={`http://localhost:8080/api/files/img?name=${currentObida.img}`}
                             alt=""/>
                        <h4 className="text-h41">{currentObida.title}</h4>
                        <p className="text-p1">{currentObida.description}</p>
                    </div>
                }
            </div>
            <div style={{marginTop: "30px"}}>
                <Footer/>
            </div>
        </div>
    );
}

export default CurrentObida;