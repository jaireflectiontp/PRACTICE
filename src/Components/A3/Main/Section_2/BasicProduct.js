import React from 'react'
import '../main.css'
const BasicProduct = (props) => {
    return (
        <>
            <div className="section_2__column">
                <div className="section_2__column_product">
                    <h2>{props.ProductName}</h2>
                    <div> <strong>{props.offerPrcnt}</strong></div>
                    <button>Buy Now</button>
                </div>
            </div>
        </>
    )
}

export default BasicProduct
