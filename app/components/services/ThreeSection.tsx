import { Link } from "@/i18n/routing";
import Image from "next/image";
import React from "react";

function ThreeSection() {
    return (
        <>
            <section className="services-section-three section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services-three-item">
                                <div className="services-icon">
                                    <Image
                                        width={50}
                                        height={50}
                                        src="/img/icon/services-icon-1.svg"
                                        alt="svg icon"
                                    />
                                </div>
                                <div className="services-three-content">
                                    <h3>Technology Consulting</h3>
                                    <p>
                                        Our experienced consultants can guide
                                        you across a variety of technology
                                        decisions and M&A conversations.
                                    </p>
                                    <ul className="features-list">
                                        <li>
                                            <span>Technical Assessments</span>
                                        </li>
                                        <li>
                                            <span>
                                                Technology Due Diligence
                                            </span>
                                        </li>
                                        <li>
                                            <span>GenAI Consulting</span>
                                        </li>
                                        <li>
                                            <span>Cloud Consulting</span>
                                        </li>
                                        <li>
                                            <span>Mobile App Consulting</span>
                                        </li>
                                    </ul>
                                    <div className="services-btn">
                                        <Link href="#" className="read-more">
                                            <i className="bi bi-arrow-right-short"></i>{" "}
                                            Learn More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services-three-item">
                                <div className="services-icon">
                                    <Image
                                        width={50}
                                        height={50}
                                        src="/img/icon/services-icon-2.svg"
                                        alt="svg icon"
                                    />
                                </div>
                                <div className="services-three-content">
                                    <h3>Cloud Solutions</h3>
                                    <p>
                                        Our experienced cloud architects and
                                        engineers provide expert guidance and
                                        support throughout the entire migration
                                        process.
                                    </p>
                                    <ul className="features-list">
                                        <li>
                                            <span>Assessment & Planning</span>
                                        </li>
                                        <li>
                                            <span>Data Migration</span>
                                        </li>
                                        <li>
                                            <span>Cloud Integration</span>
                                        </li>
                                        <li>
                                            <span>Infrastructure Setup</span>
                                        </li>
                                        <li>
                                            <span>Application Migration</span>
                                        </li>
                                    </ul>
                                    <div className="services-btn">
                                        <Link href="#" className="read-more">
                                            <i className="bi bi-arrow-right-short"></i>{" "}
                                            Learn More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services-three-item">
                                <div className="services-icon">
                                    <Image
                                        width={50}
                                        height={50}
                                        src="/img/icon/services-icon-3.svg"
                                        alt="svg icon"
                                    />
                                </div>
                                <div className="services-three-content">
                                    <h3>Software Engineering</h3>
                                    <p>
                                        We guarantee the highest engineering
                                        quality and transparent communication
                                        throughout your development journey.
                                    </p>
                                    <ul className="features-list">
                                        <li>
                                            <span>Product Roadmapping</span>
                                        </li>
                                        <li>
                                            <span>
                                                Custom Software Product
                                                Development
                                            </span>
                                        </li>
                                        <li>
                                            <span>Mobile App Development</span>
                                        </li>
                                        <li>
                                            <span>QA and Testing</span>
                                        </li>
                                        <li>
                                            <span>Integrations</span>
                                        </li>
                                    </ul>
                                    <div className="services-btn">
                                        <Link href="#" className="read-more">
                                            <i className="bi bi-arrow-right-short"></i>{" "}
                                            Learn More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services-three-item">
                                <div className="services-icon">
                                    <Image
                                        width={50}
                                        height={50}
                                        src="/img/icon/services-icon-4.svg"
                                        alt="svg icon"
                                    />
                                </div>
                                <div className="services-three-content">
                                    <h3>Mobile App Development</h3>
                                    <p>
                                        More and more people are turning to
                                        mobile solutions. Get ahead with MESPI
                                        end-to-end mobile development.
                                    </p>
                                    <ul className="features-list">
                                        <li>
                                            <span>
                                                App Development (iOS and
                                                Android)
                                            </span>
                                        </li>
                                        <li>
                                            <span>Ongoing Maintenance</span>
                                        </li>
                                        <li>
                                            <span>Mobile Consulting</span>
                                        </li>
                                        <li>
                                            <span>AI/ML Implementation</span>
                                        </li>
                                        <li>
                                            <span>Mobile QA & Testing</span>
                                        </li>
                                    </ul>
                                    <div className="services-btn">
                                        <Link href="#" className="read-more">
                                            <i className="bi bi-arrow-right-short"></i>{" "}
                                            Learn More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services-three-item">
                                <div className="services-icon">
                                    <Image
                                        width={50}
                                        height={50}
                                        src="/img/icon/services-icon-5.svg"
                                        alt="svg icon"
                                    />
                                </div>
                                <div className="services-three-content">
                                    <h3>Software Integration Services</h3>
                                    <p>
                                        Our software integration experts tailor
                                        solutions to fit your specific
                                        requirements, ensuring optimal
                                        performance and efficiency.
                                    </p>
                                    <ul className="features-list">
                                        <li>
                                            <span>Application Integration</span>
                                        </li>
                                        <li>
                                            <span>Data Integration</span>
                                        </li>
                                        <li>
                                            <span>Cloud Integration</span>
                                        </li>
                                        <li>
                                            <span>B2B Integration</span>
                                        </li>
                                        <li>
                                            <span>
                                                Legacy System Integration
                                            </span>
                                        </li>
                                    </ul>
                                    <div className="services-btn">
                                        <Link href="#" className="read-more">
                                            <i className="bi bi-arrow-right-short"></i>{" "}
                                            Learn More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services-three-item">
                                <div className="services-icon">
                                    <Image
                                        width={50}
                                        height={50}
                                        src="/img/icon/services-three-icon-6.svg"
                                        alt="svg icon"
                                    />
                                </div>
                                <div className="services-three-content">
                                    <h3>AI & Machine Learning</h3>
                                    <p>
                                        We guarantee the highest engineering
                                        quality and transparent communication
                                        along your entire AI / ML journey.
                                    </p>
                                    <ul className="features-list">
                                        <li>
                                            <span>Custom Models</span>
                                        </li>
                                        <li>
                                            <span>
                                                Image Recognition &
                                                Classification
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                Natural Language Processing
                                            </span>
                                        </li>
                                        <li>
                                            <span>Predictive Maintenance</span>
                                        </li>
                                        <li>
                                            <span>Generative AI</span>
                                        </li>
                                    </ul>
                                    <div className="services-btn">
                                        <Link href="#" className="read-more">
                                            <i className="bi bi-arrow-right-short"></i>{" "}
                                            Learn More
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

export default ThreeSection;
