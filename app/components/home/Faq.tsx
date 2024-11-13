import Image from "next/image";
// import Link from "next/link";
import React from "react";

function Faq() {
    return (
        <>
            <section className="faq-section home-faq bg-grey section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="faq-img">
                                <Image
                                    width={636}
                                    height={477}
                                    src="/img/faq.png"
                                    alt="images"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12">
                            <div className="section-title">
                                <h6 className="sub-title">Faqs</h6>
                                <h2>Short Faqs</h2>
                            </div>
                            <div className="faq-accordion first-faq-box">
                                <ul className="accordion">
                                    <li className="accordion-item">
                                        <h3
                                            className="accordion-title active"
                                            // href="#"
                                        >
                                            {" "}
                                            <i className="fa fa-plus"></i> How
                                            long does a website redesign take?
                                        </h3>
                                        <p className="accordion-content show">
                                            The timeline for a website redesign
                                            typically ranges from 4 to 12 weeks,
                                            depending on the complexity,
                                            features, and feedback cycles.
                                        </p>
                                    </li>
                                    <li className="accordion-item">
                                        <h3
                                            className="accordion-title"
                                            // href="#"
                                        >
                                            {" "}
                                            <i className="fa fa-plus"></i> What
                                            happens if my site breaks?
                                        </h3>
                                        <div className="accordion-content">
                                            <p>
                                                If your site breaks, don’t
                                                worry—we’ve got you covered! We
                                                provide:
                                            </p>
                                            <p>
                                                &bull; Rapid Response: Our team
                                                will quickly identify and fix
                                                the issue.
                                            </p>
                                            <p>
                                                &bull; Support Plans: If
                                                you&apos;re on a maintenance
                                                plan, we&apos;ll handle repairs
                                                at no extra cost.
                                            </p>
                                            <p>
                                                &bull; Emergency Services: For
                                                non-clients, we offer emergency
                                                support to restore your site
                                                promptly.
                                            </p>
                                            <p>
                                                Your website’s stability and
                                                uptime are our priority!
                                            </p>
                                        </div>
                                    </li>
                                    <li className="accordion-item">
                                        <h3
                                            className="accordion-title"
                                            // href="#"
                                        >
                                            {" "}
                                            <i className="fa fa-plus"></i> Can
                                            you handle ongoing maintenance?
                                        </h3>
                                        <div className="accordion-content">
                                            <p>
                                                Absolutely! We offer ongoing
                                                maintenance services to ensure
                                                your website stays updated,
                                                secure, and performs optimally.
                                                Our services include:
                                            </p>
                                            <p>
                                                &bull; Regular updates to
                                                software, plugins, and content.
                                            </p>
                                            <p>
                                                &bull; Security monitoring and
                                                threat prevention.
                                            </p>
                                            <p>
                                                &bull; Performance optimization
                                                and troubleshooting.
                                            </p>
                                            <p>
                                                &bull; Content updates and minor
                                                design tweaks as needed.
                                            </p>
                                            <p>
                                                Let us take care of your website
                                                so you can focus on growing your
                                                business!
                                            </p>
                                        </div>
                                    </li>
                                    <li className="accordion-item">
                                        <h3
                                            className="accordion-title"
                                            // href="#"
                                        >
                                            {" "}
                                            <i className="fa fa-plus"></i> Can
                                            you maintain the old system?
                                        </h3>
                                        <div className="accordion-content">
                                            <p>
                                                Yes, we can maintain and support
                                                your old system! Our services
                                                include:
                                            </p>
                                            <p>
                                                &bull; Debugging and resolving
                                                issues to keep the system
                                                running smoothly.
                                            </p>
                                            <p>
                                                &bull; Security updates to
                                                protect against vulnerabilities.
                                            </p>
                                            <p>
                                                &bull; Performance optimization
                                                to improve efficiency.
                                            </p>
                                            <p>
                                                &bull; Compatibility upgrades to
                                                work with newer technologies if
                                                needed.
                                            </p>
                                            <p>
                                                We ensure your legacy system
                                                remains reliable while you plan
                                                for future upgrades.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Faq;
