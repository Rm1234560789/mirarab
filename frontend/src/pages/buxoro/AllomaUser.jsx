import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import "../../styles/Qadamjolar.css"
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {getAlloma} from "../../reducer/allomaReducer.js";

function Muqaddas(){
    const dispatch=useDispatch();
    useEffect(() => {
        dispatch(getAlloma());
    }, [dispatch]);
    const navigate=useNavigate();

    const {alloma} = useSelector((state) => state.allomaReducer);

    function navigateTo(id) {
        console.log(id)
        navigate(`/ulug/alloma/${id}`)


    }

    return(<div>
        <Header/>
        <div className={"qadamjolar"}>
            <div className={"wrapper"}>
                <p className={"qadamjolarTitle"}>Ulug' Allomalar</p>
                <div className={"d-flex flex-column"} style={{gap:"44px"}}>
                    {alloma.map((item, index) => <div onClick={()=>navigateTo(item.id)} key={item.id} className={"qadamjolarCardMain"}>
                        <div className={"qadamjolarCardImg"}>
                            <img src={`http://localhost:8080/api/files/img?name=${item.img}`} alt={"not found"}/>
                        </div>
                        <div className={"contentCont"}>
                            <div className={"qadamjolarContent"}>
                                <p className={"qadamjolarContentTitle"}>{item.title}</p>
                                <p className={"qadamjolarContentDesc"}>
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

export default Muqaddas;