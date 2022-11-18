import React from "react";
import '../scss/_mixin.scss';
import '../scss/_header.scss';
const Header =()=>{
    return(
        <header>
        <div class="innerHeader">
            <div class="logo">LOGO</div>
            <nav>
                <ul class="nav-list">
                    <li class="nav-link">Home</li>
                    <li class="nav-link">About</li>
                    <li class="nav-link">Contact</li>
                </ul>
            </nav>
        </div>
    </header>
    )
}
export default Header;