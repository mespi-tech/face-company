import { Link } from "@/i18n/routing";
import Image from "next/image";
import React from "react";

function Services() {
    return (
        <>
            <section className="services-section-two section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title">
                                <h6 className="sub-title">What We Provide</h6>
                                <h2>Our Services</h2>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services-two-item">
                                <div className="services-icon-box">
                                    <div className="default-icon">
                                        <Image
                                            width={50}
                                            height={50}
                                            src="/img/icon/services-icon-1.svg"
                                            alt="svg icon"
                                        />
                                    </div>
                                    <div className="hover-icon">
                                        <Image
                                            width={50}
                                            height={50}
                                            src="/img/icon/services-icon-hover-1.svg"
                                            alt="svg icon"
                                        />
                                    </div>
                                </div>
                                <div className="services-two-content">
                                    <h3>Technology Consulting</h3>
                                    <p>
                                        Our experienced consultants can guide
                                        you across a variety of technology
                                        decisions and M&A conversations.
                                    </p>
                                    <div className="services-btn">
                                        <Link href="#" className="read-more">
                                            <i className="bi bi-arrow-right-short"></i>{" "}
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services-two-item">
                                <div className="services-icon-box">
                                    <div className="default-icon">
                                        <Image
                                            width={50}
                                            height={50}
                                            src="/img/icon/services-icon-2.svg"
                                            alt="svg icon"
                                        />
                                    </div>
                                    <div className="hover-icon">
                                        <Image
                                            width={50}
                                            height={50}
                                            src="/img/icon/services-icon-hover-2.svg"
                                            alt="svg icon"
                                        />
                                    </div>
                                </div>
                                <div className="services-two-content">
                                    <h3>Cloud Solutions</h3>
                                    <p>
                                        Our experienced cloud architects and
                                        engineers provide expert guidance and
                                        support throughout the entire migration
                                        process.
                                    </p>
                                    <div className="services-btn">
                                        <Link href="#" className="read-more">
                                            <i className="bi bi-arrow-right-short"></i>{" "}
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services-two-item">
                                <div className="services-icon-box">
                                    <div className="default-icon">
                                        <Image
                                            width={50}
                                            height={50}
                                            src="/img/icon/services-icon-3.svg"
                                            alt="svg icon"
                                        />
                                    </div>
                                    <div className="hover-icon">
                                        <Image
                                            width={50}
                                            height={50}
                                            src="/img/icon/services-icon-hover-3.svg"
                                            alt="svg icon"
                                        />
                                    </div>
                                </div>
                                <div className="services-two-content">
                                    <h3>Software Engineering</h3>
                                    <p>
                                        We guarantee the highest engineering
                                        quality and transparent communication
                                        throughout your development journey.
                                    </p>
                                    <div className="services-btn">
                                        <Link href="#" className="read-more">
                                            <i className="bi bi-arrow-right-short"></i>{" "}
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services-two-item">
                                <div className="services-icon-box">
                                    <div className="default-icon">
                                        <Image
                                            width={50}
                                            height={50}
                                            src="/img/icon/services-icon-4.svg"
                                            alt="svg icon"
                                        />
                                    </div>
                                    <div className="hover-icon">
                                        <Image
                                            width={50}
                                            height={50}
                                            src="/img/icon/services-icon-hover-4.svg"
                                            alt="svg icon"
                                        />
                                    </div>
                                </div>
                                <div className="services-two-content">
                                    <h3>Mobile App Development</h3>
                                    <p>
                                        More and more people are turning to
                                        mobile solutions. Get ahead with MESPI
                                        end-to-end mobile development.
                                    </p>
                                    <div className="services-btn">
                                        <Link href="#" className="read-more">
                                            <i className="bi bi-arrow-right-short"></i>{" "}
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services-two-item">
                                <div className="services-icon-box">
                                    <div className="default-icon">
                                        <Image
                                            width={50}
                                            height={50}
                                            src="/img/icon/services-three-icon-5.svg"
                                            alt="svg icon"
                                        />
                                    </div>
                                    <div className="hover-icon">
                                        <Image
                                            width={50}
                                            height={50}
                                            src="/img/icon/services-three-icon-hover-5.svg"
                                            alt="svg icon"
                                        />
                                    </div>
                                </div>
                                <div className="services-two-content">
                                    <h3>Software Integration Services</h3>
                                    <p>
                                        Our software integration experts tailor
                                        solutions to fit your specific
                                        requirements, ensuring optimal
                                        performance and efficiency.
                                    </p>
                                    <div className="services-btn">
                                        <Link href="#" className="read-more">
                                            <i className="bi bi-arrow-right-short"></i>{" "}
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services-two-item">
                                <div className="services-icon-box">
                                    <div className="default-icon">
                                        <Image
                                            width={50}
                                            height={50}
                                            src="/img/icon/services-icon-6.svg"
                                            alt="svg icon"
                                        />
                                    </div>
                                    <div className="hover-icon">
                                        <Image
                                            width={50}
                                            height={50}
                                            src="/img/icon/services-icon-hover-6.svg"
                                            alt="svg icon"
                                        />
                                    </div>
                                </div>
                                <div className="services-two-content">
                                    <h3>AI & Machine Learning</h3>
                                    <p>
                                        We guarantee the highest engineering
                                        quality and transparent communication
                                        along your entire AI / ML journey.
                                    </p>
                                    <div className="services-btn">
                                        <Link href="#" className="read-more">
                                            <i className="bi bi-arrow-right-short"></i>{" "}
                                            Read More
                                        </Link>
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

export default Services;
