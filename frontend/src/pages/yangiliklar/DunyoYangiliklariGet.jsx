import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';
import { getInfo } from '../../reducer/dunyoYangiliklariIdReducer.js';
import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import "./NewsGet.css";
import { getDunyo } from "../../reducer/dunyoYangiliklariReducer.js";
import {getNewNews} from "../../reducer/newnewsReducer.js";

function Dunyo_YangiliklariGet() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const info = useSelector((state) => state.worldnewsid?.info);
    const {dunyo} = useSelector((state) => state.dunyoYangiliklariReducer);
const navigate = useNavigate()
    useEffect(() => {
        if (id) {
            dispatch(getInfo(id));
            dispatch(getDunyo())
        }
    }, [id, dispatch]);
    function newNews(id) {
        console.log(id)
        navigate(`/world/news/${id}`)
    }
    return (
        <div>
            <Header/>
            <div className="newnews">
                {info ? (
                    <div className={"wrapper"}>
                        <div className={"gap-3 div2"} style={{float: "left"}}>
                            <img width={777} height={618} className={"img-news"}
                                 src={`http://localhost:8081/api/files/img?name=${info.img}`} alt=""/>
                        </div>
                        <div>
                            <h3 style={{paddingTop: "40px"}}>Sarlavha</h3>
                            <p style={{wordBreak: "break-all"}}>{info.description}</p>
                        </div>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>

            <p className={"uzb"} style={{marginBottom: "40px"}}>Mavzuga oid</p>
            <div className={"newnews"}>
                <div className={"wrapper"}>
                    <div className={"containers"}>
                        {dunyo.map((item, index) => (
                            <div style={{cursor: "pointer"}} onClick={() => newNews(item.id)}>
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

export default Dunyo_YangiliklariGet;
