import React from 'react'

const Home = () => {
  return (
    <div>
        <div
  id="carouselBasicExample"
  className="carousel slide carousel-fade"
  data-mdb-ride="carousel"
>
  {/* Indicators */}
  <div className="carousel-indicators">
    <button
      type="button"
      data-mdb-target="#carouselBasicExample"
      data-mdb-slide-to={0}
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    />
    <button
      type="button"
      data-mdb-target="#carouselBasicExample"
      data-mdb-slide-to={1}
      aria-label="Slide 2"
    />
    <button
      type="button"
      data-mdb-target="#carouselBasicExample"
      data-mdb-slide-to={2}
      aria-label="Slide 3"
    />
  </div>
  {/* Inner */}
  <div className="carousel-inner">
    {/* Single item */}
    <div className="carousel-item active">
      <img
        src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(15).webp"
        className="d-block w-100"
        alt="Sunset Over the City"
      />
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p />
      </div>
    </div>
    {/* Single item */}
    <div className="carousel-item">
      <img
        src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp"
        className="d-block w-100"
        alt="Canyon at Nigh"
      />
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
    {/* Single item */}
    <div className="carousel-item">
      <img
        src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp"
        className="d-block w-100"
        alt="Cliff Above a Stormy Sea"
      />
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </div>
    </div>
  </div>
  {/* Inner */}
  {/* Controls */}
  <button
    className="carousel-control-prev"
    type="button"
    data-mdb-target="#carouselBasicExample"
    data-mdb-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-mdb-target="#carouselBasicExample"
    data-mdb-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div className="container">
  <div className="row">
    <div className="col-md-6 my-3">
      <div className="card h-100">
        <div className="card-body">
          <h5 className="card-title">Lorem ipsum dolor sit amet.</h5>
          <p className="card-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae,
            sint reprehenderit? Voluptate exercitationem omnis accusamus et
            porro, temporibus voluptatem ipsam? Ea rerum odit sequi quidem minus
            accusamus officia sunt nostrum, quisquam excepturi illum rem tempore
            
          </p>
        </div>
      </div>
    </div>
    <div className="col-md-6 my-3">
      <div className="card h-100">
        <div className="card-body">
          <h5 className="card-title">Lorem ipsum dolor sit amet.</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur eum deserunt, explicabo recusandae molestias asperiores
            magni perferendis harum ducimus quidem.
          </p>
        </div>
      </div>
    </div>
    <div className="col-md-6 my-3">
      <div className="card h-100">
        <div className="card-body">
          <h5 className="card-title">Lorem ipsum dolor sit amet.</h5>
          <p className="card-text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Reprehenderit ducimus perferendis ab laudantium est ea vero
            consequatur esse sed quo!
          </p>
        </div>
      </div>
    </div>
    <div className="col-md-6 my-3">
      <div className="card h-100" >
        <div className="card-body">
          <h5 className="card-title">Lorem ipsum dolor sit amet.</h5>
          <p className="card-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
            dolorum quam blanditiis, quis nemo obcaecati hic quaerat accusamus
            eveniet porro?
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="container">
  <div className="card w-75 mx-auto my-3">
    <div className="card-body">
      <h5 className="text-center my-3">Contact us for Appointment</h5>
      <form>
        {/* Name input */}
        <div className="form-outline mb-4">
          <input type="text" id="form4Example1" className="form-control" />
          <label className="form-label" htmlFor="form4Example1">
            Name
          </label>
        </div>
        {/* Email input */}
        <div className="form-outline mb-4">
          <input type="email" id="form4Example2" className="form-control" />
          <label className="form-label" htmlFor="form4Example2">
            Email address
          </label>
        </div>
        <div className="form-outline mb-4">
          <input type="time" id="form4Example2" className="form-control" />
          <label className="form-label" htmlFor="form4Example2">
            Preferred Time for Call Back{" "}
          </label>
        </div>
        <div className="form-outline mb-4">
          <input type="number" id="form4Example2" className="form-control" />
          <label className="form-label" htmlFor="form4Example2">
            Phone
          </label>
        </div>
        {/* Submit button */}
        <button type="submit" className="btn btn-primary btn-block mb-4">
          Submit
        </button>
      </form>
    </div>
  </div>
</div>
<footer className="text-center text-lg-start bg-dark text-muted">
  {/* Section: Links  */}
  <section
    className=" pt-3"
    style={{ backgroundColor: "rgba(0, 0, 0, 0.703)", color: "white" }}
  >
    <div className="container text-center text-md-start">
      {/* Grid row */}
      <div className="row mt-3">
        {/* Grid column */}
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          {/* Content */}
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3" />
            Services
          </h6>
          <p>Websites | Many More..</p>
        </div>
        {/* Grid column */}
        {/* Grid column */}
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* Links */}
          <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
          <p></p>
          <li className="text-reset">Development</li>
          <hr style={{ fontWeight: 500, color: "white" }} />
          <p />
          <p></p>
          <li className="text-reset">Java</li>
          <hr style={{ fontWeight: 500, color: "white" }} />
          <p />
          <p></p>
          <li className="text-reset">MongoDB</li>
          <hr style={{ fontWeight: 500, color: "white" }} />
          <p />
          <p></p>
          <li className="text-reset">Site map</li>
          <hr style={{ fontWeight: 500, color: "white" }} />
          <p />
          <p></p>
          <li className="text-reset">Blog</li>
          <hr style={{ fontWeight: 500, color: "white" }} />
          <p />
          <p></p>
          <li className="text-reset">Sessions &amp; Fees</li>
          <hr style={{ fontWeight: 500, color: "white" }} />
          <p />
        </div>
        {/* Grid column */}
        {/* Grid column */}
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          {/* Links */}
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p>
            <i className="fas fa-home me-3" /> ESD
          </p>
          <p>
            <i className="fa fa-location me-3" />
            India🚀
          </p>
          <p>
            <i className="fas fa-envelope me-3" />
            esd@gmail.com
          </p>
          <p>
            <i className="fas fa-phone me-3" /> +919580477026
          </p>
        </div>
        {/* Grid column */}
      </div>
      {/* Grid row */}
    </div>
  </section>
  {/* Section: Links  */}
  {/* Copyright */}
  <div className="text-center text-white p-4 bg-dark">
    © 2023 Copyright:
    <a className="text-reset fw-bold" href="#">
      {" "}
      ESD
    </a>
  </div>
  {/* Copyright */}
</footer>

    </div>
  )
}

export default Home