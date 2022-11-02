import React from 'react'
import Image from 'next/image'
import Image1 from '../image/istockphoto-511119416-612x612.jpg'

function About() {
  return (
    <div>
      <section id="about" class="mt-5">
        <div class="about-section wrapper">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6 col-md-12 mb-lg-0 mb-5 ">
                <div class="card border-0">
                  <Image src={Image1} alt="" className='img-fluid' itemprop="image"></Image>
                </div>
              </div>
              <div class="col-lg-5 col-md-12 text-sec ms-auto">
                <h2 class="about" itemProp='name'>About Us</h2>
                <p class="para" itemProp='description'>We will help you to enjoy wonderfull vacation foodie with your family</p>
                <p class="paraga" itemProp='description'>Lorem ipsu to introduce visitors and locals alike to the bes signature dishesu unique
                  preparations and exciting tastes in Las Vegas. We take pridein being voted "Best Tour Best Food Tour",
                  "Best Fine Dining", "Bester Brunch",</p>
                <p class="paraga" itemProp='description'>and "Best Date Night Spot" by Las Vegas Review-Journal, awarded "Best Food/Beverage Tour
                  Operations (Land)" by The World Food Travel Associati awarded</p>
                <button class="main-btn mt-4">Read More &nbsp; &nbsp; &nbsp; </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About