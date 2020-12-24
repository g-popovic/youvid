import React from 'react';

export default function UploadPage() {
	return (
		<>
			<h1 className='text-center mb-5'>Upload Video</h1>
			<div class='input-group mb-3'>
				<input
					type='text'
					class='form-control'
					placeholder='Video Title'
					aria-label='Video Title'
					aria-describedby='basic-addon1'
				/>
			</div>
			<div className='card text-center pb-5 pt-5'>
				<div className='card-body'>
					<h5 className='card-text mb-3' style={{ fontWeight: 400 }}>
						Select a file to upload
					</h5>
					<label className='btn btn-dark' for='fileSelect'>
						Browse Files
					</label>
					<input
						type='file'
						id='fileSelect'
						style={{ width: 0, margin: 0, padding: 0 }}
					/>
				</div>
			</div>
			<button className='btn btn-dark publish-btn' disabled>
				Publish
			</button>
		</>
	);
}
