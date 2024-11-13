import React from "react";

function Counter() {
    return (
        <>
            <section className="counter-area section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 counter-item">
                            <div className="single-counter">
                                <div className="counter-contents">
                                    <h2>
                                        <span className="counter-number">
                                            2
                                        </span>
                                        <span>+</span>
                                    </h2>
                                    <h3 className="counter-heading">
                                        Years Helping Business
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 counter-item">
                            <div className="single-counter">
                                <div className="counter-contents">
                                    <h2>
                                        <span className="counter-number">
                                            35
                                        </span>
                                        <span>+</span>
                                    </h2>
                                    <h3 className="counter-heading">
                                        Working Employees
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 counter-item">
                            <div className="single-counter">
                                <div className="counter-contents">
                                    <h2>
                                        <span className="counter-number">
                                            150
                                        </span>
                                        <span>+</span>
                                    </h2>
                                    <h3 className="counter-heading">
                                        Complete Projects
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 counter-item">
                            <div className="single-counter">
                                <div className="counter-contents">
                                    <h2>
                                        <span className="counter-number">
                                            25
                                        </span>
                                        <span>+</span>
                                    </h2>
                                    <h3 className="counter-heading">
                                        Happy Customers
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Counter;
