import React from 'react'

function Navbar() {
  return (
    <div>
      <section class="home d-flex mt-0 mb-5 home-size">
    <div class="container">
      <div class="row">
        <nav class="navbar navbar-expand-lg navbar-light bg-transparent  mx-auto ">
          <div class="container">
            <a class="navbar-brand text-white" href="#">Tubik</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                <li class="nav-item">
                  <a class="nav-link active me-3 text-white" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active me-3 text-white" aria-current="page" href="#">Trip Planer</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active me-3 text-white" aria-current="page" href="#">Blog</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active me-3 text-white" aria-current="page" href="#">Categoties</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active me-3 text-white" aria-current="page" href="#">Contact</a>
                </li>
              </ul>
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link active me-3 text-white" aria-current="page" href="#">Eng</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active me-3 text-white" aria-current="page" href="#">My Account</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <hr class="text-white" />

        <div class="row  mt-5 ">

          <div class="col-8 mt-5 mx-5 ">
            <h4 itemProp='title'>We are the wonder of your weekned</h4>
            <h1 class="display-1 heading-homepage" itemProp='title'>Discover the world with our guide.</h1>
            <button class="main-btn mb-5">start tour</button>
          </div>
        </div>
      </div>
      </div>
  </section>
    </div>
  )
}

export default Navbar