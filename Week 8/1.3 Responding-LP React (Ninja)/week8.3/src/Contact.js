import React from 'react'

const Contact = () => {

    return (
        <div class="contact-container bg-grey">
            <span class="div-title">Contact us</span>
            <div class="contact-form">
                <div id="sect1">
                    <span>Contact us and we will get back to you within 24 hours.</span><br></br>
                    <span><i class="fas fa-map-marker-alt"></i>Company Name</span><br></br>
                    <span><i class="fas fa-mobile-alt"></i>+256 778 800 900</span><br></br>
                    <span><i class="fas fa-envelope"></i>company.gmail.com</span>
                </div>
                <div id="sect2">
                    <span>Contact</span>
                    <input type="text" placeholder="email address" class="input-field"></input>
                    <textarea name="" id="" cols="30" rows="10" placeholder="comment"></textarea>
                    <button class="contact-btn">Send</button>
                </div>
            </div>  
        </div>
    )
}

export default Contact