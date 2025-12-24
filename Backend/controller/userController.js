const User = require('../models/userModel');
// const client = require('../server')
const twilio = require("twilio");
const axios = require("axios");
const Otp = require("../models/otpSchema")
// const client = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

module.exports.userSignUp = async (req, res) => {
    try {
        const { number } = req.body;
        console.log(number);
        let user = await User.findOne({ number });

        if (user) return res.status(400).json({ message: "User already exists" });

        user = new User({ number });
        await user.save();

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
module.exports.userLogin = async (req, res) => {
    try {
        const { number } = req.body;
        const user = await User.findOne({ number });

        if (!user || !(await user.comparePassword(password))) {
            return res.status(400).json({ message: "Invalid email or password" });
        }
        res.json({ user })
        // const token = generateToken(user);
        // res.cookie("token", token, { httpOnly: true }).json({ user, token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
module.exports.userLogout = async (req, res) => {
    try {

    }
    catch (error) {
        res.status(500).json({ message: error.message });

    }
}

// module.exports.sendSms = async (req, res) => {
//     const { phone } = req.body;

//     if (!phone) {
//         return res.status(400).json({ success: false, error: "Phone and message are required" });
//     }
//     function generateOTP() {
//         return Math.floor(100000 + Math.random() * 900000).toString();
//     }
//     const otp = generateOTP();

//     const options = {
//         method: "POST",
//         url: "https://www.fast2sms.com/dev/bulkV2",
//         headers: {
//             "authorization": process.env.FAST2SMS_API_KEY,
//             "Content-Type": "application/json"
//         },
//         data: {
//             route: "q", // Use "q" for transactional or "p" for promotional
//             message: `Your otp is ${otp}`,
//             language: "English",
//             numbers: phone
//         }
//     };

//     try {
//         const response = await axios.request(options);
//         res.json({ success: true, response: response.data });
//     } catch (error) {
//         console.error("SMS sending failed:", error.response?.data || error.message);
//         res.status(500).json({ success: false, error: error.response?.data || error.message });
//     }
// };
// module.export.otpVerification= async (req, res) => {
//   try {
//     const { phone, otp } = req.body;

//     // Check OTP
//     const otpRecord = await Otp.findOne({ phone, otp });
//     if (!otpRecord) return res.status(400).json({ message: 'Invalid or Expired OTP' });

//     // Find or Create User
//     let user = await User.findOne({ phone });
//     if (!user) {
//       user = await User.create({ phone });
//     }

//     // Generate Token
//     const token = jwt.sign({ id: user._id, phone: user.phone }, 'YOUR_SECRET_KEY', { expiresIn: '7d' });

//     // Delete used OTP
//     await Otp.deleteMany({ phone });

//     res.status(200).json({ message: 'Login successful', token, user });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// };


// --- 1. SEND OTP ---
module.exports.sendSms = async (req, res) => {
    const { phone } = req.body;

    if (!phone) {
        return res.status(400).json({ success: false, error: "Phone number is required" });
    }

    // Generate 6 digit OTP
    function generateOTP() {
        return Math.floor(1000 + Math.random() * 9000).toString();
    }
    const otp = generateOTP();

    // Fast2SMS Options
    const options = {
        method: "POST",
        url: "https://www.fast2sms.com/dev/bulkV2",
        headers: {
            "authorization": process.env.FAST2SMS_API_KEY,
            "Content-Type": "application/json"
        },
        data: {
            route: "q",
            message: `Your otp is ${otp}`,
            language: "English",
            numbers: phone
        }
    };

    try {
        // 1. Delete any old OTPs for this number to prevent conflicts
        await Otp.deleteMany({ phone: phone });

        // 2. Save the NEW OTP to MongoDB
        await Otp.create({
            phone: phone,
            otp: otp
        });

        // 3. Send SMS via Fast2SMS
        const response = await axios.request(options);

        // Return success
        res.status(200).json({
            success: true,
            message: "OTP sent successfully",
            // Do not send the OTP code in response in production!
            response: response.data
        });

    } catch (error) {
        if (error.response) {
            console.error("Fast2SMS Error Response:", error.response.data);
            console.error("Fast2SMS Status:", error.response.status);

            // Return the specific error to your frontend for debugging
            return res.status(500).json({
                success: false,
                error: error.response.data.message || "Fast2SMS Provider Error"
            });
        } else {
            console.error("Error:", error.message);
            return res.status(500).json({ success: false, error: error.message });
        }
    }


};

// --- 2. VERIFY OTP ---
module.exports.verifyOtp = async (req, res) => {
    const { phone, otp } = req.body;

    if (!phone || !otp) {
        return res.status(400).json({ success: false, error: "Phone and OTP are required" });
    }

    try {
        // 1. Find the OTP in Database
        const otpRecord = await Otp.findOne({ phone: phone, otp: otp });

        if (!otpRecord) {
            return res.status(400).json({ success: false, error: "Invalid or Expired OTP" });
        }

        // 2. OTP Matches! Now you can log the user in.

        // Example: Find or Create User logic here
        // let user = await User.findOne({ phone });
        // if (!user) user = await User.create({ phone });
        // const token = generateJwtToken(user._id);

        // 3. Delete the used OTP so it can't be used again
        await Otp.deleteOne({ _id: otpRecord._id });

        res.status(200).json({
            success: true,
            message: "OTP verified successfully",
            // token: token, // Send JWT token here if implemented
            // user: user    // Send user data here
        });

    } catch (error) {
        console.error("Verification failed:", error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
};
