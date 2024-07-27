import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getQabul} from "../reducer/qabulReducer.js";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import "../styles/QabulUser.css"

function QabulUser(props) {
    const dispatch = useDispatch();
    const {qabul} = useSelector((state) => state.qabulReducer);

    useEffect(() => {
        dispatch(getQabul());
    }, []);
    return (
        <div>
            <Header/>
            <div className={"currentQadamjo1"}>
                {
                    qabul.map((item, index) => (
                        <div className={"wrapper"} key={index}>
                            <div style={{display: "flex", justifyContent: "center"}}>
                                <img className={"currentQadamjoImg1"}
                                     src={`http://localhost:8080/api/files/img?name=${item.img}`}/>
                            </div>
                            <div style={{marginTop: "80px"}}>
                                <p className={"qadamjoTitle1"}>{item.name}</p>
                                <p className={"qadamjoDesc1"} style={{wordBreak:"break-all"}}>{item.title}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <Footer/>
        </div>
    );
}

export default QabulUser;