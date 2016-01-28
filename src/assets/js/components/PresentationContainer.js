var React = require('react');
var RadialProgressBar =require('./RadialProgressBar.js');
var PresentationContainer = React.createClass({
	render:function(){

		var data = [
				{HTML:90},
				{CSS:90},
				{JavaScript:80},
				{Sass_Less:82},
				{Mithril_Js:70},
				{React_Js:65}
			];
			
		var radGroup=[];
		radGroup = data.map(function (data,index) {
			length = index+1;
			var keey = Object.keys(data)[0];
			var value =data[keey];
				return(
						<div className="col-md-2 col-sm-4 col-xs-6">
							<div className="row">
								<RadialProgressBar dataPerc={value} length={length} key={index} />
							</div>
							<div className="row">
								{keey}
							</div>
						</div>						 	
					);
		});
		return (

					<div className="row">
						<div className="presentationContainerSize">
							
								<div className="presentationOverlay">
									<div className="row presentationOverlayText">
										<blockquote>
											  <p>"Social change isnt something you should do just to help pad a resume. Follow your passion."</p>
											  <footer>By <cite title="Source Title">Nancy Lublin</cite></footer>
										</blockquote>
									</div>
									<div className="row radialBar">
										{radGroup}
									</div>

									<div className="row presentationOverlayContent">
									<header>Professional Background</header>
										<div className="col-md-12 col-sm-12 content">
												<ul>
													<li><span className=""></span>Hands-on knowledge/concepts of – MVC based Frameworks(Mithril-js, React-js), React+Flux Concepts,  Bootstrap, Material Design Style(MaterializeCSS), HTML, CSS, SCSS/LESS, Amcharts.js/ D3.js concepts, Responsive Design(using media query), JavaScript, JQuery, Loadash, Ajax, Gulp, Bower, NPM, Git (via Gitbash), Bitbucket,  Source Tree(commit/push to repositories), Sublime, Brackets, Adobe Photoshop CC concepts (psd-html conversion), Visual Studio, Incident Management, GSG(Global Service Gateway) ticketing tools, Web Hosting concepts.</li>
													<li><span className=""></span>Ability to build new territories and expand opportunities towards the achievement of stated targets.</li>
												</ul>
										</div>
									</div>
									
								</div>
						</div>
					</div>
			);
	}
});

module.exports = PresentationContainer;