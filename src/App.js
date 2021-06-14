import { useState } from 'react';
import FetchJobs from './FetchJobs';
import { Container } from 'react-bootstrap';
import Job from './components/Job';
import JobPagination from './components/JobPagination';

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error, hasNextPage } = FetchJobs(params, page);

  return (
    <Container className="my-4">
      <h1 className="mb-4">Torre Job Search</h1>
      <JobPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error: Failed to load data!</h1>}
      {jobs.map(job => {
        return <Job key={job.id} job={job} />
      })}
      <JobPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
    </Container>
  );
}

export default App; 
