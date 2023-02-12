import React, { FunctionComponent } from 'react';
import { Outlet } from "react-router-dom";
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import './root.scss';

const Root: FunctionComponent = () => {
	return (
		<div id="page">
			<Navbar />
			<Outlet />
		</div>
	)
}

export default Root;