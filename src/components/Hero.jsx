import React from 'react'

export const Hero = () => {
  return (
    <main>
        <div className='hero-content'>
            <h1 className='hero-heading'>YOUR FEET DESERVE THE BEST</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferen <br /> dis nihil quod eius aperiam!ajdsabdbsajkb <br /> djsabdkjb sdb asbd ask jbdj <br /> ksab das bdba sbdk asdas bdk jabs dkj
            </p>
            <div className="hero-btn">
                <button >shoop now</button>
                <button className='secondary-btn'>category</button>
            </div>
            <div className="shoping">
                <p>available on </p>
                <div className="brand-icons">
                <img src="/images/flipkart.png" alt="flipkart-logo" />
                <img src="/images/amazon.png" alt="amazon-logo" />
                </div>
            </div>

        </div>
        <div className='hero-image'>
            <img src="/images/hero-image.png" alt="" />
        </div>
    </main>
  )
}
