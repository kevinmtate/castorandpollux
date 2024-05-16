import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';
import Shows from './pages/Shows/Shows';
import About from './pages/About/About';
import Releases from './pages/Releases/Releases';
import Footer from './components/Footer/Footer';
import Contact from './pages/Contact/Contact';
import PageNotFound from './pages/PageNotFound/PageNotFound';

import socialLinksJson from './data/social_media_links.json'

export interface SocialLink {
	site: string;
	siteLink: string;
}

const socialLinks: SocialLink[] = socialLinksJson;

const App = () => {
	return (
		<div className="App">

			<BrowserRouter basename={process.env.PUBLIC_URL}>
				<Header socialLinks={socialLinks} />
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/shows' element={<Shows />} />
					<Route path='/about' element={<About />} />
					<Route path='/releases' element={<Releases />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='*' element={<PageNotFound />} />
				</Routes>
				<Footer socialLinks={socialLinks} />
			</BrowserRouter>

		</div>
	);
}

export default App;