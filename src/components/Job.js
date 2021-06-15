import { Card, Badge } from 'react-bootstrap';

function Job({ job }) {
  return (
    <Card className="mb-3">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Title>
              {job.objective} - <span className="text-muted font-weight-light">{job.organizations[0].name}</span>
            </Card.Title>
            <Card.Subtitle className="text-muted mb-2">
              Posted on: {new Date(job.created).toLocaleDateString()}
            </Card.Subtitle>
            <Badge variant="secondary" className="mr-2 mb-4">{job.type}</Badge>
            <Badge variant="secondary">{job.locations}</Badge>
          </div>
          <img 
            className="d-none d-md-block" 
            height="70" 
            alt={job.organizations[0].name} 
            src={job.organizations[0].picture} 
          />
        </div>
        <Card.Text className="mr-5">
          {/* <Button 
            onClick={()=> setOpen(prevOpen => !prevOpen)}
            variant="primary">
              { open ? 'Hide Details' : 'More Details'}
          </Button> */}
          <h3>More Details:</h3>{job.skills[0].experience}
        </Card.Text>
        {/* <Collapse in={open}>
          <div className="mt-4">
            <ReactMarkdown source={job.skills.map((skill) => skill.experience.concat(', '))} />
          </div>
        </Collapse>  */}
      </Card.Body>
    </Card>
  )
}

export default Job;
