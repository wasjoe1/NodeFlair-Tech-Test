import { useState } from 'react';
import './styles/App.css';
import JobListings from './components/JobListings';
import JobDescription from './components/JobDescription';


function App() {
  const [displayedJobIndex, setDisplayedJobIndex] = useState(null)
  const [displayedJobDescription, setDisplayedJobDescription] = useState("")

  return (
    <div className="App">
      
      <div className='nodeflair-ui-container'>
        <JobListings displayedJobIndex={displayedJobIndex} setDisplayedJobIndex={setDisplayedJobIndex} setDisplayedJobDescription={setDisplayedJobDescription}></JobListings>
        <JobDescription displayedJobIndex={displayedJobIndex} displayedJobDescription={displayedJobDescription}></JobDescription>
      </div>
      
    </div>
  );
}

export default App;
