var React = require('react');
var Header = require('./Header.js');
var PresentationContainer = require('./PresentationContainer.js');
var ProjectContainer = require('./ProjectContainer.js');
var HobbiesContainer = require('./HobbiesContainer.js');
var FooterContainer = require('./FooterContainer.js');
var WorkExContainer = require('./WorkExContainer.js');
var HireMe = require('./HireMe.js');
var FooterContainer = require('./FooterContainer.js');


var Portfolio = React.createClass({

    render: function() { 
        return (
        	<div className="">
	            <Header />
	            <PresentationContainer />
                <WorkExContainer />
                <ProjectContainer />
                <HobbiesContainer />
                <HireMe />
                <FooterContainer />
            </div>
        );
    },
});

module.exports = Portfolio;
