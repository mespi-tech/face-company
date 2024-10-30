import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Faq() {
  return (
    <>
    	<section className="faq-section home-faq bg-grey section-padding">
		<div className="container">
			<div className="row">
				<div className="col-lg-6 col-md-12">
					<div className="faq-img">
						<Image width={636} height={477} src="/img/faq.png" alt="images"/>
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
								<Link className="accordion-title active" href="javascript:void(0)"> <i className="fa fa-plus"></i> How long does a website redesign take?</Link>
								<p className="accordion-content show">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat officia deserunt mollit anim laborum</p>
							</li>
							<li className="accordion-item">
								<Link className="accordion-title" href="javascript:void(0)"> <i className="fa fa-plus"></i> What happens if my site breaks?</Link>
								<p className="accordion-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat officia deserunt mollit anim laborum</p>
							</li>
							<li className="accordion-item">
								<Link className="accordion-title" href="javascript:void(0)"> <i className="fa fa-plus"></i> Can you handle ongoing maintenance?</Link>
								<p className="accordion-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat officia deserunt mollit anim laborum</p>
							</li>
							<li className="accordion-item">
								<Link className="accordion-title" href="javascript:void(0)"> <i className="fa fa-plus"></i> Do you only create WordPress websites?</Link>
								<p className="accordion-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat officia deserunt mollit anim laborum</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>
    </>
  )
}

export default Faq