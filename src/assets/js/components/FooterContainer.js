var React = require('react');

var FooterContainer = React.createClass({
	render:function(){
		return (
				<header>
					<div className="row">
						<div className="col-md-6">
							<div className="footerAddress">
								Email : rohan1443@gmail.com
							</div>
						</div>
						<div className="col-md-6">
							<div className="footerAddress">
								Mobile : +91 9560003643
							</div>
						</div>
					</div>
				</header>
			);
	}
});

module.exports = FooterContainer;