import React, { useState } from "react";
import SubNavbar from "../components/SubNavbar";
import profile7 from "../assets/images/profile-img-7.jpg";
import profile8 from "../assets/images/profile-img-8.jpg";
import profile9 from "../assets/images/profile-img-9.jpg";

const featuredFreelancers = [
  {
    name: "Jony Becky",
    country: "United States",
    description:
      "Have an email template 90% designed in GO DADDY email marketing program but there are some minor changes I need done.",
    img: profile7,
  },
  {
    name: "Chirs Chella",
    country: "United States",
    description:
      "Have an email template 90% designed in GO DADDY email marketing program but there are some minor changes I need done.",
    img: profile8,
  },
  {
    name: "Lee Thomas",
    country: "United States",
    description:
      "Have an email template 90% designed in GO DADDY email marketing program but there are some minor changes I need done.",
    img: profile9,
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
                <div className="d-flex justify-content-between">
                  <label className="form-label fw-semibold">
                    What work do you require?
                  </label>
                  <small className="form-text text-primary ms-auto">
                    Need help? Browse our Job Templates.
                  </small>
                </div>
                <select className="form-select">
                  <option>Select a category of work (optional)</option>
                </select>
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
                <label className="form-label fw-medium">Add Files</label>
                <div className="mb-2">
                  {files.map((file, idx) => (
                    <div
                      key={idx}
                      className="alert alert-white border d-inline-block me-2 p-2"
                    >
                      {file.name}
                      <button
                        type="button"
                        className="btn-close text-primary ms-2"
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
                <label className="form-label fw-medium">Project Type</label>
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
                <label className="form-label fw-medium">Budget</label>
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
                <label className="form-label fw-medium">
                  Privacy and Other Options
                </label>
                <br />
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setShowPrivacy(!showPrivacy)}
                >
                  {showPrivacy ? "Hide" : "Show"}
                </button>
                {showPrivacy && (
                  <div className="border p-3 mt-2 bg-light">
                    <label className="form-label fw-semibold mb-1">
                      Job Location
                    </label>
                    <div className="mb-2">
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" />
                        <label className="form-check-label">
                          <small>No preference</small> 
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" />
                        <label className="form-check-label">
                          <small>Preferred location</small>
                        </label>
                      </div>
                    </div>

                    <div className="mb-3">
                      <label className="form-label fw-semibold mb-1">
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

                    <div className="mb-3">
                      <label className="form-label fw-semibold mb-1">
                        Proposed Start Date
                      </label>
                      <div>
                        <input
                          type="radio"
                          name="start-date"
                          className="text-sm"
                        />{" "}
                        <small>
                          Public—Visible Start immediately after proposal is
                          selected.
                        </small>
                      </div>
                      <div>
                        <input type="radio" name="start-date" />
                        <small> will start on</small>
                      </div>
                    </div>

                    <div className="mb-2">
                      <label className="form-label fw-semibold mb-1">
                        Job Posting Visibility
                      </label>
                      <div>
                        <input
                          type="radio"
                          name="visibility"
                          className="text-sm"
                        />{" "}
                        <small>
                          Public—Visible to everyone in the Topcreative
                          community.
                        </small>
                      </div>
                      <div>
                        <input type="radio" name="visibility" />{" "}
                        <small>
                          Featured - You can list your project as featured to
                          ensure more visibility and attract more bidders
                          ($10.00)
                        </small>
                      </div>
                      <div>
                        <input type="radio" name="visibility" />{" "}
                        <small>
                          Private - You can click this if confidentiality is
                          important and if you don't prefer your project to
                          appear on search engines and avoid viewing by unlogged
                          users ($30.00)
                        </small>
                      </div>
                      <div>
                        <input type="radio" name="visibility" />{" "}
                        <small>
                          Blind - By clicking this, you can avoid bidders from
                          viewing other biddings ($50.00)
                        </small>
                      </div>
                      <div>
                        <input type="radio" name="visibility" />{" "}
                        <small>
                          NDA - To avoid contractors from discussing and sharing
                          your project other than in private messages and keep
                          your files confidential, you can ask contractors to
                          agree signing a Non Disclosure Agreement digitally
                          ($30.00)
                        </small>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <p className="mb-1">
                By clicking ‘Post Job Now’, you agree to the
                <a href="#" className="text-secondary px-1">
                  Terms & Conditions
                </a>
                and
                <a href="#" className="text-secondary px-1">
                  Privacy Policy
                </a>
              </p>
              <p className="fw-medium">
                Your project will be reviewed by staff before it goes live.
              </p>
              <button type="button" className="btn btn-primary fw-medium">
                POST JOB NOW
              </button>
            </form>
          </div>

          {/* Right Column - Featured Freelancers */}
          <div className="col-md-4">
            <div className="border p-2">
              <h5 className="text-primary">
                <span className="fw-bold">FEATURED</span> FREELANCERS
              </h5>
              <hr />
              {featuredFreelancers.map((f, i) => (
                <div
                  key={i}
                  className="d-flex py-2 border-bottom align-items-start"
                >
                  <img
                    src={`${f.img}`}
                    alt="profile"
                    className="me-2"
                    width={50}
                    height={50}
                    style={{ borderRadius: "4px" }}
                  />

                  <div className="flex-grow-1">
                    {/* Name + Country in same row */}
                    <div className="d-flex justify-content-between">
                      <small className="fw-bold">{f.name}</small>
                      <small className="text-muted">{f.country}</small>
                    </div>

                    {/* Description */}
                    <small className="d-block mt-1">{f.description}</small>
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
