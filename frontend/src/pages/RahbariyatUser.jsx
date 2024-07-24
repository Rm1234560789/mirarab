import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import {getRahbariyat} from "../reducer/rahbariyatReducer.js";
import "../styles/RahbariyatUser.css"

function RahbariyatUser(props) {
    const dispatch = useDispatch();
    const {rahbariyat} = useSelector((state) => state.rahbariyatReducer);

    useEffect(() => {
        dispatch(getRahbariyat());
    }, [dispatch]);

    return (
        <div className={"rahbariyatUser"}>
            <Header/>
            <div className={"wrapper"} style={{display: "flex", flexDirection: "column", gap: "30px"}}>
                <div className={"main-box"}>
                    {
                        rahbariyat && rahbariyat.length > 0 &&
                        <div className={"main-img-div"}>
                            <img src={"http://localhost:8080/api/files/img?name=" + rahbariyat[0].img}
                                 className={"main-img"} alt=""/>
                            <div className={"main-text"}>
                                <h4>
                                    {
                                        rahbariyat[0].title
                                    }
                                </h4>
                                <h4>
                                    {
                                        rahbariyat[0].name
                                    }
                                </h4>

                            </div>
                        </div>
                    }
                    <div className={"box-leadership"}>
                        {rahbariyat && rahbariyat.slice(1).map((item, index) => (
                            <div key={index} className="img-leader-div">
                                <img src={`http://localhost:8080/api/files/img?name=${item.img}`}
                                     className={"img-leader"}
                                     alt=""/>
                                <div className={'text-leader'}>
                                    <h4>{item.title}</h4>
                                    <h4>{item.name}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div style={{marginTop:"40px"}}>
                <Footer/>
            </div>
        </div>
    );
}

export default RahbariyatUser;
