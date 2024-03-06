import React from "react";
import pic1 from "../Assets/images/fav.png";

const LandingPages = () => {
  return (
    <>
      {/* <!-- Preloader start --> */}
      <div id="preloader" class="preloader">
        <div class="animation-preloader">
          <div class="spinner">
            <div class="loader-icon">
              <img src={pic1} alt="Industry & Factory HTML Template" />
            </div>
          </div>
          <div class="txt-loading">
            <span data-text-preloader="I" class="letters-loading">
              {" "}
              I{" "}
            </span>
            <span data-text-preloader="N" class="letters-loading">
              {" "}
              N{" "}
            </span>
            <span data-text-preloader="D" class="letters-loading">
              {" "}
              D{" "}
            </span>
            <span data-text-preloader="U" class="letters-loading">
              {" "}
              U{" "}
            </span>
            <span data-text-preloader="P" class="letters-loading">
              {" "}
              P{" "}
            </span>
            <span data-text-preloader="R" class="letters-loading">
              {" "}
              R{" "}
            </span>
            <span data-text-preloader="E" class="letters-loading">
              {" "}
              E{" "}
            </span>
            <span data-text-preloader="S" class="letters-loading">
              {" "}
              S{" "}
            </span>
            <span data-text-preloader="S" class="letters-loading">
              {" "}
              S{" "}
            </span>
          </div>
        </div>
        <button class="tj-cancel-btn">Cancel Preloader</button>
      </div>
      {/* <!-- Preloader end --> */}
    </>
  );
};

export default LandingPages;
