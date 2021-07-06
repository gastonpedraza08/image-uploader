import React, { useState } from 'react';

import { copyTextToClipboard } from '../utils/copyClipboard';

import './Card.css';
import Image from '../assets/image.svg';

export default function Card() {

	const [image, setImage] = useState({
		url: '',
		isLoading: false
	});

	const uploadFile = (file) => {
		setImage({
			url: '',
			isLoading: true
		});
		const reader = new FileReader();

		reader.onloadend = function() {
			const url = '/api/upload';
			const data = {
				base64: reader.result,
				extension: 'jpeg'
			}
			const params = {
				method: 'POST',
				body: JSON.stringify(data),
				headers: {
					'Content-Type': 'application/json'
				}
			}

			fetch(url, params)
				.then(response => {
					return response.json();
				})
				.then(result => {
					setTimeout(() => {
						setImage({
							url: result.url,
							isLoading: false
						});
					}, 2000);
				})
				.catch(e => {
					console.log(e)
				})
		}

		reader.readAsDataURL(file);
	}

	const handleChange = e => {
		const file = e.target.files[0];
		uploadFile(file);
	}

	const handleDrop = e => {
		e.preventDefault();
		const file = e.dataTransfer.files[0];
		uploadFile(file);
	}

	const handleFileChange = e => {
		e.preventDefault();
		document.getElementById('file-input').click();
	}

	if (image.isLoading) {
		return (
			<div className="spinner-border m-5" role="status">
				<span className="visually-hidden">Loading...</span>
			</div>
		);
	}


	return (
		<div className="card py-4 px-2" style={{ width: '20rem' }}>
			<div className="card-body">
				{image.url !== '' && !image.isLoading ?
					(
						<h5 className="card-title text-center mb-3">Uploaded Successfully!!!</h5>
					)
					:
					(
						<>
							<h5 className="card-title text-center">Upload Your Image</h5>
							<p className="text-center">File should be Jpeg, Png,...</p>
						</>
					)
				}
				<div className="div-content">
					{image.url !== '' && !image.isLoading ?
						(
							<>
								<img src={image.url} alt="" className="content-with-image" />
								<div className="input-group mb-3 mt-4">
									<input type="text" className="form-control" value={image.url} disabled aria-describedby="button-addon2" />
									<button onClick={() => copyTextToClipboard(image.url)} className="btn btn-outline-secondary" type="button" id="button-addon2">Copy</button>
								</div>
							</>
						)
						:
						(
							<>
								<div className="content">
									<div onDragOver={e => e.preventDefault()} onDrop={handleDrop} className="py-4 px-3 img-content">
										<div className="mt-2 row justify-content-center align-items-center">
											<img src={Image} alt="drag-and-drop" className="w-50" />
											<p className="text-center mt-4 mb-2">Drag &#38; Drop your image here</p>
										</div>
									</div>
								</div>
								<div className="mt-3 mb-1">
									<p className="text-center">Or</p>
								</div>
								<form onSubmit={(e) => e.preventDefault()} className="d-flex justify-content-center" id="form-file">
									<button className="btn btn-primary" onClick={handleFileChange}>Select a file</button>
									<input onChange={handleChange} id="file-input" type="file" style={{ display: 'none' }} />
								</form>
							</>
						)}
				</div>
			</div>
		</div>
	);
}