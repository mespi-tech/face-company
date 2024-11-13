import { Link } from "@mui/material";
import React from "react";

function Hire() {
    return (
        <>
            <section className="hire-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 col-md-12">
                            <div className="hire-content">
                                <h6 className="sub-title">
                                    Want to work with us?
                                </h6>
                                <h2>
                                    Digitally Transform & Grow Your Business
                                </h2>
                                <p>
                                    Embrace the power of technology to
                                    streamline operations, enhance customer
                                    experiences, and drive growth. From
                                    modernizing systems to automating processes,
                                    digital transformation helps your business
                                    stay competitive and scale effectively in a
                                    rapidly evolving market. Start your journey
                                    to success today!
                                </p>
                                <div className="hire-btn">
                                    <Link
                                        className="default-btn"
                                        href="#"
                                    >
                                        Call Now<span></span>
                                    </Link>
                                    <Link
                                        className="default-btn-one"
                                        href="#"
                                    >
                                        Contact Us<span></span>
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

export default Hire;
