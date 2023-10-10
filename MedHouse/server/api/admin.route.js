import express from "express";
import FacilitesCtrl from './facilities.controller.js'
import NoticeboardCtrl from './noticeboard.controller.js'
import ServicesCtrl from './services.controller.js'
import stuffCtrl from './stuff.controller.js'

const router = express.Router();

router.route("/").get(FacilitesCtrl.apiGetFacilites);

router.route("/stuff").get(stuffCtrl.apiGetStuff);

router. route("/Noticeboard")
.post(NoticeboardCtrl.apiPostReview)
.put(NoticeboardCtrl.apiUpdateReview)
.delete(NoticeboardCtrl.apiDeleteReview)

router. route("/Services")
.post(ServicesCtrl.apiPostReview)
.put(ServicesCtrl.apiUpdateReview)
.delete(ServicesCtrl.apiDeleteReview)


export default router;
