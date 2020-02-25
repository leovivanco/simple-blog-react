import React from 'react';
import { Button } from 'reactstrap';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import PostPage from './pages/PostPage/PostPage';
import ContactPage from './pages/ContactPage/ContactPage';
import SearchPage from './pages/SearchPage/SearchPage';
import Page404 from './pages/Page404/Page404';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<Router>
			<div className='App'>
				<Header />
				<Switch>
					<Route exact path='/'>
						<Button color='danger'>Danger!</Button>
						<HomePage />
					</Route>
					<Route path='/post/:idPost'>
						<PostPage />
					</Route>
					<Route path='/search'>
						<SearchPage />
					</Route>
					<Route path='/contact'>
						<ContactPage />
					</Route>
					<Route path='*'>
						<Page404 />
					</Route>
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}
export default App;
