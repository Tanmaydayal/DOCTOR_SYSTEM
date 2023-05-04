const express = require("express");
const router = express.Router();
const AppointmentController = require("../controllers/AppointmentController");

router.post("/appointment", AppointmentController.appotmentdata);
router.get("/appointment", AppointmentController.getappointmentdata);

router.get("/clinicwithapp/:id",AppointmentController.getappointmentdataWithClinic);
router.delete("/delete/:id", AppointmentController.deleteappointment)

//To get the appointment data==>localhost:4000/appointment/appointment
//To add the appointment data==?localhost:4000/appointment/appointment
//To get the data with appointment data with clinic==>localhost:4000/appointment/clinicwithapp

module.exports = router;
