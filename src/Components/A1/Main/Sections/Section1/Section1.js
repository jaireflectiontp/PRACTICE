import React from "react";
import '../../../scss/_mixin.scss'
import '../../../scss/_section1.scss';
import banner1 from '../../../images/banner1.jpg';
import Item from "./item";
const Section1 = () => {
    return (
        <div>
            <section class="section1">
                <img src={banner1} alt="banner1" class="banner1_img" />
                <div class="intro">
                    <div class="titleBox">
                        <h2 class="sec1_title">Mobile App <br></br> Development</h2>
                    </div>
                    <div class="itemBox">
                        <div class="itemBox_row1">
                       <Item icon="icon1" title="title1"/>
                       <Item icon="icon2" title="title2"/>
                        </div>
                        <div class="itemBox_row2">
                        <Item icon="icon1" title="title1"/>
                       <Item icon="icon2" title="title2"/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Section1;