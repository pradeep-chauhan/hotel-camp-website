import React from 'react'
import Image from 'next/image'
import Image1 from '../image/istockphoto-511119416-612x612.jpg'

function Blog() {
  return (
    <div>
      <section class="blog ">
        <div class="container">
          <div class="row">
            <div class="d-flex justify-content-center">
              <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <h3 class="display-5 mt-5 text-center"><strong>Read our awesome blog post for everyone</strong></h3>
                <p class="text-center">Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row mt-5">
            <div class="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-xs-12 ">
              <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <span class="mb-3 text-muted">April 28,2018</span>
                  <h5 class="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, rerum?</h5>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <span class="mb-3 text-muted">April 28,2018</span>
                  <h5 class="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, rerum?</h5>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <span class="mb-3 text-muted">April 28,2018</span>
                  <h5 class="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, rerum?</h5>
                </div>
              </div>
              <hr />
              <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <span class="mb-3 text-muted">April 28,2018</span>
                  <h5 class="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, rerum?</h5>
                </div>
              </div>
              <hr />
            </div>
            <div class="col-lg-6 col-xl-6 col-md-6 col-sm-12 col-xs-12 ">
              <div class="row mb-5">
                <Image src={Image1} alt=""></Image>
                <h3 class="mt-3">Lorem ipsum dolor sit amet, adipisicing elit. Nisi!</h3>
                <p class="text-muted">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi ipsa enim quo tempora
                  assumenda incidunt. Ipsam, voluptatibus impedit esse non inventore at eveniet magnam laboriosam cum eius
                  voluptate saepe perspiciatis facilis dolorum harum minus totam laudantium eos laborum! Fugit consequuntur
                  ex fugiat recusandae facere! Nostrum.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Blog