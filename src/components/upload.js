import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import "./upload.css"
function UploadPage() {
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Title:', title);
    console.log('File:', file);
    // Add your upload logic here
  };

  return (
    <Container className="upload-container d-flex flex-column justify-content-center align-items-center vh-100">
     <h2>Upload Case Files</h2>
      <Form onSubmit={handleSubmit} className="login-form">
        <Form.Group controlId="formTitle">
          <Form.Label >Title</Form.Label>
          <Form.Control className='upload-form-control' type="text" placeholder="Enter title" value={title}  onChange={(e) => setTitle(e.target.value)} />
        </Form.Group>
        <Form.Group controlId="formFile">
          <Form.Label>File</Form.Label>
          <Form.Control type="file"  onChange={(e) => setFile(e.target.files[0])} />
        </Form.Group>
        <Button variant="primary"  type="submit" className='upload-btn'>
          Upload
        </Button>
      </Form>
    </Container>
  );
}

export default UploadPage;
