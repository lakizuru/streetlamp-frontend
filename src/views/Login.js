function Login() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-9 col-lg-12 col-xl-10">
            <div className="card shadow-lg o-hidden border-0 my-5">
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-flex">
                    <div
                      className="carousel slide"
                      data-bs-ride="carousel"
                      id="carousel-1"
                    >
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img
                            className="w-100 d-block"
                            src="assets/img/onio-smart-street-lighting.jpg"
                            alt="Slide Image"
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            className="w-100 d-block"
                            src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"
                            alt="Slide Image"
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            className="w-100 d-block"
                            src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"
                            alt="Slide Image"
                          />
                        </div>
                      </div>
                      <div>
                        <a
                          className="carousel-control-prev"
                          href="#carousel-1"
                          role="button"
                          data-bs-slide="prev"
                        >
                          <span className="carousel-control-prev-icon" />
                          <span className="visually-hidden">Previous</span>
                        </a>
                        <a
                          className="carousel-control-next"
                          href="#carousel-1"
                          role="button"
                          data-bs-slide="next"
                        >
                          <span className="carousel-control-next-icon" />
                          <span className="visually-hidden">Next</span>
                        </a>
                      </div>
                      <ol className="carousel-indicators">
                        <li
                          data-bs-target="#carousel-1"
                          data-bs-slide-to={0}
                          className="active"
                        />
                        <li data-bs-target="#carousel-1" data-bs-slide-to={1} />
                        <li data-bs-target="#carousel-1" data-bs-slide-to={2} />
                      </ol>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <h1 align="center">
                        <strong>Smart StreetLamp Portal</strong>
                      </h1>
                      <div className="text-center">
                        <h4 className="text-dark mb-4">Welcome Back!</h4>
                      </div>
                      <form className="user">
                        <div className="mb-3">
                          <input
                            className="form-control form-control-user"
                            type="email"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Enter Email Address..."
                            name="email"
                          />
                        </div>
                        <div className="mb-3">
                          <input
                            className="form-control form-control-user"
                            type="password"
                            id="exampleInputPassword"
                            placeholder="Password"
                            name="password"
                          />
                        </div>
                        <div className="mb-3">
                          <div className="custom-control custom-checkbox small">
                            <div className="form-check">
                              <input
                                className="form-check-input custom-control-input"
                                type="checkbox"
                                id="formCheck-1"
                              />
                              <label
                                className="form-check-label custom-control-label"
                                htmlFor="formCheck-1"
                              >
                                Remember Me
                              </label>
                            </div>
                          </div>
                        </div>
                        <button
                          className="btn btn-primary d-block btn-user w-100"
                          type="submit"
                        >
                          Login
                        </button>
                        <hr />
                      </form>
                      <div className="text-center">
                        <a className="small" href="forgot-password.html">
                          Forgot Password?
                        </a>
                      </div>
                      <div className="text-center" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Login;