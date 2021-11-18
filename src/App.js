import React, { useState } from 'react'
import { Container, Row, Col, Button, Modal } from 'react-bootstrap'

function App() {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <h1>react bootstrap</h1>
            <Button variant="primary">primary</Button>
            <Button variant="secondary">secondary</Button>
            <Button variant="success">success</Button>
            <Button variant="primary" onClick={handleShow}>
              lauch static backdrop modal
            </Button>
          </Col>
        </Row>
      </Container>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>i will not clase id you click outside me</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            close
          </Button>
          <Button variant="primary">understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default App
