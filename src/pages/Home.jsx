import React from "react";
import banner1 from "../assets/images/home/banner1.jpg";
import banner2 from "../assets/images/home/banner2.jpg";

function Home() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
            {/* Bootstrap Carousel */}
            <div
              id="carousel-example-captions"
              className="carousel slide"
              data-ride="carousel"
            >
              {/* Carousel Indicators */}
              <ol className="carousel-indicators">
                <li
                  data-target="#carousel-example-captions"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li
                  data-target="#carousel-example-captions"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carousel-example-captions"
                  data-slide-to="2"
                ></li>
              </ol>

              {/* Carousel Items */}
              <div className="carousel-inner">
                <div className="item active">
                  <img
                    src={banner1}
                    alt="Banner 1"
                    className="img-responsive center-block"
                  />
                  <div className="carousel-caption">
                    {/* Optional captions can go here */}
                  </div>
                </div>

                <div className="item">
                  <img
                    src={banner2}
                    alt="Banner 2"
                    className="img-responsive center-block"
                  />
                  <div className="carousel-caption">
                    {/* Optional captions can go here */}
                  </div>
                </div>

                <div className="item">
                  <img
                    src={banner1}
                    alt="Banner 3"
                    className="img-responsive center-block"
                  />
                  <div className="carousel-caption">
                    {/* Optional captions can go here */}
                  </div>
                </div>
              </div>

              {/* Carousel Controls */}
              <a
                className="left carousel-control"
                href="#carousel-example-captions"
                data-slide="prev"
              >
                <span className="glyphicon glyphicon-chevron-left"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="right carousel-control"
                href="#carousel-example-captions"
                data-slide="next"
              >
                <span className="glyphicon glyphicon-chevron-right"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>

            {/* Search Box Section */}
            <div className="whiteBox">
              <div className="col-xs-12 col-sm-5 col-md-5 col-lg-5">
                <input
                  type="text"
                  className="form-control border0px whiteBoxBorder"
                  style={{ height: "40px" }}
                  placeholder="Enter Keyword"
                />
              </div>
              <div className="col-xs-12 col-sm-7 col-md-7 col-lg-7 whiteboxItemCol">
                <div className="whiteBoxItem2">
                  <div className="whiteBoxItem1a">
                    <img
                      src="images/home/search-img-0b.png"
                      width="17"
                      height="40"
                      alt="Search icon 0"
                    />
                  </div>
                  <div className="whiteBoxItem1">
                    <img
                      src="images/home/search-img-1b.png"
                      width="33"
                      height="40"
                      alt="Search icon 1"
                    />
                  </div>
                  <div className="whiteBoxItem1">
                    <img
                      src="images/home/search-img-2b.png"
                      width="32"
                      height="40"
                      alt="Search icon 2"
                    />
                  </div>
                  <div className="whiteBoxItem1">
                    <img
                      src="images/home/search-img-3b.png"
                      width="26"
                      height="40"
                      alt="Search icon 3"
                    />
                  </div>
                  <div className="whiteBoxItem1">
                    <img
                      src="images/home/search-img-4b.png"
                      width="31"
                      height="40"
                      alt="Search icon 4"
                    />
                  </div>
                  <div className="whiteBoxItem1">
                    <img
                      src="images/home/search-img-5b.png"
                      width="30"
                      height="40"
                      alt="Search icon 5"
                    />
                  </div>
                  <div className="whiteBoxItem1">
                    <img
                      src="images/home/search-img-6b.png"
                      width="30"
                      height="40"
                      alt="Search icon 6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Sign In Section */}
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 padding-top-20px">
            <img
              alt="Sign in"
              src="images/home/signin.png"
              className="img-responsive"
            />
            <div className="dotted-border width"></div>

            <form role="form">
              <div className="form-group has-success has-feedback margin-bottom-10px margin-top-10px">
                <input
                  type="text"
                  id="inputSuccess2"
                  className="form-control"
                  placeholder="Username"
                />
                <span className="username form-control-feedback"></span>
              </div>
              <div className="form-group has-success has-feedback">
                <input
                  type="password"
                  id="inputWarning2"
                  className="form-control"
                  placeholder="Password"
                />
                <span className="password form-control-feedback"></span>
              </div>
              <button
                type="button"
                className="btn btn-primary font-2 pull-right width"
              >
                SIGN IN
              </button>
            </form>

            <img
              alt="Or"
              src="images/home/green-or.png"
              className="center-block img-responsive"
            />

            <div className="Icons margin-top-10px">
              <a href="#" className="a-btn2">
                <img
                  src="images/facebook_icon01.jpg"
                  width="30"
                  height="30"
                  alt="Facebook"
                />
                <span className="a-btn2-slide-text6"></span>
              </a>
            </div>
            <div className="Icons margin-top-10px">
              <a href="#" className="a-btn2">
                <img
                  src="images/twitter_icon01.jpg"
                  width="30"
                  height="30"
                  alt="Twitter"
                />
                <span className="a-btn2-slide-text7"></span>
              </a>
            </div>
            <div className="Icons margin-top-10px">
              <a href="#" className="a-btn2">
                <img
                  src="images/google_Icon01.jpg"
                  width="30"
                  height="30"
                  alt="Google"
                />
                <span className="a-btn2-slide-text8"></span>
              </a>
            </div>

            <div className="createAcc">
              <img
                alt="Create account"
                src="images/home/create-an-account.png"
                className="img-responsive"
              />
            </div>
            <div className="dotted-border width"></div>

            <label className="checkbox-inline padding-top-10px">
              <input type="checkbox" id="inlineCheckbox1" value="option1" />
              <small className="font-2 dark-grey-color">
                I WANT TO POST JOB
              </small>
            </label>
            <label className="checkbox-inline">
              <input type="checkbox" id="inlineCheckbox2" value="option2" />
              <small className="font-2 dark-grey-color">
                I WANT TO FIND JOB
              </small>
            </label>

            <img
              alt="Or"
              src="images/home/orange-or.png"
              className="img-responsive center-block"
            />

            <div className="Icons margin-top-12px">
              <a href="#" className="a-btn2">
                <img
                  src="images/facebook_icon01.jpg"
                  width="30"
                  height="30"
                  alt="Facebook"
                />
                <span className="a-btn2-slide-text9"></span>
              </a>
            </div>
            <div className="Icons margin-top-12px">
              <a href="#" className="a-btn2">
                <img
                  src="images/twitter_icon01.jpg"
                  width="30"
                  height="30"
                  alt="Twitter"
                />
                <span className="a-btn2-slide-text10"></span>
              </a>
            </div>
            <div className="Icons margin-top-12px">
              <a href="#" className="a-btn2">
                <img
                  src="images/google_Icon01.jpg"
                  width="30"
                  height="30"
                  alt="Google"
                />
                <span className="a-btn2-slide-text11"></span>
              </a>
            </div>
          </div>
        </div>
        {/* <div className="row">
          <div className="col-md-8 col-sm-8 col-xs-12">
            <div className="row margin-top-15px">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="row ">
                  <div className="col-md-6 col-sm-6 col-xs-12 margin-bottom-15px">
                    <div className="row">
                      <div className="col-md-6 col-sm-6 col-xs-8">
                        <a href="#">
                          <img
                            alt=""
                            src="images/home/home-contractors.png "
                            className="img-responsive"
                          />
                        </a>
                      </div>
                      <div className="col-md-6 col-sm-6 col-xs-4">
                        <a href="#" className="pull-right">
                          <img
                            alt=""
                            src="images/home/category-btn.png"
                            className="img-responsive"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="dotted-border width"></div>
                      </div>
                    </div>
                    <div className="row margin-top-15px">
                      <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="popover-markup">
                          <div className="TopContractor">
                            <div className="contractorinfo">
                              
                              <sup>
                                <img
                                  className="imgHoverable"
                                  alt=""
                                  src="images/home/img-5a.jpg"
                                />
                              </sup>
                              <span>
                                <div className="Name01">
                                  <h4 className="infoTxt3">Khrystyne R.</h4>
                                  <p className="infoTxt2">
                                    Quality Work At A Fair Price
                                  </p>
                                  <div className="dotted-border width"></div>
                                  <p className="infoTxt1">
                                    If you would like high quality work with a
                                    fast turn around for a fair price, contact
                                    me. You won't be disappointed.
                                  </p>
                                </div>
                              </span>
                            </div>
                          </div>
                          <div className="TopContractor">
                            <div className="contractorinfo">
                              
                              <sup>
                                <img
                                  className="imgHoverable"
                                  alt=""
                                  src="images/home/img-6a.jpg"
                                />
                              </sup>
                              <span>
                                <div className="Name01">
                                  <h4 className="infoTxt3">Khrystyne R.</h4>
                                  <p className="infoTxt2">
                                    Quality Work At A Fair Price
                                  </p>
                                  <div className="dotted-border width"></div>
                                  <p className="infoTxt1">
                                    If you would like high quality work with a
                                    fast turn around for a fair price, contact
                                    me. You won't be disappointed.
                                  </p>
                                </div>
                              </span>
                            </div>
                          </div>
                          <div className="TopContractor">
                            <div className="contractorinfo">
                              
                              <sup>
                                <img
                                  className="imgHoverable"
                                  alt=""
                                  src="images/home/img-7a.jpg"
                                />
                              </sup>
                              <span>
                                <div className="Name01">
                                  <h4 className="infoTxt3">Khrystyne R.</h4>
                                  <p className="infoTxt2">
                                    Quality Work At A Fair Price
                                  </p>
                                  <div className="dotted-border width"></div>
                                  <p className="infoTxt1">
                                    If you would like high quality work with a
                                    fast turn around for a fair price, contact
                                    me. You won't be disappointed.
                                  </p>
                                </div>
                              </span>
                            </div>
                          </div>
                          <div className="TopContractor">
                            <div className="contractorinfo">
                              
                              <sup>
                                <img
                                  className="imgHoverable"
                                  alt=""
                                  src="images/home/img-8a.jpg"
                                />
                              </sup>
                              <span>
                                <div className="Name01">
                                  <h4 className="infoTxt3">Khrystyne R.</h4>
                                  <p className="infoTxt2">
                                    Quality Work At A Fair Price
                                  </p>
                                  <div className="dotted-border width"></div>
                                  <p className="infoTxt1">
                                    If you would like high quality work with a
                                    fast turn around for a fair price, contact
                                    me. You won't be disappointed.
                                  </p>
                                </div>
                              </span>
                            </div>
                          </div>
                          <div className="TopContractor">
                            <div className="contractorinfo">
                              
                              <sup>
                                <img
                                  className="imgHoverable"
                                  alt=""
                                  src="images/home/img-9a.jpg"
                                />
                              </sup>
                              <span>
                                <div className="Name01">
                                  <h4 className="infoTxt3">Khrystyne R.</h4>
                                  <p className="infoTxt2">
                                    Quality Work At A Fair Price
                                  </p>
                                  <div className="dotted-border width"></div>
                                  <p className="infoTxt1">
                                    If you would like high quality work with a
                                    fast turn around for a fair price, contact
                                    me. You won't be disappointed.
                                  </p>
                                </div>
                              </span>
                            </div>
                          </div>
                          <div className="TopContractor">
                            <div className="contractorinfo">
                              
                              <sup>
                                <img
                                  className="imgHoverable"
                                  alt=""
                                  src="images/home/img-9a.jpg"
                                />
                              </sup>
                              <span>
                                <div className="Name01">
                                  <h4 className="infoTxt3">Khrystyne R.</h4>
                                  <p className="infoTxt2">
                                    Quality Work At A Fair Price
                                  </p>
                                  <div className="dotted-border width"></div>
                                  <p className="infoTxt1">
                                    If you would like high quality work with a
                                    fast turn around for a fair price, contact
                                    me. You won't be disappointed.
                                  </p>
                                </div>
                              </span>
                            </div>
                          </div>

                          <div className="TopContractor">
                            <div className="contractorinfo">
                              
                              <sup>
                                <img
                                  className="imgHoverable"
                                  alt=""
                                  src="images/home/img-9a.jpg"
                                />
                              </sup>
                              <span>
                                <div className="Name01">
                                  <h4 className="infoTxt3">Khrystyne R.</h4>
                                  <p className="infoTxt2">
                                    Quality Work At A Fair Price
                                  </p>
                                  <div className="dotted-border width"></div>
                                  <p className="infoTxt1">
                                    If you would like high quality work with a
                                    fast turn around for a fair price, contact
                                    me. You won't be disappointed.
                                  </p>
                                </div>
                              </span>
                            </div>
                          </div>
                          <div className="TopContractor">
                            <div className="contractorinfo">
                              
                              <sup>
                                <img
                                  className="imgHoverable"
                                  alt=""
                                  src="images/home/img-5a.jpg"
                                />
                              </sup>
                              <span>
                                <div className="Name01">
                                  <h4 className="infoTxt3">Khrystyne R.</h4>
                                  <p className="infoTxt2">
                                    Quality Work At A Fair Price
                                  </p>
                                  <div className="dotted-border width"></div>
                                  <p className="infoTxt1">
                                    If you would like high quality work with a
                                    fast turn around for a fair price, contact
                                    me. You won't be disappointed.
                                  </p>
                                </div>
                              </span>
                            </div>
                          </div>
                          <div className="TopContractor">
                            <div className="contractorinfo">
                              
                              <sup>
                                <img
                                  className="imgHoverable"
                                  alt=""
                                  src="images/home/img-5a.jpg"
                                />
                              </sup>
                              <span>
                                <div className="Name01">
                                  <h4 className="infoTxt3">Khrystyne R.</h4>
                                  <p className="infoTxt2">
                                    Quality Work At A Fair Price
                                  </p>
                                  <div className="dotted-border width"></div>
                                  <p className="infoTxt1">
                                    If you would like high quality work with a
                                    fast turn around for a fair price, contact
                                    me. You won't be disappointed.
                                  </p>
                                </div>
                              </span>
                            </div>
                          </div>
                          <div className="TopContractor">
                            <div className="contractorinfo">
                              
                              <sup>
                                <img
                                  className="imgHoverable"
                                  alt=""
                                  src="images/home/img-5a.jpg"
                                />
                              </sup>
                              <span>
                                <div className="Name01">
                                  <h4 className="infoTxt3">Khrystyne R.</h4>
                                  <p className="infoTxt2">
                                    Quality Work At A Fair Price
                                  </p>
                                  <div className="dotted-border width"></div>
                                  <p className="infoTxt1">
                                    If you would like high quality work with a
                                    fast turn around for a fair price, contact
                                    me. You won't be disappointed.
                                  </p>
                                </div>
                              </span>
                            </div>
                          </div>
                          <div className="TopContractor">
                            <div className="contractorinfo">
                              
                              <sup>
                                <img
                                  className="imgHoverable"
                                  alt=""
                                  src="images/home/img-5a.jpg"
                                />
                              </sup>
                              <span>
                                <div className="Name01">
                                  <h4 className="infoTxt3">Khrystyne R.</h4>
                                  <p className="infoTxt2">
                                    Quality Work At A Fair Price
                                  </p>
                                  <div className="dotted-border width"></div>
                                  <p className="infoTxt1">
                                    If you would like high quality work with a
                                    fast turn around for a fair price, contact
                                    me. You won't be disappointed.
                                  </p>
                                </div>
                              </span>
                            </div>
                          </div>
                          <div className="TopContractor">
                            <div className="contractorinfo">
                              
                              <sup>
                                <img
                                  className="imgHoverable"
                                  alt=""
                                  src="images/home/img-5a.jpg"
                                />
                              </sup>
                              <span>
                                <div className="Name01">
                                  <h4 className="infoTxt3">Khrystyne R.</h4>
                                  <p className="infoTxt2">
                                    Quality Work At A Fair Price
                                  </p>
                                  <div className="dotted-border width"></div>
                                  <p className="infoTxt1">
                                    If you would like high quality work with a
                                    fast turn around for a fair price, contact
                                    me. You won't be disappointed.
                                  </p>
                                </div>
                              </span>
                            </div>
                          </div>
                          <div className="TopContractor">
                            <div className="contractorinfo">
                              
                              <sup>
                                <img
                                  className="imgHoverable"
                                  alt=""
                                  src="images/home/img-9a.jpg"
                                />
                              </sup>
                              <span>
                                <div className="Name01">
                                  <h4 className="infoTxt3">Khrystyne R.</h4>
                                  <p className="infoTxt2">
                                    Quality Work At A Fair Price
                                  </p>
                                  <div className="dotted-border width"></div>
                                  <p className="infoTxt1">
                                    If you would like high quality work with a
                                    fast turn around for a fair price, contact
                                    me. You won't be disappointed.
                                  </p>
                                </div>
                              </span>
                            </div>
                          </div>

                          <div className="TopContractor">
                            <div className="contractorinfo">
                              
                              <sup>
                                <img
                                  className="imgHoverable"
                                  alt=""
                                  src="images/home/img-9a.jpg"
                                />
                              </sup>
                              <span>
                                <div className="Name01">
                                  <h4 className="infoTxt3">Khrystyne R.</h4>
                                  <p className="infoTxt2">
                                    Quality Work At A Fair Price
                                  </p>
                                  <div className="dotted-border width"></div>
                                  <p className="infoTxt1">
                                    If you would like high quality work with a
                                    fast turn around for a fair price, contact
                                    me. You won't be disappointed.
                                  </p>
                                </div>
                              </span>
                            </div>
                          </div>

                          <div className="TopContractor">
                            <div className="contractorinfo">
                              
                              <sup>
                                <img
                                  className="imgHoverable"
                                  alt=""
                                  src="images/home/img-9a.jpg"
                                />
                              </sup>
                              <span>
                                <div className="Name01">
                                  <h4 className="infoTxt3">Khrystyne R.</h4>
                                  <p className="infoTxt2">
                                    Quality Work At A Fair Price
                                  </p>
                                  <div className="dotted-border width"></div>
                                  <p className="infoTxt1">
                                    If you would like high quality work with a
                                    fast turn around for a fair price, contact
                                    me. You won't be disappointed.
                                  </p>
                                </div>
                              </span>
                            </div>
                          </div>
                          <div className="TopContractor">
                            <div className="contractorinfo">
                              
                              <sup>
                                <img
                                  className="imgHoverable"
                                  alt=""
                                  src="images/home/img-5a.jpg"
                                />
                              </sup>
                              <span>
                                <div className="Name01">
                                  <h4 className="infoTxt3">Khrystyne R.</h4>
                                  <p className="infoTxt2">
                                    Quality Work At A Fair Price
                                  </p>
                                  <div className="dotted-border width"></div>
                                  <p className="infoTxt1">
                                    If you would like high quality work with a
                                    fast turn around for a fair price, contact
                                    me. You won't be disappointed.
                                  </p>
                                </div>
                              </span>
                            </div>
                          </div>
                          <div className="TopContractor">
                            <div className="contractorinfo">
                              
                              <sup>
                                <img
                                  className="imgHoverable"
                                  alt=""
                                  src="images/home/img-6a.jpg"
                                />
                              </sup>
                              <span>
                                <div className="Name01">
                                  <h4 className="infoTxt3">Khrystyne R.</h4>
                                  <p className="infoTxt2">
                                    Quality Work At A Fair Price
                                  </p>
                                  <div className="dotted-border width"></div>
                                  <p className="infoTxt1">
                                    If you would like high quality work with a
                                    fast turn around for a fair price, contact
                                    me. You won't be disappointed.
                                  </p>
                                </div>
                              </span>
                            </div>
                          </div>
                          <div className="TopContractor">
                            <div className="contractorinfo">
                              
                              <sup>
                                <img
                                  className="imgHoverable"
                                  alt=""
                                  src="images/home/img-7a.jpg"
                                />
                              </sup>
                              <span>
                                <div className="Name01">
                                  <h4 className="infoTxt3">Khrystyne R.</h4>
                                  <p className="infoTxt2">
                                    Quality Work At A Fair Price
                                  </p>
                                  <div className="dotted-border width"></div>
                                  <p className="infoTxt1">
                                    If you would like high quality work with a
                                    fast turn around for a fair price, contact
                                    me. You won't be disappointed.
                                  </p>
                                </div>
                              </span>
                            </div>
                          </div>
                          <div className="TopContractor">
                            <div className="contractorinfo">
                              
                              <sup>
                                <img
                                  className="imgHoverable"
                                  alt=""
                                  src="images/home/img-8a.jpg"
                                />
                              </sup>
                              <span>
                                <div className="Name01">
                                  <h4 className="infoTxt3">Khrystyne R.</h4>
                                  <p className="infoTxt2">
                                    Quality Work At A Fair Price
                                  </p>
                                  <div className="dotted-border width"></div>
                                  <p className="infoTxt1">
                                    If you would like high quality work with a
                                    fast turn around for a fair price, contact
                                    me. You won't be disappointed.
                                  </p>
                                </div>
                              </span>
                            </div>
                          </div>
                          <div className="TopContractor">
                            <div className="contractorinfo">
                              
                              <sup>
                                <img
                                  className="imgHoverable"
                                  alt=""
                                  src="images/home/img-9a.jpg"
                                />
                              </sup>
                              <span>
                                <div className="Name01">
                                  <h4 className="infoTxt3">Khrystyne R.</h4>
                                  <p className="infoTxt2">
                                    Quality Work At A Fair Price
                                  </p>
                                  <div className="dotted-border width"></div>
                                  <p className="infoTxt1">
                                    If you would like high quality work with a
                                    fast turn around for a fair price, contact
                                    me. You won't be disappointed.
                                  </p>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <div className="row">
                      <div className="col-md-12 col-sm-12 col-xs-12">
                        <img alt="" src="images/home/find-work.png" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="dotted-border width"></div>
                      </div>
                    </div>
                    <div className="row margin-top-10px">
                      <div className="col-md-12 col-sm-12 col-xs-12">
                        
                        <span className="width">
                          <small>Chirs Chella</small>
                          <small className="pull-right">
                            <span className="usa-flag"></span>United States
                          </small>
                          <br />
                        </span>
                        <div className="dotted-border width margin-top-5px margin-bottom-5px"></div>
                        <h5>Redo E-Mail Template</h5>
                        <small>
                          Fixed Price: Less than $500 | Other - Design |
                        </small>
                        <br />
                        <small>
                          Posted: 8 minutes ago | Ends: 14d, 23h | 0 Proposals
                        </small>
                        <div className="dotted-border width margin-top-5px margin-bottom-5px"></div>
                        <small>
                          Have an email template 90% designed in GO DADDY email
                          marketing program but there are some minor changes i
                          need done.
                        </small>
                        <div className="dotted-border width margin-top-5px margin-bottom-5px"></div>
                        <small>Desired Skills</small>
                        <br />
                        <small>Graphic Design, Photoshop</small>
                        <button
                          className="btn btn-primary font-2 pull-right "
                          type="button"
                        >
                          VIEW ALL DETAILS
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-12 margin-top-12px">
            <div className="row">
              <div className="col-md-6 col-sm-9 col-xs-12">
                <img
                  alt=""
                  src="images/home/featured-projects.png"
                  className="img-responsive"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="dotted-border width"></div>
              </div>
            </div>

            <div className="row margin-top-20px margin-bottom-20px">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div
                  data-ride="carousel-c"
                  className="carousel slide"
                  id="carousel-example-generic-c"
                >
                  <div className="carousel-inner">
                    <div className="item  active">
                      <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <article className="caption overlayImg09">
                            
                            <img
                              alt=""
                              className="caption__media img-responsive"
                              src="images/home/img-1.jpg"
                            />
                            <div className="caption__overlay">
                              <h6 className="caption__overlay__title">
                                <strong>Modern Family</strong>
                              </h6>
                              <p className="caption__overlay__content">
                                President addresses crowd in Milwaukee...
                              </p>
                            </div>
                          </article>
                          <article className="caption overlayImg09">
                            
                            <img
                              alt=""
                              className="caption__media img-responsive"
                              src="images/home/img-2.jpg"
                            />
                            <div className="caption__overlay">
                              <h6 className="caption__overlay__title">
                                <strong>Modern Family</strong>
                              </h6>
                              <p className="caption__overlay__content">
                                President addresses crowd in Milwaukee...
                              </p>
                            </div>
                          </article>
                          <article className="caption overlayImg09">
                            
                            <img
                              alt=""
                              className="caption__media img-responsive"
                              src="images/home/img-3.jpg"
                            />
                            <div className="caption__overlay">
                              <h6 className="caption__overlay__title">
                                <strong>Modern Family</strong>
                              </h6>
                              <p className="caption__overlay__content">
                                President addresses crowd in Milwaukee...
                              </p>
                            </div>
                          </article>
                          <article className="caption overlayImg09">
                            
                            <img
                              alt=""
                              className="caption__media img-responsive"
                              src="images/home/img-4.jpg"
                            />
                            <div className="caption__overlay">
                              <h6 className="caption__overlay__title">
                                <strong>Modern Family</strong>
                              </h6>
                              <p className="caption__overlay__content">
                                President addresses crowd in Milwaukee...
                              </p>
                            </div>
                          </article>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <article className="caption overlayImg09">
                            
                            <img
                              alt=""
                              className="caption__media img-responsive"
                              src="images/home/img-1.jpg"
                            />
                            <div className="caption__overlay">
                              <h6 className="caption__overlay__title">
                                <strong>Modern Family</strong>
                              </h6>
                              <p className="caption__overlay__content">
                                President addresses crowd in Milwaukee...
                              </p>
                            </div>
                          </article>
                          <article className="caption overlayImg09">
                            
                            <img
                              alt=""
                              className="caption__media img-responsive"
                              src="images/home/img-2.jpg"
                            />
                            <div className="caption__overlay">
                              <h6 className="caption__overlay__title">
                                <strong>Modern Family</strong>
                              </h6>
                              <p className="caption__overlay__content">
                                President addresses crowd in Milwaukee...
                              </p>
                            </div>
                          </article>
                          <article className="caption overlayImg09">
                            
                            <img
                              alt=""
                              className="caption__media img-responsive"
                              src="images/home/img-3.jpg"
                            />
                            <div className="caption__overlay">
                              <h6 className="caption__overlay__title">
                                <strong>Modern Family</strong>
                              </h6>
                              <p className="caption__overlay__content">
                                President addresses crowd in Milwaukee...
                              </p>
                            </div>
                          </article>
                          <article className="caption overlayImg09">
                            
                            <img
                              alt=""
                              className="caption__media img-responsive"
                              src="images/home/img-4.jpg"
                            />
                            <div className="caption__overlay">
                              <h6 className="caption__overlay__title">
                                <strong>Modern Family</strong>
                              </h6>
                              <p className="caption__overlay__content">
                                President addresses crowd in Milwaukee...
                              </p>
                            </div>
                          </article>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <article className="caption overlayImg09">
                            
                            <img
                              alt=""
                              className="caption__media img-responsive"
                              src="images/home/img-1.jpg"
                            />
                            <div className="caption__overlay">
                              <h6 className="caption__overlay__title">
                                <strong>Modern Family</strong>
                              </h6>
                              <p className="caption__overlay__content">
                                President addresses crowd in Milwaukee...
                              </p>
                            </div>
                          </article>
                          <article className="caption overlayImg09">
                            
                            <img
                              alt=""
                              className="caption__media img-responsive"
                              src="images/home/img-2.jpg"
                            />
                            <div className="caption__overlay">
                              <h6 className="caption__overlay__title">
                                <strong>Modern Family</strong>
                              </h6>
                              <p className="caption__overlay__content">
                                President addresses crowd in Milwaukee...
                              </p>
                            </div>
                          </article>
                          <article className="caption overlayImg09">
                            
                            <img
                              alt=""
                              className="caption__media img-responsive"
                              src="images/home/img-3.jpg"
                            />
                            <div className="caption__overlay">
                              <h6 className="caption__overlay__title">
                                <strong>Modern Family</strong>
                              </h6>
                              <p className="caption__overlay__content">
                                President addresses crowd in Milwaukee...
                              </p>
                            </div>
                          </article>
                          <article className="caption overlayImg09">
                            
                            <img
                              alt=""
                              className="caption__media img-responsive"
                              src="images/home/img-4.jpg"
                            />
                            <div className="caption__overlay">
                              <h6 className="caption__overlay__title">
                                <strong>Modern Family</strong>
                              </h6>
                              <p className="caption__overlay__content">
                                President addresses crowd in Milwaukee...
                              </p>
                            </div>
                          </article>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    data-slide="prev"
                    href="#carousel-example-generic-c"
                    className="left carousel-control"
                  >
                    
                    <img alt="" src="images/home/arrow-left.png" />
                  </a>
                  <a
                    data-slide="next"
                    href="#carousel-example-generic-c"
                    className="right carousel-control"
                  >
                    
                    <img alt="" src="images/home/arrow-right.png" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="row">
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <img
                      alt=""
                      src="images/home/new-twits.png"
                      className="img-responsive"
                    />
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-12 ">
                    <img
                      alt=""
                      src="images/home/follow-us-on-twitter.png"
                      className="pull-right img-responsive"
                    />
                  </div>
                </div>
                <div className="dotted-border width"></div>

                <div>
                  <div
                    data-ride="carousel-b"
                    className="carousel slide"
                    id="carousel-example-captions1"
                  >
                    <ol className="carousel-indicators">
                      <li
                        className="active"
                        data-slide-to="0"
                        data-target="#carousel-example-captions1"
                      ></li>
                      <li
                        data-slide-to="1"
                        data-target="#carousel-example-captions1"
                      ></li>
                      <li
                        data-slide-to="2"
                        data-target="#carousel-example-captions1"
                        className=""
                      ></li>
                    </ol>
                    <div className="carousel-inner">
                      <div className="item active">
                        <div className="row margin-top-20px">
                          <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                              <div className="NewTwits">
                                <img
                                  src="images/home/img-24.jpg"
                                  width="62"
                                  height="56"
                                  alt=""
                                  className="img-responsive"
                                />
                                <div
                                  className="popover right"
                                  style="display:inline-block; float:left; position:inherit"
                                >
                                  <div className="arrow" style="top:20%;"></div>
                                  <div className="popover-content">
                                    
                                    <small>
                                      <a href="#" className="orange-text">
                                        @topcreative
                                      </a>
                                      There are many variations of passages of
                                      Lorem Ipsum available, but the majority
                                      have suffered alteration...
                                    </small>
                                    <br />
                                    <small className="green-text">
                                      about 40 minutes ago
                                    </small>
                                    <small className="pull-right twitter-icon margin-top-5px"></small>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                              <div className="NewTwits">
                                <img
                                  src="images/home/img-24.jpg"
                                  width="62"
                                  height="56"
                                  alt=""
                                  className="img-responsive"
                                />
                                <div
                                  className="popover right"
                                  style="display:block; float:left; position:inherit"
                                >
                                  <div className="arrow" style="top:20%"></div>
                                  <div className="popover-content">
                                    
                                    <small>
                                      <a href="#" className="orange-text">
                                        @topcreative
                                      </a>
                                      There are many variations of passages of
                                      Lorem Ipsum available, but the majority
                                      have suffered alteration...
                                    </small>
                                    <br />
                                    <small className="green-text">
                                      about 40 minutes ago
                                    </small>
                                    <small className="pull-right twitter-icon margin-top-5px"></small>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                              <div className="NewTwits">
                                <img
                                  src="images/home/img-24.jpg"
                                  width="62"
                                  height="56"
                                  alt=""
                                  className="img-responsive"
                                />
                                <div
                                  className="popover right"
                                  style="display:block; float:left; position:inherit"
                                >
                                  <div className="arrow" style="top:20%"></div>
                                  <div className="popover-content">
                                    
                                    <small>
                                      <a href="#" className="orange-text">
                                        @topcreative
                                      </a>
                                      There are many variations of passages of
                                      Lorem Ipsum available, but the majority
                                      have suffered alteration...
                                    </small>
                                    <br />
                                    <small className="green-text">
                                      about 40 minutes ago
                                    </small>
                                    <small className="pull-right twitter-icon margin-top-5px"></small>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="row margin-top-20px">
                          <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                              <div className="NewTwits">
                                <img
                                  src="images/home/img-24.jpg"
                                  width="62"
                                  height="56"
                                  alt=""
                                  className="img-responsive"
                                />
                                <div
                                  className="popover right"
                                  style="display:block; float:left; position:inherit"
                                >
                                  <div className="arrow" style="top:20%"></div>
                                  <div className="popover-content">
                                    
                                    <small>
                                      <a href="#" className="orange-text">
                                        @topcreative
                                      </a>
                                      There are many variations of passages of
                                      Lorem Ipsum available, but the majority
                                      have suffered alteration...
                                    </small>
                                    <br />
                                    <small className="green-text">
                                      about 40 minutes ago
                                    </small>
                                    <small className="pull-right twitter-icon margin-top-5px"></small>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                              <div className="NewTwits">
                                <img
                                  src="images/home/img-24.jpg"
                                  width="62"
                                  height="56"
                                  alt=""
                                  className="img-responsive"
                                />
                                <div
                                  className="popover right"
                                  style="display:block; float:left; position:inherit"
                                >
                                  <div className="arrow" style="top:20%"></div>
                                  <div className="popover-content">
                                    
                                    <small>
                                      <a href="#" className="orange-text">
                                        @topcreative
                                      </a>
                                      There are many variations of passages of
                                      Lorem Ipsum available, but the majority
                                      have suffered alteration...
                                    </small>
                                    <br />
                                    <small className="green-text">
                                      about 40 minutes ago
                                    </small>
                                    <small className="pull-right twitter-icon margin-top-5px"></small>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                              <div className="NewTwits">
                                <img
                                  src="images/home/img-24.jpg"
                                  width="62"
                                  height="56"
                                  alt=""
                                  className="img-responsive"
                                />
                                <div
                                  className="popover right"
                                  style="display:block; float:left; position:inherit"
                                >
                                  <div className="arrow" style="top:20%"></div>
                                  <div className="popover-content">
                                    
                                    <small>
                                      <a href="#" className="orange-text">
                                        @topcreative
                                      </a>
                                      There are many variations of passages of
                                      Lorem Ipsum available, but the majority
                                      have suffered alteration...
                                    </small>
                                    <br />
                                    <small className="green-text">
                                      about 40 minutes ago
                                    </small>
                                    <small className="pull-right twitter-icon margin-top-5px"></small>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="row margin-top-20px">
                          <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                              <div className="NewTwits">
                                <img
                                  src="images/home/img-24.jpg"
                                  width="62"
                                  height="56"
                                  alt=""
                                  className="img-responsive"
                                />
                                <div
                                  className="popover right"
                                  style="display:block; float:left; position:inherit"
                                >
                                  <div className="arrow" style="top:20%"></div>
                                  <div className="popover-content">
                                    
                                    <small>
                                      <a href="#" className="orange-text">
                                        @topcreative
                                      </a>
                                      There are many variations of passages of
                                      Lorem Ipsum available, but the majority
                                      have suffered alteration...
                                    </small>
                                    <br />
                                    <small className="green-text">
                                      about 40 minutes ago
                                    </small>
                                    <small className="pull-right twitter-icon margin-top-5px"></small>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                              <div className="NewTwits">
                                <img
                                  src="images/home/img-24.jpg"
                                  width="62"
                                  height="56"
                                  alt=""
                                  className="img-responsive"
                                />
                                <div
                                  className="popover right"
                                  style="display:block; float:left; position:inherit"
                                >
                                  <div className="arrow" style="top:20%"></div>
                                  <div className="popover-content">
                                    
                                    <small>
                                      <a href="#" className="orange-text">
                                        @topcreative
                                      </a>
                                      There are many variations of passages of
                                      Lorem Ipsum available, but the majority
                                      have suffered alteration...
                                    </small>
                                    <br />
                                    <small className="green-text">
                                      about 40 minutes ago
                                    </small>
                                    <small className="pull-right twitter-icon margin-top-5px"></small>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                              <div className="NewTwits">
                                <img
                                  src="images/home/img-24.jpg"
                                  width="62"
                                  height="56"
                                  alt=""
                                  className="img-responsive"
                                />
                                <div
                                  className="popover right"
                                  style="display:block; float:left; position:inherit;"
                                >
                                  <div className="arrow" style="top:20%"></div>
                                  <div className="popover-content">
                                    
                                    <small>
                                      <a href="#" className="orange-text">
                                        @topcreative
                                      </a>
                                      There are many variations of passages of
                                      Lorem Ipsum available, but the majority
                                      have suffered alteration...
                                    </small>
                                    <br />
                                    <small className="green-text">
                                      about 40 minutes ago
                                    </small>
                                    <small className="pull-right twitter-icon margin-top-5px"></small>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Home;
