const express = require('express');
const { sendSms, userSignUp, verifyOtp } = require('../controller/userController');
const router = express.Router();

router.post('/send-otp', sendSms);
router.post('/user', userSignUp)
router.post("/otpVerify", verifyOtp);
module.exports = router;
