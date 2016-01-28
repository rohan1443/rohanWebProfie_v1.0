var React = require('react');
var Carousel = require('react-bootstrap/lib/Carousel');
var CarouselItem = require('react-bootstrap/lib/CarouselItem');

var ProjectContainer = React.createClass({
	render:function(){
		return (
				<div className="row projectContainerBorder">
					<header>
						Projects
					</header>
					<div className="projectContainer">
						<div className="col-md-12">
							<Carousel>
							    <CarouselItem>
							    <div className="row">
							    <div className="col-md-6 col-sm-6 col-xs-12">
									<img className="img-responsive center-block" width={600} height={200} alt="900x500" src="assets/images/Screenshot from 2016-01-18 18:28:12.png"/>
							    </div>
							     <div className="col-md-6 col-sm-6 hidden-xs">
									<img className="img-responsive center-block" width={600} height={200} alt="900x500" src="assets/images/Screenshot from 2016-01-18 18:29:04.png"/>
							    </div>
							   
							    </div>	
							      <div className="carousel-caption hidden-xs">
							        <h3>Dashboard</h3>
							         <p>#RealTimeData #RealTimeGraphs #ProductPerformanceAnalysis #ManualConfiguration</p>
							      </div>
							    </CarouselItem>
							  <CarouselItem>
							    <div className="row">
							    <div className="col-md-6 col-sm-6 col-xs-12">
									<img className="img-responsive center-block" width={600} height={200} alt="900x500" src="assets/images/Screenshot from 2016-01-18 18:30:03.png"/>
							    </div>
							     <div className="col-md-6 col-sm-6 hidden-xs">
									<img className="img-responsive center-block" width={600} height={200} alt="900x500" src="assets/images/Screenshot from 2016-01-18 18:28:27.png"/>
							    </div>
							   
							    </div>	
							      <div className="carousel-caption hidden-xs">
							        <h3>Dashboard</h3>
							         <p>#RealTimeData #RealTimeGraphs #ProductPerformanceAnalysis #ManualConfiguration</p>
							      </div>
							    </CarouselItem>
							  <CarouselItem>
							    <div className="row">
							    <div className="col-md-6 col-sm-6 col-xs-12">
									<img className="img-responsive center-block" width={600} height={200} alt="900x500" src="assets/images/Screenshot from 2016-01-19 00:03:47.png"/>
							    </div>
							     <div className="col-md-6 col-sm-6 hidden-xs">
									<img className="img-responsive center-block" width={600} height={200} alt="900x500" src="assets/images/Screenshot from 2016-01-19 00:04:18.png"/>
							    </div>
							   
							    </div>	
							      <div className="carousel-caption hidden-xs">
							        <h3>Enterprise Websites</h3>
							         <p>#LanLocBased #SharepointTools #CEO-CXO #ManagingUS-EMEA-APAC</p>
							      </div>
							    </CarouselItem>
							    <CarouselItem>
							    <div className="row">
							    <div className="col-md-6 col-sm-6 col-xs-12">
									<img className="img-responsive center-block" width={600} height={200} alt="900x500" src="assets/images/Screenshot from 2016-01-18 18:28:12.png"/>
							    </div>
							     <div className="col-md-6 col-sm-6 hidden-xs">
									<img className="img-responsive center-block" width={600} height={200} alt="900x500" src="assets/images/Screenshot from 2016-01-18 18:29:04.png"/>
							    </div>
							   
							    </div>	
							      <div className="carousel-caption hidden-xs">
							        <h3>Dashboard</h3>
							        <p>#RealTimeData #RealTimeGraphs #ProductPerformanceAnalysis #ManualConfiguration</p>
							      </div>
							    </CarouselItem>
							  </Carousel>

						</div>

					</div>
				</div>
			);
	}
});

module.exports = ProjectContainer;