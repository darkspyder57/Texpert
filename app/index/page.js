"use client"

import Footer from "@/app/Components/Footer";
import Header from "@/app/Components/Header";
import ScrollToTop from "@/app/Components/ScrollToTop";
import Link from "next/link";
// import Preloader from "../Components/Preloader";

export default function IndexPage() {
    return (
        <div className="index-page">
            <Header />
            <main className="main">

                {/* <!-- Hero Section --> */}
                <section id="hero" className="hero section dark-background">

                    <img src="assets/img/hero-bg.jpg" alt="" data-aos="fade-in" />

                    <div className="container">
                        <h2 data-aos="fade-up" data-aos-delay="100">Learning Today,<br />Leading Tomorrow</h2>
                        <p data-aos="fade-up" data-aos-delay="200">We are team of talented designers making websites with Bootstrap</p>
                        <div className="d-flex mt-4" data-aos="fade-up" data-aos-delay="300">
                            <Link href="/contact" legacyBehavior><a className="btn-get-started">Get Started</a></Link>
                        </div>
                    </div>

                </section>
                {/* <!-- /Hero Section --> */}

                {/* <!-- About Section --> */}
                <section id="about" className="about section">

                    <div className="container">

                        <div className="row gy-4">

                            <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-up" data-aos-delay="100">
                                <img src="assets/img/about.jpg" className="img-fluid" alt="" />
                            </div>

                            <div className="col-lg-6 order-2 order-lg-1 content" data-aos="fade-up" data-aos-delay="200">
                                <h3>Voluptatem dignissimos provident quasi corporis</h3>
                                <p className="fst-italic">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua.
                                </p>
                                <ul>
                                    <li><i className="bi bi-check-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></li>
                                    <li><i className="bi bi-check-circle"></i> <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span></li>
                                    <li><i className="bi bi-check-circle"></i> <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</span></li>
                                </ul>
                                <a href="#" className="read-more"><span>Read More</span><i className="bi bi-arrow-right"></i></a>
                            </div>

                        </div>

                    </div>

                </section>
                {/* <!-- /About Section --> */}

                {/* <!-- Counts Section --> */}
                <section id="counts" className="section counts light-background">

                    <div className="container" data-aos="fade-up" data-aos-delay="100">

                        <div className="row gy-4">

                            <div className="col-lg-3 col-md-6">
                                <div className="stats-item text-center w-100 h-100">
                                    <span data-purecounter-start="0" data-purecounter-end="1232" data-purecounter-duration="1" className="purecounter"></span>
                                    <p>Students</p>
                                </div>
                            </div>
                            {/* <!-- End Stats Item --> */}

                            <div className="col-lg-3 col-md-6">
                                <div className="stats-item text-center w-100 h-100">
                                    <span data-purecounter-start="0" data-purecounter-end="64" data-purecounter-duration="1" className="purecounter"></span>
                                    <p>Courses</p>
                                </div>
                            </div>
                            {/* <!-- End Stats Item --> */}

                            <div className="col-lg-3 col-md-6">
                                <div className="stats-item text-center w-100 h-100">
                                    <span data-purecounter-start="0" data-purecounter-end="42" data-purecounter-duration="1" className="purecounter"></span>
                                    <p>Events</p>
                                </div>
                            </div>
                            {/* <!-- End Stats Item --> */}

                            <div className="col-lg-3 col-md-6">
                                <div className="stats-item text-center w-100 h-100">
                                    <span data-purecounter-start="0" data-purecounter-end="24" data-purecounter-duration="1" className="purecounter"></span>
                                    <p>Trainers</p>
                                </div>
                            </div>
                            {/* <!-- End Stats Item --> */}

                        </div>

                    </div>

                </section>
                {/* <!-- /Counts Section --> */}

                {/* <!-- Why Us Section --> */}
                <section id="why-us" className="section why-us">

                    <div className="container">

                        <div className="row gy-4">

                            <div className="col-lg-4" data-aos="fade-up" data-aos-delay="100">
                                <div className="why-box">
                                    <h3>Why Choose Our Products?</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                                        Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
                                    </p>
                                    <div className="text-center">
                                        <a href="#" className="more-btn"><span>Learn More</span> <i className="bi bi-chevron-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Why Box --> */}

                            <div className="col-lg-8 d-flex align-items-stretch">
                                <div className="row gy-4" data-aos="fade-up" data-aos-delay="200">

                                    <div className="col-xl-4">
                                        <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                                            <i className="bi bi-clipboard-data"></i>
                                            <h4>Corporis voluptates officia eiusmod</h4>
                                            <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                                        </div>
                                    </div>
                                    {/* <!-- End Icon Box --> */}

                                    <div className="col-xl-4" data-aos="fade-up" data-aos-delay="300">
                                        <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                                            <i className="bi bi-gem"></i>
                                            <h4>Ullamco laboris ladore pan</h4>
                                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                                        </div>
                                    </div>
                                    {/* <!-- End Icon Box --> */}

                                    <div className="col-xl-4" data-aos="fade-up" data-aos-delay="400">
                                        <div className="icon-box d-flex flex-column justify-content-center align-items-center">
                                            <i className="bi bi-inboxes"></i>
                                            <h4>Labore consequatur incidid dolore</h4>
                                            <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                                        </div>
                                    </div>
                                    {/* <!-- End Icon Box --> */}

                                </div>
                            </div>

                        </div>

                    </div>

                </section>
                {/* <!-- /Why Us Section --> */}

                {/* <!-- Features Section --> */}
                <section id="features" className="features section">

                    <div className="container">

                        <div className="row gy-4">

                            <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="100">
                                <div className="features-item">
                                    <i className="bi bi-eye" style={{color: '#ffbb2c'}}></i>
                                    <h3><a href="" className="stretched-link">Lorem Ipsum</a></h3>
                                </div>
                            </div>
                            {/* <!-- End Feature Item --> */}

                            <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="200">
                                <div className="features-item">
                                    <i className="bi bi-infinity" style={{color: '#5578ff'}}></i>
                                    <h3><a href="" className="stretched-link">Dolor Sitema</a></h3>
                                </div>
                            </div>
                            {/* <!-- End Feature Item --> */}

                            <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="300">
                                <div className="features-item">
                                    <i className="bi bi-mortarboard" style={{color: '#e80368'}}></i>
                                    <h3><a href="" className="stretched-link">Sed perspiciatis</a></h3>
                                </div>
                            </div>
                            {/* <!-- End Feature Item --> */}

                            <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="400">
                                <div className="features-item">
                                    <i className="bi bi-nut" style={{color: '#e361ff'}}></i>
                                    <h3><a href="" className="stretched-link">Magni Dolores</a></h3>
                                </div>
                            </div>
                            {/* <!-- End Feature Item --> */}

                            <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="500">
                                <div className="features-item">
                                    <i className="bi bi-shuffle" style={{color: '#47aeff'}}></i>
                                    <h3><a href="" className="stretched-link">Nemo Enim</a></h3>
                                </div>
                            </div>
                            {/* <!-- End Feature Item --> */}

                            <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="600">
                                <div className="features-item">
                                    <i className="bi bi-star" style={{color: '#ffa76e'}}></i>
                                    <h3><a href="" className="stretched-link">Eiusmod Tempor</a></h3>
                                </div>
                            </div>
                            {/* <!-- End Feature Item --> */}

                            <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="700">
                                <div className="features-item">
                                    <i className="bi bi-x-diamond" style={{color: '#11dbcf'}}></i>
                                    <h3><a href="" className="stretched-link">Midela Teren</a></h3>
                                </div>
                            </div>
                            {/* <!-- End Feature Item --> */}

                            <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="800">
                                <div className="features-item">
                                    <i className="bi bi-camera-video" style={{color: '#4233ff'}}></i>
                                    <h3><a href="" className="stretched-link">Pira Neve</a></h3>
                                </div>
                            </div>
                            {/* <!-- End Feature Item --> */}

                            <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="900">
                                <div className="features-item">
                                    <i className="bi bi-command" style={{color: '#b2904f'}}></i>
                                    <h3><a href="" className="stretched-link">Dirada Pack</a></h3>
                                </div>
                            </div>
                            {/* <!-- End Feature Item --> */}

                            <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="1000">
                                <div className="features-item">
                                    <i className="bi bi-dribbble" style={{color: '#b20969'}}></i>
                                    <h3><a href="" className="stretched-link">Moton Ideal</a></h3>
                                </div>
                            </div>
                            {/* <!-- End Feature Item --> */}

                            <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="1100">
                                <div className="features-item">
                                    <i className="bi bi-activity" style={{color: '#ff5828'}}></i>
                                    <h3><a href="" className="stretched-link">Verdo Park</a></h3>
                                </div>
                            </div>
                            {/* <!-- End Feature Item --> */}

                            <div className="col-lg-3 col-md-4" data-aos="fade-up" data-aos-delay="1200">
                                <div className="features-item">
                                    <i className="bi bi-brightness-high" style={{color: '#29cc61'}}></i>
                                    <h3><a href="" className="stretched-link">Flavor Nivelanda</a></h3>
                                </div>
                            </div>
                            {/* <!-- End Feature Item --> */}

                        </div>

                    </div>

                </section>
                {/* <!-- /Features Section --> */}

                {/* <!-- Courses Section --> */}
                <section id="courses" className="courses section">

                    {/* <!-- Section Title --> */}
                    <div className="container section-title" data-aos="fade-up">
                        <h2>Courses</h2>
                        <p>Popular Courses</p>
                    </div>
                    {/* <!-- End Section Title --> */}

                    <div className="container">

                        <div className="row">

                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                                <div className="course-item">
                                    <img src="assets/img/course-1.jpg" className="img-fluid" alt="..." />
                                    <div className="course-content">
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <p className="category">Web Development</p>
                                            <p className="price">$169</p>
                                        </div>

                                        <h3><a href="course-details.html">Website Design</a></h3>
                                        <p className="description">Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
                                        <div className="trainer d-flex justify-content-between align-items-center">
                                            <div className="trainer-profile d-flex align-items-center">
                                                <img src="assets/img/trainers/trainer-1-2.jpg" className="img-fluid" alt="" />
                                                <a href="" className="trainer-link">Antonio</a>
                                            </div>
                                            <div className="trainer-rank d-flex align-items-center">
                                                <i className="bi bi-person user-icon"></i>&nbsp;50
                                                &nbsp;&nbsp;
                                                <i className="bi bi-heart heart-icon"></i>&nbsp;65
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Course Item--> */}

                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                                <div className="course-item">
                                    <img src="assets/img/course-2.jpg" className="img-fluid" alt="..." />
                                    <div className="course-content">
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <p className="category">Marketing</p>
                                            <p className="price">$250</p>
                                        </div>

                                        <h3><a href="course-details.html">Search Engine Optimization</a></h3>
                                        <p className="description">Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
                                        <div className="trainer d-flex justify-content-between align-items-center">
                                            <div className="trainer-profile d-flex align-items-center">
                                                <img src="assets/img/trainers/trainer-2-2.jpg" className="img-fluid" alt="" />
                                                <a href="" className="trainer-link">Lana</a>
                                            </div>
                                            <div className="trainer-rank d-flex align-items-center">
                                                <i className="bi bi-person user-icon"></i>&nbsp;35
                                                &nbsp;&nbsp;
                                                <i className="bi bi-heart heart-icon"></i>&nbsp;42
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Course Item--> */}

                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="300">
                                <div className="course-item">
                                    <img src="assets/img/course-3.jpg" className="img-fluid" alt="..." />
                                    <div className="course-content">
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <p className="category">Content</p>
                                            <p className="price">$180</p>
                                        </div>

                                        <h3><a href="course-details.html">Copywriting</a></h3>
                                        <p className="description">Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>
                                        <div className="trainer d-flex justify-content-between align-items-center">
                                            <div className="trainer-profile d-flex align-items-center">
                                                <img src="assets/img/trainers/trainer-3-2.jpg" className="img-fluid" alt="" />
                                                <a href="" className="trainer-link">Brandon</a>
                                            </div>
                                            <div className="trainer-rank d-flex align-items-center">
                                                <i className="bi bi-person user-icon"></i>&nbsp;20
                                                &nbsp;&nbsp;
                                                <i className="bi bi-heart heart-icon"></i>&nbsp;85
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Course Item--> */}

                        </div>

                    </div>

                </section>
                {/* <!-- /Courses Section --> */}

                {/* <!-- Trainers Index Section --> */}
                <section id="trainers-index" className="section trainers-index">

                    <div className="container">

                        <div className="row">

                            <div className="col-lg-4 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="100">
                                <div className="member">
                                    <img src="assets/img/trainers/trainer-1.jpg" className="img-fluid" alt="" />
                                    <div className="member-content">
                                        <h4>Walter White</h4>
                                        <span>Web Development</span>
                                        <p>
                                            Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut
                                        </p>
                                        <div className="social">
                                            <a href=""><i className="bi bi-twitter-x"></i></a>
                                            <a href=""><i className="bi bi-facebook"></i></a>
                                            <a href=""><i className="bi bi-instagram"></i></a>
                                            <a href=""><i className="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Team Member --> */}

                            <div className="col-lg-4 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="200">
                                <div className="member">
                                    <img src="assets/img/trainers/trainer-2.jpg" className="img-fluid" alt="" />
                                    <div className="member-content">
                                        <h4>Sarah Jhinson</h4>
                                        <span>Marketing</span>
                                        <p>
                                            Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus. In architecto rerum rerum temporibus
                                        </p>
                                        <div className="social">
                                            <a href=""><i className="bi bi-twitter-x"></i></a>
                                            <a href=""><i className="bi bi-facebook"></i></a>
                                            <a href=""><i className="bi bi-instagram"></i></a>
                                            <a href=""><i className="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Team Member --> */}

                            <div className="col-lg-4 col-md-6 d-flex" data-aos="fade-up" data-aos-delay="300">
                                <div className="member">
                                    <img src="assets/img/trainers/trainer-3.jpg" className="img-fluid" alt="" />
                                    <div className="member-content">
                                        <h4>William Anderson</h4>
                                        <span>Content</span>
                                        <p>
                                            Voluptas necessitatibus occaecati quia. Earum totam consequuntur qui porro et laborum toro des clara
                                        </p>
                                        <div className="social">
                                            <a href=""><i className="bi bi-twitter-x"></i></a>
                                            <a href=""><i className="bi bi-facebook"></i></a>
                                            <a href=""><i className="bi bi-instagram"></i></a>
                                            <a href=""><i className="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Team Member --> */}

                        </div>

                    </div>

                </section>
                {/* <!-- /Trainers Index Section --> */}

            </main>
            <Footer />
            <ScrollToTop />
            {/* <Preloader /> */}
        </div>
    )
}