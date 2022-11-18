import React from "react";
import '../../../scss/_mixin.scss';
import '../../../scss/_section3.scss';
import banner2 from '../../../images/banner2.jpg';
const Section3 = () => {
    return (
        <div>
            <section class="section3">
                <div class="section3_inner">
                    <div class="QA">
                        <div class="QA_in">
                            <div class="QA_content">
                                <h2>Why choose UX studio as your app design partner?</h2>
                                <p>Duis aute irure dolor in reprehenderit in <br></br> voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                    <br></br>  Excepteur sint occaecat cupidatat non proident, <br></br> sunt in culpa qui officia deserunt.
                                </p>
                            </div>
                        </div>
                    </div>
<div><img src={banner2} class="banner2_img"/></div>
                </div>
            </section>
        </div>
    )
}
export default Section3;