import React from 'react';
import Card from './components/Card';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function ImageUploaderApp() {
	return (
		<div className="container-fluid">
			<div className="vh-100 vw-100 row align-items-center justify-content-center">
				<Card />
			</div>
		</div>
	);
}