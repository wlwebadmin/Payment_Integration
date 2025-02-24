const { paymentProcess, get } = require("../controller/paymentController");

const { paymentTest } = require("../controller/paymentTest");

const router = require("express").Router();

router.post("/payment", paymentProcess);
router.get("/", get);
router.post("/test", paymentTest);

module.exports = router;
