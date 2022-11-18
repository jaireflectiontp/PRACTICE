import React from 'react'
import '../main.css'

const Section1 = () => {
  return (
    <div className='section_1'>
      <div className="section_1__product_title">

        <h1>Antivirus <br /> Mask Store</h1>

        <p>The easiest way to protect yourself</p>

        <div className="section_1__product_description">
          <div className="description_1">Anti-Bacterial</div>
          <div className="description_2">Anti-Virus</div>
        </div>
        <button className='section_1__button'>Shop now</button>

      </div>

      <div className="section_1__product_image">
        <img src='' alt="mask" />
      </div>
    </div>
  )
}

export default Section1
