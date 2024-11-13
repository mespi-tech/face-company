import React from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";

function Feature() {
    return (
        <>
            <section className="feature-section pt-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="feature-single-item">
                                <Image
                                    width={85}
                                    height={85}
                                    src="/img/icon/feature-icon-1.svg"
                                    alt="icon"
                                />
                                <h3>Flexibility & Responsive</h3>
                                <p>
                                    Adapt quickly to change with flexible and
                                    responsive solutions that ensure seamless
                                    performance and meet evolving business needs
                                    effectively.
                                </p>
                                <div className="feature-btn-box">
                                    <Link href="#" className="read-more">
                                        <i className="bi bi-arrow-right-short"></i>{" "}
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="feature-single-item">
                                <Image
                                    width={85}
                                    height={85}
                                    src="/img/icon/feature-icon-2.svg"
                                    alt="icon"
                                />
                                <h3>Dedicated Teams</h3>
                                <p>
                                    Empower your projects with skilled, focused
                                    teams committed to your success. Our
                                    dedicated teams provide expertise,
                                    flexibility, and seamless collaboration to
                                    drive results and achieve your goals
                                    efficiently!
                                </p>
                                <div className="feature-btn-box">
                                    <Link href="#" className="read-more">
                                        <i className="bi bi-arrow-right-short"></i>{" "}
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="feature-single-item">
                                <Image
                                    width={85}
                                    height={85}
                                    src="/img/icon/feature-icon-3.svg"
                                    alt="icon"
                                />
                                <h3>Focusing on Business</h3>
                                <p>
                                    Stay ahead by prioritizing what matters
                                    most—your business. Let us handle the
                                    technical details while you focus on growth,
                                    innovation, and delivering value to your
                                    customers!
                                </p>
                                <div className="feature-btn-box">
                                    <Link href="#" className="read-more">
                                        <i className="bi bi-arrow-right-short"></i>{" "}
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Feature;
