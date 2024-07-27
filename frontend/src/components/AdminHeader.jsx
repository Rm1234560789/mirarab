import React from 'react';
import img from '../img/Без названия.png';
import './AdminHd.css';
import { useNavigate } from 'react-router-dom';

function AdminHeader() {
    const navigate = useNavigate();

    return (
        <header>
            <div className="headerTop1">
                <div className="wrapper2">
                    <div className="div3">
                        <div>
                            <img className="img2" src={img} alt="Admin" />
                            <span className="admin-name">Madrasa Admini</span>
                        </div>
                        <div>
                            <button className="logout-button" onClick={() => navigate("logout")}>Log Out</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="headerBottom1">
                <div className="wrapper3">
                    <p onClick={() => navigate("oliy")}>Олий мадраса</p>
                    <div className={"dropdown"}>
                        <p className={"dropdown-button"}>
                            Янгиликлар
                        </p>
                        <div className="dropdown-menu">
                            <button onClick={() => navigate("yangiliklar/uzb_news")}>O'zbekiston_Yangiliklari</button>
                            <button onClick={() => navigate("yangiliklar/world_news")}>Dunyo_Yangiliklari</button>
                            <button onClick={() => navigate("yangiliklar/savol-javob")}>Savol-Javob</button>
                            <button onClick={() => navigate("yangiliklar/fikr-mulohaza")}>Fikr-Mulohaza</button>
                        </div>
                    </div>
                    {/*<p onClick={() => navigate("yangiliklar")}>Янгиликлар</p>*/}
                    <div className="dropdown">
                        <p className="dropdown-button">
                            Maqolalar
                        </p>
                        <div className="dropdown-menu">
                            <button onClick={() => navigate("maqola/ustoz")}>Ustozlar_Minbari</button>
                            <button onClick={() => navigate("maqola/talaba")}>Talaba_Minbari</button>
                            <button onClick={() => navigate("maqola/maqolas")}>Ilmiy_Maqola</button>
                            <button onClick={() => navigate("maqola/raddiyas")}>Raddiya</button>
                            <button onClick={() => navigate("media/turli_mavzu")}>Turli_Mavzu</button>
                        </div>
                    </div>
                    <div className="dropdown">
                        <p className="dropdown-button">
                            Media
                        </p>
                        <div className="dropdown-menu">
                            <button onClick={() => navigate("media/video")}>Video</button>
                            <button onClick={() => navigate("media/audio")}>Audio</button>
                            <button onClick={() => navigate("media/raddiya")}>Raddiya</button>
                        </div>
                    </div>
                    <div className="dropdown">
                        <p className="dropdown-button">
                            Interaktiv xizmatlar
                        </p>
                        <div className="dropdown-menu">
                            <button onClick={() => navigate()}>Elektron pochta</button>
                            <button onClick={() => navigate()}>Xizmat</button>
                            <button onClick={() => navigate()}>Inter Aktiv</button>
                        </div>
                    </div>
                    <p onClick={() => navigate("qabul")}>Қабул</p>
                    <div className="dropdown">
                        <p className="dropdown-button">
                            Xalqaro
                        </p>
                        <div className="dropdown-menu">
                            <button onClick={() => navigate("xalqaro/xalqaro")}>Xalqaro-Shartnoma</button>
                            <button onClick={() => navigate("xalqaro/xorij")}>Xorijiy-Professor</button>
                        </div>
                    </div>
                    <div className="dropdown">
                        <p className="dropdown-button">
                            Buxoroyi sharif
                        </p>
                        <div className="dropdown-menu">
                            <button onClick={() => navigate("bux/islom")}>Buxoro-Islom</button>
                            <button onClick={() => navigate("bux/obida")}>Buxoro-Obida</button>
                            <button onClick={() => navigate("bux/qadam")}>Muqaddas-qadam</button>
                            <button onClick={() => navigate("bux/alloma")}>Ulug-alloma</button>
                        </div>
                    </div>
                    <div className="dropdown">
                        <p className="dropdown-button">
                            Bosh sahifada
                        </p>
                        <div className="dropdown-menu">
                            <button onClick={() => navigate("bosh/video")}>Video</button>
                            <button onClick={() => navigate("bosh/yangilik")}>Yangiliklar</button>
                            <button onClick={() => navigate("bosh/maqola")}>Maqolalar</button>
                            <button onClick={() => navigate("bosh/manaviyat")}>Manaviyat Rukni</button>
                            <button onClick={() => navigate("bosh/madrasa")}>Madrasa hayotidan</button>
                            <button onClick={() => navigate("bosh/professor")}>Professorlarimiz</button>
                        </div>
                    </div>


                </div>
            </div>
        </header>
    );
}

export default AdminHeader;
