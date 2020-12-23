import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
	return (
		<nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
			<div class='container-fluid'>
				<Link class='navbar-brand' to='/'>
					YouVid
				</Link>
				<button
					class='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<span class='navbar-toggler-icon'></span>
				</button>
				<div class='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul class='navbar-nav me-auto mb-2 mb-lg-0'>
						<li class='nav-item'>
							<Link class='nav-link' aria-current='page' to='/'>
								Search
							</Link>
						</li>
						<li class='nav-item'>
							<Link class='nav-link' to='/upload'>
								Upload
							</Link>
						</li>
						<li class='nav-item'>
							<Link class='nav-link' to='/login'>
								Logout
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
