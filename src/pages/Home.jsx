// Home.jsx
import React, { useEffect, useState } from "react";
import "../assets/styles/Home.css";

import banner1 from "../assets/images/home/banner1.jpg";
import banner2 from "../assets/images/home/banner2.jpg";
import banner3 from "../assets/images/home/banner1.jpg";
import fb1 from "../assets/images/home/facebook_icon01.jpg";
import twitter1 from "../assets/images/home/twitter_icon01.jpg";
import google1 from "../assets/images/home/google_Icon01.jpg";
import fb2 from "../assets/images/sicon-bg5b.jpg";
import twitter2 from "../assets/images/sicon-bg4b.jpg";
import google2 from "../assets/images/sicon-bg3b.jpg";
import fb3 from "../assets/images/sicon-bg5b2.jpg";
import twitter3 from "../assets/images/sicon-bg4b2.jpg";
import google3 from "../assets/images/sicon-bg3b2.jpg";

import c1 from "../assets/images/home/img-5a.jpg";
import c2 from "../assets/images/home/img-6a.jpg";
import c3 from "../assets/images/home/img-7a.jpg";
import c4 from "../assets/images/home/img-8a.jpg";
import c5 from "../assets/images/home/img-9a.jpg";
import c6 from "../assets/images/home/img-10a.jpg";
import c7 from "../assets/images/home/img-11a.jpg";
import c8 from "../assets/images/home/img-12a.jpg";

import twitImg from "../assets/images/home/img-24.jpg";

import f1 from "../assets/images/home/img-1.jpg";
import f2 from "../assets/images/home/img-2.jpg";
import f3 from "../assets/images/home/img-3.jpg";
import f4 from "../assets/images/home/img-4.jpg";
import f5 from "../assets/images/home/img-4.jpg";
import f6 from "../assets/images/home/img-2.jpg";
import f7 from "../assets/images/home/img-1.jpg";
import f8 from "../assets/images/home/img-3.jpg";

const twitsData = [
  {
    img: twitImg,
    handle: "@topcreative",
    text:
      "New design trends are emerging quickly! Discover what’s hot in digital creativity this week.",
    time: "10 minutes ago",
  },
  {
    img: twitImg,
    handle: "@DesignMasters",
    text:
      "Typography matters. A simple font change can bring a brand to life. Always explore your options!",
    time: "25 minutes ago",
  },
  {
    img: twitImg,
    handle: "@FreelanceHub",
    text:
      "Pro tip: Clear job descriptions attract better freelancers. Be specific and save time.",
    time: "1 hour ago",
  },
  {
    img: twitImg,
    handle: "@CreativeUpdates",
    text:
      "We just launched a new batch of featured contractors! Find top talent for your next project.",
    time: "2 hours ago",
  },
  {
    img: twitImg,
    handle: "@ArtStudioLive",
    text:
      "Color palette inspiration: Deep blues + soft orange accents. Perfect for modern UI designs.",
    time: "3 hours ago",
  },
  {
    img: twitImg,
    handle: "@DailyGraphics",
    text:
      "Consistency = trust. Make sure your branding looks the same across all platforms.",
    time: "Yesterday",
  },
];


const TopCarousel = ({
  slides = [banner1, banner2, banner3],
  interval = 4500,
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      interval
    );
    return () => clearInterval(t);
  }, [slides.length, interval]);

  return (
    <div className="top-carousel">
      <div className="carousel-slides">
        {slides.map((s, i) => (
          <div key={i} className={`slide ${i === index ? "active" : ""}`}>
            <img src={s} alt={`slide-${i}`} />
          </div>
        ))}
      </div>

      {/* Overlaid indicators (no arrows) */}
      <div className="carousel-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const TopContractors = ({ images = [c1, c2, c3, c4, c5, c6, c7, c8] }) => {
  const items = images;
  return (
    <div className="top-contractors">
      {items.map((img, i) => (
        <div
          key={i}
          className="contractor-card"
          tabIndex={0}
          aria-label={`Contractor ${i + 1}`}
        >
          <img src={img} alt={`contractor-${i}`} className="contractor-img" />
          <blockquote className="contractor-quote">
            <b>Khrystyne R.</b>
            <div className="quote-title">Quality Work At A Fair Price</div>
            <div className="quote-text">
              If you would like high quality work with a fast turn around for a
              fair price, contact me. You won't be disappointed.
            </div>
          </blockquote>
        </div>
      ))}
    </div>
  );
};

const FindWork = () => (
  <div className="find-work">
    {/* 1. FLEX CONTAINER FOR HEADER ROW */}
    <div className="fw-top-row d-flex justify-content-between border-bottom">
      <div className="fw-user">Chirs Chella</div>
      <div className="fw-location">
        <span role="img" aria-label="United States flag"></span> United States
      </div>
    </div>

    <h5 className="fw-title border-bottom">Redo E-Mail Template</h5>

    {/* 2. UPDATED META WITH POSTED/ENDS INFO */}
    <div className="fw-meta border-bottom">
      Fixed Price: Less than $500 | Other - Design |
      <span className="fw-date-meta">
        Posted: 8 minutes ago | Ends: 14d, 23h | 0 Proposals
      </span>
    </div>

    <p className="fw-desc border-bottom">
      Have an email template 90% designed in GO DADDY email marketing program
      but there are some minor changes i need done.
    </p>

    {/* 3. FLEX CONTAINER FOR SKILLS AND BUTTON */}
    <div className="fw-bottom-row">
      <small>Desired Skills</small> <br />
      <div className="fw-skills d-flex justify-content-between">
        <small>Graphic Design, Photoshop</small>
        <button className="btn-primary">VIEW ALL DETAILS</button>
      </div>
    </div>
  </div>
);

const TwitsCarousel = ({ cards = null, interval = 6000 }) => {
  // fallback sample cards
  const defaultCards = new Array(6).fill(null).map((_, i) => ({
    img: twitImg,
    handle: "@topcreative",
    text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration...",
    time: "about 40 minutes ago",
  }));
  const items = cards;

  // show 3 cards per slide on desktop, 1 on mobile using CSS width; here we paginate every 3
  const perSlide = 3;
  const slidesCount = Math.ceil(items.length / perSlide);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setSlide((s) => (s + 1) % slidesCount),
      interval
    );
    return () => clearInterval(t);
  }, [slidesCount, interval]);

  const current = items.slice(slide * perSlide, slide * perSlide + perSlide);

  return (
    <div className="twits-carousel">
      <div className="twits-row">
        {current.map((c, i) => (
          <article key={i} className="twit-card">
            <img src={c.img} alt="author" />
            <div className="twit-body">
              <div className="twit-handle">{c.handle}</div>
              <p className="twit-text">{c.text}</p>
              <div className="twit-time">{c.time}</div>
            </div>
          </article>
        ))}
      </div>

      <div className="twits-controls">
        <div className="dots">
          {Array.from({ length: slidesCount }).map((_, i) => (
            <button
              key={i}
              className={`dot ${i === slide ? "active" : ""}`}
              onClick={() => setSlide(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const FeaturedCarousel = ({ items = [f1, f2, f3, f4, f5, f6, f7, f8] }) => {
  // create slides of 4 (2x2)
  const chunk = [];
  for (let i = 0; i < items.length; i += 4) {
    chunk.push(items.slice(i, i + 4));
  }
  const [idx, setIdx] = useState(0);
  return (
    <div className="featured-carousel">
      <div className="featured-slide">
        <div className="grid-2x2">
          {chunk[idx].map((img, i) => (
            <div key={i} className="feat-item">
              <img src={img} alt={`feat-${idx}-${i}`} />
              <div className="feat-overlay">
                <h6>Project Title</h6>
                <small>Small project caption</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  const swapToHover = (e, hoverImg) => {
    e.currentTarget.src = hoverImg;
  };

  const swapToDefault = (e, defaultImg) => {
    e.currentTarget.src = defaultImg;
  };

  return (
    <main className="home-page container">
      <div className="grid-top">
        {/* LEFT: large carousel */}
        <section className="left">
          <TopCarousel />

          <div className="search-row">
            <input placeholder="Enter Keyword" />
            <div className="search-icons">
              {/* placeholders for small icons */}
              <span className="icon small">🔍</span>
            </div>
          </div>

          <div className="mid">
            <div className="contracts-block">
              <h4 className="text-secondary">
                <span className="fw-bold">TOP</span> CONTRACTORS
              </h4>
              <TopContractors />
            </div>

            <div className="find-block">
              <h4 className="text-secondary border-bottom">
                <span className="fw-bold border-3 border-bottom">FIND</span>{" "}
                WORK
              </h4>
              <FindWork />
            </div>
          </div>
        </section>

        {/* RIGHT: sign-in + featured */}
        <aside className="right">
          <div className="signin-card">
            <h5 className="border-bottom">
              <span className="fw-bold border-bottom border-3">SIGN</span> IN
            </h5>
            <input placeholder="Email or username" />
            <input placeholder="Password" type="password" />
            <button className="btn-primary">SIGN IN</button>

            <div className="or-sep text-secondary">
              <span className="fw-bolder text-secondary">OR</span>
            </div>

            <div className="social-row">
              <button className="social">
                <img
                  src={fb1}
                  alt="Facebook"
                  className="social-img"
                  onMouseEnter={(e) => swapToHover(e, fb2)}
                  onMouseLeave={(e) => swapToDefault(e, fb1)}
                />
              </button>

              <button className="social">
                <img
                  src={twitter1}
                  alt="Twitter"
                  className="social-img"
                  onMouseEnter={(e) => swapToHover(e, twitter2)}
                  onMouseLeave={(e) => swapToDefault(e, twitter1)}
                />
              </button>

              <button className="social">
                <img
                  src={google1}
                  alt="Google Plus"
                  className="social-img"
                  onMouseEnter={(e) => swapToHover(e, google2)}
                  onMouseLeave={(e) => swapToDefault(e, google1)}
                />
              </button>
            </div>

            <h6 className="create-title border-bottom my-3">
              <b className="border-bottom border-3">CREATE</b> AN ACCOUNT
            </h6>
            <div className="create-actions gap-3 d-flex justify-align-content-start align-middle">
              <label>
                <input type="checkbox" className="w-auto me-1" /> I WANT TO POST
                JOB
              </label>
              <label>
                <input type="checkbox" className="w-auto me-1" /> I WANT TO FIND
                JOB
              </label>
            </div>

            <div className="or-sep text-primary">
              <span className="fw-bolder text-primary">OR</span>
            </div>
            <div className="social-row">
              <button className="social">
                <img
                  src={fb1}
                  alt="Facebook"
                  className="social-img"
                  onMouseEnter={(e) => swapToHover(e, fb3)}
                  onMouseLeave={(e) => swapToDefault(e, fb1)}
                />
              </button>

              <button className="social">
                <img
                  src={twitter1}
                  alt="Twitter"
                  className="social-img"
                  onMouseEnter={(e) => swapToHover(e, twitter3)}
                  onMouseLeave={(e) => swapToDefault(e, twitter1)}
                />
              </button>

              <button className="social">
                <img
                  src={google1}
                  alt="Google Plus"
                  className="social-img"
                  onMouseEnter={(e) => swapToHover(e, google3)}
                  onMouseLeave={(e) => swapToDefault(e, google1)}
                />
              </button>
            </div>
          </div>

          <div className="featured-block">
            <div className="d-flex justify-content-between border-bottom mb-3">
              <h5 className="heading mb-0">
                <b className="">FEATURED</b> PROJECTS
              </h5>
              <div className="featured-controls">
                <button
                  onClick={() =>
                    setIdx((x) => (x - 1 + chunk.length) % chunk.length)
                  }
                >
                  ‹
                </button>
                <button onClick={() => setIdx((x) => (x + 1) % chunk.length)}>
                  ›
                </button>
              </div>
            </div>
            <FeaturedCarousel />
          </div>
        </aside>
      </div>
      <section>
        {/* New twits row */}
        <div className="row twits-row">
          <div className="col-12">
            <h4 className="heading">
              {" "}
              <b>NEW</b> TWITS
            </h4>
            <TwitsCarousel cards={twitsData} />
          </div>
          <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    </div>
    <div class="carousel-item">
    </div>
    <div class="carousel-item">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
      </section>
    </main>
  );
}
