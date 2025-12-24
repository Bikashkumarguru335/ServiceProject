const express = require('express');
const dotenv = require('dotenv');
const axios = require('axios')
const cors = require('cors');
const connectDB = require('./config/Db');
const productRoute = require('./route/productRoute');
const userRoute = require("./route/userRoute");
const paymentRoute = require("./route/paymentRoute")
const twilio = require("twilio");
dotenv.config();
connectDB();

const app = express();
app.use(cors({ origin: "http://localhost:3007", credentials: true }));
app.use(cors());

app.use(express.json());
const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);
app.get('/api/test', (req, res) => {
    res.json({ message: "Hello from backend!" });
});
// app.post("/send-sms", async (req, res) => {
//     function generateOTP() {
//         return Math.floor(100000 + Math.random() * 900000).toString();
//     }
//     const { phone } = req.body;
//     const otp = generateOTP();
//     const options = {
//         method: "POST",
//         url: "https://www.fast2sms.com/dev/bulkV2",
//         headers: {
//             "authorization": process.env.FAST2SMS_API_KEY,
//             "Content-Type": "application/json",

//         },
//         data: {
//             route: "v3",
//             sender_id: "TXTIND",
//             otp,
//             language: "english",
//             numbers: phone,
//         },
//     };

//     try {
//         console.log(process.env.FAST2SMS_API_KEY)

//         const response = await axios(options);
//         res.json(response.data);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }


// });

app.use('/api', productRoute);
app.use('/userApi', userRoute)
app.use('/paymentApi', paymentRoute);
const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
