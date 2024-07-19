import React from 'react';
import './Footer.css';
import logo from"../img/instagram.svg"
import img1 from "../img/Facebook.svg"

function Footer() {
    return (
        <footer>
            <div className={"wrapper"}></div>
            <div className="footer-container">
                <div className="footer-column">
                    <ul>
                        <li>Rahbariyat</li>
                        <li>Oliy Madrasa haqida</li>
                        <li>Tuzilma</li>
                        <li>Kafedralar</li>
                        <li>Yuqori turuvchi tashkilot</li>
                        <li>Bo'limlar</li>
                        <li>Tasavvuf maktabi</li>
                        <li>Quron kurslari</li>
                        <li>Axborot resurs markazi</li>
                        <li>Bizning bitiruvchilar</li>
                        <li>Bog'lanish</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <ul>
                        <li>O'zbekiston yangiliklari</li>
                        <li>Dunyo yangiliklari</li>
                        <li>Savol-Javob</li>
                        <li>Fikr-mulohaza</li>
                        <li>Video materiallar</li>
                        <li>Audio materiallar</li>
                        <li>Raddiyalar (video)</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <ul>
                        <li>Elektron pochta</li>
                        <li>O'zbekiston musulmonlar idorasi</li>
                        <li>Din ishlari bo'yicha qo'mita</li>
                        <li>Xorijiy faxriy doktor va professor o'qituvchilarimiz</li>
                        <li>Xalqaro shartnomalar</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <ul>
                        <li>Ustozlar minbari</li>
                        <li>Talabala minbari</li>
                        <li>Ilmiy maqolalar</li>
                        <li>Raddiyalar</li>
                        <li>Turli mavzular</li>
                        <li>Qabul abituriyentlar uchun</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <ul>
                        <li>Buxoro islom madaniyati poytaxti</li>
                        <li>Buxoro obidalar</li>
                        <li>Muqaddas qadamjolar</li>
                        <li>Ulug' allomalarimiz</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>2024 Shift Academy</p>
                <div className="social-icons">
                    <a href=""><img src={logo} alt=""/></a>
                    <a href=""><img src={img1} alt=""/></a>
                    <a href=""><img src={logo} alt=""/></a>
                    <a href=""><img src={logo} alt=""/></a>
                </div>
            </div>
        </footer>
    )

}
export default Footer;
