import React from "react";
import '../../../scss/_section1.scss';
import '../../../scss/_mixin.scss';
const Item = (props) => {
    return (
        <div>
            <div class="items">
                <div class="item_innner">
                    <div class="item-type">
                        <div class="icon">{props.icon}</div>
                        <div class="ico-title">{props.title}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Item;