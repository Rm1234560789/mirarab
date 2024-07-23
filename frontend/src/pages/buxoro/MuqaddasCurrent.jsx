import {useEffect} from "react";
import {useParams} from "react-router-dom";
import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import "../../styles/CurrentQadamjolar.css"
import {useDispatch, useSelector} from "react-redux";
import {getCurrentQadam} from "../../reducer/qadamReducer.js";

function MuqaddasCurrent(){
    useEffect(() => {
        console.log(id)
        dispatch(getCurrentQadam(id))
    }, []);
    const {id}= useParams();
    const dispatch=useDispatch();
    const {currentQadam}= useSelector(state => state.qadamReducer);
    return(<div>
        <Header/>
        <div className={"currentQadamjo"}>
            <div className={"wrapper"}>
                <div style={{display:"flex",justifyContent:"center"}}>
                    <img className={"currentQadamjoImg"}
                         src={`http://localhost:8080/api/files/img?name=${currentQadam.img}`}/>
                </div>
                <div style={{marginTop:"80px"}}>
                    <p  className={"qadamjoTitle"}>{currentQadam.title}</p>
                    <p className={"qadamjoDesc"}>
                        {currentQadam.description}</p>
                </div>
            </div>
        </div>
        <Footer/>
    </div>)
}

export default MuqaddasCurrent;