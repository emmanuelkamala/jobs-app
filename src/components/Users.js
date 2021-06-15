import React, { useEffect, useState } from "react";
import { Container, Card, Badge } from 'react-bootstrap';
import axios from "axios";
  
function Users() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .post("https://search.torre.co/people/_search/", {'method': 'POST',
      'headers': {
        'Content-Type': 'application/json'
      }})
      .then(res => setData(res.data.results));
  }, []);

  return (
    <Container>
      <h2 className="mt-3">Torre Users</h2>
      <ul className="my-4 list-group list-group-flush">
        {data.map(item => (
          <li key={item.username} className="list-group-item">
             <Card className="mb-3">
                <Card.Body>
                  <div className="d-flex justify-content-between">
                    <div className="mr-5">
                      <Card.Title>
                        {item.name}
                      </Card.Title>
                      <Card.Subtitle className="text-muted mb-2">
                        {item.professionalHeadline}
                        Skills: {item.skills.map(skill => skill.name.concat(', '))}
                      </Card.Subtitle>
                      <Badge variant="secondary" className="mr-2 mb-4">{item.remoter}</Badge>
                    </div>
                    <img className="d-none d-md-block" height="100" alt={item.name} src={item.picture} />
                  </div>
                </Card.Body>
              </Card>
          </li>
        ))}
      </ul>
    </Container> 
  )
}

export default Users;
