import { Link } from "@/i18n/routing";
import Image from "next/image";
import React from "react";

function AboutHome() {
    return (
        <>
            <section className="about-area bg-grey section-padding">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-lg-6 col-md-12">
                            <div className="about-content">
                                <h6 className="sub-title">About Our Company</h6>
                                <h2>
                                    Providing Your Business With A Quality IT
                                    Service is Our Passion
                                </h2>
                                <p>
                                    At <b>MESPI</b>, we are passionate about
                                    transforming ideas into innovative IT
                                    solutions. As a dynamic provider of IT
                                    services, we specialize in delivering
                                    comprehensive technology solutions that
                                    empower businesses to thrive in an
                                    ever-evolving digital landscape.
                                </p>
                                <p>
                                    We are a team of dedicated professionals
                                    with expertise across various domains of
                                    information technology. From startups to
                                    enterprises, we partner with organizations
                                    of all sizes to streamline processes,
                                    enhance productivity, and drive growth. Our
                                    commitment to excellence and innovation sets
                                    us apart as a trusted IT solutions provider.
                                </p>
                                <p>
                                    We envision a world where technology drives
                                    meaningful change, enabling businesses to
                                    innovate and excel. Our goal is to become a
                                    global leader in IT services by fostering
                                    long-term relationships with our clients and
                                    delivering measurable value through
                                    technology.
                                </p>
                                <div className="about-btn-box">
                                    <Link className="default-btn" href="/about">
                                        Learn More <span></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="about-image">
                                <Image
                                    width={636}
                                    height={532}
                                    src="/img/about-2.png"
                                    alt="About image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutHome;
