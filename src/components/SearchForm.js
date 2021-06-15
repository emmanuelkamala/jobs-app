import {Form, Col} from 'react-bootstrap';

function SearchForm({ params, onParamChange }) {
  return (
    <Form className="mb-4">
      <Form.Row className="align-items-end">
        <Form.Group as={Col}>
          <Form.Label>Description</Form.Label>
          <Form.Control 
            onChange={onParamChange} 
            value={params.description} 
            name="description" 
            type="text" 
          />
        </Form.Group>
        <Form.Group as={Col} xs="auto" className="ml-2">
          <Form.Check 
            onChange={onParamChange} 
            value={params.remote} 
            name="remote" 
            id="remote" 
            label="Remote" 
            type="checkbox" 
            className="mb-2" 
          />
        </Form.Group>
      </Form.Row>
    </Form>
  )
}

export default SearchForm;
