import express from "express";
const router = express.Router()

import TmDB from "../controller/tmdbController"

router.get("/trending", TmDB.trending)

router.get("/topRated", TmDB.topRated)

router.get("/action", TmDB.action)

router.get("/comedy", TmDB.comedy)

router.get("/horror", TmDB.horror)

router.get("/romance", TmDB.romance)

export default router