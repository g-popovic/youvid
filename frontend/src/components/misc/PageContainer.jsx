// This serves as a container and router. It's useful because all pages are enclosed in
// the same elements, so it keeps the code DRY

import React from 'react';
import Navbar from '../misc/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchPageContent from '../searchPage/SearchPageContent';
import UploadPage from '../uploadPage/UploadPageContent';
import LoginPage from '../loginPage/LoginPageContent';

export default function SearchPage() {
	return (
		<Router>
			<Navbar />
			<div className='page-container'>
				<Switch>
					<Route path='/' exact component={SearchPageContent} />
					<Route path='/upload' exact component={UploadPage} />
					<Route path='/login' exact component={LoginPage} />
				</Switch>
			</div>
		</Router>
	);
}
