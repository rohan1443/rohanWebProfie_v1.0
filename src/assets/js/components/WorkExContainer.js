var React = require('react');

var WorkExContainer = React.createClass({

    render: function() { 
        return (
        	<div className="row workExContainer">
                <div className="col-md-12">
                <header>
                    <h2>Work Experience</h2>
                </header>
                    
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="imgContainer center-block">
                                    <img className="img-responsive center-block" src="assets/images/Untitled-1.png" />
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="workContent1">
                                    <header className="center-block">
                                        <h1><span className="orange">Grey</span>Orange Robotics Pte. <span className="exp">- (May 2015 to present)</span></h1>
                                    </header>
                                    <section>
                                    <h4>FrontEnd Developer</h4>
                                       <ul>
                                        <li>A Robotics company building robots for the automation of warehousing functionalities for e-commerce giants and warehousing business houses. </li>
                                        <li>Responsible for building high performance data-driven API based operator panels to be used for the control/operation of the robots</li>
                                        <li>Customization of the operator UI as per different client requirements and requests</li>
                                        <li>Building feature rich manager dashboards providing access to all the live data of their warehouses, performance status of the robots, providing the ability to customize and manage different levels of user authorization through admin access – all via data being fetched from server via an interface either by continuous polling or using web sockets.</li>
                                        <li>Planning and interacting with the server/interface team for server data integration</li>
                                        <li>Refactoring the existing code to make it more modular, scalable and upgradeable to newer and improvised versions of the SPA</li>
                                        </ul>
                                    </section>
                                    <footer>
                                    <span>Projects/Clients :</span> Kerry Logistics, Flipkart, Mahindra, Jabong, Aramax
                                    </footer>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="workContent2">
                                    <header className="center-block">
                                        <h1><span className="blue">HCL Technologies Ltd. </span>(Engineering and R&D Services Division) <span className="exp">- (March 2012 – April 2015)</span></h1>
                                    </header>
                                    <section>
                                    <h4>Lead Engineer</h4>
                                       <ul>
                                        <li>Building-Customization and Content Management (CMS) of web-page templates and updating of existing templates for new Enterprise site creation or maintenance defining the Page Styling Layout and powerful workflow-enabled solutions using HTML, CSS, JavaScript and XML. Also includes updating/editing/addition/deletion of webpage entities like articles, blogs, events, etc depending upon marketer requests</li>
                                        <li>Quality Testing/Peer Review based on Change/Check List which also includes cross-browser and responsive testing and then publishing/deploying to the server via SharePoint.</li>
                                        <li>Have been a member of this Pilot Batch Microsoft Enterprise project team and also a part of the KT transition phase when had to interact with different Marketers, SOP (Service Operation Planners), FPM’s (Field Project Managers) and other responsible Teams from different parts of the world who provided and imparted us the Knowledge to take up this project with utmost perfection and ownership.</li>
                                        <li>Responsible to assist the night shift team of 3-4 people, assigning work request tickets via GSG(Global Service Gateway tool) and getting them delivered within the SLA period, following up with the pending cases of the morning team by contacting the marketers/requestors or clients for missing assets issues or with the ISS/MSCOM/Microsoft team for technical blockers to streamline the workflow, attend conference meetings for training and providing internal project work progress status dealt by us and discussing related issues to get them escalated via proper channels</li>
                                        </ul>
                                    </section>
                                    <footer>
                                    <span>Projects/Clients :</span> Microsoft Corporation – US – Global Delivery
                                    </footer>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="workContent2">
                                    <header className="center-block">
                                        <h1><span className="blue">HCL Technologies Ltd. </span>– IOMC – IT Infrastructure Services Division <span className="exp">- (Nov 2010 – March 2012)</span></h1>
                                    </header>
                                    <section>
                                    <h4>Senior Systems Analyst</h4>
                                       <ul>
                                        <li>Active Directory, Microsoft Outlook, Cisco VPN, SCCM (System Centre Configuration Manager), Network or Server outage reporting, Blackberry services and maintenance, Citrix Client.</li>
                                        </ul>
                                    </section>
                                    <footer>
                                    <span>Projects/Clients :</span> IMS Health (Inter-Continental Medical Services) – UK/USA/APAC - Infrastructure Services 
                                    </footer>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
	         
            </div>
        );
    },
});

module.exports = WorkExContainer;
