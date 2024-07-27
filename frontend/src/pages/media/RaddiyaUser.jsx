import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getVideo} from "../../reducer/raddiyavdReducer.js";
import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import "../../styles/RadiyaUser.css"

function RaddiyaUser(props) {
    const dispatch = useDispatch();
    const {raddiyaVd} = useSelector((state) => state.raddiyavdReducer);

    useEffect(() => {
        dispatch(getVideo());
    }, [dispatch]);

    return (
        <div className="radiya-user">
            <Header />
            <div className="wrapper main-box-radiya">
                <h1 className={"text"}>Raddiyalar</h1>
                <div className={"raddiya-boxes"}>
                    {raddiyaVd.map((item, index) => (
                        <div className="radiya-box" key={index}>
                            <video style={{width:"100%",height:"308px"}} controls src={`http://localhost:8080/api/files/video?name=${item.url}`}></video>
                            <h4 className="radiya-text-h4">{item.name}</h4>
                        </div>
                    ))}
                </div>

            </div>
            <div style={{marginTop:"100px"}}>
                <Footer />
            </div>
        </div>
    );
}

export default RaddiyaUser;
