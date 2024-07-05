"use client"

import Footer from "../Components/Footer";
import Header from "../Components/Header";
// import Preloader from "../Components/Preloader";
import ScrollToTop from "../Components/ScrollToTop";

export default function CourseDetailsPage() {
    return (
        <div className="course-details-page">
            <Header />
            <main className="main">

                {/* <!-- Page Title --> */}
                <div className="page-title" data-aos="fade">
                    <div className="heading">
                        <div className="container">
                            <div className="row d-flex justify-content-center text-center">
                                <div className="col-lg-8">
                                    <h1>Course Details</h1>
                                    <p className="mb-0">Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav className="breadcrumbs">
                        <div className="container">
                            <ol>
                                <li><a href="index.html">Home</a></li>
                                <li className="current">Course Details</li>
                            </ol>
                        </div>
                    </nav>
                </div>
                {/* <!-- End Page Title --> */}

                {/* <!-- Courses Course Details Section --> */}
                <section id="courses-course-details" className="courses-course-details section">

                    <div className="container" data-aos="fade-up">

                        <div className="row">
                            <div className="col-lg-8">
                                <img src="assets/img/course-details.jpg" className="img-fluid" alt="" />
                                    <h3>Et enim incidunt fuga tempora</h3>
                                    <p>
                                        Qui et explicabo voluptatem et ab qui vero et voluptas. Sint voluptates temporibus quam autem. Atque nostrum voluptatum laudantium a doloremque enim et ut dicta. Nostrum ducimus est iure minima totam doloribus nisi ullam deserunt. Corporis aut officiis sit nihil est. Labore aut sapiente aperiam.
                                        Qui voluptas qui vero ipsum ea voluptatem. Omnis et est. Voluptatem officia voluptatem adipisci et iusto provident doloremque consequatur. Quia et porro est. Et qui corrupti laudantium ipsa.
                                        Eum quasi saepe aperiam qui delectus quaerat in. Vitae mollitia ipsa quam. Ipsa aut qui numquam eum iste est dolorum. Rem voluptas ut sit ut.
                                    </p>
                            </div>
                            <div className="col-lg-4">

                                <div className="course-info d-flex justify-content-between align-items-center">
                                    <h5>Trainer</h5>
                                    <p><a href="#">Walter White</a></p>
                                </div>

                                <div className="course-info d-flex justify-content-between align-items-center">
                                    <h5>Course Fee</h5>
                                    <p>$165</p>
                                </div>

                                <div className="course-info d-flex justify-content-between align-items-center">
                                    <h5>Available Seats</h5>
                                    <p>30</p>
                                </div>

                                <div className="course-info d-flex justify-content-between align-items-center">
                                    <h5>Schedule</h5>
                                    <p>5.00 pm - 7.00 pm</p>
                                </div>

                            </div>
                        </div>

                    </div>

                </section>
                {/* <!-- /Courses Course Details Section --> */}

                {/* <!-- Tabs Section --> */}
                <section id="tabs" className="tabs section">

                    <div className="container" data-aos="fade-up" data-aos-delay="100">

                        <div className="row">
                            <div className="col-lg-3">
                                <ul className="nav nav-tabs flex-column">
                                    <li className="nav-item">
                                        <a className="nav-link active show" data-bs-toggle="tab" href="#tab-1">Modi sit est</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-bs-toggle="tab" href="#tab-2">Unde praesentium sed</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-bs-toggle="tab" href="#tab-3">Pariatur explicabo vel</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-bs-toggle="tab" href="#tab-4">Nostrum qui quasi</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-bs-toggle="tab" href="#tab-5">Iusto ut expedita aut</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-9 mt-4 mt-lg-0">
                                <div className="tab-content">
                                    <div className="tab-pane active show" id="tab-1">
                                        <div className="row">
                                            <div className="col-lg-8 details order-2 order-lg-1">
                                                <h3>Architecto ut aperiam autem id</h3>
                                                <p className="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                                                <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
                                            </div>
                                            <div className="col-lg-4 text-center order-1 order-lg-2">
                                                <img src="assets/img/tabs/tab-1.png" alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="tab-2">
                                        <div className="row">
                                            <div className="col-lg-8 details order-2 order-lg-1">
                                                <h3>Et blanditiis nemo veritatis excepturi</h3>
                                                <p className="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                                                <p>Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt est. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pal</p>
                                            </div>
                                            <div className="col-lg-4 text-center order-1 order-lg-2">
                                                <img src="assets/img/tabs/tab-2.png" alt="" className="img-fluid" /> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="tab-3">
                                        <div className="row">
                                            <div className="col-lg-8 details order-2 order-lg-1">
                                                <h3>Impedit facilis occaecati odio neque aperiam sit</h3>
                                                <p className="fst-italic">Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus non sunt dicta dolor et. In asperiores velit quaerat perferendis aut</p>
                                                <p>Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque necessitatibus illo rerum eum ut. Commodi ipsam minima molestiae sed laboriosam a iste odio. Earum odit nesciunt fugiat sit ullam. Soluta et harum voluptatem optio quae</p>
                                            </div>
                                            <div className="col-lg-4 text-center order-1 order-lg-2">
                                                <img src="assets/img/tabs/tab-3.png" alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="tab-4">
                                        <div className="row">
                                            <div className="col-lg-8 details order-2 order-lg-1">
                                                <h3>Fuga dolores inventore laboriosam ut est accusamus laboriosam dolore</h3>
                                                <p className="fst-italic">Totam aperiam accusamus. Repellat consequuntur iure voluptas iure porro quis delectus</p>
                                                <p>Eaque consequuntur consequuntur libero expedita in voluptas. Nostrum ipsam necessitatibus aliquam fugiat debitis quis velit. Eum ex maxime error in consequatur corporis atque. Eligendi asperiores sed qui veritatis aperiam quia a laborum inventore</p>
                                            </div>
                                            <div className="col-lg-4 text-center order-1 order-lg-2">
                                                <img src="assets/img/tabs/tab-4.png" alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="tab-5">
                                        <div className="row">
                                            <div className="col-lg-8 details order-2 order-lg-1">
                                                <h3>Est eveniet ipsam sindera pad rone matrelat sando reda</h3>
                                                <p className="fst-italic">Omnis blanditiis saepe eos autem qui sunt debitis porro quia.</p>
                                                <p>Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel</p>
                                            </div>
                                            <div className="col-lg-4 text-center order-1 order-lg-2">
                                                <img src="assets/img/tabs/tab-5.png" alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </section>
                {/* <!-- /Tabs Section --> */}

            </main>
            <Footer />
            <ScrollToTop />
            {/* <Preloader /> */}
        </div>
    )
}