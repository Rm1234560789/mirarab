import React from 'react';
import "./Header.css";
import logo from "../img/Moon.svg";
import img1 from "../img/Group.svg";
import img2 from "../img/Group 94.svg";
import img3 from "../img/Facebook.svg";
import img4 from "../img/instagram.svg";
import {useNavigate} from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    return (
        <header>
            <div className={"headerTop"}>
                <div className={"wrapper"}>
                    <div className={"div1"}>
                        <div style={{display: "flex"}}>
                            <img style={{marginLeft: "100px"}} src={logo} alt=""/>
                            <div style={{display: "flex", flexDirection: "column"}}>
                                <p>Mir Arab</p>
                                <p>Madrasa</p>
                            </div>
                        </div>
                        <div style={{display: "flex", gap: "10px", marginRight: "100px"}}>
                            <a href={"#"}>
                                <img className="logo" src={img1} alt=""/>
                            </a>
                            <a href={"#"}>
                                <img className="logo" src={img2} alt=""/>
                            </a>
                            <a href={"#"}>
                                <img className="logo" src={img3} alt=""/>
                            </a>
                            <a href={"#"}>
                                <img className="logo" src={img4} alt=""/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className={"headerBottom"}>
                <div className={"wrapper1"}>
                    <div className={"div4"}>
                        <ul className={"ul"}>
                            <li className="has-dropdown">
                                <a href=""><p>Oliy Madrasa</p></a>
                                <div className={"dropdown2"}>
                                    <p onClick={() => navigate("rahbariyatUser")}>Rahbariyat</p>
                                    <p onClick={() => navigate("")}>Oliy madrasa haqida</p>
                                    <p onClick={() => navigate("")}>Tuzilma</p>
                                    <p onClick={() => navigate("")}>Kafedralar</p>
                                    <p onClick={() => navigate("")}>Yuqori turuvchi tashkilot</p>
                                    <p onClick={() => navigate("")}>Bo'limlar</p>
                                    <p onClick={() => navigate("")}>Tasavvuf maktabi</p>
                                    <p onClick={() => navigate("")}>Quron kurslari</p>
                                    <p onClick={() => navigate("")}>Axborot resurs markazi</p>
                                    <p onClick={() => navigate("")}>Bizning bitiruvchilar</p>
                                    <p onClick={() => navigate("")}>Bog'lanish</p>
                                </div>
                            </li>
                            <li className="has-dropdown">
                                <a href=""><p>Yangiliklar</p></a>
                                <div className={"dropdown2"}>
                                    <p onClick={() => navigate("")}>O'zbekiston yangiliklari</p>
                                    <p onClick={() => navigate("")}>Dunyo yangiliklari</p>
                                    <p onClick={() => navigate("")}>Savol javob</p>
                                    <p onClick={() => navigate("")}>Fikr mulohaza</p>
                                </div>
                            </li>
                            <li className="has-dropdown">
                                <a href=""><p>Maqolalar</p></a>
                                <div className={"dropdown2"}>
                                    <p onClick={() => navigate("")}>Ustozlar minbari</p>
                                    <p onClick={() => navigate("")}>Talaba minbari</p>
                                    <p onClick={() => navigate("")}>Ilmiy maqolalar</p>
                                    <p onClick={() => navigate("")}>Raddiyalar</p>
                                    <p onClick={() => navigate("")}>Turli mavzular</p>
                                </div>
                            </li>
                            <li className="has-dropdown">
                                <a href=""><p>Media</p></a>
                                <div className={"dropdown2"}>
                                    <p onClick={() => navigate("")}>Video materiallar</p>
                                    <p onClick={() => navigate("")}>Audio materiallar</p>
                                    <p onClick={() => navigate("")}>Raddiyalar (video)</p>
                                </div>
                            </li>
                            <li className="has-dropdown">
                                <a href=""><p>Interaktiv xizmatlar</p></a>
                                <div className={"dropdown2"}>
                                    <p onClick={() => navigate("")}>Elektron pochta</p>
                                    <p onClick={() => navigate("")}>O'zbekiston musulmonlari idorasi</p>
                                    <p onClick={() => navigate("")}>Din ishlari bo'ycha qo'mita</p>
                                </div>
                            </li>
                            <li className="has-dropdown">
                                <a href=""><p>Xalqaro</p></a>
                                <div className={"dropdown2"}>
                                    <p onClick={() => navigate("")}>Xorijiy faxriy doktor va professorlarimiz</p>
                                    <p onClick={() => navigate("")}>Xalqaro shartnomalar</p>
                                </div>
                            </li>
                            <li className="has-dropdown">
                                <a href=""><p>Qabul</p></a>
                                <div className={"dropdown2"}>
                                    <p onClick={() => navigate("")}>Abiturentlar uchun</p>
                                </div>
                            </li>
                            <li className="has-dropdown">
                                <a href=""><p>Buxoro Sharif</p></a>
                                <div className={"dropdown2"}>
                                    <p onClick={() => navigate("")}>Buxoro islom madaniyati poytaxti</p>
                                    <p onClick={() => navigate("")}>Buxoro obidalari</p>
                                    <p onClick={() => navigate("")}>Muqaddas qadamjolar</p>
                                    <p onClick={() => navigate("")}>Ulug allomalarimiz</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
