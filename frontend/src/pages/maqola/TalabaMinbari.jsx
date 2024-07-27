import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import "../../styles/TalabaMinbari.css"
import {useEffect} from "react";
import {get} from "../../reducer/talabaReducer.js";
import {useDispatch, useSelector} from "react-redux";

function TalabaMinbari(){
    const dispatch= useDispatch();

    useEffect(() => {
        dispatch(get());
    }, [dispatch]);

    const {talaba} = useSelector((state) => state.talabaReducer);


    return(<div>
        <Header/>
        <div className={"talabaMinbari"}>
            <div className={"wrapper"}>
                <p className={"talabaMinbariTitle"}>Talaba Minbari</p>
                <div className={"d-flex flex-column"} style={{gap:"44px"}}>
                    {talaba.map((item, index) => <div  key={item.id} className={"talabaMinbariCardMain"}>
                        <div className={"talabaMinbariCardImg"}>
                            <img src={`http://localhost:8080/api/files/img?name=${item.img}`} alt={"not found"}/>
                        </div>
                        <div className={"talabaMinbariCont"}>
                            <div className={"talabaMinbariContent"}>
                                <p className={"talabaMinbariContentTitle"}>"{item.title}" kafedrasi</p>
                                <p className={"talabaMinbariContentDesc"}>
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
        <Footer/>
    </div>)
}

export default TalabaMinbari;