import React, { useState } from 'react';
import style from './Navbar.module.scss';
import { Link } from 'react-router-dom';
import Search from '../Search/Search';

import {
	Navbar,
	Collapse,
	Nav,
	NavItem,
	NavLink,
	NavbarToggler,
} from 'reactstrap';

const NavBar = () => {
	const [collapsed, setCollapsed] = useState(false);
	const toggleNavbar = () => setCollapsed(!collapsed);
	return (
		<Navbar
			className={`${style.Navbar} justify-content-end`}
			color='light'
			light
			expand='sm'
		>
			<NavbarToggler onClick={toggleNavbar} />
			<Collapse
				className='justify-content-center flex-basis-auto'
				isOpen={collapsed}
				navbar
			>
				<Nav navbar>
					<NavItem>
						<NavLink tag={Link} to='/'>
							Home
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink tag={Link} to='/posts'>
							Posts
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink tag={Link} to='/contact'>
							Contact
						</NavLink>
					</NavItem>
				</Nav>
			</Collapse>
			<Search />
		</Navbar>
	);
};

export default NavBar;
