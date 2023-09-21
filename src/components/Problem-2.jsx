import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';





const Problem2 = () => {



    const [modalShow, setModalShow] = useState(false);
    const [modalShow1, setModalShow1] = useState(false);

    function MyVerticallyCenteredModal(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <p >Modal A</p>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex justify-content-center gap-3">
                        <button className="btn btn-lg btn-outline-primary" type="button">All Contacts</button>
                        <button className="btn btn-lg btn-outline-success" type="button" onClick={() => setModalShow1(true)}>US Contacts</button>
                        <button className="btn btn-lg btn-danger" type="button" onClick={props.onHide} >Close</button>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    {/* <Button onClick={props.onHide}>Close</Button> */}

                </Modal.Footer>

                <Form className=" px-6 mb-3 float-left">
                    {['checkbox'].map((type) => (
                        <div key={`default-${type}`}>
                            <Form.Check
                                type={type}
                                id={`default-${type}`}
                                label={`default ${type}`}
                            />
                        </div>
                    ))}
                </Form>
            </Modal>
        );
    }







    function MyVerticallyCenteredModal1(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <p >Modal B</p>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex justify-content-center gap-3">
                        <button className="btn btn-lg btn-outline-primary" type="button" onClick={() => setModalShow(true)}>All Contacts</button>
                        <button className="btn btn-lg btn-outline-success" type="button" >US Contacts</button>
                        <button className="btn btn-lg btn-danger" type="button" onClick={props.onHide} >Close</button>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    {/* <Button onClick={props.onHide}>Close</Button> */}
                </Modal.Footer>
            </Modal>
        );
    }






    return (

        <div>
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>

                    <div className="d-flex justify-content-center gap-3">
                        <>
                            <button className="btn btn-lg btn-outline-primary" type="button" onClick={() => setModalShow(true)}>All Contacts</button>

                            <MyVerticallyCenteredModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                        </>

                        <>
                            <button className="btn btn-lg btn-outline-warning" type="button" onClick={() => setModalShow1(true)}>US Contacts</button>

                            <MyVerticallyCenteredModal1
                                show={modalShow1}
                                onHide={() => setModalShow1(false)}
                            />
                        </>
                    </div>

                </div>
            </div>

































        </div>
    );
};

export default Problem2;