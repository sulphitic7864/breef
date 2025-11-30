import React, { useState } from "react";
import SubNavbar from "../components/SubNavbar";
import profile7 from "../assets/images/profile-img-7.jpg"
import profile8 from "../assets/images/profile-img-8.jpg"
import profile9 from "../assets/images/profile-img-9.jpg"

const featuredFreelancers = [
  {
    name: "Jony Becky",
    country: "United States",
    description:
      "Have an email template 90% designed in GO DADDY email marketing program but there are some minor changes I need done.",
    img: {profile7},
  },
  {
    name: "Chirs Chella",
    country: "United States",
    description:
      "Have an email template 90% designed in GO DADDY email marketing program but there are some minor changes I need done.",
    img: {profile8},
  },
  {
    name: "Lee Thomas",
    country: "United States",
    description:
      "Have an email template 90% designed in GO DADDY email marketing program but there are some minor changes I need done.",
    img: {profile9},
  },
];

export default function PostJob() {
  const [files, setFiles] = useState([]);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const handleFileChange = (e) => {
    setFiles([...files, ...Array.from(e.target.files)]);
  };

  const removeFile = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  return (
    <>
      <SubNavbar />
      <div className="container my-4">
        <div className="row">
          {/* Left Column */}
          <div className="col-md-8">
            <h6 className="text-success mb-3">
              <span className="fw-bold">POST</span> JOB
            </h6>
            <hr />
            <form>
              <div className="mb-3">
                <label className="form-label fw-semibold">Project Name</label>
                <input type="text" className="form-control" />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">
                  What work do you require?
                </label>
                <select className="form-select">
                  <option>Select a category of work (optional)</option>
                </select>
                <small className="form-text text-muted">
                  Need help? Browse our Job Templates.
                </small>
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">
                  Enter some skills that relate to the project
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Start typing to see list..."
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">
                  Describe your project in detail
                </label>
                <textarea className="form-control" rows="4"></textarea>
              </div>

              {/* File Uploads */}
              <div className="mb-3">
                <label className="form-label fw-bold">Add Files</label>
                <div className="mb-2">
                  {files.map((file, idx) => (
                    <div
                      key={idx}
                      className="alert alert-warning d-inline-block me-2 p-2"
                    >
                      {file.name}
                      <button
                        type="button"
                        className="btn-close ms-2"
                        onClick={() => removeFile(idx)}
                      ></button>
                    </div>
                  ))}
                </div>
                <input
                  type="file"
                  className="form-control"
                  multiple
                  onChange={handleFileChange}
                />
              </div>

              {/* Project Type */}
              <div className="mb-3">
                <label className="form-label fw-bold">Project Type</label>
                <div className="mb-2">
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" />
                    <label className="form-check-label">Hourly</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" />
                    <label className="form-check-label">Fixed Price</label>
                  </div>
                </div>
                <div className="d-flex gap-2 mb-2">
                  <select className="form-select w-auto">
                    <option>Part Time</option>
                    <option>Full Time</option>
                    <option>Single</option>
                  </select>
                  <input type="text" className="form-control w-auto" />
                  <span className="pt-2">hrs/week for</span>
                  <select className="form-select w-auto">
                    <option>1-2 weeks</option>
                    <option>3-4 weeks</option>
                    <option>1-3 months</option>
                    <option>4-6 months</option>
                    <option>More than 9 months</option>
                  </select>
                </div>
              </div>

              {/* Budget */}
              <div className="mb-3">
                <label className="form-label fw-bold">Budget</label>
                <div className="d-flex gap-2">
                  <select className="form-select w-auto">
                    <option>USD</option>
                  </select>
                  <select className="form-select w-auto">
                    <option>Very small project ($250-750 USD)...</option>
                  </select>
                </div>
              </div>

              {/* Privacy and Other Options */}
              <div className="mb-3">
                <button
                  type="button"
                  className="btn btn-link p-0"
                  onClick={() => setShowPrivacy(!showPrivacy)}
                >
                  {showPrivacy ? "Hide" : "Show"} Privacy and Other Options
                </button>
                {showPrivacy && (
                  <div className="border p-3 mt-2 bg-light">
                    <div className="mb-2">
                      <label className="form-label fw-bold">Job Location</label>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" />
                        <label className="form-check-label">
                          No preference
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" />
                        <label className="form-check-label">
                          Preferred location
                        </label>
                      </div>
                    </div>

                    <div className="mb-2">
                      <label className="form-label fw-bold">
                        Post This Job For
                      </label>
                      <select className="form-select w-auto">
                        <option>1 day</option>
                        <option>2 days</option>
                        <option>3 days</option>
                        <option>15 days</option>
                        <option>30 days</option>
                      </select>
                    </div>

                    <div className="mb-2">
                      <label className="form-label fw-bold">
                        Job Posting Visibility
                      </label>
                      <div>
                        <input type="radio" name="visibility" /> Public—Visible
                        to everyone in the Topcreative community.
                      </div>
                      <div>
                        <input type="radio" name="visibility" /> Featured - You
                        can list your project as featured to ensure more
                        visibility and attract more bidders ($10.00)
                      </div>
                      <div>
                        <input type="radio" name="visibility" /> Private - You
                        can click this if confidentiality is important and if
                        you don't prefer your project to appear on search
                        engines and avoid viewing by unlogged users ($30.00)
                      </div>
                      <div>
                        <input type="radio" name="visibility" /> Blind - By
                        clicking this, you can avoid bidders from viewing other
                        biddings ($50.00)
                      </div>
                      <div>
                        <input type="radio" name="visibility" /> NDA - To avoid
                        contractors from discussing and sharing your project
                        other than in private messages and keep your files
                        confidential, you can ask contractors to agree signing a
                        Non Disclosure Agreement digitally ($30.00)
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <p>
                By clicking ‘Post Job Now’, you agree to the
                <a href="#" className="text-success">
                  Terms & Conditions
                </a>
                and
                <a href="#" className="text-success">
                  Privacy Policy
                </a>
                .
              </p>
              <button type="button" className="btn btn-primary">
                POST JOB NOW
              </button>
            </form>
          </div>

          {/* Right Column - Featured Freelancers */}
          <div className="col-md-4">
            <div className="border p-3">
              <h5 className="text-warning mb-2">
                <span className="fw-bold">FEATURED</span> FREELANCERS
              </h5>
              <hr />
              {featuredFreelancers.map((f, i) => (
                <div key={i} className="d-flex py-2 border-bottom">
                  <img src={profile7} alt="profile" className="me-2" width={50} height={50} />
                  <div>
                    <small className="">{f.name}</small>
                    <small className="text-muted d-inline-block ms-5">{f.country}</small>
                    <small className="d-block">{f.description}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
