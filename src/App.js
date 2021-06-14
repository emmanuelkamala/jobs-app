import { useState } from 'react';
import FetchJobs from './FetchJobs';
import { Container } from 'react-bootstrap';
import Job from './components/Job';

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error } = FetchJobs(params, page);

  return (
    <Container className="my-4">
      <h1 className="mb-4">Torre Job Search</h1>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error: Failed to load data!</h1>}
      {jobs.map(job => {
        return <Job key={job.id} job={job} />
      })}
    </Container>
  );
}

export default App; 
