import React from 'react';

export default function VideoSearchResult(props) {
	return (
		<div class='card mb-3'>
			<div class='row g-0'>
				<div class='col-sm-4 video-thumbnail-container'>
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
				<div class='col-sm-8'>
					<div class='card-body'>
						<h5 class='card-title mb-2'>
							Card title and it should be longer
						</h5>
						<p class='card-text mb-2'>Username403 </p>
						<p class='card-text text-muted'>104 Views - 3 Years Ago</p>
					</div>
				</div>
			</div>
		</div>
	);
}
