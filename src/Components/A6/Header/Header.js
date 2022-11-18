import React from 'react'
import './header.css'
const Header = () => {
    return (
        <div>
            <div class=" text-center">
                <div class="row">
                    <div class="col top_header_col">
                        <div className="top_header_link">
                            <div className='top_header__link_icon'>Q</div>
                            <div className='top_header_link_info'>
                                <h4>Our Office</h4>
                                <small>Address</small>
                            </div>
                        </div>
                    </div>
                    <div class="col  top_header_col">
                        <div className="top_header_link">
                            <div className='top_header__link_icon'>Q</div>
                            <div className='top_header_link_info'>
                                <h4>Our Office</h4>
                                <small>Address</small>
                            </div>
                        </div>
                    </div>
                    <div class="col  top_header_col">
                        <div className="top_header_link">
                            <div className='top_header__link_icon'>Q</div>
                            <div className='top_header_link_info'>
                                <h4>Our Office</h4>
                                <small>Address</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav class="navbar bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand">LOGO</a>
                    <div>
                        <ul class="nav justify-content-end">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Active</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
