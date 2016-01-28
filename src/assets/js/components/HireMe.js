var React = require('react');

var HireMe = React.createClass({
	render:function(){
		return (
			<div className="row socialIconGroup">
				<header>
					Hire Me
				</header>
				<div className="row">
					<div className="imgShield">
						<img className="img-responsive center-block" src="assets/images/12547-NOA6YV.jpg" />
					</div>
				</div>
				<div className="row">
					<div className="col-md-4">
						<div className="socialIcons center-block">
							<a href="https://www.facebook.com/rohan.mazumdar1" target="_blank"><img className="img-responsive" src="assets/images/social-network83.svg" /></a>
						</div>
					</div>
					<div className="col-md-4">
						<div className="socialIcons center-block">
							<a href="https://www.linkedin.com/in/rohan-mazumdar-87bb1615?trk=nav_responsive_tab_profile" target="_blank"><img className="img-responsive" src="assets/images/linkedin.svg" /></a>
						</div>
					</div>
					<div className="col-md-4">
						<div className="socialIcons center-block">
							<a href="mailto:rohan1443@gmail.com.com?Subject=Hello%20Rohan" target="_top"><img className="img-responsive" src="assets/images/mail83.svg" /></a>
						</div>
					</div>
				</div>
			</div>
			);
	}
});

module.exports = HireMe;



