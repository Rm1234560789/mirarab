import React, {useEffect} from 'react';
import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import {get} from "../../reducer/ustozReducer.js";
import {useDispatch, useSelector} from "react-redux";
import "../../styles/UstozlarMinbari.css";


function UstozlarMinbari(props) {
    const dispatch = useDispatch()
    const {ustoz} = useSelector((state) => state.ustozReducer);

    useEffect(() => {
        dispatch(get());
    }, [dispatch]);
    return (
        <div>
            <Header/>
            <div className={"wrapper"} style={{display: "flex", flexDirection: "column", gap: "30px"}}>
                    <div className={"ustozlar-minbar"}>
                        <h1 style={{textAlign:"center"}}>Ustozlar Minbari</h1>
                        <div className={"card4"}>
                            {
                                ustoz.map((item4, index) =>
                                    <div key={index} className={"minbarCard"}>
                                        <div className={"minbarCardImg"}>
                                            <img src={`http://localhost:8080/api/files/img?name=${item4.img}`} alt=""/>
                                        </div>
                                        <div className={"minbarCardText"}>
                                            <p>{item4.name}</p>
                                            <h3>{item4.description}</h3>
                                        </div>
                                    </div>)
                            }
                        </div>
            </div>
          </div>
            <Footer/>
        </div>
    );
}

export default UstozlarMinbari;