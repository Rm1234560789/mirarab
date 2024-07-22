import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getIzohlar, getMadrasa, getManaviyat, getMaqola, getNews, getProfessor, postIzoh} from '../reducer/newsReducer';
import {getVideo} from "../reducer/vdReducer.js";
import './News.css';
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useForm} from "react-hook-form";

function News() {
    const navigate = useNavigate();
    const {news, izohlar, maqola, madrasa, manaviyat, professor} = useSelector(state => state.newsReducer);
    const {video} = useSelector(state => state.vdReducer);
    const dispatch = useDispatch();
    const {register,reset,handleSubmit} = useForm()

    useEffect(() => {
        dispatch(getNews());
        dispatch(getMaqola());
        dispatch(getManaviyat());
        dispatch(getProfessor());
        dispatch(getMadrasa());
        dispatch(getIzohlar());
        dispatch(getVideo())
    }, [dispatch]);

    const getPdfFromDatabase = async (id) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/files/pdf/${id}`, {
                responseType: 'blob',
            });

            const fileURL = window.URL.createObjectURL(new Blob([response.data]));
            const fileLink = document.createElement('a');
            fileLink.href = fileURL;
            fileLink.setAttribute('download', 'file.pdf');
            document.body.appendChild(fileLink);
            fileLink.click();
        } catch (error) {
            console.error('Error fetching PDF file:', error);
        }
    };

    function handleNavigate(uuid) {

        navigate(`/news/${uuid}`)
    }

    function handleNavigates(uuid) {
        navigate(`/maqola/${uuid}`)
    }

    function mySubmit(params){
        dispatch(postIzoh({data:params,reset:reset}))
        console.log(params)
    }

    return (
        <div className="homeMain">
            <Header/>

            <div>

            </div>

            <div className={"wrapper"}>
                {
                    video.map((video) =>
                        <video className={"rasm"}
                               src={`http://localhost:8080/api/files/video?name=${video.url}`}
                        />)
                }
                <div className={"wrapper4"}>
                    <div className={"text"}>
                        <h1>Yangiliklar</h1>
                    </div>
                    <div className={"cards"}>
                        {
                            news.map((item, index) =>
                                <div onClick={() => handleNavigate(item.id)} key={index} className="card">
                                    <div className="card-img">
                                        <img src={`http://localhost:8080/api/files/img?name=${item.img}`} alt=""/>
                                    </div>
                                    <div className="card-footer">
                                        <div style={{paddingBlock: "14px"}}>
                                            <h5>{item.description}</h5>
                                            <p className={"p"}>{item.date.toString().substring(0, 10)}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className={"text"}>
                        <h1>Maqolalar</h1>
                    </div>
                    <div className={"cards"}>
                        {
                            maqola.map((item2, index) =>
                                <div onClick={() => handleNavigates(item2.id)} key={index} className="card1">
                                    <div className="card-img1">
                                        <img src={`http://localhost:8080/api/files/img?name=${item2.img}`} alt=""/>
                                    </div>
                                    <div className={"card-footer1"}>
                                        <h5>{item2.title}</h5>
                                        <p>{item2.description}</p>
                                    </div>
                                </div>)
                        }
                    </div>
                    <div className={"text"}>
                        <h1>Manaviyat rukni</h1>
                    </div>
                    <div className={"cards2"}>
                        <div className={"divDiv"}>
                            {
                                manaviyat.map((item3, index) =>
                                    <div className={"pdfDiv"} key={index}>
                                        <div className="card-img2">
                                            <img src={`http://localhost:8080/api/files/img/pdf`} alt=""/>
                                        </div>
                                        <div id="pdfContent" className={"card-footer2"}>
                                            <p>{item3.name}</p>
                                            <span onClick={() => getPdfFromDatabase(item3.id)}>Pdfni yuklash</span>
                                        </div>
                                    </div>)
                            }
                        </div>

                    </div>
                    <div className={"text"}>
                        <h1>Hamkorlarimiz</h1>
                    </div>
                    <div className={"hm"}>
                    </div>
                    <div className={"text"}>
                        <h1>Madrasa Hayotidan</h1>
                    </div>
                    <div className={"cards3"}>
                        {
                            madrasa.map((item6, index) =>
                                <div key={index} className="card3"
                                     onClick={() => navigate(`/madrasa/hayot/${item6.id}`)}>
                                    <div className="card-img3">
                                        <img src={`http://localhost:8080/api/files/img?name=${item6.img}`} alt=""/>
                                    </div>
                                    <div className={"card-footer3"}>
                                        <p>{item6.title}</p>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className={"text"}>
                        <h1>Professorlarimiz</h1>
                    </div>
                    <div className={"cards4"}>
                        {
                            professor.map((item4, index) =>
                                <div key={index}>
                                    <div className={"card-img4"}>
                                        <img src={`http://localhost:8080/api/files/img?name=${item4.img}`} alt=""/>
                                    </div>
                                    <div className={"card-footer4"}>
                                        <h3>{item4.name}</h3>
                                        <p>{item4.title}</p>
                                    </div>
                                </div>)
                        }
                    </div>
                    <div className={"text"}>
                        <h1>Izohlar</h1>
                    </div>
                    <div className={"cards5"}>
                        {
                            izohlar.map((item5, index) =>
                                <div key={index}>
                                    <div className={"card5"}>
                                        <div>
                                            <h2>{item5.firstname}{item5.lastname}</h2>
                                            <p>{item5.title}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div>
                        <form className="form" onSubmit={handleSubmit(mySubmit)}>
                            <input {...register("firstName")} type="text" placeholder="Ism kiriting" className="input"/>
                            <input {...register("lastName")} type="text" placeholder="Familiyani kiriting" className="input"/>
                            <input {...register("title")} type="text" placeholder="Izoh yozing" className="input"/>
                            <button className="submit-button">Yuborish</button>
                        </form>
                    </div>
                </div>
            </div>

            <div style={{marginTop: "30px"}}>
                <Footer/>
            </div>
        </div>
    );
}

export default News;
