import { Link } from "@/i18n/routing";

const HomeThree = () => {
    return (
        <>
            <div className="home-3 home-section">
                <div id="particles-js"></div>
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12">
                                    <div className="main-banner-content">
                                        <ul className="social-icon-list">
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fa-brands fa-x-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-instagram"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-youtube"></i>
                                                </a>
                                            </li>
                                        </ul>
                                        <h1>
                                            IT Solutions & Business Services
                                            Company
                                        </h1>
                                        <p>
                                            MESPI company serves the global
                                            market and focuses on smart utility
                                            service-oriented AI technology
                                            solutions.
                                        </p>
                                        <div className="banner-btn">
                                            <Link
                                                className="default-btn-one"
                                                href="/services"
                                            >
                                                Our Service <span></span>
                                            </Link>
                                            <Link
                                                className="default-btn-two"
                                                href="/contact"
                                            >
                                                Contact Us <span></span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12" data-tilt>
                                    <div className="banner-image">
                                        <img
                                            src="/img/home-font-3.png"
                                            alt="image"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeThree;
