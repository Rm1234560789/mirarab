import React, {useEffect} from 'react';
import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import {useDispatch, useSelector} from "react-redux";
import "./New_News.css"
import {useNavigate} from "react-router-dom";
import {getDunyo} from "../../reducer/dunyoYangiliklariReducer.js";
function Dunyo_Yangiliklari() {
    const dispatch = useDispatch();
    const {dunyo} = useSelector((state) => state.dunyoYangiliklariReducer);

    useEffect(() => {
        dispatch(getDunyo())
    }, [dispatch]);
    const navigate = useNavigate()

    function newNews(id) {
        console.log(id)
        navigate(`/world/news/${id}`)
    }

    return (
        <div>
            <Header/>
            <div className={"newnews"}>
                <div className={"wrapper"}>
                    <p className={"uzb"}>Dunyo yangiliklari</p>
                    <div className={"containers"}>
                        {dunyo.map((item, index) => (
                            <div style={{cursor:"pointer"}} onClick={()=>newNews(item.id)}>
                                <img width={632} height={289} className={"img-news"}
                                     src={`http://localhost:8081/api/files/img?name=${item.img}`} alt=""/>
                                <p className={"text-news"}>{item.title}</p>
                            </div>

                        ))}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>


    );
}

export default Dunyo_Yangiliklari;