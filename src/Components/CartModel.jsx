import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import foodData from '../mock/foodData';
import Item from './Item';

function CartModel() {
  const [show, setShow] = useState(false);
  


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const getItems = () => {
    return foodData.map((data) => {
      return <Item foodItem={data}/>
    })
  }

    
  return (
    <>
      <Button variant="primary" onClick={handleShow} style={{ float: "right", marginRight: "8px" }}>
        Go to Cart
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ textAlign: "center" }}>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>{getItems()}</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Checkout
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CartModel;