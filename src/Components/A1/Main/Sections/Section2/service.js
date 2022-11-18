import React from "react";
import '../../../scss/_mixin.scss';
import '../../../scss/_section2.scss';
const Service = (props) => {
    return (
        <div>
            <div class="service">
                <div class="serv_icon">{props.icon}</div>
                <div class="serv_info">
                    <h3 class="serv_title">{props.title}</h3>
                    <p class="serv_detail">{props.detail}</p>
                </div>
            </div>
        </div>
    )
}
export default Service;