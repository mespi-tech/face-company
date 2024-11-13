import Link from "next/link";
import React from "react";

function InfoContact() {
    return (
        <>
            <section className="contact-info-wrapper bg-grey">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title">
                                <h6 className="sub-title">Find Us</h6>
                                <h2>Contact Info</h2>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="contact-info-content">
                                <h5>Ha Noi</h5>
                                <p>Tây Mỗ, Nam Từ Liêm, Hà Nội.</p>
                                <Link href="#">+84(33)-785-2624</Link>
                                <Link href="#">info@mespitech.com</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="contact-info-content">
                                <h5>Da Nang</h5>
                                <p>update later</p>
                                <Link href="#">------------------------------</Link>
                                <Link href="#">-----------------------------------------</Link>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="contact-info-content">
                                <h5>Ho Chi Minh</h5>
                                <p>update later</p>
                                <Link href="#">------------------------------</Link>
                                <Link href="#">-----------------------------------------</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default InfoContact;
