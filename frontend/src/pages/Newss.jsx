import {useParams} from "react-router-dom"
import {useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getInfo } from '../reducer/newsReducer';
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import "./Newss.css"

function Newss(){
    const {uuid} = useParams();
    const dispatch = useDispatch();
    const { info } = useSelector(state => state.newsReducer);
    useEffect(() => {
        dispatch(getInfo(uuid))
    }, [dispatch]);
    return(
        <div>
            <Header/>
            <div className={"wrapper"}>
                <div className={" gap-3 div2"}>
                    <div style={{float:"left"}}>
                        {
                            <img style={{height:"570px",marginRight:"15px",marginBottom:"10px"}}  width={716} src={`http://localhost:8080/api/files/img?name=${info.img}`} alt=""/>
                        }
                    </div>
                    <div>
                        <h1>{info.title}</h1>
                        <h4>{info.description}</h4>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>

    )
}

export default Newss