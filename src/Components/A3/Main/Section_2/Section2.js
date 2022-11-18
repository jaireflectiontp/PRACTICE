import React from 'react'
import '../main.css'
import BasicProduct from './BasicProduct'
import MedicalProduct from './MedicalProduct'
const Section2 = () => {
    return (
        <div className='section_2'>
            <div className="section_2__inner">
                <div className="section_2__column">
                    <div className="section_2__column_product">
                        <h2>Medical Mask</h2>
                        <div> <strong>$15.99</strong></div>
                        <div>  <small>$29.99</small></div>
                        <button>Buy Now</button>
                    </div>
                </div>
                <BasicProduct ProductName='Basic Mask' offerPrcnt='-30%'/>
                <MedicalProduct ProductName='Medical Mask' newPrice='$15.99' oldPrice='$29.99'/>
            </div>
        </div>
    )
}

export default Section2
