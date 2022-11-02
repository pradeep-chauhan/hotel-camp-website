import React from 'react'

function Footer() {
  return (
    <div>
      <section class="footer mb-0">
        <div class="container">
          <div class="row mt-5">
            <div class="d-flex justify-content-center mt-5">
              <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <h3 class="display-5 text-center"><strong>Say hello to us</strong></h3>
                <p class="text-center mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea eaque consequuntur
                  ullam facilis molestias non!</p>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <form class="mb-5 mt-4">
            <div class="d-flex justify-content-center">
              <div class="row ">
                <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-xs-12 p-0">
                  <div class="mb-3">
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                      placeholder="abc@gmail.com" />
                  </div>
                </div>
                <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-xs-12 p-0">
                  <button type="submit" class="main-btn-footer">Submit</button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="container">
          <div class="row mt-5">
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 mt-3">
              <h4 class="mb-5">Tubik</h4>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>call us today <strong >+123456789</strong>
              </p>
              <ul class="list-unstyled d-flex ">
                <li>
                  <a href="#" class="text-white text-decoration-none text-muted fs-4 me-4">
                    <i class="bi bi-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#" class="text-white text-decoration-none text-muted social-media-icon fs-4 me-4">
                    <i  class="bi bi-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" class="text-white text-decoration-none text-muted fs-4 me-4">
                    <i class="bi bi-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#" class="text-white text-decoration-none text-muted fs-4 me-4">
                    <i class="bi bi-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 mt-3">
              <h5 class="mb-5">Quick Link</h5>
              <li class="footer-li">Home</li>
              <li class="footer-li">Tour</li>
              <li class="footer-li">Private tour</li>
              <li class="footer-li">Calendar</li>
              <li class="footer-li">FAQ</li>
              <li class="footer-li">Concat</li>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 mt-3">
              <h5 class="mb-5">Resourses</h5>
              <li class="footer-li">Home</li>
              <li class="footer-li">Tour</li>
              <li class="footer-li">Private tour</li>
              <li class="footer-li">Calendar</li>
              <li class="footer-li">FAQ</li>
              <li class="footer-li">Concat</li>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 mt-3">
              <h5 class="mb-5">Categories</h5>
              <li class="footer-li">Home</li>
              <li class="footer-li">Tour</li>
              <li class="footer-li">Private tour</li>
              <li class="footer-li">Calendar</li>
              <li class="footer-li">FAQ</li>
              <li class="footer-li">Concat</li>
            </div>
          </div>
        </div>
        <hr class="text-white mt-5" />
        <div class="container ">
          <div class="row">
            <div class="col text-center">
              <p class="mt-5 mb-5"> © Alvrio Labs - All Rights Reserved</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Footer