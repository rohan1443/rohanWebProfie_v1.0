var React = require('react');

var Header = React.createClass({

	scrollFunction: function(){
		$(function(){
			    $('#header_nav').data('size','big');
			});

			$(window).scroll(function(){
			    if($(document).scrollTop() > 10)
			    {
			        if($('#header_nav').data('size') == 'big')
			        {
			            $('#header_nav').data('size','small');
			            $('#header_nav > .leftContent').stop().animate({
			                fontSize:'18px'
			            },600);
			            $('#header_nav').stop().animate({
			                opacity:0.3,
			            },600);
			        }
			    }
			    else
			    {
			        if($('#header_nav').data('size') == 'small')
			        {
			            $('#header_nav').data('size','big');
			            $('#header_nav > .leftContent').stop().animate({
			                fontSize:'42px'
			            },600);
			            $('#header_nav').stop().animate({
			                opacity:1,
			            },600);
			        }  
			    }
			});
	},

	render:function(){
		this.scrollFunction();
		return (
				<header>
					<div id="header_nav" className="row portfolioHeader">
						<div className="col-md-5 col-sm-5 col-xs-12 leftContent center-block">
							Rohan Mazumdar
						</div>
						<div className="col-md-offset-4 col-md-3 col-sm-offset-4 col-sm-3 hidden-xs rightContent">
							Resources used - <span>ReactJs, Less, CSS, Git, Gulp, Bootstrap, Javascript, JQuery, HTML </span>
						</div>
					</div>
				</header>
			);
	}
});

module.exports = Header;