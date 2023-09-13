import React, { useState } from 'react';
import getData from '../functions/getData'
import JobCard from './JobCard';

function JobListings({displayedJobIndex, setDisplayedJobIndex, setDisplayedJobDescription}) {
	const [jobs, setJobs] = useState(getData())
	
	// set all the job cards (the highlighting of the job cards will be handled inside the job card)
	var jobList = []
	for (var i = 0; i < jobs.length; i++) {
		console.log(i)
		console.log(jobs[i])
		if (i == 0) {
			jobList.push(<JobCard displayedJobIndex={displayedJobIndex} jobDetails={jobs[i]} setDisplayedJobIndex={setDisplayedJobIndex} setDisplayedJobDescription={setDisplayedJobDescription}></JobCard>)
		} else {
			jobList.push(<JobCard displayedJobIndex={displayedJobIndex} jobDetails={jobs[i]} setDisplayedJobIndex={setDisplayedJobIndex} setDisplayedJobDescription={setDisplayedJobDescription}></JobCard>)
		}
	}

	return (<div>{jobList}</div>)
}

export default JobListings