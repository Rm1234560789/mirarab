import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getVideo} from "../../reducer/videoReducer.js";
import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import "../../styles/RadiyaUser.css"

function VideoUser(props) {
    const dispatch = useDispatch();
    const {videos} = useSelector((state) => state.videoReducer);

    useEffect(() => {
        dispatch(getVideo());
    }, []);
    return (
        <div className="radiya-user">
            <Header/>
            <div className="wrapper main-box-radiya">
                <h1 className={"text"}>Video Materiallar</h1>
                <div className={"raddiya-boxes"}>
                    {videos.map((item, index) => (
                        <div className="radiya-box" key={index}>
                            <video style={{width: "100%", height: "308px"}} controls
                                   src={`http://localhost:8080/api/files/video?name=${item.url}`}></video>
                            <h4 className="radiya-text-h4">{item.name}</h4>
                        </div>
                    ))}
                </div>

            </div>
            <div style={{marginTop: "100px"}}>
                <Footer/>
            </div>
        </div>
    );
}

export default VideoUser;