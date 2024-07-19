import React from 'react';
import "./Header.css"
import logo from "../img/Moon.svg"
import img1 from "../img/Group.svg"
import img2 from "../img/Group 94.svg"
import img3 from "../img/Facebook.svg"
import img4 from "../img/instagram.svg"


function Header() {
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
                      <li><a href=""><p>Oliy Madrasa</p></a></li>
                      <li><a href=""><p>Yangiliklar</p></a></li>
                      <li><a href=""><p>Maqolalar</p></a></li>
                      <li><a href=""><p>Media</p></a></li>
                      <li><a href=""><p>Interaktiv xizmatlar</p></a></li>
                      <li><a href=""><p>Xalqaro</p></a></li>
                      <li><a href=""><p>Qabul</p></a></li>
                      <li><a href=""><p>Buxoro Sharif</p></a></li>
                      </ul>
                 </div>
             </div>
         </div>
        </header>
    );
}

export default Header;
