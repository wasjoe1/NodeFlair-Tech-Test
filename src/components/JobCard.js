import React, { useState } from 'react';
import PlaceIcon from '@mui/icons-material/Place';
import StarIcon from '@mui/icons-material/Star';
import '../styles/JobCard.css';

function JobCard({displayedJobIndex, setDisplayedJobIndex, jobDetails, setDisplayedJobDescription}) {
	const jobIndex = jobDetails.job_index
	var highlighted = false

	if (displayedJobIndex == jobIndex) {
		highlighted = true
		setDisplayedJobDescription(jobDetails)
	}

	var skillsArr = []
	for (var i = 0; i < jobDetails.skills.length; i++) {
		skillsArr.push(<div className='skill-container'><p className='skill'>{jobDetails.skills[i]}</p></div>)
	}

	var isHide = false
	if (jobDetails.job_monthly_pay_range == null) {
		isHide = true
	}

	return (
		<div className={'job-card' + (highlighted ? " selected" : "")} jobIndex={jobIndex} onClick={() => setDisplayedJobIndex(jobIndex)}>
			<div className='top-container'>

				<div className='top-left-container'>
					<img className='organisation-picture' src={jobDetails.organisation_img}></img>
				</div>

				<div className='top-middle-container'>
					<div className='top'>
						<p className='organisation-name'>{jobDetails.organisation_name}</p>
						<div className='ratings-container'>
							<p className='ratings'>{jobDetails.organisation_rating} <StarIcon className='star-icon' fontSize="0.9rem"/></p>
						</div>
					</div>

					<div className='mid'>
						<p className='job-title'>{jobDetails.job_title}</p>
					</div>

					<div className='mid'>
						<p className='job-posting-date-time'>{jobDetails.job_posting_date_time} </p>
						<div className='job-location-container'>
							<p className='job-location'><PlaceIcon className='job-location-icon' fontSize="0.9rem"/>{jobDetails.job_country_location}</p>
						</div>
					</div>

					<div className='bottom'>
						<div className={'job-monthly-pay-range-container' + (isHide ? " hide" : "")}>
							<p className='job-monthly-pay-range'>{jobDetails.job_monthly_pay_range} / mth</p>
							<div className='EST-container'>
								<p className='EST'>EST</p>
							</div>
						</div>
					</div>
				</div>

				<div className='top-right-container'>
					<div className='job-type-container'>
						<p className='job-type'>{jobDetails.job_type}</p>
					</div>
				</div>
			</div>
			<hr className='line-break'></hr>
			<div className='bottom-container'>
				{skillsArr}
			</div>
		</div>
	)
}

export default JobCard