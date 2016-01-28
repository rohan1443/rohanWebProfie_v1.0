var React = require('react');

var HobbiesContainer = React.createClass({
	render:function(){
		return (
					<div className="row hobbiesContainer">
					<header>Hobbies</header>
					<div className="row">
						<div className="col-md-3">
							<div className="card1">
    								<section>
    									"Your Life doesn't get better by chance, it gets better by Change" - <span>Jim Rohn</span>
    								</section>
							</div>
						</div>
						<div className="col-md-9">
							<div className="card">
									<div>
										<img className="img-responsive" src="assets/images/DSCF3727.JPG" />
									</div>
									<div className="cardOverlay">
										<header>PHOTOGRAPHY</header>
	    								<section className="hidden-xs">
	    									"A moment, an instant, all by ACCIDENT!"
	    								</section>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
						<div className="col-md-6 col-sm-6">
							<div className="card">
									<div>
										<img className="img-responsive" src="assets/images/ride.jpg" />
									</div>
									<div className="cardOverlay">
										<header>Wandering</header>
	    								<section className="hidden-xs">
	    									I Believe - <span>"{"2 > 4"}"</span>
	    								</section>
									</div>
								</div>
						</div>
						<div className="col-md-6 col-sm-6">
							<div className="card">
									<div>
										<img className="img-responsive" src="assets/images/joystick.jpg" />
									</div>
									<div className="cardOverlay">
										<header>Gaming</header>
	    								<section className="hidden-xs">
	    									"Gamers do not die, they RESPAWN"
	    								</section>
									</div>
								</div>
						</div>
						</div>
					</div>
			);
	}
});

module.exports = HobbiesContainer;