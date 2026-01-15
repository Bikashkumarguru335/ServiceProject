import React from 'react'
import "./about.css"
import Instagram from "../../images/camera.png"
import linkedIn from "../../images/linkedIn.png"
import Facebook from "../../images/social.png"
import Twitter from "../../images/twitter.png"

const about = () => {
    return (
        <div className='AboutSection'>
            <h1>Servicify</h1>
            <div className="About">
                <div className='companyAbout'>
                    <h2>Company</h2>
                    <p>About us </p>
                    <p> Terms & conditions </p>
                    <p>Privacy policy </p>
                    <p>Anti-discrimination policy </p>
                    <p>UC impact </p>
                    <p>Careers </p>
                </div>
                <div className="customerAbout">
                    <h2> For customers</h2>

                    <p>UC reviews </p>
                    <p> Categories near you </p>
                    <p> Blog </p>
                    <p> Contact us </p>

                </div>
                <div className="partnerAbout">
                    <h2> For partners </h2>
                    <p>Register as a professional </p>

                </div>
                <div className="socialAbout">
                    <h2>Social links</h2>
                    <div className="socialImages">

                        <img src={Instagram} alt="" />
                        <img src={linkedIn} alt="" />
                        <img src={Facebook} alt="" />
                        <img src={Twitter} alt="" className='Twitter' />

                    </div>

                </div>
            </div>
            <p className='copyRights'>© Copyright 2024 Urban Company. All rights reserved. | CIN: U74140DL2014PTC274413</p>
        </div>

    )
}

export default about