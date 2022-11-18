import React from 'react'
import backg from '../img/Night_01.png'
import aboutPic from '../img/about.jpg'
import './main.css'
import product_1 from '../img/product-1.png'
import product_2 from '../img/product-2.png'
import product_3 from '../img/product-3.png'
import product_4 from '../img/product-4.png'
import offer from '../img/offer.jpg'
const Main = () => {
    return (
        <div>
            <img src={backg} class="img-fluid" alt="..." className='backg'></img>
            <div className='about_section'>
                <div className='about_section_in'>
                    <div className="about_pic">
                        <img src={aboutPic} alt="" className='aboutPic' />
                    </div>
                    <div className="about_text">
                        <div className="about_head">
                            <small>ABOUT</small>
                            <h2>WE KEEP YOUR PETS <br /> HAPPY ALL TIMES</h2>
                        </div>
                        <div className="about_vision">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad,
                            enim nihil animi blanditiis itaque eius necessitatibus error
                            id dolorem nam architecto voluptas accusamu
                        </div>
                        <div className="about_info">
                            <div className='info_inner'>
                                <div className="about_info_tab">
                                    <button>left</button>
                                    <button>right</button>
                                </div>
                                <div className='detail_info'>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi quam earum ratione
                                        fuga illum iusto doloremque numquam esse,
                                        ad, dignissimos voluptas fugiat dolorem enim provident sed dolores, ex dolorum sint.
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis dolorem at distinctio laboriosam ut dignissimos consectetur accusantium quas,
                                        ex obcaecati vero ab sapiente pariatur numquam et.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="service_section">
                <div className="about_head">
                    <small>SERVICES</small>
                    <h2>OUR EXCELLENT PET <br /> CARE SERVICES</h2>
                </div>
                <div class=" text-center service_options">
                    <div class="row row-cols-2">
                        <div class="col service_cols">
                            <div className="service_list">
                                <div className="service_icon">q</div>
                                <div className="service_title">
                                    <h4>title</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quisquam delectus,
                                        aut excepturi unde aspernatur nam, quaerat, ipsum pariatur laborum dolores?
                                        Eligendi facilis nemo ipsa perferendis, consequatur hic quisquam amet.
                                    </p>
                                    <small>Read More</small>
                                </div>
                            </div>
                        </div>
                        <div class="col service_cols">
                            <div className="service_list">
                                <div className="service_icon">q</div>
                                <div className="service_title">
                                    <h4>title</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quisquam delectus,
                                        aut excepturi unde aspernatur nam, quaerat, ipsum pariatur laborum dolores?
                                        Eligendi facilis nemo ipsa perferendis, consequatur hic quisquam amet.
                                    </p>
                                    <small>Read More</small>
                                </div>
                            </div>
                        </div>
                        <div class="col service_cols">
                            <div className="service_list">
                                <div className="service_icon">q</div>
                                <div className="service_title">
                                    <h4>title</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quisquam delectus,
                                        aut excepturi unde aspernatur nam, quaerat, ipsum pariatur laborum dolores?
                                        Eligendi facilis nemo ipsa perferendis, consequatur hic quisquam amet.
                                    </p>
                                    <small>Read More</small>
                                </div>
                            </div>
                        </div>
                        <div class="col service_cols">
                            <div className="service_list">
                                <div className="service_icon">q</div>
                                <div className="service_title">
                                    <h4>title</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quisquam delectus,
                                        aut excepturi unde aspernatur nam, quaerat, ipsum pariatur laborum dolores?
                                        Eligendi facilis nemo ipsa perferendis, consequatur hic quisquam amet.
                                    </p>
                                    <small>Read More</small>
                                </div>
                            </div>
                        </div>
                        <div class="col service_cols">
                            <div className="service_list">
                                <div className="service_icon">q</div>
                                <div className="service_title">
                                    <h4>title</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quisquam delectus,
                                        aut excepturi unde aspernatur nam, quaerat, ipsum pariatur laborum dolores?
                                        Eligendi facilis nemo ipsa perferendis, consequatur hic quisquam amet.
                                    </p>
                                    <small>Read More</small>
                                </div>
                            </div>
                        </div>
                        <div class="col service_cols">
                            <div className="service_list">
                                <div className="service_icon">q</div>
                                <div className="service_title">
                                    <h4>title</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quisquam delectus,
                                        aut excepturi unde aspernatur nam, quaerat, ipsum pariatur laborum dolores?
                                        Eligendi facilis nemo ipsa perferendis, consequatur hic quisquam amet.
                                    </p>
                                    <small>Read More</small>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="product_section">
                <div className="about_head">
                    <small>PRODUCTS</small>
                    <h2>PRODUCTS FOR YOUR <br /> BEST FRIEND</h2>
                </div>
                <div className='food_list'>
                    <div class="container text-center">
                        <div class="row row-cols-4">
                            <div class="col"><img src={product_1} alt='..' /></div>
                            <div class="col"><img src={product_2} alt='..' /></div>
                            <div class="col"><img src={product_3} alt='..' /></div>
                            <div class="col"><img src={product_4} alt='..' /></div>
                        </div>
                    </div>
                </div>
                <div className='pagination'>
                    <nav aria-label="Page navigation example">
                        <ul class="pagination">
                            <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">Next</a></li>
                        </ul>
                    </nav>
                </div>
            </div>

            <div className='offer_section'>
                <img src={offer} alt='...' />
            </div>
        </div>
    )
}

export default Main
/**/