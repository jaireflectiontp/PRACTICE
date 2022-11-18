import React from "react";
import '../../../scss/_mixin.scss';
import '../../../scss/_section2.scss';
import Service from "./service";
const Section2 =()=>{
    return(
        <div>
            <section class="section2">
            <div class="in_section2">
                <div><strong>​We create super-awesome designs</strong></div>
                <p>
                    <small>​Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident.
                    </small>
                </p>
                <div class="facilities">
                    <div class="section2_row1">
                       <Service icon="icon1" title="hello" detail="xyz" />
                       <Service icon="icon1" title="hello" detail="xyz" />
                    </div>
                    <div class="section2_row2">
                    <Service icon="icon1" title="hello" detail="xyz" />
                    <Service icon="icon1" title="hello" detail="xyz" />
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}
export default Section2;