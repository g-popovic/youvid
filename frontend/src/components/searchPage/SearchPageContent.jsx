import React from 'react';
import VideoSearchResult from './VideoSearchResult';

export default function SearchPage() {
	return (
		<>
			<div className='search-container mb-5'>
				<div className='input-group'>
					<input
						type='text'
						className='form-control'
						placeholder='Search'
						aria-label='Search'
						aria-describedby='button-addon2'
					/>
					<button
						className='btn btn-outline-secondary'
						type='button'
						id='button-addon2'>
						Search
					</button>
				</div>

				<div className='search-filters-container'>
					<select
						className='form-select search-filter'
						aria-label='Sort By'>
						<option value='1'>Upload Date</option>
						<option value='2'>View Count</option>
						<option value='3'>Best Rating</option>
					</select>
					<select
						className='form-select search-filter'
						aria-label='Sort By'>
						<option value='1'>Last 24 hours</option>
						<option value='3'>Last week</option>
						<option value='2'>Last month</option>
						<option value='4'>Last year</option>
					</select>
				</div>
			</div>

			<ul>
				<VideoSearchResult />
				<VideoSearchResult test />
				<VideoSearchResult />
			</ul>
		</>
	);
}
