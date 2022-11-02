import React from 'react'
import Image from 'next/image'
import Image1 from '../image/desert_camp.jpg'
import Image2 from '../image/Campfire-in-desert-jaisalmer_compressed.jpg'
import Image3 from '../image/Desert-Safari-In-Jaisalmer.jpg'
import Image4 from '../image/overnight-camel-safari-jaisalmer-rajasthan-morning-camel-ride-tour-.jpeg'
import Image5 from '../image/Untitled-design-61.webp'
import Image6 from '../image/007-compressor.jpg'

function Gallery() {
  return (
    <div>
       <section class="gallery mt-5">
    <div class="container">
      <div class="row">
        <div class="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12">
          <h3 class="display-5" itemProp='title'><strong>Explore the most beautiful place in the world</strong></h3>
          <p itemProp='description'>Lorem Ipsum is simply dummy text of the printing and typeset ting industry. Lorem Ipsum has been the ind
            uiou there will ustry's standard dummy Exclusively geared towardose craving the ultimate nally so much pera.
          </p>
          <button class="main-btn">Enter gallery</button>

        </div>
      </div>
    </div>

    <div class="container mt-3">
      <div class="row ">
        <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12 mb-3 ">
          <Image src={Image1} alt="" className='img-fluid' itemprop="image"></Image>
        </div>
        <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12 ">
          <div class="row mb-3">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <Image src={Image2} alt="" className='img-fluid' itemprop="image"></Image>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 mb-3">
              <Image src={Image3} alt="" className='img-fluid' itemprop="image"></Image>
            </div>

          </div>
        </div>
        <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12 mb-3 ">
          <div class="row mb-3 image2">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                     <Image src={Image4} alt="" className='img-fluid' itemprop="image"></Image>
            </div>
          </div>
          <div class="row image2">
            <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <Image src={Image5} alt="" className='img-fluid' itemprop="image"></Image>
            </div>

          </div>
        </div>
        <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12 mb-3">
          <Image src={Image6} alt="" className='img-fluid' itemprop="image"></Image>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}

export default Gallery