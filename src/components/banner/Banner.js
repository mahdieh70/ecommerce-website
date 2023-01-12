import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <section className="banner-section">
        <div className="banner">
          <div className="detail-box">
            <h1>
              <span>Sale 20% Off</span>
              <br />
              On Every Thing
            </h1>
            <p>
              Quo rerum reiciendis quo voluptate dolorum et fugiat inventore ad unde velit. Eos voluptate incidunt ut earum voluptas ab quae officiis!
              33 repellendus amet nam saepe repellendus est minima quae nam ipsa sint quo velit vero.
            </p>
            <Link to="products">Shop Now</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
