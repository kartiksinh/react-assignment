import React from 'react';
import '../css/utilities.css';
import '../App.css';

const Header=()=>{
	return(
		<div className="header">
			<div>
				<img className="header-logo" src="./img/headerLogo.png" alt="Logo"></img>
			</div>
			<div>
				<i className="fas fa-shopping-cart"></i>
				<i className="fas fa-user"></i>
			</div>
		</div>
	);
};

export default Header;