import {Route, Routes} from "react-router-dom";
import News from "./pages/News.jsx";
import Admin from "./pages/Admin.jsx";
import BoshSahifa from "./pages/BoshSahifa.jsx";
import OliyMadrasa from "./pages/OliyMadrasa.jsx";
import BoshVideo from "./pages/BoshVideo.jsx";
import BoshYangilik from "./pages/BoshYangilik.jsx";
import BoshMaqola from "./pages/BoshMaqola.jsx";
import BoshManaviyat from "./pages/BoshManaviyat.jsx";
import BoshMadrasa from "./pages/BoshMadrasa.jsx";
import BoshProfessor from "./pages/BoshProfessor.jsx";
import Newss from "./pages/Newss.jsx";
import Rahbariyat from "./pages/Rahbariyat.jsx";
import Maqolas from "./pages/Maqolas.jsx";
import MadrasaHq from "./pages/MadrasaHq.jsx";
import Buxoro from "./pages/buxoro/Buxoro.jsx";
import Islom from "./pages/buxoro/Islom.jsx";
import Obida from "./pages/buxoro/Obida.jsx"
import Qadam from "./pages/buxoro/Qadam.jsx";
import Alloma from "./pages/buxoro/Alloma.jsx";
import Qabul from "./pages/Qabul.jsx";
import Shartnoma from "./pages/xalqaro/Shartnoma.jsx";
import Xorij from "./pages/xalqaro/Xorij.jsx";
import Xalqaro from "./pages/xalqaro/Xalqaro.jsx";
import React from "react";
import Video from "./pages/media/Video.jsx";
import Media from "./pages/media/Media.jsx";
import RaddiyaVd from "./pages/media/RaddiyaVd.jsx";
import Audio from "./pages/media/Audio.jsx";
import MadrasaHayoti from "./pages/MadrasaHayoti.jsx";
import RahbariyatUser from "./pages/RahbariyatUser.jsx";
import Maqola from "./pages/maqola/Maqola.jsx";
import Ustozlar from "./pages/maqola/Ustozlar.jsx";
import Talaba from "./pages/maqola/Talaba.jsx";
import Izohlar from "./pages/Izohlar.jsx";

function App() {

    return (
        <div>
            <Routes>
                <Route path={"/rahbariyatUser"} element={<RahbariyatUser/>}/>

                <Route path={"/admin"} element={<Admin/>}>
                    <Route path={"bosh"} element={<BoshSahifa/>}>
                        <Route path={"video"} element={<BoshVideo/>}/>
                        <Route path={"yangilik"} element={<BoshYangilik/>}/>
                        <Route path={"maqola"} element={<BoshMaqola/>}/>
                        <Route path={"manaviyat"} element={<BoshManaviyat/>}/>
                        <Route path={"madrasa"} element={<BoshMadrasa/>}/>
                        <Route path={"professor"} element={<BoshProfessor/>}/>
                    </Route>
                    <Route path={"bux"} element={<Buxoro/>}>
                        <Route path={"islom"} element={<Islom/>}/>
                        <Route path={"obida"} element={<Obida/>}/>
                        <Route path={"qadam"} element={<Qadam/>}/>
                        <Route path={"alloma"} element={<Alloma/>}/>
                    </Route>
                    <Route path={"oliy"} element={<OliyMadrasa/>}/>
                    <Route path={"qabul"} element={<Qabul/>}/>
                    <Route path={"xalqaro"} element={<Xalqaro/>}>
                        <Route path={"xalqaro"} element={<Shartnoma/>}/>
                        <Route path={"xorij"} element={<Xorij/>}/>
                    </Route>
                    <Route path={"media"} element={<Media/>}>
                        <Route path={"video"} element={<Video/>}/>
                        <Route path={"audio"} element={<Audio/>}/>
                        <Route path={"raddiya"} element={<RaddiyaVd/>}/>
                    </Route>
                    <Route path={"maqola"} element={<Maqola/>}>
                        <Route path={"ustoz"} element={<Ustozlar/>}/>
                        <Route path={"talaba"} element={<Talaba/>}/>
                    </Route>

                </Route>
                <Route path={"/news/:uuid"} element={<Newss/>}/>
                <Route path={"/"} element={<News/>}/>
                <Route path={"/rahbariyat"} element={<Rahbariyat/>}/>
                <Route path={"/maqola/:uuid"} element={<Maqolas/>}/>
                <Route path={"/madrasa/:uuid"} element={<MadrasaHq/>}/>
                <Route path={"/madrasa/hayot/:id"} element={<MadrasaHayoti/>}/>
                <Route path={"/izoh"} element={<Izohlar/>}/>
            </Routes>
        </div>
    )
}

export default App
