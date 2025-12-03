// Profile.jsx
import React, { useState, useEffect } from "react";
import "../assets/styles/Profile.css";
import SubNavbar from "../components/SubNavbar";
import profile from "../assets/images/profile.jpg";
import designer from "../assets/images/designer.jpg";
import varification from "../assets/images/verifications.jpg";
import { FaStar, FaCaretDown, FaRegArrowAltCircleRight   } from "react-icons/fa"; // Import the star icon

const RatingDisplay = ({
  rating = 2,
  totalStars = 5,
  totalReviews = 1,
  hours = 0,
}) => {
  return (
    <>
      {totalReviews}
      {/* 2. Star Icons */}
      <span className="star-rating mx-1">
        {[...Array(totalStars)].map((_, index) => {
          const starValue = index + 1;
          return (
            <FaStar
              key={index}
              className="star-icon"
              // Apply a class based on whether the star is filled (<= rating)
              color={starValue <= rating ? "#5cb85c" : "#ccc"}
            />
          );
        })}
      </span>
      {/* 3. N/A and Hours */}
      <span className="mx-2 not-available">N/A</span> {hours} Hours
    </>
  );
};

const Profile = () => {
  const [animatedValues, setAnimatedValues] = useState({
    design: 0,
    creativity: 0,
    usability: 0,
    content: 0,
    average: 0,
  });

  const finalValues = {
    design: 7.79,
    creativity: 6.59,
    usability: 5.99,
    content: 7.93,
    average: 6.99,
  };

  useEffect(() => {
    const animateValues = () => {
      const steps = 60;
      const duration = 1000;
      const interval = duration / steps;

      Object.keys(finalValues).forEach((key) => {
        let currentStep = 0;
        const stepValue = finalValues[key] / steps;
        const intervalId = setInterval(() => {
          currentStep++;
          setAnimatedValues((prev) => ({
            ...prev,
            [key]: stepValue * currentStep,
          }));

          if (currentStep >= steps) {
            clearInterval(intervalId);
            setAnimatedValues((prev) => ({
              ...prev,
              [key]: finalValues[key],
            }));
          }
        }, interval);
      });
    };

    animateValues();
  }, []);

  const renderCircularGauge = (value, label, color, dotColor) => {
    const percentage = (value / 10) * 100;
    const circumference = 2 * Math.PI * 45;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className="gauge-container">
        <div className="gauge-wrapper">
          <svg width="100" height="100" className="gauge-svg">
            <circle
              className="gauge-background"
              cx="50"
              cy="50"
              r="45"
              strokeWidth="10"
              fill="none"
            />
            <circle
              className="gauge-progress"
              cx="50"
              cy="50"
              r="45"
              strokeWidth="10"
              fill="none"
              stroke={color}
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              transform="rotate(-90 50 50)"
              style={{
                transition: "stroke-dashoffset 1s ease-in-out",
              }}
            />
          </svg>
          <div className="gauge-value">
            <span className="value-int">{Math.floor(value)}</span>
            <span className="value-dec">.{Math.round((value % 1) * 100)}</span>
          </div>
        </div>
        <div className="gauge-label">
          <span
            className="color-dot"
            style={{ backgroundColor: dotColor }}
          ></span>
          <span>{label}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="profile-container container g-0">
      <SubNavbar />

      {/* Main Content */}
      <div className="row mt-3">
        {/* Left Sidebar */}
        <div className="col-md-3 col-lg-3 mb-2">
          <div className="sidebar">
            <div className="profile-image-card card bg-transparent">
              <img
                src={profile}
                alt="Profile"
                className="profile-image card-img-top p-3"
              />
              <ul className="sidebar-menu list-group">
                <li className="list-group-item active">
                  <a href="#">Overview</a>
                </li>
                <li className="list-group-item">
                  <a href="#">Job History</a>
                </li>
                <li className="list-group-item">
                  <a href="#">Contact Info</a>
                </li>
                <li className="list-group-item">
                  <a href="#">Privacy Settings</a>
                </li>
                <li className="list-group-item">
                  <a href="#">Public View of Profile</a>
                </li>
                <li className="list-group-item">
                  <a href="#">Portfolio</a>
                </li>
                <li className="list-group-item">
                  <a href="#">Skills</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="col-md-6 col-lg-6 mb-2">
          {/* Company Header */}
          <div className="row mb-3">
            <div className="col-md-6">
              <h3 className="company-name w-auto position-relative">
                FR Creatives{" "}
                <span className="verified-badge position-absolute top-15 start-50 translate-middle badge rounded-circle">
                  ✓
                </span>
              </h3>
              <small className="tagline">
                <strong>pick ur side!</strong>
              </small>
              <br />
              <button type="button" className="btn btn-primary btn-sm mt-1">
                Edit
              </button>
            </div>
            <div className="col-md-6">
              <div className="contact-icons border p-2">
                <span className="me-3 icon" title="Message">
                  💬
                </span>
                <span className="me-3 icon" title="Skype">
                  📞
                </span>
                <span className="me-3 icon" title="Video Call">
                  📹
                </span>
                <span className="me-3 icon" title="Note">
                  📝
                </span>
                <span className="icon" title="Phone">
                  📱
                </span>
              </div>
              <small className="watch-list float-end mt-2">
                <span className="me-2">👁️</span>
                <span className="text-secondary">Add Watch List</span>
              </small>
            </div>
          </div>

          {/* Location and Date Info */}
          <div className="row mb-2 border-bottom border-top">
            <div className="col-12">
              <div className="p-2">
                <span className="me-3">
                  <span className="me-1">🇩🇪</span>
                  <small> Germany</small>
                </span>
                <span className="me-3">
                  <small className="me-2">Munich</small>
                  <button type="button" className="btn btn-primary btn-sm">
                    Edit
                  </button>
                </span>
                <span className="d-none d-md-inline">
                  <small className="me-2 text-muted">
                    Mar 10, 2011 - 7:21 AM ET
                  </small>
                  <button type="button" className="btn btn-primary btn-sm">
                    Edit
                  </button>
                </span>
                <span className="d-md-none">
                  <br />
                  <small className="me-2 text-muted">
                    Mar 10, 2011 - 7:21 AM ET
                  </small>
                  <button type="button" className="btn btn-primary btn-sm">
                    Edit
                  </button>
                </span>
              </div>
            </div>
          </div>

          {/* Overview */}
          <div className="row mb-2">
            <div className="col-12">
              <h4 className="mb-1">Overview</h4>
              <p className="mb-2">
                Here! Fatih was born in Corlu/Turkey at 1983. Later he designed
                the art in his imagination. His skills are Typography, Color,
                Grid System, Different Ideas...
              </p>
              <p className="mb-2">
                His creative web designer and flasher with more than 10 years
                experience in creating professional design for personal and
                corporate websites.
              </p>
              <p className="mb-2">
                Thanks again for visiting, and please enjoy the rest of your
                visit here!
              </p>
              <small>
                <a href="#" className="text-secondary">
                  View More <FaCaretDown size={16} />
                </a>
              </small>
            </div>
          </div>

          <div className="row mb-2">
            <div className="col-12">
              <div className="dotted-border"></div>
            </div>
          </div>

          {/* Skills Gauges */}
          <div className="row mb-2">
            <div className="col-12">
              <div className="gauges-grid row g-3">
                <div className="col-4 col-md-4 col-lg-2">
                  {renderCircularGauge(
                    animatedValues.design,
                    "Design",
                    "#df6c4f",
                    "#df6c4f"
                  )}
                </div>
                <div className="col-4 col-md-4 col-lg-2">
                  {renderCircularGauge(
                    animatedValues.creativity,
                    "Creativity",
                    "#ecd06f",
                    "#ecd06f"
                  )}
                </div>
                <div className="col-4 col-md-4 col-lg-2">
                  {renderCircularGauge(
                    animatedValues.usability,
                    "Usability",
                    "#3c948b",
                    "#3c948b"
                  )}
                </div>
                <div className="col-4 col-md-4 col-lg-2">
                  {renderCircularGauge(
                    animatedValues.content,
                    "Content",
                    "#1a99aa",
                    "#1a99aa"
                  )}
                </div>
                <div className="col-4 col-md-4 col-lg-2">
                  {renderCircularGauge(
                    animatedValues.average,
                    "Average",
                    "#333",
                    "#333"
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="dotted-border"></div>
            </div>
          </div>
        </div>

        {/* Right Contact Card */}
        <div className="col-md-3 col-lg-3 mb-2">
          <div className="contact-card">
            <div className="contact-header p-2 mb-2">
              <h6 className="mb-0">
                <strong>Contact or Post a Job</strong> <FaRegArrowAltCircleRight  />
              </h6>
            </div>
            <div className="table-responsive">
              <table className="table table-bordered mb-0">
                <tbody>
                  <tr>
                    <td colSpan="2">
                      <h5 className="mb-0">ID</h5>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <small>Username</small>
                    </td>
                    <td>
                      <small>CEmpl</small>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <small>Reviews</small>
                    </td>
                    <td>
                      <small className="d-block">Staff</small>
                      <small className="d-block">Dxinerz</small>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <small>Member Since</small>
                    </td>
                    <td>
                      <small>Oct 21, 2013</small>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="2">
                      <p className="mb-2">
                        <small>Top Creative URL</small>
                        <br />
                        <small className="text-secondary">
                          http://www.topcreative.com/profile
                        </small>
                      </p>
                      <p>
                        <small className="text-secondary">/CEmpl/profile</small>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="2" className="verifications-cell">
                      <small>Verifications</small>
                      <div className="text-center my-3">
                        <div className="verification-placeholder">
                          <img src={varification} alt="varification" />
                        </div>
                      </div>
                      <div className="download-widget text-center py-2 ">
                        <small className="text-white">
                          <strong>Download your profile widget</strong>
                        </small>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Company Quick View */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="table-responsive">
            <table className="table table-bordered bg-body-secondary">
              <tbody>
                <tr>
                  <td colSpan="6">
                    <div className="d-flex justify-content-between align-items-center">
                      <b>Company Quick View</b>
                      <small>
                        <a href="#" className="text-secondary">
                          <strong>Show:</strong> All Categories
                          <FaCaretDown size={16} />
                        </a>
                      </small>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">
                    <small>Last 12 Months</small>
                  </td>
                  <td>
                    <small>Jobs</small>
                  </td>
                  <td>
                    <small>Reviews</small>
                  </td>
                  <td>
                    <small>Clients</small>
                  </td>
                  <td>
                    <small>Earnings</small>
                  </td>
                  <td rowSpan="2" className="text-center">
                    <div className="level-badge">
                      Level <br />7
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="text-center">
                    <small>Designation</small>
                  </td>
                  <td>
                    <small>
                      1 <span className="mx-2">Total</span>0{" "}
                      <span className="mx-2">Milestones</span> 0 Hours
                    </small>
                  </td>
                  <td>
                    <small>
                      <RatingDisplay />
                    </small>
                  </td>
                  <td>
                    <small>
                      0 <span className="mx-2">Total</span> 0%{" "}
                      <span className="mx-2">Repeat</span>
                    </small>
                  </td>
                  <td>
                    <small>
                      <span className="mx-2">Private</span> $60 Total{" "}
                      <span className="mx-2">Per Client</span>
                    </small>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Team Members */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="team-section mb-3">
  <div className="d-flex justify-content-between align-items-center mb-2">
    <b>Team Members</b>
    <button className="btn btn-primary btn-sm">
      <small><strong>Add new Member</strong></small>
    </button>
  </div>

  <div className="d-flex justify-content-between align-items-center border">
    {[1, 2, 3, 4].map((member, index) => (
      <div key={index} className="d-flex justify-content-between border w-100 p-3">
        <div>
          <span className="fw-semibold">Corentin Pellé</span><br />
          <small>Designer</small>
        </div>

        <img src={designer} alt="Designer" className="team-img" />
      </div>
    ))}
  </div>
</div>

        </div>
      </div>

      {/* Job History */}
      <div className="row mb-4">
        <div className="col-12">
          <h4 className="mb-2">My Job Posts and Ratings (31)</h4>
          <div className="job-stats p-2 d-none d-md-block border-bottom">
            <small>
              <strong>32</strong> Jobs Posted
            </small>
            <span className="mx-3 text-muted">|</span>
            <small>
              <strong>19</strong> Jobs Awarded
            </small>
            <span className="mx-3 text-muted">|</span>
            <small>
              <strong>59%</strong> Award Ratio
            </small>
            <span className="mx-3 text-muted">|</span>
            <small>
              <strong>$508</strong> Purchased
            </small>
          </div>
          <div className="job-filters px-2 py-1 d-none d-md-block border-2 border-bottom">
            <div className="text-end">
              <small>
                <a href="#" className="text-secondary">
                  All Categories <FaCaretDown size={16} />
                </a>
              </small>
              <small className="ms-3">
                <a href="#" className="text-secondary">
                  All Jobs <FaCaretDown size={16} />
                </a>
              </small>
              <small className="ms-3">
                Sort By:
                <a href="#" className="sort-button ms-2">
                  Posted Date <FaCaretDown size={16} />
                </a>
              </small>
            </div>
          </div>

          {/* Mobile Stats */}
          <div className="job-stats-mobile yellow-bg p-3 mb-3 d-md-none text-center">
            <small>
              <strong>32</strong> Jobs Posted
            </small>
            <small className="ms-3">
              <strong>19</strong> Jobs Awarded
            </small>
            <br />
            <small className="ms-3">
              <strong>59%</strong> Award Ratio
            </small>
            <small className="ms-3">
              <strong>$508</strong> Purchased
            </small>
          </div>
          <div className="job-filters-mobile gray-bg p-3 mb-3 d-md-none">
            <small>
              <a href="#" className="text-secondary">
                All Categories <FaCaretDown size={16} />
              </a>
            </small>
            <small className="ms-3">
              <a href="#" className="text-secondary">
                All Jobs <FaCaretDown size={16} />
              </a>
            </small>
            <br />
            <br />
            <small>
              Sort By:
              <a href="#" className="sort-button ms-2">
                Posted Date <FaCaretDown size={16} />
              </a>
            </small>
          </div>

          {/* Job Items */}
          {[1, 2, 3].map((job, index) => (
            <React.Fragment key={index}>
              <div className="job-item">
                <h6 className="text-secondary mb-0">SEO of my website</h6>
                <small className="text-dark">
                  <strong>My Rating for this Job</strong>
                </small>
                <br />
                <small className="text-dark d-flex">
                  <span className="stars">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </span>
                  &nbsp;Not Yet Rated
                  <span className="mx-3 text-muted">|</span>
                  <small className="text-dark">Contractor: None Selected</small>
                </small>
                <small className="text-dark">Oct 25, 2012</small>
                <span className="mx-3 text-muted">|</span>
                <small className="text-dark">N/A</small>
                <span className="mx-3 text-muted">|</span>
                <small className="text-dark">Marketing Strategy</small>
                <span className="mx-3 text-muted">|</span>
                <small className="text-dark">Hiring Open</small>
                <span className="float-end">
                  <small className="text-secondary">
                    Job Details <FaCaretDown size={16} />
                  </small>
                </span>
              </div>
              {index < 2 && <div className="dotted-border mb-3"></div>}
            </React.Fragment>
          ))}

          <div className="dotted-border mb-1"></div>
          <div className="row">
            <div className="col-md-6">
              <small>
                <a href="#" className="text-secondary">
                  View More <FaCaretDown size={16} />
                </a>
              </small>
            </div>
          </div>
          <div className="dotted-border mt-3 mb-4"></div>
        </div>
      </div>

      {/* Portfolio */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h3>Portfolio</h3>
            <button className="btn btn-primary btn-sm">
              <small>
                <strong>Edit</strong>
              </small>
            </button>
          </div>
          <div className="dotted-border mb-3"></div>
          <div className="portfolio-carousel border bg-white p-3">
            <div className="row g-3">
              {[1, 2, 3, 4].map((item, index) => (
                <div key={index} className="col-6 col-md-3">
                  <div className="portfolio-item">
                    <div className="portfolio-img-placeholder">🖼️</div>
                    <small className="text-center d-block mt-2">
                      Portfolio Item {index + 1}
                    </small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Services */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="d-flex justify-content-between align-items-center">
            <h4>Services</h4>
            <button className="btn btn-primary btn-sm">
              <small>
                <strong>Edit</strong>
              </small>
            </button>
          </div>
          <div className="dotted-border mb-2"></div>
          <p className="mb-2">
            Dxinerz specializes in the design and development of high quality
            products and cost effective IT solutions. We are a technology driven
            company equipped with best minds in the market and utilize the
            latest technologies/tools to deliver top notch products. Our core
            competency lies in software development and web technology.
          </p>
          <p className="mb-2">
            We are always looking forward to develop long-term relationship with
            clients. We strongly believe that our clients are part of Dxinerz
            family. Being part of the family, we will take good care of you. If
            you build a partnership with us, this ensures that you will have
            access to a professional staff that knows your business and will
            surely exceed your expectations. Please find below the list of
            services being offered; We strongly believe that our clients are
            part of Dxinerz family. Being part of the family, we will take good
            care of you. If you build a partnership with us, this ensures that
            you will have access to a professional staff that knows your
            business and will surely exceed your expectations. Please find below
            the list of services being offered;
          </p>
          <p className="mb-2">
            We are always looking forward to develop long-term relationship with
            clients. We strongly believe that our clients are part of Dxinerz
            family. Being part of the family, we will take good care of you. If
            you build a partnership with us, this ensures that you will have
            access to a professional staff that knows your business and will
            surely exceed your expectations.
          </p>
        </div>
      </div>

      {/* Certifications & Education */}
      <div className="row mb-5">
        <div className="col-md-6 mb-4 mb-md-0">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h3>Certifications</h3>
            <button className="btn btn-primary btn-sm">
              <small>
                <strong>Add Certificates</strong>
              </small>
            </button>
          </div>
          <div className="dotted-border"></div>

          {[
            {
              title: "Drupal",
              desc: "Organization member of the Drupal Association",
              year: "2011",
            },
            {
              title: "Google.com",
              desc: "Google Adwords Certified Partner",
              year: "2011",
            },
            {
              title: "Microsoft Corporation",
              desc: "Small Business Specialist",
              year: "2011",
            },
          ].map((cert, index) => (
            <React.Fragment key={index}>
              <div className="cert-item">
                <div className="d-flex justify-content-between">
                  <div>
                    <p className="text-secondary mb-1">
                      <strong>{cert.title}</strong>
                    </p>
                    <p className="mb-1">{cert.desc}</p>
                  </div>
                  <div className="text-primary">Awarded: {cert.year}</div>
                </div>
              </div>
              {index < 2 && <div className="dotted-border mb-3"></div>}
            </React.Fragment>
          ))}
        </div>

        <div className="col-md-6">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h3>Education</h3>
            <button className="btn btn-primary btn-sm">
              <small>
                <strong>Add Education</strong>
              </small>
            </button>
          </div>
          <div className="dotted-border"></div>

          {[
            {
              school: "Middlesex University, London, UK",
              degree: "Masters in Business Administration",
              years: "2005 - 2009",
            },
            {
              school: "Middlesex University, London, UK",
              degree: "Masters in Business Administration",
              years: "2005 - 2009",
            },
            {
              school: "Middlesex University, London, UK",
              degree: "Masters in Business Administration",
              years: "2005 - 2009",
            },
          ].map((edu, index) => (
            <React.Fragment key={index}>
              <div className="edu-item mb-1">
                <div className="d-flex justify-content-between">
                  <div>
                    <p className="text-secondary mb-1">
                      <strong>{edu.school}</strong>
                    </p>
                    <p className="mb-1">{edu.degree}</p>
                  </div>
                  <div className="text-warning">{edu.years}</div>
                </div>
              </div>
              {index < 2 && <div className="dotted-border mb-3"></div>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
