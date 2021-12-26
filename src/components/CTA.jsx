import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


// Props:
// label - label of CTA button
// title - title of modal
// prompt - prompt for user
// callback - Callback function to call for call to action
// callbackText - Text label for option to call callback function
function CTA(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => {
        setShow(false);
    }

    const handleShow = () => {
        setShow(true);
    }

    const handleAction = () => {
        setShow(false);
        props.callback()
    }
  
    return (
      <>
        <Button variant="dark" onClick={handleShow}>
          {props.label}
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{props.prompt}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="dark" onClick={handleAction}>
              {props.callbackText}
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default CTA;