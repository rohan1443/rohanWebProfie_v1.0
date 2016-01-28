var React = require('react');

var RadialProgressBar = React.createClass({

	componentDidMount:function(){
		var xap = this.props.dataPerc;
		var id = this.props.length;
		window.randomize = function() {
			$('#'+id).attr('data-progress', xap);
			}
			setTimeout(window.randomize, id*250);
			$('.radial-progress').click(window.randomize);
	},


	render:function(){
		var xap = this.props.dataPerc;
		var id = this.props.length;
		return (	
				<div id={id} className="radial-progress center-block" data-progress="0">
					<div className="circle">
						<div className="mask full">
							<div className="fill"></div>
						</div>
						<div className="mask half">
							<div className="fill"></div>
							<div className="fill fix"></div>
						</div>
						<div className="shadow"></div>
					</div>
					<div className="inset">
						<div className="percentage">
							{xap/10}/10
						</div>
					</div>
				</div>
			);
	}
});

module.exports = RadialProgressBar;