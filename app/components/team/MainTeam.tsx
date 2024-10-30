import { Link } from '@/i18n/routing'
import Image from 'next/image'
import React from 'react'

function MainTeam() {
  return (
    <>
	    <section className="team-area pt-70 pb-100">
	    	<div className="container">
	    		<div className="row">
	    			<div className="col-lg-3 col-md-6">
	    				<div className="single-team-box">
	    					<div className="team-image">
	    						<Image width={306} height={344} src="/img/team/team-1.jpg" alt="team"/>
	    						<div className="team-social-icon">
	    							<Link href="#"><i className="fab fa-facebook-f"></i></Link>
	    							<Link href="#"><i className="fa-brands fa-x-twitter"></i></Link>
	    							<Link href="#"><i className="fab fa-linkedin"></i></Link>
	    						</div>
	    					</div>
	    					<div className="team-info">
	    						<h3>Ava Farrington</h3>
	    						<span>Founder, CEO</span>
	    					</div>
	    				</div>
	    			</div>
	    			<div className="col-lg-3 col-md-6">
	    				<div className="single-team-box">
	    					<div className="team-image">
	    						<Image width={306} height={344} src="/img/team/team-2.jpg" alt="team"/>
	    						<div className="team-social-icon">
	    							<Link href="#"><i className="fab fa-facebook-f"></i></Link>
	    							<Link href="#"><i className="fa-brands fa-x-twitter"></i></Link>
	    							<Link href="#"><i className="fab fa-linkedin"></i></Link>
	    						</div>
	    					</div>
	    					<div className="team-info">
	    						<h3>Kevin Haley</h3>
	    						<span>Co-Founder, CTO</span>
	    					</div>
	    				</div>
	    			</div>
	    			<div className="col-lg-3 col-md-6">
	    				<div className="single-team-box">
	    					<div className="team-image">
	    						<Image width={306} height={344} src="/img/team/team-3.jpg" alt="team"/>
	    						<div className="team-social-icon">
	    							<Link href="#"><i className="fab fa-facebook-f"></i></Link>
	    							<Link href="#"><i className="fa-brands fa-x-twitter"></i></Link>
	    							<Link href="#"><i className="fab fa-linkedin"></i></Link>
	    						</div>
	    					</div>
	    					<div className="team-info">
	    						<h3>Alishia Fulton</h3>
	    						<span>Chief Creative Officer</span>
	    					</div>
	    				</div>
	    			</div>
	    			<div className="col-lg-3 col-md-6">
	    				<div className="single-team-box">
	    					<div className="team-image">
	    						<Image width={306} height={344} src="/img/team/team-4.jpg" alt="team"/>
	    						<div className="team-social-icon">
	    							<Link href="#"><i className="fab fa-facebook-f"></i></Link>
	    							<Link href="#"><i className="fa-brands fa-x-twitter"></i></Link>
	    							<Link href="#"><i className="fab fa-linkedin"></i></Link>
	    						</div>
	    					</div>
	    					<div className="team-info">
	    						<h3>Lucas Martinez</h3>
	    						<span>Creative Director</span>
	    					</div>
	    				</div>
	    			</div>
	    			<div className="col-lg-3 col-md-6">
	    				<div className="single-team-box">
	    					<div className="team-image">
	    						<Image width={306} height={344} src="/img/team/team-5.jpg" alt="team"/>
	    						<div className="team-social-icon">
	    							<Link href="#"><i className="fab fa-facebook-f"></i></Link>
	    							<Link href="#"><i className="fa-brands fa-x-twitter"></i></Link>
	    							<Link href="#"><i className="fab fa-linkedin"></i></Link>
	    						</div>
	    					</div>
	    					<div className="team-info">
	    						<h3>Rosie Johnson</h3>
	    						<span>Founder, CEO</span>
	    					</div>
	    				</div>
	    			</div>
	    			<div className="col-lg-3 col-md-6">
	    				<div className="single-team-box">
	    					<div className="team-image">
	    						<Image width={306} height={344} src="/img/team/team-6.jpg" alt="team"/>
	    						<div className="team-social-icon">
	    							<Link href="#"><i className="fab fa-facebook-f"></i></Link>
	    							<Link href="#"><i className="fa-brands fa-x-twitter"></i></Link>
	    							<Link href="#"><i className="fab fa-linkedin"></i></Link>
	    						</div>
	    					</div>
	    					<div className="team-info">
	    						<h3>Joseph Holt</h3>
	    						<span>Graphic Designer</span>
	    					</div>
	    				</div>
	    			</div>
	    			<div className="col-lg-3 col-md-6">
	    				<div className="single-team-box">
	    					<div className="team-image">
	    						<Image width={306} height={344} src="/img/team/team-7.jpg" alt="team"/>
	    						<div className="team-social-icon">
	    							<Link href="#"><i className="fab fa-facebook-f"></i></Link>
	    							<Link href="#"><i className="fa-brands fa-x-twitter"></i></Link>
	    							<Link href="#"><i className="fab fa-linkedin"></i></Link>
	    						</div>
	    					</div>
	    					<div className="team-info">
	    						<h3>Leticia Carr</h3>
	    						<span>Photographer</span>
	    					</div>
	    				</div>
	    			</div>
	    			<div className="col-lg-3 col-md-6">
	    				<div className="single-team-box">
	    					<div className="team-image">
	    						<Image width={306} height={344} src="/img/team/team-8.jpg" alt="team"/>
	    						<div className="team-social-icon">
	    							<Link href="#"><i className="fab fa-facebook-f"></i></Link>
	    							<Link href="#"><i className="fa-brands fa-x-twitter"></i></Link>
	    							<Link href="#"><i className="fab fa-linkedin"></i></Link>
	    						</div>
	    					</div>
	    					<div className="team-info">
	    						<h3>Mack Diaz</h3>
	    						<span>Managing Partner</span>
	    					</div>
	    				</div>
	    			</div>
	    		</div>
	    	</div>
	    </section>
    </>
  )
}

export default MainTeam