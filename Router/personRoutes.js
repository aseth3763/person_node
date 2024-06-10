const express= require("express")
const router = express.Router()

const personControllerData = require("../Controller/personController")

// router.post("/postData", personControllerData.postData)

router.post("/postedNewData",personControllerData.postNewData)
  
  
router.get('/getAllPerson', personControllerData.getAllData)

router.get("/getOneUser/:id", personControllerData.getOneData)
  
router.put("/update/:id", personControllerData.updatedData)
  
router.delete("/delete/:id", personControllerData.deleteData)

module.exports = router