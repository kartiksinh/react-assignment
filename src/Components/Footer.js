import React from 'react';
import '../css/utilities.css';
import '../App.css';

const Footer=()=>{
	return(
			<div className="row footer">
				<div className="col-4">
					<div className="left-footer">
						<div className="location">
							<div className="location-icon"><i className="fas fa-map-marker-alt"></i></div>
							<div><p>INDIA</p></div>
						</div>
						<div className="location-button">Change</div>
					</div>
				</div>
				<div className="col-4">
					<div className=" center-footer">
						<div className="social-icon">
							<i className="fab fa-facebook-square"></i>
							<i className="fab fa-instagram"></i>
							<i className="fab fa-twitter-square"></i>
							<i className="fab fa-google-plus"></i>
						</div>
						<div className="footer-text"><p>Privacy policy | Terms | Contact</p></div>
						<div className="footer-text"><p>&copy; Copyright2018</p></div>
					</div>
				</div>
				<div className="col-4 right-footer">
					<div className="footer-text">Powered by</div>
					<div><img className="footer-logo" src="/img/footerLogo.png" alt="Logo"></img></div>
				</div>
			</div>
	);
};

export default Footer;