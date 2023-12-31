import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Createstudent = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const history = useNavigate()
    
    const header = {"Access-Control-Allow-Origin": "*"};
    
    const handlesubmit = (e)=> {
      e.preventDefault();
      console.log("clicked");

      axios.post(
        "https://6524e40cea560a22a4ea37c5.mockapi.io/crud-opt",{
        name:name,
        email:email,
        header,
      });
      history("/readstudent");
    };
  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: "#eee", minHeight: '100vh' }}>
        <div className="container h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: 25 }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Create Student
                      </p>
                      <form
                        className="mx-1 mx-md-4"
                        // onSubmit={handleSubmit}
                      >
                        <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className=" flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="form3Example3c"
                            >
                              Your Name
                            </label>
                            <input
                              type="text"
                              name="name"
                            //   value={formData.name} 
                              onChange={(e)=>setName(e.target.value)}
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                          <div className=" flex-fill mb-0">
                            <label
                              className="form-label"
                              htmlFor="form3Example4c"
                            >
                              Email
                            </label>
                            <input
                              type="email"
                            //   id="password"
                              // onChange={loginform.handleChange}
                              // value={loginform.values.password}
                              className="form-control"
                              onChange={(e)=>setEmail(e.target.value)}
                            />
                          </div>
                        </div>
      
                        <div className="form-check d-flex justify-content-center mb-5">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            defaultValue=""
                            id="form2Example3c"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="form2Example3"
                          >
                            I agree all statements in{" "}
                            <a href="#!">Terms of service</a>
                          </label>
                          
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                            onClick={handlesubmit}
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                      <p className="text-center text-muted mt-5 mb-0">
                        Not Registered Yet?{" "}
                        <Link to="/main/register" className="fw-bold text-body">
                          <u>Register here</u>
                        </Link>
                      </p>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample image"
                      />
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
  )
}

export default Createstudent