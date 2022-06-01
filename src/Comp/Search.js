import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import Form from 'react-bootstrap/Form'
import StarRating from './StarRating'
function Search ({getKeyword,getRate,rate}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
     
             
           
            
     <Button style={{backgroundColor: '#b42f00', borderColor : '#1d1d1d'}} variant="primary" onClick={handleShow}>
      Search 
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group  onChange={(e)=>getKeyword(e.target.value)} className="mb-3" controlId="exampleForm.ControlInput1">
           
              <Form.Label >Enter Movie Name </Form.Label>
             
              <Form.Control
                type="email"
                placeholder="Enter Movie Name"
               
              />
                  
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Rating</Form.Label>
              <br />
              <StarRating getRate={getRate}  getKeyword={getKeyword}/>
             
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
          Search
          </Button>
        </Modal.Footer>
      </Modal>
      </>
  )
  }
  export default  Search