import React from 'react';
import { Link } from 'react-router-dom';

export default function VideoSearchResult(props) {
	return (
		<div className='card mb-3'>
			<Link to='/watch?id=ass' className='video-link-container'>
				<div className='row g-0'>
					<div className='col-sm-4 video-thumbnail-container'>
						<img
							className='video-thumbnail'
							src={
								props.test
									? 'https://www.wyzowl.com/wp-content/uploads/2019/09/YouTube-thumbnail-size-guide-best-practices-top-examples.png'
									: 'https://www.leskompi.com/wp-content/uploads/2019/07/Cara-Menghapus-Folder-Thumbnail.png'
							}
							alt='Video Thumbnail'
						/>
						<p className='video-length'>23:20</p>
					</div>
					<div className='col-sm-8'>
						<div className='card-body'>
							<h5 className='card-title mb-2'>
								Card title and it should be longer
							</h5>
							<p className='card-text mb-2'>Username403 </p>
							<p className='card-text text-muted'>
								104 Views - 3 Years Ago
							</p>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
}
