import React, { useRef, useState } from "react";
import Slider from "react-slick";
import Pic1 from "../Assets/images/logos/primary-logo.png";
import Pic2 from "../Assets/images/shapes/about-image-shape2.svg";
import Pic3 from "../Assets/images/shapes/circle-shape.svg";
import Pic4 from "../Assets/images/about/about-2.jpg";
import Pic5 from "../Assets/images/about/about-1.jpg";
import Pic6 from "../Assets/images/shapes/about-right-shape.svg";
import Pic7 from "../Assets/images/shapes/about-left-shape.svg";
import Pic8 from "../Assets/images/shapes/service-left-shape.svg";
import Pic9 from "../Assets/images/shapes/service-item-shape.svg";
import Pic10 from "../Assets/images/steps/steps-1.jpg";
import Pic11 from "../Assets/images/shapes/steps-right-shape.svg";
import Pic12 from "../Assets/images/steps/steps-2.jpg";
import pic13 from "../Assets/images/steps/chart.png";
import pic14 from "../Assets/images/shapes/project-top-shape.svg";
import pic15 from "../Assets/images/shapes/project-bottom-shape.svg";
import Pic16 from "../Assets/images/testimonial/testimonial-1.png";
import pic17 from "../Assets/images/icon/quote.svg";
import pic18 from "../Assets/images/shapes/testimonial-top-shape.svg";
import pic19 from "../Assets/images/shapes/testimonial-bottom-shape.svg";
import pic20 from "../Assets/images/blog/blog-1.jpg";
import pic21 from "../Assets/images/blog/blog-2.jpg";
import pic22 from "../Assets/images/blog/blog-3.jpg";
import pic23 from "../Assets/images/shapes/blog-bg-shape.svg";
import pic24 from "../Assets/images/brand/brand-1.png";
import pic25 from "../Assets/images/brand/brand-2.png";
import pic26 from "../Assets/images/brand/brand-3.png";
import pic27 from "../Assets/images/brand/brand-4.png";
import pic28 from "../Assets/images/brand/brand-5.png";
import pic29 from "../Assets/images/icon/newsletter-left.svg";
import pic30 from "../Assets/images/icon/newsletter-right.svg";
import pic31 from "../Assets/images/shapes/footer-top-shape.svg";
import pic32 from "../Assets/images/logos/secondary-logo.png";
import pic33 from "../Assets/images/shapes/footer-left-shape.svg";
import pic34 from "../Assets/images/shapes/footer-right-shape.svg";
import pic35 from "../Assets/images/steps/steps-3.jpg";
import piccarouel1 from "../Assets/images/portfolio/portfolio-1.jpg";
import piccarouel2 from "../Assets/images/portfolio/portfolio-2.jpg";
import piccarouel3 from "../Assets/images/portfolio/portfolio-3.jpg";
import piccarouel4 from "../Assets/images/portfolio/portfolio-4.jpg";

// import { IconName } from 'react-icons/icon-library'; // Import the icon component

// <!-- CSS here -->
//       <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
//       <link rel="stylesheet" href="assets/css/font-awesome-pro.min.css" />
//       <link rel="stylesheet" href="assets/css/flaticon_indupress.css" />
//       <link rel="stylesheet" href="assets/css/odometer.min.css" />
//       <link rel="stylesheet" href="assets/css/magnific-popup.css" />
//       <link rel="stylesheet" href="assets/css/swiper.min.css" />
//       <link rel="stylesheet" href="assets/css/backToTop.css" />
//       <link rel="stylesheet" href="assets/css/nice-select.css" />
//       <link rel="stylesheet" href="assets/css/meanmenu.css" />
//       <link rel="stylesheet" href="assets/css/main.css" />

const Home = () => {
  const item = [
    {
      image: "../Assets/images/portfolio/portfolio-1.jpg",
      title: "Aurthur Barry",
      subtitle: "Sugar, Distillery",
    },
    {
      image: "../Assets/images/portfolio/portfolio-2.jpg",
      title: "Bradley",
      subtitle: "Cement, Petrochemical",
    },
    {
      image: "../Assets/images/portfolio/portfolio-3.jpg",
      title: "Louis Miller",
      subtitle: "Sugar, Petrochemical",
    },
    {
      image: "../Assets/images/portfolio/portfolio-4.jpg",
      title: "Grey George",
      subtitle: "Sugar, Cement",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // const goToPrevSlide = () => {
  //   console.log("hello");
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === 0 ? item.length - 1 : prevIndex - 1
  //   );
  // };

  // const goToNextSlide = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === item.length - 1 ? 0 : prevIndex + 1
  //   );
  // };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const buttomtoptop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // ! manish code

  const sliderRef = useRef(null);

  // const handleWheel = (e) => {
  //   e.preventDefault(); 
  //   if (sliderRef.current) {
  //     const delta = e.deltaY || e.detail || e.wheelDelta; 
  //     sliderRef.current.scrollLeft += delta;
  //   }
  // };

  const goToPrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -325, behavior: 'smooth' }); 
    }
  };

  const goToNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 325, behavior: 'smooth' }); 
    }
  };


  // for another container slider 
  const [activeContainerIndex, setActiveContainerIndex] = useState(0);

  const totalContainers = 4; // Total number of containers


  return (
    <>
      {/* <!-- start: Header Area --> */}

      <header className="tj-header-area header-1">
        <div className="header-topbar">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="header-topbar-content">
                  <div className="header-socials">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="bi bi-twitter-x"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="bi bi-whatsapp"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="bi bi-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="bi bi-facebook"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="header-contact-infos">
                    <ul>
                      {/* <li><i className="flaticon-pin"></i><span>27/4 Emirates-United States</span></li> */}
                      <li>
                        <i className="bi bi-geo-alt"></i>
                        <span>27/4 Emirates-United States</span>
                      </li>
                      {/* <li><i className="flaticon-old-typical-phone"></i><a href="tel:(+1)-12345678900">(+1)-123 456 789 00</a></li> */}
                      <li>
                        <i className="bi bi-telephone-inbound"></i>
                        <a href="tel:(+1)-12345678900">(+1)-123 456 789 00</a>
                      </li>
                      {/* <li><i className="flaticon-letter"></i><a href="mailto:mail@indupress.com">mail@indupress.com</a></li> */}
                      <li>
                        <i className="bi bi-envelope"></i>
                        <a href="mailto:mail@indupress.com">
                          mail@indupress.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mainmenu-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="mainmenu-wrapper">
                  <div className="site-logo">
                    <a className="logo" href="">
                      <img src={Pic1} alt="Logo" />
                      {/* <img src="assets/images/logos/primary-logo.png" alt="Logo" /> */}
                    </a>
                  </div>
                  <div className="mainmenu main-mobile-menu d-none d-lg-inline-block">
                    <ul>
                      <li className="has-dropdown current-menu-item">
                        <a href="">
                          Home
                          {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-chevron-down"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                            />
                          </svg> */}
                        </a>

                        <ul className="sub-menu">
                          <li className="current-menu-item">
                            <a href="">Home One</a>
                          </li>
                          <li>
                            <a href="">Home Two</a>
                          </li>
                          <li>
                            <a href="">Home Three</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="">About Us</a>
                      </li>
                      <li className="has-dropdown">
                        <a href="">Services</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="">Services</a>
                          </li>
                          <li>
                            <a href="service-details.html">Service Details</a>
                          </li>
                        </ul>
                      </li>
                      <li className="has-dropdown">
                        <a href="javascript:void(0)">Pages</a>
                        <ul className="sub-menu">
                          <li className="has-dropdown">
                            <a href="">Projects</a>
                            <ul className="sub-menu">
                              <li>
                                <a href="">Projects</a>
                              </li>
                              <li>
                                <a href="">Project Details</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="">Team</a>
                          </li>
                          <li>
                            <a href="">Team Details</a>
                          </li>
                          <li>
                            <a href="">Pricing Plan</a>
                          </li>
                          <li>
                            <a href="faq.html">Faq</a>
                          </li>
                        </ul>
                      </li>
                      <li className="has-dropdown">
                        <a href="">Blog</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="blog-grid.html">Blog Grid</a>
                          </li>
                          <li>
                            <a href="">Blog Standard</a>
                          </li>
                          <li>
                            <a href="blog-details.html">Blog Details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                  <div className="mainmenu-right">
                    <div className="header-search d-none d-xl-inline-block">
                      <button className="search">
                        {/* <i className="fa-light fa-magnifying-glass"></i> */}
                        <i className="bi bi-search"></i>
                      </button>
                    </div>
                    <div className="header-button d-none d-md-inline-block">
                      <a className="tj-primary-btn" href="contact.html">
                        Request a Quote
                        {/* <i className="fa-light fa-arrow-right-from-line"></i> */}
                        <i className="bi bi-arrow-bar-right"></i>
                      </a>
                    </div>
                  </div>
                  <div className="menu-bar d-lg-none">
                    <button>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="tj-header-area header-sticky header-1">
        <div className="mainmenu-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="mainmenu-wrapper">
                  <div className="site-logo">
                    <a className="logo" href="index.html">
                      <img
                        src="assets/images/logos/primary-logo.png"
                        alt="Logo"
                      />
                    </a>
                  </div>
                  <div className="mainmenu d-none d-lg-inline-block">
                    <ul>
                      <li className="has-dropdown current-menu-item">
                        <a href="index.html">Home</a>
                        <ul className="sub-menu">
                          <li className="current-menu-item">
                            <a href="index.html">Home One</a>
                          </li>
                          <li>
                            <a href="index-2.html">Home Two</a>
                          </li>
                          <li>
                            <a href="index-3.html">Home Three</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="about.html">About Us</a>
                      </li>
                      <li className="has-dropdown">
                        <a href="service.html">Services</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="service.html">Services</a>
                          </li>
                          <li>
                            <a href="service-details.html">Service Details</a>
                          </li>
                        </ul>
                      </li>
                      <li className="has-dropdown">
                        <a href="javascript:void(0)">Pages</a>
                        <ul className="sub-menu">
                          <li className="has-dropdown">
                            <a href="project.html">Projects</a>
                            <ul className="sub-menu">
                              <li>
                                <a href="project.html">Projects</a>
                              </li>
                              <li>
                                <a href="project-details.html">
                                  Project Details
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="team.html">Team</a>
                          </li>
                          <li>
                            <a href="team-details.html">Team Details</a>
                          </li>
                          <li>
                            <a href="price.html">Pricing Plan</a>
                          </li>
                          <li>
                            <a href="faq.html">Faq</a>
                          </li>
                        </ul>
                      </li>
                      <li className="has-dropdown">
                        <a href="blog.html">Blog</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="blog-grid.html">Blog Grid</a>
                          </li>
                          <li>
                            <a href="blog.html">Blog Standard</a>
                          </li>
                          <li>
                            <a href="blog-details.html">Blog Details</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="contact.html">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                  <div className="mainmenu-right">
                    <div className="header-search d-none d-xl-inline-block">
                      <button className="search">
                        <i className="fa-light fa-magnifying-glass"></i>
                      </button>
                    </div>
                    <div className="header-button d-none d-md-inline-block">
                      <a className="tj-primary-btn" href="contact.html">
                        Request a Quote{" "}
                        {/* <i className="fa-light fa-arrow-right-from-line"></i> */}
                        <i className="bi bi-arrow-bar-right"></i>
                      </a>
                    </div>
                  </div>
                  <div className="menu-bar d-lg-none">
                    <button>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main id="primary" className="site-main">
        {/* <!-- start: Hero Section --> */}
        <section
          className="tj-hero-section"
          // data-bg-image="assets/images/slider/slider-1.jpg"
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="hero-content">
                  <h4 className="sub-title">
                    Unlimited Inventiveness
                    <span className="subtitle_shape"></span>
                  </h4>
                  <h1 className="sec-title">We are the Delivering</h1>
                  <h2 className="type-text">
                    High-Quality <span className="text">Services</span>
                  </h2>
                  <div className="desc">
                    <p>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      even slightly believable.
                    </p>
                  </div>
                  <div className="hero-button">
                    <a className="tj-light-button" href="contact.html">
                      Read More{" "}
                      {/* <i className="fa-light fa-arrow-right-from-line"></i> */}
                      <i className="bi bi-arrow-bar-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- vertical lines start --> */}
          <div className="vertical-lines-wrapper"></div>
          {/* <!-- vertical lines end --> */}
        </section>
        {/* <!-- end: Hero Section --> */}

        {/* <!-- start: About Section --> */}
        <section className="tj-about-section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-7 col-12 order-2 order-xl-1">
                <div className="about-content">
                  <div className="tj-heading-area">
                    <h4 className="sub-title">
                      About Our Company
                      <span className="section-sub-title-shape"></span>
                    </h4>
                    <h2 className="sec-title">
                      Quality Manufacturing <span>Is Our Objective</span>
                    </h2>
                    <div className="desc">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a text.
                      </p>
                    </div>
                  </div>
                  <div className="about-feature-item">
                    <div className="feature-item">
                      <div className="feature-icon">
                        <i className="bi bi-award-fill"></i>
                        {/* <i className="flaticon-quality"></i> */}
                      </div>
                      <div className="feature-text">
                        <span className="feature-title">ISO Certified</span>
                        <h4 className="title">Manufacturers</h4>
                        <p>ISO 9022:235</p>
                      </div>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">
                        <i className="bi bi-envelope"></i>
                        {/* <i className="flaticon-nanotechnology"></i> */}
                      </div>
                      <div className="feature-text">
                        <span className="feature-title">High Tech</span>
                        <h4 className="title">Manufacturers</h4>
                        <p>In Europe</p>
                      </div>
                    </div>
                  </div>
                  <div className="feature-contact">
                    <div className="about-button">
                      <a className="tj-primary-btn" href="about.html">
                        Read More <i className="bi bi-arrow-bar-right"></i>
                        {/* <i className="fa-light fa-arrow-right-from-line"></i> */}
                      </a>
                    </div>
                    <div className="contact-content">
                      <div className="contact-icon">
                        <i className="bi bi-telephone-inbound"></i>
                        {/* <i className="flaticon-old-typical-phone"></i> */}
                      </div>
                      <div className="contact-text">
                        <span>Call Us Anytime</span>
                        <a className="link" href="tel:+00123456789">
                          + 00-123-456-789
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-12 order-1 order-xl-2">
                <div className="about-images">
                  <div className="about-circle">
                    <svg
                      className="rotate-image"
                      viewBox="0 0 140 100"
                      width="150"
                      height="150"
                    >
                      <defs>
                        <path
                          id="circle"
                          d="
                                              M 50, 50
                                              m -37, 0
                                              a 37,37 0 1,1 110,0
                                              a 37,37 0 1,1 -110,0"
                        />
                      </defs>
                      <text font-size="12">
                        <textPath xlinkHref="#circle" className="shape-1">
                          . MANUFACTURING . MANUFACTURING . MANUFACTURING
                        </textPath>
                      </text>
                    </svg>
                    <div className="circle-image">
                      <img src={Pic3} alt="Shape" />
                    </div>
                  </div>
                  <div className="left-image">
                    <img src={Pic4} alt="Image" />
                  </div>
                  <div className="right-image">
                    <img src={Pic5} alt="Image" />
                  </div>
                  <div className="about-shape">
                    <img src={Pic2} alt="Shape" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sec-left-shape">
            <img src={Pic7} alt="Shape" />
          </div>
          <div className="sec-right-shape">
            <img src={Pic6} alt="Shape" />
          </div>
        </section>

        {/* <!-- end: About Section --> */}

        {/*  <!-- start: Service Section --> */}
        <section className="tj-service-section dineshBackImages">
          <div className="container">
            <div className="row">
              <div className="tj-heading-area">
                <h4 className="sub-title">
                  Our Services
                  <span className="section-sub-title-shape"></span>
                </h4>
                <h2 className="sec-title">
                  We Work To <span>Craft</span>
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="swiper tj-service-slider">
                  <div className="swiper-wrapper ">
                    <Slider {...settings}>
                      <div className="slider-slide">
                        <div className="swiper-wrapper dineshSilder">
                          <div className="swiper-slide dineshsubsilder1">
                            <div className="service-item">
                              <div className="service-icon">
                                <i className="bi bi-house-door"></i>
                              </div>
                              <span className="sub-title">Manufacturing</span>
                              <h3 className="title">
                                <a href="#">And Logistics</a>
                              </h3>
                              <div className="desc">
                                <p>
                                  It is a long established fact that a reader
                                  will be distracted by the readable content.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide dineshsubsilder2">
                            <div className="service-item">
                              <div className="service-icon">
                                <i className="bi bi-house-door"></i>
                              </div>
                              <span className="sub-title">Integration Of</span>
                              <h3 className="title">
                                <a href="#">New Technology</a>
                              </h3>
                              <div className="desc">
                                <p>
                                  It is a long established fact that a reader
                                  will be distracted by the readable content.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide dineshsubsilder3">
                            <div className="service-item">
                              <div className="service-icon">
                                <i className="bi bi-house-door"></i>
                              </div>
                              <span className="sub-title">Personalised</span>
                              <h3 className="title">
                                <a href="#">End Products</a>
                              </h3>
                              <div className="desc">
                                <p>
                                  It is a long established fact that a reader
                                  will be distracted by the readable content.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="slider-slide">
                        <div className="swiper-wrapper dineshSilder">
                          <div className="swiper-slide dineshsubsilder1">
                            <div className="service-item">
                              <div className="service-icon">
                                <i className="bi bi-house-door"></i>
                              </div>
                              <span className="sub-title">Manufacturing</span>
                              <h3 className="title">
                                <a href="#">And Logistics</a>
                              </h3>
                              <div className="desc">
                                <p>
                                  It is a long established fact that a reader
                                  will be distracted by the readable content.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide dineshsubsilder2">
                            <div className="service-item">
                              <div className="service-icon">
                                <i className="bi bi-house-door"></i>
                              </div>
                              <span className="sub-title">Integration Of</span>
                              <h3 className="title">
                                <a href="#">New Technology</a>
                              </h3>
                              <div className="desc">
                                <p>
                                  It is a long established fact that a reader
                                  will be distracted by the readable content.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide dineshsubsilder3">
                            <div className="service-item">
                              <div className="service-icon">
                                <i className="bi bi-house-door"></i>
                              </div>
                              <span className="sub-title">Personalised</span>
                              <h3 className="title">
                                <a href="#">End Products</a>
                              </h3>
                              <div className="desc">
                                <p>
                                  It is a long established fact that a reader
                                  will be distracted by the readable content.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="slider-slide">
                        <div className="swiper-wrapper dineshSilder">
                          <div className="swiper-slide dineshsubsilder1">
                            <div className="service-item">
                              <div className="service-icon">
                                <i className="bi bi-house-door"></i>
                              </div>
                              <span className="sub-title">Manufacturing</span>
                              <h3 className="title">
                                <a href="#">And Logistics</a>
                              </h3>
                              <div className="desc">
                                <p>
                                  It is a long established fact that a reader
                                  will be distracted by the readable content.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide dineshsubsilder2">
                            <div className="service-item">
                              <div className="service-icon">
                                <i className="bi bi-house-door"></i>
                              </div>
                              <span className="sub-title">Integration Of</span>
                              <h3 className="title">
                                <a href="#">New Technology</a>
                              </h3>
                              <div className="desc">
                                <p>
                                  It is a long established fact that a reader
                                  will be distracted by the readable content.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="swiper-slide dineshsubsilder3">
                            <div className="service-item">
                              <div className="service-icon">
                                <i className="bi bi-house-door"></i>
                              </div>
                              <span className="sub-title">Personalised</span>
                              <h3 className="title">
                                <a href="#">End Products</a>
                              </h3>
                              <div className="desc">
                                <p>
                                  It is a long established fact that a reader
                                  will be distracted by the readable content.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="service-section-shape">
            <img src={Pic8} alt="Shape" />
          </div>
        </section>

        {/* <!-- end: Service Section --> */}

        {/* <!-- start: Video Section --> */}
        <section
          className="tj-video-section"
          data-bg-image="assets/images/bg/video-bg.jpg"
        >
          <div className="tj-video-area">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="video-area">
                    <h2 className="title">Watching Video</h2>
                    <div className="video-box">
                      <a
                        className="popup-videos-button"
                        data-autoplay="true"
                        data-vbtype="video"
                        href="https://www.youtube.com/watch?v=ADmQTw4qqTY"
                      >
                        <i className="bi bi-play-fill"></i>
                        {/* <i className="fa-solid fa-play"></i> */}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tj-counter-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="fun-fact-area">
                    <div className="counter-item">
                      <div className="tj-count">
                        <span className="odometer" data-count="4323">
                          0
                        </span>
                        +
                      </div>
                      <span className="sub-title">Years Experience</span>
                    </div>
                    <div className="counter-item">
                      <div className="tj-count">
                        <span className="odometer" data-count="476">
                          0
                        </span>
                        +
                      </div>
                      <span className="sub-title">Projects Completed</span>
                    </div>
                    <div className="counter-item">
                      <div className="tj-count">
                        <span className="odometer" data-count="539">
                          0
                        </span>
                        K
                      </div>
                      <span className="sub-title">Happy Customers</span>
                    </div>
                    <div className="counter-item">
                      <div className="tj-count">
                        <span className="odometer" data-count="39">
                          0
                        </span>
                        +
                      </div>
                      <span className="sub-title">Awards Milestones</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- end: Video Section --> */}

        {/* <!-- start: Steps Section --> */}
        <section className="tj-steps-section">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="tab-content tabs-main-content">
                  <div
                    className="tab-pane fade show active"
                    id="step-1"
                    role="tabpanel"
                  >
                    <div className="row align-items-center">
                      <div className="col-lg-6 order-2 order-lg-1">
                        <div className="step-content">
                          <div className="tj-heading-area">
                            <h4 className="sub-title">
                              Development
                              <span className="section-sub-title-shape"></span>
                            </h4>
                            <h2 className="sec-title">
                              How We <span>Started</span>
                            </h2>
                          </div>
                          <div className="step-text">
                            <h3 className="title">
                              Reached <span> Worldwide</span>
                            </h3>
                            <span className="sub-title">Indupress Brand Name</span>
                            <div className="desc">
                              <p>
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout. The point of using
                                Lorem Ipsum is making it look like readable
                                English.
                              </p>
                            </div>
                            <div className="steps-button">
                              <a className="tj-primary-btn" href="contact.html">
                                More Details{" "}
                                {/* <i className="bi bi-arrow-bar-right"></i> */}
                                <i className="fa-light fa-arrow-right-from-line"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 order-1 order-lg-2">
                        <div className="steps-images">
                          <div className="left-image">
                            <img src={Pic10} alt="Images" />
                          </div>
                          <div className="right-image">
                            <img src={Pic12} alt="Images" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="step-2" role="tabpanel">
                    <div className="row align-items-center">
                      <div className="col-lg-6 order-2 order-lg-1">
                        <div className="step-content">
                          <div className="tj-heading-area">
                            <h4 className="sub-title">
                              Development
                              <span className="section-sub-title-shape"></span>
                            </h4>
                            <h2 className="sec-title">
                              Preparation of<span> Documents</span>
                            </h2>
                          </div>
                          <div className="step-text">
                            <h3 className="title">
                              Reached <span> Worldwide</span>
                            </h3>
                            <span className="sub-title">Indupress Brand Name</span>
                            <div className="desc">
                              <p>
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout. The point of using
                                Lorem Ipsum is making it look like readable
                                English.
                              </p>
                            </div>
                            <div className="steps-button">
                              <a className="tj-primary-btn" href="#">
                                More Details{" "}
                                {/* <i className="fa-light fa-arrow-right-from-line"></i> */}
                                <i className="bi bi-arrow-bar-right"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 order-1 order-lg-2">
                        <div className="steps-images">
                          <div className="left-image">
                            <img src={pic35} alt="Images" />
                          </div>
                          <div className="right-image">
                            <img src={Pic12} alt="Images" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="step-3" role="tabpanel">
                    <div className="row align-items-center">
                      <div className="col-lg-6 order-2 order-lg-1">
                        <div className="step-content">
                          <div className="tj-heading-area">
                            <h4 className="sub-title">
                              Development
                              <span className="section-sub-title-shape"></span>
                            </h4>
                            <h2 className="sec-title">
                              How We <span>Started</span>
                            </h2>
                          </div>
                          <div className="step-text">
                            <h3 className="title">
                              Reached <span> Worldwide</span>
                            </h3>
                            <span className="sub-title">Indupress Brand Name</span>
                            <div className="desc">
                              <p>
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout. The point of using
                                Lorem Ipsum is making it look like readable
                                English.
                              </p>
                            </div>
                            <div className="steps-button">
                              <a className="tj-primary-btn" href="#">
                                More Details{" "}
                                {/* <i className="fa-light fa-arrow-right-from-line"></i> */}
                                <i className="bi bi-arrow-bar-right"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 order-1 order-lg-2">
                        <div className="steps-images">
                          <div className="left-image">
                            <img src={Pic10} alt="Images" />
                          </div>
                          <div className="right-image">
                            <img src={Pic12} alt="Images" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="step-4" role="tabpanel">
                    <div className="row align-items-center">
                      <div className="col-lg-6 order-2 order-lg-1">
                        <div className="step-content">
                          <div className="tj-heading-area">
                            <h4 className="sub-title">
                              Development
                              <span className="section-sub-title-shape"></span>
                            </h4>
                            <h2 className="sec-title">
                              Preparation of<span> Documents</span>
                            </h2>
                          </div>
                          <div className="step-text">
                            <h3 className="title">
                              Reached <span> Worldwide</span>
                            </h3>
                            <span className="sub-title">Indupress Brand Name</span>
                            <div className="desc">
                              <p>
                                It is a long established fact that a reader will
                                be distracted by the readable content of a page
                                when looking at its layout. The point of using
                                Lorem Ipsum is making it look like readable
                                English.
                              </p>
                            </div>
                            <div className="steps-button">
                              <a className="tj-primary-btn" href="#">
                                More Details{" "}
                                {/* <i className="fa-light fa-arrow-right-from-line"></i> */}
                                <i className="bi bi-arrow-bar-right"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 order-1 order-lg-2">
                        <div className="steps-images">
                          <div className="left-image">
                            <img src={pic35} alt="Images" />
                          </div>
                          <div className="right-image">
                            <img src={Pic12} alt="Images" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="tabs-area" role="tablist">
                <button
                  className="step active"
                  data-bs-toggle="tab"
                  data-bs-target="#step-1"
                  type="button"
                  role="tab"
                  aria-selected="true"
                >
                  <span className="number">1849</span>
                  <span className="line"></span>
                  <span className="title">Seed Stage</span>
                </button>
                <button
                  className="step"
                  data-bs-toggle="tab"
                  data-bs-target="#step-2"
                  type="button"
                  role="tab"
                  aria-selected="false"
                >
                  <span className="number">1949</span>
                  <span className="line"></span>
                  <span className="title">Seed Stage</span>
                </button>
                <button
                  className="step"
                  data-bs-toggle="tab"
                  data-bs-target="#step-3"
                  type="button"
                  role="tab"
                  aria-selected="false"
                >
                  <span className="number">2001</span>
                  <span className="line"></span>
                  <span className="title">Seed Stage</span>
                </button>
                <button
                  className="step"
                  data-bs-toggle="tab"
                  data-bs-target="#step-4"
                  type="button"
                  role="tab"
                  aria-selected="false"
                >
                  <span className="number">2023</span>
                  <span className="line"></span>
                  <span className="title">Seed Stage</span>
                </button>
              </div>
            </div>
          </div>
          <div className="steps-sec-left-shape">
            <img src="assets/images/shapes/steps-left-shape.svg" alt="Shape" />
          </div>
          <div className="steps-sec-right-shape">
            <img src={Pic11} alt="Shape" />
          </div>
        </section>

        {/* <!-- end: Steps Section --> */}

        {/* <!-- start: Analysis Section --> */}
        <section
          className="tj-analysis-section"
          data-bg-image="assets/images/bg/analysis-bg.jpg"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-6"></div>
              <div className="col-lg-6">
                <div className="analysis-content">
                  <div className="tj-heading-area">
                    <h4 className="sub-title">
                      Analysis
                      <span className="section-sub-title-shape"></span>
                    </h4>
                    <h2 className="sec-title">
                      Implemetation <span>Analysis</span>
                    </h2>
                    <div className="desc">
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        making it look like readable English.
                      </p>
                    </div>
                  </div>
                  <div className="analysis-list">
                    <ul className="dot-style">
                      <li>Elementum nibh tellis</li>
                      <li>Sed id semper risus in hendrert</li>
                    </ul>
                    <div className="analysis-button">
                      <a className="tj-primary-btn" href="contact.html">
                        More Details{" "}
                        {/* <i className="fa-light fa-arrow-right-from-line"></i> */}
                        <i className="bi bi-arrow-bar-right"></i>
                      </a>
                    </div>
                  </div>
                  <div className="analysis-wrapper">
                    <h3 className="title">Measuring Information</h3>
                    <div className="desc">
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.
                      </p>
                    </div>
                    <div className="analysis-chart">
                      <img src={pic13} alt="Images" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- end: Analysis Section --> */}
        {/* 
         <!-- start: Price Section --> */}
        <section className="tj-price-section">
          <div className="container">
            <div className="row">
              <div className="tj-heading-area">
                <h4 className="sub-title">
                  Pricetable
                  <span className="section-sub-title-shape"></span>
                </h4>
                <h2 className="sec-title">
                  Choose a Plan That Perfect <span>Works For You</span>
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="price-item">
                  <div className="top-content">
                    <h3 className="title">
                      Basic <span className="date">/month</span>
                    </h3>
                    <span className="price">59$</span>
                  </div>
                  <div className="check-list">
                    <ul className="dot-style">
                      <li className="style-1">
                        <span>
                          <i className="fa-light fa-check"></i>
                        </span>
                        Blandit massa enim nec
                      </li>
                      <li className="style-2">
                        <span>
                          <i className="fa-light fa-check"></i>
                        </span>
                        Orci dapibus ultrices in
                      </li>
                      <li className="style-1">
                        <span>
                          <i className="fa-light fa-check"></i>
                        </span>
                        Elementum nisi eleifend
                      </li>
                      <li className="style-2">
                        <span>
                          <i className="fa-light fa-check"></i>
                        </span>
                        Sed turpis tincidunt id
                      </li>
                      <li className="style-1">
                        <span>
                          <i className="fa-light fa-check"></i>
                        </span>
                        Egestas congues quisqie
                      </li>
                    </ul>
                  </div>
                  <div className="price-button text-center">
                    <a className="tj-light-button" href="price.html">
                      Choose Plan{" "}
                      {/* <i className="fa-light fa-arrow-right-from-line"></i> */}
                      <i className="bi bi-arrow-bar-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="price-item active-item">
                  <div className="top-content">
                    <h3 className="title">
                      Premium <span className="date">/month</span>
                    </h3>
                    <span className="price">75$</span>
                  </div>
                  <div className="check-list">
                    <ul className="dot-style">
                      <li className="style-1">
                        <span>
                          <i className="fa-light fa-check"></i>
                        </span>
                        Blandit massa enim nec
                      </li>
                      <li className="style-2">
                        <span>
                          <i className="fa-light fa-check"></i>
                        </span>
                        Orci dapibus ultrices in
                      </li>
                      <li className="style-1">
                        <span>
                          <i className="fa-light fa-check"></i>
                        </span>
                        Elementum nisi eleifend
                      </li>
                      <li className="style-2">
                        <span>
                          <i className="fa-light fa-check"></i>
                        </span>
                        Sed turpis tincidunt id
                      </li>
                      <li className="style-1">
                        <span>
                          <i className="fa-light fa-check"></i>
                        </span>
                        Egestas congues quisqie
                      </li>
                    </ul>
                  </div>
                  <div className="price-button text-center">
                    <a className="tj-light-button" href="price.html">
                      Choose Plan{" "}
                      {/* <i className="fa-light fa-arrow-right-from-line"></i> */}
                      <i className="bi bi-arrow-bar-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="price-item">
                  <div className="top-content">
                    <h3 className="title">
                      Standard <span className="date">/month</span>
                    </h3>
                    <span className="price">95$</span>
                  </div>
                  <div className="check-list">
                    <ul className="dot-style">
                      <li className="style-1">
                        <span>
                          <i className="fa-light fa-check"></i>
                        </span>
                        Blandit massa enim nec
                      </li>
                      <li className="style-2">
                        <span>
                          <i className="fa-light fa-check"></i>
                        </span>
                        Orci dapibus ultrices in
                      </li>
                      <li className="style-1">
                        <span>
                          <i className="fa-light fa-check"></i>
                        </span>
                        Elementum nisi eleifend
                      </li>
                      <li className="style-2">
                        <span>
                          <i className="fa-light fa-check"></i>
                        </span>
                        Sed turpis tincidunt id
                      </li>
                      <li className="style-1">
                        <span>
                          <i className="fa-light fa-check"></i>
                        </span>
                        Egestas congues quisqie
                      </li>
                    </ul>
                  </div>
                  <div className="price-button text-center">
                    <a className="tj-light-button" href="price.html">
                      Choose Plan{" "}
                      {/* <i className="fa-light fa-arrow-right-from-line"></i> */}
                      <i className="bi bi-arrow-bar-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- end: Price Section --> */}

        {/* <!-- start: Portfolio Section --> */}
        <section className="tj-portfolio-section">
          <div className="container">
            <div className="row">
              <div className="tj-heading-area">
                <h4 className="sub-title">
                  Project
                  <span className="section-sub-title-shape"></span>
                </h4>
                <h2 className="sec-title">
                  Recently Completed <span>Projects Gallery</span>
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-12">

                <div className="swiper swiper-container tj-portfolio-slider">
                  <div className=" portfolio_dinesh">

                    <div className="testimonial-prev">

                      <button onClick={goToPrevSlide}>
                        <i className="bi bi-arrow-left"></i>{" "}
                      </button>
                    </div>
                    <div className="testimonial-next">
                      <button onClick={goToNextSlide}>
                        <i className="bi bi-arrow-right"></i>{" "}
                      </button>
                    </div>

                  </div>

                  <div  ref={sliderRef}  className="ssWrpa">

                  <div className="swiper-wrapper dineshFlex">

                  
                    <div className="swiper-slide dineshwidth">
                      <div className="portfolio-item dineshwidth12">
                        <div className="portfolio-image dineshImage"></div>
                        <div className="portfolio-content">
                          <h4 className="title">
                            <a href="#">Bradley</a>
                          </h4>
                          <span className="sub-title">Cement, Petrochemical</span>
                        </div>
                      </div>

                    </div>

                    <div className="swiper-slide dineshwidth">
                      <div className="portfolio-item dineshwidth12">
                        <div className="portfolio-image dineshImage"></div>
                        <div className="portfolio-content">
                          <h4 className="title">
                            <a href="#">Bradley</a>
                          </h4>
                          <span className="sub-title">Cement, Petrochemical</span>
                        </div>
                      </div>

                    </div>

                    <div className="swiper-slide dineshwidth">
                      <div className="portfolio-item dineshwidth12">
                        <div className="portfolio-image dineshImage"></div>
                        <div className="portfolio-content">
                          <h4 className="title">
                            <a href="#">Bradley</a>
                          </h4>
                          <span className="sub-title">Cement, Petrochemical</span>
                        </div>
                      </div>

                    </div>

                    <div className="swiper-slide dineshwidth">
                      <div className="portfolio-item dineshwidth12">
                        <div className="portfolio-image dineshImage"></div>
                        <div className="portfolio-content">
                          <h4 className="title">
                            <a href="#">Bradley</a>
                          </h4>
                          <span className="sub-title">Cement, Petrochemical</span>
                        </div>
                      </div>

                    </div>

                    <div className="swiper-slide dineshwidth">
                      <div className="portfolio-item dineshwidth12">
                        <div className="portfolio-image dineshImage12"></div>
                        <div className="portfolio-content">
                          <h4 className="title">
                            <a href="#">Aurthur Barry</a>
                          </h4>
                          <span className="sub-title">Sugar, Distillery</span>
                        </div>
                      </div>
                    </div>

                    <div className="swiper-slide dineshwidth">
                      <div className="portfolio-item dineshwidth12">
                        <div className="portfolio-image dineshImage13"></div>
                        <div className="portfolio-content">
                          <h4 className="title">
                            <a href="#">Louis Miller</a>
                          </h4>
                          <span className="sub-title">Sugar, Petrochemical</span>
                        </div>
                      </div>
                    </div>

                    <div className="swiper-slide dineshwidth">
                      <div className="portfolio-item dineshwidth12">
                        <div className="portfolio-image dineshImage14"></div>
                        <div className="portfolio-content">
                          <h4 className="title">
                            <a href="#">Grey George</a>
                          </h4>
                          <span className="sub-title">Sugar, Cement</span>
                        </div>
                      </div>
                    </div>

                    <div className="swiper-slide dineshwidth">
                      <div className="portfolio-item dineshwidth12">
                        <div className="portfolio-image dineshImage14"></div>
                        <div className="portfolio-content">
                          <h4 className="title">
                            <a href="#">Grey George</a>
                          </h4>
                          <span className="sub-title">Sugar, Cement</span>
                        </div>
                      </div>
                    </div>

                  </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="portfolio-sec-top-shape">
            <img src={pic14} alt="Shape" />
          </div>
          <div className="portfolio-sec-bottom-shape">
            <img src={pic15} alt="Shape" />
          </div>
        </section>
        {/* <!-- end: Portfolio Section --> */}

        {/* <!-- start: Testimonial Section --> */}
        <section className="tj-testimonial-section ">

          <div className="testLeftIcon">
         
          <i onClick={()=>{
            if(activeContainerIndex > 0){
                            setActiveContainerIndex((prev)=>prev-1);
            }
          }} class="bi bi-arrow-left-circle-fill"></i>
          </div>

 <div className="allSwContainer">


{/* container */}
          <div className={`containerswap ${activeContainerIndex === 0 ? 'active' : ''}`}>
            
            <div className="row">
              <div className="col-lg-5"></div>
              <div className="col-lg-7">
                <div className="tj-heading-area">
                  <h4 className="sub-title">
                    Reviews
                    <span className="section-sub-title-shape"></span>
                  </h4>
                  <h2 className="sec-title">
                    Happy Clients <span>Thoughts</span>
                  </h2>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">

                <div className="testimonial-wrapper">
                  <div className="row align-items-end">
                    <div className="col-lg-4 offset-lg-1">
                      <div className="swiper testimonial-auother-slider">
                        <div className="swiper-wrapper">

                          <div className="swiper-slide testimonial-auother">

                            <div className="thumb-image">
                              <img src={Pic16} alt="Image" />
                              <div className="quote-icon">
                                <img src={pic17} alt="Icon" />
                              </div>
                            </div>
                            <div className="testimonial-name">
                              <h3 className="title">David,</h3>
                              <span className="sub-title">Desinger</span>
                            </div>
                            <div className="testimonial-info">
                              <div className="testimonial-rating">
                                <div className="star-ratings">
                                  <div className="fill-ratings">
                                    <span>★★★★★</span>
                                  </div>
                                  <div className="empty-ratings">
                                    <span>★★★★★</span>
                                  </div>
                                </div>
                              </div>
                              <div className="testimonial-socials">
                                <ul className="dot-style">
                                  <li>
                                    <a href="#">
                                      <i className="bi bi-twitter-x"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="bi bi-whatsapp"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="bi bi-instagram"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="bi bi-facebook"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>

                          </div>
                          
              
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-7">
                      <div className="swiper thumb-content-slider">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="testimonial-content-slider">
                              <p>
                                ‘’There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                alteration in some form, by injected humour, or
                                randomised words which don't look even slightly
                                believable. If you are going to use a passage of
                                Lorem Ipsum, you need to be sure there isn't
                                anything embarrassing hidden in the middle of
                                text.’’
                              </p>
                            </div>
                          </div>
                         
                        </div>
                        <div className="testimonial-navigation">
                          <div className="testimonial-prev">
                            <i className="flaticon-right-arrow"></i>
                          </div>
                          <div className="testimonial-next">
                            <i className="flaticon-right-arrow"></i>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* ciontainer */}
          <div className={`containerswap ${activeContainerIndex === 1 ? 'active' : ''}`}>
            
            <div className="row">
              <div className="col-lg-5"></div>
              <div className="col-lg-7">
                <div className="tj-heading-area">
                  <h4 className="sub-title">
                    Reviews
                    <span className="section-sub-title-shape"></span>
                  </h4>
                  <h2 className="sec-title">
                    Happy Clients <span>Thoughts</span>
                  </h2>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">

                <div className="testimonial-wrapper">
                  <div className="row align-items-end">
                    <div className="col-lg-4 offset-lg-1">
                      <div className="swiper testimonial-auother-slider">
                        <div className="swiper-wrapper">

                          <div className="swiper-slide testimonial-auother">

                            <div className="thumb-image">
                              <img src={Pic16} alt="Image" />
                              <div className="quote-icon">
                                <img src={pic17} alt="Icon" />
                              </div>
                            </div>
                            <div className="testimonial-name">
                              <h3 className="title">Manish,</h3>
                              <span className="sub-title">Web develper</span>
                            </div>
                            <div className="testimonial-info">
                              <div className="testimonial-rating">
                                <div className="star-ratings">
                                  <div className="fill-ratings">
                                    <span>★★★</span>
                                  </div>
                                  <div className="empty-ratings">
                                    <span>★★★</span>
                                  </div>
                                </div>
                              </div>
                              <div className="testimonial-socials">
                                <ul className="dot-style">
                                  <li>
                                    <a href="#">
                                      <i className="bi bi-twitter-x"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="bi bi-whatsapp"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="bi bi-instagram"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="bi bi-facebook"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>

                          </div>
                          
         
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-7">
                      <div className="swiper thumb-content-slider">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="testimonial-content-slider">
                              <p>
                                ‘this is another slider of prgaram  fdjflksjfkldsj fdlkfdj fld
                                Ipsum available, but the majority have suffered
                                alteration in some form, by injected humour, or
                                randomised words which don't look even slightly
                                believable. If you are going to use a passage of
                                Lorem Ipsum, you need to be sure there isn't
                                anything embarrassing hidden in the middle of
                                text.’’
                              </p>
                            </div>
                          </div>
                         
                        </div>
                        <div className="testimonial-navigation">
                          <div className="testimonial-prev">
                            <i className="flaticon-right-arrow"></i>
                          </div>
                          <div className="testimonial-next">
                            <i className="flaticon-right-arrow"></i>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>

          </div>

{/* container */}
          <div className={`containerswap ${activeContainerIndex === 2 ? 'active' : ''}`}>
            
            <div className="row">
              <div className="col-lg-5"></div>
              <div className="col-lg-7">
                <div className="tj-heading-area">
                  <h4 className="sub-title">
                    Reviews
                    <span className="section-sub-title-shape"></span>
                  </h4>
                  <h2 className="sec-title">
                    Happy Clients <span>Thoughts</span>
                  </h2>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">

                <div className="testimonial-wrapper">
                  <div className="row align-items-end">
                    <div className="col-lg-4 offset-lg-1">
                      <div className="swiper testimonial-auother-slider">
                        <div className="swiper-wrapper">

                          <div className="swiper-slide testimonial-auother">

                            <div className="thumb-image">
                              <img src={Pic16} alt="Image" />
                              <div className="quote-icon">
                                <img src={pic17} alt="Icon" />
                              </div>
                            </div>
                            <div className="testimonial-name">
                              <h3 className="title">David,</h3>
                              <span className="sub-title">Desinger</span>
                            </div>
                            <div className="testimonial-info">
                              <div className="testimonial-rating">
                                <div className="star-ratings">
                                  <div className="fill-ratings">
                                    <span>★★★★★</span>
                                  </div>
                                  <div className="empty-ratings">
                                    <span>★★★★★</span>
                                  </div>
                                </div>
                              </div>
                              <div className="testimonial-socials">
                                <ul className="dot-style">
                                  <li>
                                    <a href="#">
                                      <i className="bi bi-twitter-x"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="bi bi-whatsapp"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="bi bi-instagram"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="bi bi-facebook"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>

                          </div>
                          
              
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-7">
                      <div className="swiper thumb-content-slider">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="testimonial-content-slider">
                              <p>
                                ‘’There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                alteration in some form, by injected humour, or
                                randomised words which don't look even slightly
                                believable. If you are going to use a passage of
                                Lorem Ipsum, you need to be sure there isn't
                                anything embarrassing hidden in the middle of
                                text.’’
                              </p>
                            </div>
                          </div>
                         
                        </div>
                        <div className="testimonial-navigation">
                          <div className="testimonial-prev">
                            <i className="flaticon-right-arrow"></i>
                          </div>
                          <div className="testimonial-next">
                            <i className="flaticon-right-arrow"></i>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* ciontainer */}
          <div className={`containerswap ${activeContainerIndex === 3 ? 'active' : ''}`}>
            
            <div className="row">
              <div className="col-lg-5"></div>
              <div className="col-lg-7">
                <div className="tj-heading-area">
                  <h4 className="sub-title">
                    Reviews
                    <span className="section-sub-title-shape"></span>
                  </h4>
                  <h2 className="sec-title">
                    Happy Clients <span>Thoughts</span>
                  </h2>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col">

                <div className="testimonial-wrapper">
                  <div className="row align-items-end">
                    <div className="col-lg-4 offset-lg-1">
                      <div className="swiper testimonial-auother-slider">
                        <div className="swiper-wrapper">

                          <div className="swiper-slide testimonial-auother">

                            <div className="thumb-image">
                              <img src={Pic16} alt="Image" />
                              <div className="quote-icon">
                                <img src={pic17} alt="Icon" />
                              </div>
                            </div>
                            <div className="testimonial-name">
                              <h3 className="title">Manish,</h3>
                              <span className="sub-title">Web develper</span>
                            </div>
                            <div className="testimonial-info">
                              <div className="testimonial-rating">
                                <div className="star-ratings">
                                  <div className="fill-ratings">
                                    <span>★★★</span>
                                  </div>
                                  <div className="empty-ratings">
                                    <span>★★★</span>
                                  </div>
                                </div>
                              </div>
                              <div className="testimonial-socials">
                                <ul className="dot-style">
                                  <li>
                                    <a href="#">
                                      <i className="bi bi-twitter-x"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="bi bi-whatsapp"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="bi bi-instagram"></i>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">
                                      <i className="bi bi-facebook"></i>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>

                          </div>
                          
         
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-7">
                      <div className="swiper thumb-content-slider">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <div className="testimonial-content-slider">
                              <p>
                                ‘this is another slider of prgaram  fdjflksjfkldsj fdlkfdj fld
                                Ipsum available, but the majority have suffered
                                alteration in some form, by injected humour, or
                                randomised words which don't look even slightly
                                believable. If you are going to use a passage of
                                Lorem Ipsum, you need to be sure there isn't
                                anything embarrassing hidden in the middle of
                                text.’’
                              </p>
                            </div>
                          </div>
                         
                        </div>
                        <div className="testimonial-navigation">
                          <div className="testimonial-prev">
                            <i className="flaticon-right-arrow"></i>
                          </div>
                          <div className="testimonial-next">
                            <i className="flaticon-right-arrow"></i>
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
        

          <div className="testLeftIcon">
          <i onClick={()=>{
            if(activeContainerIndex < totalContainers-1){
              setActiveContainerIndex((prev)=>prev+1);
            }
          }} class="bi bi-arrow-right-circle-fill"></i>
          </div>


          
          <div className="testimonial-sec-top-shape">
                            <img src={pic18} alt="Images" />
                          </div>
                          <div className="testimonial-sec-bottom-shape">
                            <img src={pic19} alt="Images" />
                          </div>

        </section>
        {/* <!-- end: Testimonial Section --> */}

        {/* <!-- start: Faq Section --> */}
        <section className="tj-faq-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="tj-heading-area">
                  <h4 className="sub-title">
                    Our Experts Answers
                    <span className="section-sub-title-shape"></span>
                  </h4>
                  <h2 className="sec-title">
                    Freqently Asked <span>Questions</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-7">
                <div className="accordion tj-faq" id="faqOne">
                  {/* <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Accordion Item #1
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <strong>
                          This is the first item's accordion body.
                        </strong>{" "}
                        It is shown by default, until the collapse plugin adds
                        the appropriate classNamees that we use to style each
                        element. These classNamees control the overall appearance,
                        as well as the showing and hiding via CSS transitions.
                        You can modify any of this with custom CSS or overriding
                        our default variables. It's also worth noting that just
                        about any HTML can go within the{" "}
                        <code>.accordion-body</code>, though the transition does
                        limit overflow.
                      </div>
                    </div>
                  </div> */}
                  <div className="faq-item">
                    <button
                      className="faq-title"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-1"
                      aria-expanded="true"
                    >
                      1. What is the proce of industrial automation
                    </button>
                    <div
                      id="faq-1"
                      className="collapse show"
                      data-bs-parent="#faqOne"
                    >
                      <div className="accordion-body faq-text">
                        <p>
                          Various versions have evolved over the years,
                          sometimes by accident, sometimes on purpose
                          established fact that a layout.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="faq-item">
                    <button
                      className="faq-title collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-2"
                      aria-expanded="false"
                    >
                      2. How does production planning work?
                    </button>
                    <div id="faq-2" className="collapse" data-bs-parent="#faqOne">
                      <div className="accordion-body faq-text">
                        <p>
                          Various versions have evolved over the years,
                          sometimes by accident, sometimes on purpose
                          established fact that a layout.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="faq-item">
                    <button
                      className="faq-title collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-3"
                      aria-expanded="false"
                    >
                      3. What is the manufacturing sector’s function ?
                    </button>
                    <div id="faq-3" className="collapse" data-bs-parent="#faqOne">
                      <div className="accordion-body faq-text">
                        <p>
                          Various versions have evolved over the years,
                          sometimes by accident, sometimes on purpose
                          established fact that a layout.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="faq-item">
                    <button
                      className="faq-title collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-4"
                      aria-expanded="false"
                    >
                      4. What is the benefit of implementation industry ?
                    </button>
                    <div id="faq-4" className="collapse" data-bs-parent="#faqOne">
                      <div className="accordion-body faq-text">
                        <p>
                          Various versions have evolved over the years,
                          sometimes by accident, sometimes on purpose
                          established fact that a layout.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="faq-item">
                    <button
                      className="faq-title collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-5"
                      aria-expanded="false"
                    >
                      5. Where can i find information a robot in the industry ?
                    </button>
                    <div id="faq-5" className="collapse" data-bs-parent="#faqOne">
                      <div className="accordion-body faq-text">
                        <p>
                          Various versions have evolved over the years,
                          sometimes by accident, sometimes on purpose
                          established fact that a layout.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <form>
                  <div className="contact-form-box">
                    <div className="contact-content">
                      <span className="sub-title">Contact Us</span>
                      <h3 className="title">Get a CallBack</h3>
                    </div>
                    <div className="form-input">
                      <input
                        type="text"
                        id="name"
                        name="yourName"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="form-input">
                      <input
                        type="email"
                        id="email"
                        name="yourEmail"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                    <div className="form-input">
                      <input
                        type="tel"
                        id="tel"
                        name="phone"
                        placeholder="Phone Number"
                        required
                      />
                    </div>
                    <div className="form-input">
                      <input
                        type="text"
                        id="regular"
                        name="regular"
                        placeholder="Subject"
                        required
                      />
                    </div>
                    <div className="form-input">
                      <textarea
                        name="country"
                        id="country"
                        placeholder="Country"
                      ></textarea>
                    </div>
                    <div className="submit-button">
                      <button className="tj-primary-btn">Sent Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- end: Faq Section --> */}

        {/* <!-- start: Blog Section --> */}
        <section className="tj-blog-section">
          <div className="container">
            <div className="blog-top-content">
              <div className="tj-heading-area">
                <h4 className="sub-title">
                  News Feeds
                  <span className="section-sub-title-shape"></span>
                </h4>
                <h2 className="sec-title">
                  Blog & Insights <span>Professionals</span>
                </h2>
              </div>
              <div className="blog-desc">
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="blog-item">
                  <div className="blog-image">
                    <a href="blog-details.html">
                      <img src={pic20} alt="Images" />
                    </a>
                  </div>
                  <div className="blog-content">
                    <div className="post-meta">
                      <ul>
                        <li>
                          <span>
                            {/* <i className="flaticon-user"></i> */}
                            <i className="bi bi-person-fill"></i>
                          </span>{" "}
                          <a href="blog-details.html">Admin</a>
                        </li>
                        <li>
                          <span>
                            {/* <i className="fa-solid fa-comments"></i> */}
                            <i className="bi bi-chat"></i>
                          </span>{" "}
                          Comments (1)
                        </li>
                      </ul>
                    </div>
                    <h4 className="title">
                      <a href="blog-details.html">
                        Then They Need To Establish a Company Branch
                      </a>
                    </h4>
                    <div className="blog-button">
                      <a className="tj-secondary-btn" href="blog-details.html">
                        Read More{" "}
                        {/* <i className="fa-light fa-arrow-right-from-line"></i> */}
                        <i className="bi bi-arrow-bar-right"></i>
                      </a>
                    </div>
                  </div>
                  <div className="blog-date">
                    <span className="date">01</span>
                    <span className="month">Jun</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="blog-item">
                  <div className="blog-image">
                    <a href="blog-details.html">
                      <img src={pic21} alt="Images" />
                    </a>
                  </div>
                  <div className="blog-content">
                    <div className="post-meta">
                      <ul>
                        <li>
                          <span>
                            {/* <i className="flaticon-user"></i> */}
                            <i className="bi bi-person-fill"></i>
                          </span>{" "}
                          <a href="#"> Admin</a>
                        </li>
                        <li>
                          <span>
                            {/* <i className="fa-solid fa-comments"></i> */}
                            <i className="bi bi-chat"></i>
                          </span>{" "}
                          Comments (1)
                        </li>
                      </ul>
                    </div>
                    <h4 className="title">
                      <a href="blog-details.html">
                        If any Construction Company Wishes to commence its
                      </a>
                    </h4>
                    <div className="blog-button">
                      <a className="tj-secondary-btn" href="blog-details.html">
                        Read More{" "}
                        {/* <i className="fa-light fa-arrow-right-from-line"></i> */}
                        <i className="bi bi-arrow-bar-right"></i>
                      </a>
                    </div>
                  </div>
                  <div className="blog-date">
                    <span className="date">05</span>
                    <span className="month">Feb</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="blog-item">
                  <div className="blog-image">
                    <a href="blog-details.html">
                      <img src={pic22} alt="Images" />
                    </a>
                  </div>
                  <div className="blog-content">
                    <div className="post-meta">
                      <ul>
                        <li>
                          <span>
                            {/* <i className="flaticon-user"></i> */}
                            <i className="bi bi-person-fill"></i>
                          </span>{" "}
                          <a href="#"> Admin</a>
                        </li>
                        <li>
                          <span>
                            {/* <i className="fa-solid fa-comments"></i> */}
                            <i className="bi bi-chat"></i>
                          </span>{" "}
                          Comments (1)
                        </li>
                      </ul>
                    </div>
                    <h4 className="title">
                      <a href="blog-details.html">
                        How To Build and Launch Powerful Websites
                      </a>
                    </h4>
                    <div className="blog-button">
                      <a className="tj-secondary-btn" href="blog-details.html">
                        Read More{" "}
                        {/* <i className="fa-light fa-arrow-right-from-line"></i> */}
                        <i className="bi bi-arrow-bar-right"></i>
                      </a>
                    </div>
                  </div>
                  <div className="blog-date">
                    <span className="date">08</span>
                    <span className="month">Nov</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="blog-sec-shape">
            <img src={pic23} alt="Shape" />
          </div>
        </section>
        {/* <!-- end: Blog Section --> */}

        {/* <!-- start: Brand Section --> */}
        <section className="tj-brand-section">
          <div className="container">
            <div className="tj-heading-area">
              <h4 className="sub-title">
                Top Brands
                <span className="section-sub-title-shape"></span>
              </h4>
              <h2 className="sec-title">
                Our Trusted <span>Partners</span>
              </h2>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="swiper tj-brand-slider">
                  <div className="swiper-wrapper dineshborder">
                    <div className="swiper-slide">
                      <div className="brand-item">
                        <a href="#">
                          <img src={pic24} alt="Images" />
                        </a>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="brand-item">
                        <a href="#">
                          <img src={pic25} alt="Images" />
                        </a>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="brand-item">
                        <a href="#">
                          <img src={pic26} alt="Images" />
                        </a>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="brand-item">
                        <a href="#">
                          <img src={pic27} alt="Images" />
                        </a>
                      </div>
                    </div>
                    <div className="swiper-slide">
                      <div className="brand-item">
                        <a href="#">
                          <img src={pic28} alt="Images" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- end: Brand Section --> */}

        {/* <!-- start: Newsletter Section --> */}
        <section className="tj-newsletter-section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="newsletter-content-area">
                  <div className="tj-heading-area">
                    <h4 className="sub-title">
                      Newsletter Subscription
                      <span className="section-sub-title-shape"></span>
                    </h4>
                    <h2 className="sec-title">
                      Get Instant Industrial <span>Updates!</span>
                    </h2>
                    <div className="left-icon">
                      <img src={pic29} alt="Icon" />
                    </div>
                  </div>
                  <div className="contact-form-style-2">
                    <form>
                      <div className="form-input">
                        <input
                          type="email"
                          id="emailTwo"
                          name="email"
                          placeholder="Enter Mail ID"
                          required=""
                        />
                        <button className="tj-primary-btn d-none d-sm-inline-block">
                          Subscribe
                        </button>
                      </div>
                      <div className="input-checkbox">
                        <input
                          id="checkbox"
                          name="checkbox"
                          type="checkbox"
                          checked
                        />
                        <label for="checkbox">
                          Your email is safe with us, we don’t spam. Privacy
                          Policy{" "}
                        </label>
                      </div>
                      <button className="tj-primary-btn d-sm-none">
                        Subscribe
                      </button>
                    </form>
                    <div className="right-icon">
                      <img src={pic30} alt="Icon" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- end: Newsletter Section --> */}
      </main>

      {/* <!-- start: Footer Area --> */}
      <footer className="tj-footer-area footer-1">
        <div className="footer-top-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="footer-widget footer1-col-1">
                  <div className="footer-info">
                    <div className="footer-logo">
                      <a className="logo" href="index.html">
                        <img src={pic32} alt="Logo" />
                      </a>
                    </div>
                    <div className="desc">
                      <p>
                        The point of using Lorem Ipsum is that it has a
                        more-or-less normal distribution of letters, as opposed
                        to using 'Content here.
                      </p>
                    </div>
                    <div className="footer-share">
                      <ul>
                        <li>
                          <a href="#">
                            {/* <i className="fa-brands fa-x-twitter"></i> */}
                            <i className="bi bi-twitter-x"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            {/* <i className="fa-brands fa-whatsapp"></i> */}
                            <i className="bi bi-whatsapp"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            {/* <i className="fa-brands fa-instagram"></i> */}
                            <i className="bi bi-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            {/* <i className="fa-brands fa-facebook-f"></i> */}
                            <i className="bi bi-facebook"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget footer1-col-2 widget_nav_menu">
                  <div className="footer-title">
                    <h4 className="title">Our Services</h4>
                  </div>
                  <div className="footer-menu">
                    <ul>
                      <li>
                        <a href="#">Power & Energy Sectors</a>
                      </li>
                      <li>
                        <a href="#">Explore Tiling & Painiting</a>
                      </li>
                      <li>
                        <a href="#">Quality Specialist Engineer</a>
                      </li>
                      <li>
                        <a href="#">Automotive Parts & System</a>
                      </li>
                      <li>
                        <a href="#">Petroleum & Gas Engineering</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                <div className="footer-widget footer1-col-3 widget_nav_menu">
                  <div className="footer-title">
                    <h4 className="title">Useful links</h4>
                  </div>
                  <div className="footer-menu">
                    <ul>
                      <li>
                        <a href="about.html">About Us</a>
                      </li>
                      <li>
                        <a href="#">Our Mission</a>
                      </li>
                      <li>
                        <a href="#">Our Process</a>
                      </li>
                      <li>
                        <a href="#">Testimonials</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget footer1-col-4">
                  <div className="footer-title">
                    <h4 className="title">Official Info</h4>
                  </div>
                  <div className="footer-contact">
                    <ul>
                      <li>
                        <div className="contact-icon">
                          {/* <i className="fa-solid fa-envelope"></i> */}
                          <i className="bi bi-envelope"></i>
                        </div>
                        <a href="mailto:Info@gmail.com">Info@gmail.com</a>
                      </li>
                      <li>
                        <div className="contact-icon">
                          {/* <i className="fa-sharp fa-solid fa-globe"></i> */}
                          <i className="bi bi-globe"></i>
                        </div>
                        <a href="#">www.yourwebsite.com</a>
                      </li>
                      <li>
                        <div className="contact-icon">
                          {/* <i className="fa-regular fa-location-dot"></i> */}
                          <i className="bi bi-geo-alt"></i>
                        </div>
                        <span>225 Marion Street, Columbia</span>
                      </li>
                      <li>
                        <div className="contact-icon">
                          {/* <i className="fa-solid fa-phone-volume"></i> */}
                          <i className="bi bi-phone"></i>
                        </div>
                        <a href="tel:+00123456789">+ 00 123 456 789</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="shape-left">
            <img src={pic31} alt="Shape" />
          </div>
          <div className="shape-right">
            <img src={pic31} alt="Shape" />
          </div>
        </div>
        <div className="tj-copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="copyright-content-ara">
                  <div className="copyright-text">
                    <p>
                      Copyright © 2024{" "}
                      <a href="#" target="_blank">
                        {" "}
                        ThemeJunction.{" "}
                      </a>{" "}
                      All Rights Reserved.
                    </p>
                  </div>
                  <div className="bottom-menu">
                    <ul>
                      <li>
                        <a href="#">Setting & Privacy</a>
                      </li>
                      <li>
                        <a href="#">FAQ</a>
                      </li>
                      <li>
                        <a href="#">Support</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sec-left-shape">
          <img src={pic33} alt="Shape" />
        </div>
        <div className="sec-right-shape">
          <img src={pic34} alt="Shape" />
        </div>
      </footer>
      {/* <!-- end: Footer Area --> */}

      {/* <!-- start: Back To Top --> */}
      <button
        className="progress-wrap bottomtotop"
        id="scrollUp"
        onClick={buttomtoptop}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-up"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"
          />
        </svg>
      </button>
    </>
  );
};

export default Home;





            {/* <div className="swiper-slide testimonial-auother">
                              <div className="thumb-image">
                                <img src={Pic16} alt="Image" />
                                <div className="quote-icon">
                                  <img src={pic17} alt="Icon" />
                                </div>
                              </div>
                              <div className="testimonial-name">
                                <h3 className="title">David,</h3>
                                <span className="sub-title">Desinger</span>
                              </div>
                              <div className="testimonial-info">
                                <div className="testimonial-rating">
                                  <div className="star-ratings">
                                    <div className="fill-ratings">
                                      <span>★★★★★</span>
                                    </div>
                                    <div className="empty-ratings">
                                      <span>★★★★★</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="testimonial-socials">
                                  <ul className="dot-style">
                                    <li>
                                      <a href="#">
                                        <i className="bi bi-twitter-x"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="bi bi-whatsapp"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="bi bi-instagram"></i>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="bi bi-facebook"></i>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div> */}


                            // these are section s
