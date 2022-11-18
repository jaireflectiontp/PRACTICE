import React, { useState } from 'react'
import './contact.scss'
import '../../../../style.css'
import SocialConnect from '../SocialLink/SocialConnect'
import Nav from '../Navigation/Nav'
const Contact = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [mail, setMail] = useState('')
    const [message, setMessage] = useState('')
    const sendData = () => {
        const clientsData = {
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            mail: mail,
            message: message,
        }
        let requests = localStorage.getItem('requests') ? JSON.parse(localStorage.getItem('requests')) : [];
        requests.push(JSON.stringify(clientsData));
        localStorage.setItem('requests', JSON.stringify(requests));
        console.log('requests', requests)
        setFirstName && setLastName && setMail(false)
    }
    return (
        <>
        <Nav/>
        <div className='contact_page'>
            <div className='contact_page_in'>
                <h1>Contact</h1>
                <hr className='headingHR' />
                <div className="contactBox">
                    <div className="contact_col">
                        <div className="contact_details">
                            <div className="detail_box">
                                <div className="detail_icon"><i class="icon-location"></i></div>
                                <div className="detail_info">
                                    <h5>Address</h5>
                                    <p>Nagpur, Maharashtra <br /> India</p>
                                </div>
                            </div>
                            <div className="detail_box">
                                <div className="detail_icon"><i class="icon-mobile"></i></div>
                                <div className="detail_info">
                                    <h5>Telephone</h5>
                                    <p>+91_9146635275</p>
                                </div>
                            </div>
                            <div className="detail_box">
                                <div className="detail_icon"><i class="icon-envelop"></i></div>
                                <div className="detail_info">
                                    <h5>Email Address</h5>
                                    <p>jai.reflectiontp@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="social_contact">
                            <SocialConnect title='Connect with me!' />
                        </div>
                    </div>

                    <div className="msg_col">
                        <h3>Send A Message</h3>
                        <div>
                            <form>
                                <div className='inpt'><input type="text" placeholder='First Name' /></div>
                                <div className='inpt'><input type="text" placeholder='Last Name' /></div>
                                <div className='inpt'><input type="mail" placeholder='Email' /></div>
                                <div className='inpt'><input type="number" placeholder='Phone No.' /></div>
                                <div className='inpt'><input className='msgBox' type="text" placeholder='Write Your Message Here' /></div>
                            </form>
                        </div>
                        <div><button onClick={sendData}>Send</button></div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact
