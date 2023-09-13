import React, { useState } from 'react';
import "../styles/JobDescription.css"

function JobDescription({displayedJobIndex, displayedJobDescription}) {
	return (
	<div className='job-description'>
		<p>The job index is : {displayedJobIndex}</p>
		<p>Description is : {JSON.stringify(displayedJobDescription)}</p>
	</div>)
}

export default JobDescription