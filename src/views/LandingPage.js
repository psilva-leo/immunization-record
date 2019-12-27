import React from 'react';
import "../public/css/bootstrap.css"
import "../public/vendors/linericon/style.css"
import "../public/css/font-awesome.min.css"
import "../public/css/magnific-popup.css"
import "../public/vendors/nice-select/css/nice-select.css"
import "../public/vendors/animate-css/animate.css"
import "../public/vendors/flaticon/flaticon.css"
import "../public/css/style.css"
import { Link } from "react-router-dom";


class LandingPage extends React.Component {

  render() {
    return (
			<div>
				<header className="header_area">
					<div class="main_menu">
						<nav class="navbar navbar-expand-lg navbar-light">
							<div class="container">
								{/* <!-- Brand and toggle get grouped for better mobile display --> */}
								<a class="navbar-brand logo_h" href="index.html"><img src={require("../images/shards-dashboards-logo.svg")} alt=""/></a>
								<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
								aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
									<span class="icon-bar"></span>
									<span class="icon-bar"></span>
									<span class="icon-bar"></span>
								</button>
								{/* <!-- Collect the nav links, forms, and other content for toggling --> */}
								<div class="collapse navbar-collapse offset" id="navbarSupportedContent">
									<ul class="nav navbar-nav menu_nav justify-content-center">
										<li class="nav-item active"><a class="nav-link" href="index.html">Home</a></li>
										<li class="nav-item"><a class="nav-link" href="features.html">Features</a></li>
										<li class="nav-item"><a class="nav-link" href="price.html">Pricing</a></li>
										<li class="nav-item submenu dropdown">
											<a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
											aria-expanded="false">Pages</a>
											<ul class="dropdown-menu">
												<li class="nav-item"><a class="nav-link" href="elements.html">Elements</a></li>
											</ul>
										</li>
										<li class="nav-item submenu dropdown">
											<a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
											aria-expanded="false">Blog</a>
											<ul class="dropdown-menu">
												<li class="nav-item"><a class="nav-link" href="blog.html">Blog</a></li>
												<li class="nav-item"><a class="nav-link" href="single-blog.html">Blog Details</a></li>
											</ul>
										</li>
										<li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
									</ul>
									<ul class="nav navbar-nav navbar-right">
										<li class="nav-item"><a href="/login" class="primary_btn text-uppercase">Console</a></li>
									</ul>
								</div>
							</div>
						</nav>
					</div>
				</header>

				<section class="home_banner_area">
					<div class="banner_inner">
						<div class="container">
							<div class="row">
								<div class="col-lg-5">
									<div class="banner_content">
										<h2>
											Mass People <br/>
											Oriented Software
										</h2>
										<p>
											Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
											magna aliqua. Ut enim ad minim.
											sed do eiusmod tempor incididunt.
										</p>
										<div class="d-flex align-items-center">
											<a class="primary_btn" href="#"><span>Get Started</span></a>
											<a id="play-home-video" class="video-play-button" href="https://www.youtube.com/watch?time_continue=2&v=J9YzcEe29d0">
												<span></span>
											</a>
											<div class="watch_video text-uppercase">
												watch the video
											</div>
										</div>
									</div>
								</div>
								<div class="col-lg-7">
									<div class="home_right_img">
										<img class="img-fluid" src={require("../images/landing-page/banner/home-right.png")} alt=""/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section class="section_gap features_area">
					<div class="container">
						<div class="row justify-content-center">
							<div class="col-lg-8 text-center">
								<div class="main_title">
									<p class="top_title">Exclusive Stunning Features</p>
									<h2>A Complete Software Based Website</h2>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
									<a href="#" class="primary_btn"><span>Start Free Trial Now!</span></a>
								</div>
							</div>
						</div>
						<div class="row align-items-center">
							<div class="col-lg-6">
								<div class="left_features">
									<img class="img-fluid" src={require("../images/landing-page/f-img.png")} alt=""/>
								</div>
							</div>
							<div class="col-lg-5 offset-lg-1">
								{/* <!-- single features --> */}
								<div class="single_feature">
									<div class="feature_head">
										<span class="lnr lnr-screen"></span>
										<h4>Stunning Visuals</h4>
									</div>
									<div class="feature_content">
										<p>Here, I focus on a range of items and features that we use in life without giving them a second thought such as Coca Cola.</p>
									</div>
								</div>
								{/* <!-- single features --> */}
								<div class="single_feature">
									<div class="feature_head">
										<span class="lnr lnr-screen"></span>
										<h4>Stunning Visuals</h4>
									</div>
									<div class="feature_content">
										<p>Here, I focus on a range of items and features that we use in life without giving them a second thought such as Coca Cola.</p>
									</div>
								</div>
								{/* <!-- single features --> */}
								<div class="single_feature">
									<div class="feature_head">
										<span class="lnr lnr-screen"></span>
										<h4>Stunning Visuals</h4>
									</div>
									<div class="feature_content">
										<p>Here, I focus on a range of items and features that we use in life without giving them a second thought such as Coca Cola.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section class="recent_update_area">
					<div class="container">
						<div class="recent_update_inner">
							<ul class="nav nav-tabs justify-content-center" id="myTab" role="tablist">
								<li class="nav-item">
									<a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">
										<span class="lnr lnr-screen"></span>
										<h6>Design Trends</h6>
									</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile"
									aria-selected="false">
									<span class="lnr lnr-screen"></span>
									<h6>Development</h6>
									</a>
								</li>
								<li class="nav-item">
									<a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact"
									aria-selected="false">
									<span class="lnr lnr-screen"></span>
									<h6>Delivery</h6>
									</a>
								</li>
							</ul>
							<div class="tab-content" id="myTabContent">
								<div class="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">
									<div class="row recent_update_text align-items-center">
										<div class="col-lg-5">
											<div class="common_style">
												<p class="line">Modern Daesign Trends</p>
												<h3>We Believe that <br /> Inner beauty Lasts Long</h3>
												<p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that as women.</p>
												<a class="primary_btn" href="#"><span>Learn More</span></a>
											</div>
										</div>
										<div class="col-lg-6">
											<div class="chart_img">
												<img class="img-fluid" src={require("../images/landing-page/chart.png")} alt=""/>
											</div>
										</div>
									</div>
								</div>
								<div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
									<div class="row recent_update_text align-items-center">
										<div class="col-lg-5">
											<div class="common_style">
												<p class="line">Modern Daesign Trends</p>
												<h3>We Believe that <br /> Inner beauty Lasts Long</h3>
												<p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that as women.</p>
												<a class="primary_btn" href="#"><span>Learn More</span></a>
											</div>
										</div>
										<div class="col-lg-6">
											<div class="chart_img">
												<img class="img-fluid" src={require("../images/landing-page/chart.png")} alt=""/>
											</div>
										</div>
									</div>
								</div>
								<div class="tab-pane fade show active" id="contact" role="tabpanel" aria-labelledby="contact-tab">
									<div class="row recent_update_text align-items-center">
										<div class="col-lg-5">
											<div class="common_style">
												<p class="line">Modern Daesign Trends</p>
												<h3>We Believe that <br /> Inner beauty Lasts Long</h3>
												<p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that as women.</p>
												<a class="primary_btn" href="#"><span>Learn More</span></a>
											</div>
										</div>
										<div class="col-lg-6 text-right">
											<div class="chart_img">
												<img class="img-fluid" src={require("../images/landing-page/chart.png")} alt=""/>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				
				<section class="section_gap big_features">
					<div class="container">
						<div class="row justify-content-center">
							<div class="col-lg-8 text-center">
								<div class="main_title">
									<p class="top_title">Features Specifications</p>
									<h2>Amazing Features That make it Awesome!</h2>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
								</div>
							</div>
						</div>
						<div class="row features_content">
							<div class="col-lg-4 offset-lg-1">
								<div class="big_f_left">
									<img class="img-fluid" src={require("../images/landing-page/f-img1.png")} alt=""/>
								</div>
							</div>
							<div class="col-lg-4 offset-lg-2">
								<div class="common_style">
									<p class="line">Modern Daesign Trends</p>
									<h3>We Believe that <br /> Inner beauty Lasts Long</h3>
									<p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that as women.</p>
									<a class="primary_btn" href="#"><span>Learn More</span></a>
								</div>
							</div>
							<div class="border-line"></div>
							<img class="shape1"src={require("../images/landing-page/shape1.png")} alt=""/>
							<img class="shape2"src={require("../images/landing-page/shape2.png")} alt=""/>
							<img class="shape3"src={require("../images/landing-page/shape1.png")} alt=""/>
						</div>

						<div class="row features_content bottom-features">
							<div class="col-lg-5">
								<div class="common_style">
									<p class="line">Modern Daesign Trends</p>
									<h3>We Believe that <br /> Inner beauty Lasts Long</h3>
									<p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that as women.</p>
									<a class="primary_btn" href="#"><span>Learn More</span></a>
								</div>
							</div>
							<div class="col-lg-5 offset-lg-2">
								<div class="big_f_left">
									<img class="img-fluid" src={require("../images/landing-page/f-img2.png")} alt=""/>
								</div>
							</div>
							<div class="border-line"></div>
							<img class="shape1"src={require("../images/landing-page/shape1.png")} alt=""/>
							<img class="shape2"src={require("../images/landing-page/shape2.png")} alt=""/>
							<img class="shape3"src={require("../images/landing-page/shape1.png")} alt=""/>
						</div>
					</div>
				</section>
				
				<section class="price_area section_gap">
					<div class="container">
						<div class="row justify-content-center">
							<div class="col-lg-8 text-center">
								<div class="main_title">
									<p class="top_title">Features Specifications</p>
									<h2>Amazing Features That make it Awesome!</h2>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
								</div>
							</div>
						</div>
						<div class="price_inner row justify-content-center">
							<div class="col-lg-4 col-md-6">
								<div class="price_item">
									<div class="price_head">
										<h4>Real Basic</h4>
									</div>
									<div class="price_body">
										<ul class="list">
											<li><a href="#">2.5 GB Space</a></li>
											<li><a href="#">Secure Online Transfer</a></li>
											<li><a href="#">Unlimited Styles</a></li>
											<li><a href="#">Customer Service</a></li>
										</ul>
									</div>
									<div class="price_footer">
										<h3><span class="dlr">$</span> 39</h3>
										<a class="primary_btn" href="#"><span>Get Started</span></a>
									</div>
								</div>
							</div>
							<div class="col-lg-4 col-md-6">
								<div class="price_item">
									<div class="price_head">
										<h4>Real Standard</h4>
									</div>
									<div class="price_body">
										<ul class="list">
											<li><a href="#">10 GB Space</a></li>
											<li><a href="#">Secure Online Transfer</a></li>
											<li><a href="#">Unlimited Styles</a></li>
											<li><a href="#">Customer Service</a></li>
										</ul>
									</div>
									<div class="price_footer">
										<h3><span class="dlr">$</span> 69</h3>
										<a class="primary_btn" href="#"><span>Get Started</span></a>
									</div>
								</div>
							</div>
							<div class="col-lg-4 col-md-6">
								<div class="price_item">
									<div class="price_head">
										<h4>Real Ultimate</h4>
									</div>
									<div class="price_body">
										<ul class="list">
											<li><a href="#">Unlimited Space</a></li>
											<li><a href="#">Secure Online Transfer</a></li>
											<li><a href="#">Unlimited Styles</a></li>
											<li><a href="#">Customer Service</a></li>
										</ul>
									</div>
									<div class="price_footer">
										<h3><span class="dlr">$</span> 99</h3>
										<a class="primary_btn" href="#"><span>Get Started</span></a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<div class="section_gap_top testimonial_area">
					<div class="container">
						<div class="row justify-content-center">
							<div class="col-lg-8 text-center">
								<div class="main_title">
									<p class="top_title">User Feedback</p>
									<h2>What Our Clients Say About Us</h2>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
								</div>
							</div>
						</div>
						<div class="row justify-content-center">
							<div class="col-lg-6 text-center">
								<div class="active_testimonial owl-carousel" data-slider-id="1">
									{/* <!-- single testimonial --> */}
									<div class="single_testimonial">
										<div class="testimonial_head">
											<img src={require("../images/landing-page/quote.png")} alt=""/>
											<h4>Fanny Spencer</h4>
											<div class="review">
												<i class="fa fa-star"></i>
												<i class="fa fa-star"></i>
												<i class="fa fa-star"></i>
												<i class="fa fa-star"></i>
												<i class="fa fa-star"></i>
											</div>
										</div>
										<div class="testimonial_content">
											<p>As conscious traveling Paup ers we must always be oncerned about our dear Mother Earth. If you think about it, you travel across her faceand She is the host to your journey.</p>
										</div>
									</div>

									<div class="single_testimonial">
										<div class="testimonial_head">
											<img src={require("../images/landing-page/quote.png")} alt=""/>
											<h4>Fanny Spencer</h4>
											<div class="review">
												<i class="fa fa-star"></i>
												<i class="fa fa-star"></i>
												<i class="fa fa-star"></i>
												<i class="fa fa-star"></i>
												<i class="fa fa-star"></i>
											</div>
										</div>
										<div class="testimonial_content">
											<p>As conscious traveling Paup ers we must always be oncerned about our dear Mother Earth. If you think about it, you travel across her faceand She is the host to your journey.</p>
										</div>
									</div>

									<div class="single_testimonial">
										<div class="testimonial_head">
											<img src={require("../images/landing-page/quote.png")} alt=""/>
											<h4>Fanny Spencer</h4>
											<div class="review">
												<i class="fa fa-star"></i>
												<i class="fa fa-star"></i>
												<i class="fa fa-star"></i>
												<i class="fa fa-star"></i>
												<i class="fa fa-star"></i>
											</div>
										</div>
										<div class="testimonial_content">
											<p>As conscious traveling Paup ers we must always be oncerned about our dear Mother Earth. If you think about it, you travel across her faceand She is the host to your journey.</p>
										</div>
									</div>

									<div class="single_testimonial">
										<div class="testimonial_head">
											<img src={require("../images/landing-page/quote.png")} alt=""/>
											<h4>Fanny Spencer</h4>
											<div class="review">
												<i class="fa fa-star"></i>
												<i class="fa fa-star"></i>
												<i class="fa fa-star"></i>
												<i class="fa fa-star"></i>
												<i class="fa fa-star"></i>
											</div>
										</div>
										<div class="testimonial_content">
											<p>As conscious traveling Paup ers we must always be oncerned about our dear Mother Earth. If you think about it, you travel across her faceand She is the host to your journey.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				
				
				<section class="impress_area">
					<div class="container">
						<div class="impress_inner">
							<h2>Got Impressed to our features?</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
							<a class="primary_btn" href="#"><span>Request Free Demo</span></a>
						</div>
					</div>
				</section>
				
				<footer class="footer_area">
					<div class="container">
						<div class="row footer_inner">
							<div class="col-lg-5 col-sm-6">
								<aside class="f_widget ab_widget">
									<div class="f_title">
										<h3>About Me</h3>
									</div>
									<p>Do you want to be even more successful? Learn to love learning and growth. The more effort you put into
										improving your skills,</p>
									<p>Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a></p>
								</aside>
							</div>
							<div class="col-lg-5 col-sm-6">
								<aside class="f_widget news_widget">
									<div class="f_title">
										<h3>Newsletter</h3>
									</div>
									<p>Stay updated with our latest trends</p>
									<div id="mc_embed_signup">
										<form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
										method="get" class="subscribe_form relative">
											<div class="input-group d-flex flex-row">
												<input name="EMAIL" placeholder="Enter email address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email Address '"
												required="" type="email"/>
												<button class="btn sub-btn"><span class="lnr lnr-arrow-right"></span></button>
											</div>
											<div class="mt-10 info"></div>
										</form>
									</div>
								</aside>
							</div>
							<div class="col-lg-2">
								<aside class="f_widget social_widget">
									<div class="f_title">
										<h3>Follow Me</h3>
									</div>
									<p>Let us be social</p>
									<ul class="list">
										<li><a href="#"><i class="fa fa-facebook"></i></a></li>
										<li><a href="#"><i class="fa fa-twitter"></i></a></li>
										<li><a href="#"><i class="fa fa-dribbble"></i></a></li>
										<li><a href="#"><i class="fa fa-behance"></i></a></li>
									</ul>
								</aside>
							</div>
						</div>
					</div>
				</footer>

				<script src="js/jquery-3.2.1.min.js"></script>
				<script src="js/popper.js"></script>
				<script src="js/bootstrap.min.js"></script>
				<script src="js/stellar.js"></script>
				<script src="js/jquery.magnific-popup.min.js"></script>
				<script src="vendors/nice-select/js/jquery.nice-select.min.js"></script>
				<script src="vendors/isotope/imagesloaded.pkgd.min.js"></script>
				<script src="vendors/isotope/isotope-min.js"></script>
				<script src="vendors/owl-carousel/owl.carousel.min.js"></script>
				<script src="js/jquery.ajaxchimp.min.js"></script>
				<script src="vendors/counter-up/jquery.waypoints.min.js"></script>
				<script src="vendors/counter-up/jquery.counterup.min.js"></script>
				<script src="js/mail-script.js"></script>

				<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCjCGmQ0Uq4exrzdcL6rvxywDDOvfAu6eE"></script>
				<script src="js/gmaps.min.js"></script>
				<script src="js/theme.js"></script>
			</div>
    );
  }
}

export default LandingPage;