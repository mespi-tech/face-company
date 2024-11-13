import { Link } from "@/i18n/routing";
import Image from "next/image";
import React from "react";

function BlogHome() {
    return (
        <>
            <section className="blog-section bg-grey pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title">
                                <h6 className="sub-title">Blog & Article</h6>
                                <h2>Recent Blog</h2>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-single-item">
                                <div className="blog-image">
                                    <Link href="#">
                                        <Image
                                            width={416}
                                            height={288}
                                            src="/img/blog/blog-1.jpg"
                                            alt="image"
                                        />
                                    </Link>
                                </div>
                                <div className="blog-description">
                                    <ul className="blog-info">
                                        <li>
                                            <Link href="#">
                                                <i className="bi bi-person-circle"></i>{" "}
                                                winsnyder
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <i className="bi bi-calendar-check"></i>{" "}
                                                17 June 2024
                                            </Link>
                                        </li>
                                    </ul>
                                    <div className="blog-text">
                                        <h3>
                                            <Link href="#">
                                                Planning for a Safe Return to
                                                the Workplace IT Solutions
                                            </Link>
                                        </h3>
                                        <p>
                                            Leverage IT solutions for a secure
                                            and efficient workplace, including
                                            touchless tech, remote access, and
                                            strong cybersecurity. Prepare your
                                            team for a smooth transition!
                                        </p>
                                        <div className="blog-btn">
                                            {" "}
                                            <Link
                                                href="#"
                                                className="read-more"
                                            >
                                                <i className="bi bi-arrow-right-short"></i>{" "}
                                                Read More
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-single-item">
                                <div className="blog-image">
                                    <Link href="#">
                                        <Image
                                            width={416}
                                            height={288}
                                            src="/img/blog/blog-2.jpg"
                                            alt="image"
                                        />
                                    </Link>
                                </div>
                                <div className="blog-description">
                                    <ul className="blog-info">
                                        <li>
                                            <Link href="#">
                                                <i className="bi bi-person-circle"></i>{" "}
                                                Author
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <i className="bi bi-calendar-check"></i>{" "}
                                                20 June 2024
                                            </Link>
                                        </li>
                                    </ul>
                                    <div className="blog-text">
                                        <h3>
                                            <Link href="#">
                                                Announcing Our New Smiles for
                                                Success Charity
                                            </Link>
                                        </h3>
                                        <p>
                                            We’re proud to launch Smiles for
                                            Success, dedicated to bringing joy
                                            and support to those in need. Join
                                            us in making a difference!
                                        </p>
                                        <div className="blog-btn">
                                            <Link
                                                href="#"
                                                className="read-more"
                                            >
                                                <i className="bi bi-arrow-right-short"></i>{" "}
                                                Read More
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="blog-single-item">
                                <div className="blog-image">
                                    <Link href="#">
                                        <Image
                                            width={416}
                                            height={288}
                                            src="/img/blog/blog-3.jpg"
                                            alt="image"
                                        />
                                    </Link>
                                </div>
                                <div className="blog-description">
                                    <ul className="blog-info">
                                        <li>
                                            <Link href="#">
                                                <i className="bi bi-person-circle"></i>{" "}
                                                Author
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <i className="bi bi-calendar-check"></i>{" "}
                                                25 June 2024
                                            </Link>
                                        </li>
                                    </ul>
                                    <div className="blog-text">
                                        <h3>
                                            <Link href="#">
                                                Machine Learning Applications
                                                for Every Industry
                                            </Link>
                                        </h3>
                                        <p>
                                            From healthcare to finance, machine
                                            learning powers smarter decisions,
                                            automation, and innovation.
                                            Transform your industry with
                                            cutting-edge technology!
                                        </p>
                                        <div className="blog-btn">
                                            <Link
                                                href="#"
                                                className="read-more"
                                            >
                                                <i className="bi bi-arrow-right-short"></i>{" "}
                                                Read More
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default BlogHome;
