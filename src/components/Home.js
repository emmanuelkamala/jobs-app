import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Job from './Job';
import JobPagination from './JobPagination';
import FetchJobs from './FetchJobs';
import SearchForm from './SearchForm';

function Home() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { jobs, loading, error, hasNextPage } = FetchJobs(params, page);

  const handleParamChange = e => {
    const param = e.target.name
    const value = e.target.value
    setPage(1)
    setParams(prevParams => {
    return { ...prevParams, [param]: value }
    })
  }

  return (
    <Container className="my-4">
      <h1 className="mb-4">Torre Job Search</h1>
      <SearchForm params={params} onParamChange={handleParamChange} />
      <JobPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error: Failed to load data!</h1>}
      {jobs.map(job => {
        return <Job key={job.id} job={job} />
      })}
      <JobPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
    </Container>
  )
}

export default Home;
