import React from 'react'
import '../Contact/contact.scss'
import '../../../../style.css'
const SocialConnect = (props) => {
    return (
        <div>
            <h4>{props.title}</h4>
            <div className="socialLinks">
                <a href=""><i class="icon-facebook2"></i></a>
                <a href=""><i class="icon-instagram"></i></a>
                <a href=""><i class="icon-twitter"></i></a>
                <a href=""><i class="icon-github"></i></a>
            </div>
        </div>
    )
}

export default SocialConnect
