import React from 'react';

export default function WatchVideoPageContent() {
	return (
		<div className='pb-2'>
			<div className='video-container'>
				<video controls>
					<source
						src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4'
						type='video/mp4'
					/>
					Your browser does not support video playback.
				</video>
			</div>
			<div className='video-header'>
				<h5 className='mt-0 mb-1'>
					This is the video title and its and btw this is actually lit
					fam🔥🚫🧢
				</h5>
				<p>User403</p>
				<br />
				<p className='text-muted ml-5'>402 views (3 months ago)</p>
			</div>
		</div>
	);
}
