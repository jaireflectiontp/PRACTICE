import React from 'react'
import '../main.css'
const MedicalProduct = (props) => {
    return (
        <>
            <div className="section_2__column">
                <div className="section_2__column_product">
                    <h2>{props.ProductName}</h2>
                    <div><strong>{props.newPrice}</strong></div>
                    <div><small>{props.oldPrice}</small></div>
                    <button>Buy Now</button>
                </div>
            </div>
        </>
    )
}

export default MedicalProduct
