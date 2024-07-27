import React, {useEffect} from 'react';
import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import {useDispatch, useSelector} from "react-redux";
import {getNewNews} from "../../reducer/newnewsReducer.js";
import "./New_News.css"
import {useNavigate} from "react-router-dom";
function New_News() {
    const dispatch = useDispatch();
    const {newnews} = useSelector((state) => state.newnewsReducer);

    useEffect(() => {
        dispatch(getNewNews())
    }, [dispatch]);
    const navigate = useNavigate()

    function newNews(id) {
        console.log(id)
        navigate(`/new/news/${id}`)
    }

    return (
        <div>
            <Header/>
            <div className={"newnews"}>
                <div className={"wrapper"}>
                    <p className={"uzb"}>O’zbekiston yangiliklari</p>
                    <div className={"containers"}>
                        {newnews.map((item, index) => (
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

export default New_News;