const express = require("express")
const router  = express.Router()

const ControllerData = require("../Controller/staticController")


router.get("/getTestData",ControllerData.getTestData)
router.get("/getRouterData",ControllerData.getStaticRouter)

module.exports = router


