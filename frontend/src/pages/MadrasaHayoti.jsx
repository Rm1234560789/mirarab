import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import {fetchSelectedMadrasa} from "../reducer/madrasaHqReducer.js";

function MadrasaHayoti(props) {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {selectedMadrasa} = useSelector(state => state.madrasaHqReducer);
    useEffect(() => {
        dispatch(fetchSelectedMadrasa(id))
    }, [dispatch]);
    return (
        <div>
            <Header/>
            <div  className={"wrapper"} style={{display: "flex", flexDirection: "column", gap: "30px"}}>
                <div>
                    <div className={"gap-3"}>
                        <div style={{float: "left"}}>
                            {
                                <img style={{marginRight: "15px", marginBottom: "10px"}} width={716} height={400}
                                     src={`http://localhost:8080/api/files/img?name=${selectedMadrasa.img}`} alt=""/>
                            }
                        </div>
                        <div>
                            <h1>{selectedMadrasa.title}</h1>
                            <h4>{selectedMadrasa.description}</h4>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>


    )
}

export default MadrasaHayoti;