import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import "../../styles/Raddiya.css"
import {useEffect} from "react";
import {get} from "../../reducer/raddiyaReducer.js";
import {useDispatch, useSelector} from "react-redux";

function Raddiya(){
    const dispatch= useDispatch();

    useEffect(() => {
        dispatch(get());
    }, [dispatch]);

    const {raddiya} = useSelector((state) => state.raddiyaReducer);


    return(<div>
        <Header/>
        <div className={"raddiya"}>
            <div className={"wrapper"}>
                <p className={"raddiyaTitle"}>Raddiyalar</p>
                <div className={"d-flex flex-column"} style={{gap:"44px"}}>
                    {raddiya.map((item, index) => <div  key={item.id} className={"raddiyaCardMain"}>
                        <div className={"raddiyaCardImg"}>
                            <img src={`http://localhost:8080/api/files/img?name=${item.img}`} alt={"not found"}/>
                        </div>
                        <div className={"raddiyaCont"}>
                            <div className={"raddiyaContent"}>
                                <p className={"raddiyaContentTitle"}>"{item.title}" kafedrasi</p>
                                <p className={"raddiyaContentDesc"}>
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

export default Raddiya;