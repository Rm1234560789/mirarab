import { all } from "redux-saga/effects";

import {newsSaga} from "./newsSaga";
import {vdSaga} from "./vdSaga.js";
import {rahbariyatSaga} from "./rahbariyatSaga.js";
import {maqolaSaga} from "./maqolaSaga.js";
import {manaviyatRukniSaga} from "./manaviyatRukniSaga.js";
import {madrasaHqSaga} from "./madrasaHqSaga.js";
import {professorSaga} from "./professorSaga.js";
import {buxoroSaga} from "./buxoroSaga.js";
import {obidaSaga} from "./obidaSaga.js";
import {qadamSaga} from "./qadamSaga.js";
import {allomaSaga} from "./allomaSaga.js";
import {qabulSaga} from "./qabulSaga.js";
import {shartnomaSaga} from "./shartnomaSaga.js";
import {xorijSaga} from "./xorijSaga.js";
import {videoSaga} from "./videoSaga.js";
import {audioSaga} from "./audioSaga.js";
import {raddiyavdSaga} from "./raddiyavdSaga.js";
import {raddiyaSaga} from "./raddiyaSaga.js";
import {talabaSaga} from "./talabaSaga.js";
import {ustozSaga} from "./ustozSaga.js";
import {newnewsSaga} from "./newnewsSaga.js";
import {newnewsid} from "./newnewsbyidSaga.js";
import {dunyoSaga} from "./dunyoYangiliklariSaga.js";
import {worldnewsid} from "./dunyoYangiliklariIdSaga.js";
import {savoljavobSaga} from "./savoljavobSaga.js";
import {fikrmulohazaSaga} from "./fikrmulohazaSaga.js";
import {turliMavzularSaga} from "./turliMavzularSaga.js";


export default function* rootSaga() {
    yield all([
        newsSaga(),
        vdSaga(),
        rahbariyatSaga(),
        maqolaSaga(),
        manaviyatRukniSaga(),
        madrasaHqSaga(),
        professorSaga(),
        buxoroSaga(),
        obidaSaga(),
        qadamSaga(),
        allomaSaga(),
        qabulSaga(),
        shartnomaSaga(),
        xorijSaga(),
        videoSaga(),
        audioSaga(),
        raddiyavdSaga(),
        talabaSaga(),
        ustozSaga(),
        raddiyaSaga(),
        ustozSaga(),
        newnewsSaga(),
        newnewsid(),
        dunyoSaga(),
        worldnewsid(),
        savoljavobSaga(),
        fikrmulohazaSaga(),
        ustozSaga(),
        turliMavzularSaga()
    ]);
}
