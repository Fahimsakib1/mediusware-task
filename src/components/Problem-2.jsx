import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';





const Problem2 = () => {







    const [allContacts, setAllContacts] = useState([])
    const handleAllContactsClick = () => {
        setModalShow(true);
        fetch('https://contact.mediusware.com/api/contacts/')
            .then(res => res.json())
            .then(data => setAllContacts(data.results))
        setChecked(false);
        console.log("Check Value Fetch Function: ", checked);
    }


    const handleUSContactsClick = () => {
        setModalShow1(true)
    }






    const [checked, setChecked] = useState(false);
    const [filterData, setFilterData] = useState([])
    const handleCheckBoxClicked = () => {
        setChecked((prevChecked) => !prevChecked);
        if (checked === true) {
            const newFilter = allContacts?.length > 0 && allContacts.filter(data => data.country.id === 2 || data.country.id === 4 || data.country.id === 6 || data.country.id === 8 || data.country.id === 10 || data.country.id === 12 || data.country.id === 14 || data.country.id === 16 || data.country.id === 18 || data.country.id === 20 || data.country.id === 22 || data.country.id === 24 || data.country.id === 26 || data.country.id === 28 || data.country.id === 30)
            setFilterData(newFilter);
        }
        else {
            // toast.error("Not Checked")
            console.log("Not Checked");
        }
    }














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

                    {
                        checked === true ?
                            <>
                                {
                                    filterData?.map((data, index) => (
                                        <div className='d-flex  gap-3' key={index}>
                                            <p className=''>⦿ <span className='fw-bold'>Country:</span> {data?.country.name}</p>
                                            <p>⦿ <span className='fw-bold'>Phone:</span> {data?.phone}</p>
                                            <p>⦿ <span className='fw-bold'>ID:</span> {data?.country.id}</p>
                                        </div>
                                    ))
                                }
                            </>

                            :
                            <>
                                {
                                    allContacts?.map((data, index) => (
                                        <div className='d-flex  gap-3' key={index}>
                                            <p className=''>⦿ <span className='fw-bold'>Country:</span> {data?.country.name}</p>
                                            <p>⦿ <span className='fw-bold'>Phone:</span> {data?.phone}</p>
                                        </div>
                                    ))
                                }
                            </>

                    }

                    <div className="d-flex justify-content-center mt-5 gap-3">
                        <button className="btn btn-lg btn-outline-primary" type="button">All Contacts</button>
                        <button className="btn btn-lg btn-outline-success" type="button" onClick={() => setModalShow1(true)}>US Contacts</button>
                        <button className="btn btn-lg btn-danger" type="button" onClick={props.onHide} >Close</button>
                    </div>
                </Modal.Body>

                <div className='container'>
                    <div className="row justify-content-center">
                        <div className='col-md-6 mx-auto '>
                            <div className="input-group mt-3 ml-6  mb-5">
                                <div className="border border-success p-2 input-group-text">
                                    <input id="checkbox"
                                        checked={checked}
                                        onChange={handleCheckBoxClicked}
                                        className="form-check-input mt-0 border border-dark p-2"
                                        type="checkbox"
                                        value=""
                                        aria-label="Checkbox for following text input"
                                    />
                                </div>
                                <input type="text" className="form-control border border-success p-2" aria-label="Text input with checkbox" placeholder='Only Even'></input>
                            </div>
                        </div>
                    </div>
                </div>

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
            </Modal>
        );
    }

















    return (

        <div>
            <div className="container">
                <div className="row justify-content-center mt-5">
                    <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>

                    <div className="d-flex justify-content-center gap-3">

                        <button className="btn btn-lg btn-outline-primary" type="button" onClick={handleAllContactsClick}>All Contacts</button>

                        <button className="btn btn-lg btn-outline-warning" type="button" onClick={handleUSContactsClick}>US Contacts</button>

                    </div>

                </div>
            </div>





            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />


            <MyVerticallyCenteredModal1
                show={modalShow1}
                onHide={() => setModalShow1(false)}
            />























        </div>
    );
};

export default Problem2;