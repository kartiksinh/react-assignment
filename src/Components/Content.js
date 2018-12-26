import React from 'react';
import '../css/utilities.css';
import '../App.css';

const Content=()=>{
	return(
		<div className="content">
			<div className="flex">
				<div className="sidebar">
					<p>Categories</p>
					<div>
						<label className="container">Advanced Surgical
						  <input type="checkbox" />
						  <span className="checkmark"></span>
						</label>
						<label className="container">Cardiac Rhythm
						  <input type="checkbox" />
						  <span className="checkmark"></span>
						</label>
						<label className="container">Cardiovascular
						  <input type="checkbox" />
						  <span className="checkmark"></span>
						</label>
						<label className="container">Patient Care
						  <input type="checkbox" />
						  <span className="checkmark"></span>
						</label>
					</div>
				</div>
				<div className="product-container">
					<div className="row">
						<div className="col-4">
							<div className="card">
								<img src="./img/1.jpg" alt="first" className="fluid block"></img>
								<div className="card-content">
									<p className="m0 title">Cool-tip RF Ablation System and Switching Controller</p>
									<div className="price-container">
										<div className="link"><a href="product-page.html">View Details</a></div>
										<div className="price">$123</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-4">
							<div className="card">
								<img src="./img/2.jpg" alt="first" className="fluid block"></img>
								<div className="card-content">
									<p className="m0 title">Cool-tip RF Ablation System and Switching Controller</p>
									<div className="price-container">
										<div className="link"><a href="product-page.html">View Details</a></div>
										<div className="price">$123</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-4">
							<div className="card">
								<img src="./img/3.jpg" alt="first" className="fluid block"></img>
								<div className="card-content">
									<p className="m0 title">Cool-tip RF Ablation System and Switching Controller</p>
									<div className="price-container">
										<div className="link"><a href="product-page.html">View Details</a></div>
										<div className="price">$123</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-4">
							<div className="card">
								<img src="./img/4.jpg" alt="first" className="fluid block"></img>
								<div className="card-content">
									<p className="m0 title">Cool-tip RF Ablation System and Switching Controller</p>
									<div className="price-container">
										<div className="link"><a href="product-page.html">View Details</a></div>
										<div className="price">$123</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-4">
							<div className="card">
								<img src="./img/5.jpg" alt="first" className="fluid block"></img>
								<div className="card-content">
									<p className="m0 title">Cool-tip RF Ablation System and Switching Controller</p>
									<div className="price-container">
										<div className="link"><a href="product-page.html">View Details</a></div>
										<div className="price">$123</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-4">
							<div className="card">
								<img src="./img/6.jpg" alt="first" className="fluid block"></img>
								<div className="card-content">
									<p className="m0 title">Cool-tip RF Ablation System and Switching Controller</p>
									<div className="price-container">
										<div className="link"><a href="product-page.html">View Details</a></div>
										<div className="price">$123</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Content;