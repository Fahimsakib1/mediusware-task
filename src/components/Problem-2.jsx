import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import './Problem-2.css';
import BangladeshFlag from '../images/Bangladesh.jpg';
import USAFlag from '../images/USA.png';
import { Link, NavLink } from 'react-router-dom';




const Problem2 = () => {







    const [allContacts, setAllContacts] = useState([])
    const handleAllContactsClick = () => {
        setModalShow(true);
        setModalShow1(false);
        setModalShowC(false);
        fetch('https://contact.mediusware.com/api/contacts/')
            .then(res => res.json())
            .then(data => setAllContacts(data.results))
        setChecked(false);
    }



    const [USContacts, setUSContacts] = useState([])
    const handleUSContactsClick = () => {
        setModalShow1(true);
        setModalShow(false);
        setModalShowC(false);
        fetch('https://contact.mediusware.com/api/country-contacts/United States/')
            .then(res => res.json())
            .then(data => setUSContacts(data.results))
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



    const [modalCData, setModalCData] = useState(null)
    const handleOpenModalC = (data) => {
        console.log("Data: ", data);
        setModalCData(data);
        // setModalShow(false);
        // setModalShow1(false)
        setModalShowC(true);
    }











    const [modalShow, setModalShow] = useState(false);
    const [modalShow1, setModalShow1] = useState(false);
    const [modalShowC, setModalShowC] = useState(false);
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
                                        <div onClick={() => handleOpenModalC(data)} className='d-flex  gap-3 bg-color-on-hover' key={index}>

                                            {
                                                data?.country.name === 'United States'
                                                    ?
                                                    <>
                                                        <p className=''>⦿ <span className={`fw-bold `}>Country:</span> <span className={`fw-bold text-primary`}>{data?.country.name}</span></p>
                                                        <p>⦿ <span className='fw-bold'>Phone:</span> <span className={`fw-bold text-primary`}>{data?.phone}</span></p>
                                                    </>
                                                    :
                                                    <>
                                                        {
                                                            data?.country.name === 'Bangladesh' ?
                                                                <>
                                                                    <p className=''>⦿ <span className={`fw-bold `}>Country:</span> <span className={`fw-bold text-success`}>{data?.country.name}</span></p>
                                                                    <p>⦿ <span className='fw-bold'>Phone:</span> <span className={`fw-bold text-success`}>{data?.phone}</span></p>
                                                                </>
                                                                :
                                                                <>
                                                                    <p className=''>⦿ <span className={`fw-bold `}>Country:</span> <span className={`fw-bold text-dark`}>{data?.country.name}</span></p>
                                                                    <p>⦿ <span className='fw-bold'>Phone:</span> <span className={`fw-bold text-dark`}>{data?.phone}</span></p>
                                                                </>
                                                        }
                                                    </>
                                            }

                                        </div>
                                    ))
                                }

                            </>




                    }

                    <div className="d-flex justify-content-center mt-5 gap-3">
                        <button className="btn btn-lg btn-outline-primary" type="button">All Contacts</button>
                        <button className="btn btn-lg btn-outline-success" type="button" onClick={handleUSContactsClick}>US Contacts</button>
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


                    {
                        USContacts?.map((data, index) => (
                            <div onClick={() => handleOpenModalC(data)} className='d-flex  gap-3 bg-color-on-hover' key={index}>
                                <p className=''>⦿ <span className='fw-bold'>Country:</span> <span className='fw-bold text-primary'>{data?.country.name}</span></p>
                                <p>⦿ <span className='fw-bold'>Phone:</span> <span className='fw-bold text-primary'>{data?.phone}</span></p>
                            </div>
                        ))
                    }


                    <div className="d-flex justify-content-center mt-5 gap-3 mb-5">
                        <button className="btn btn-lg btn-outline-primary" type="button" onClick={handleAllContactsClick}>All Contacts</button>
                        <button className="btn btn-lg btn-outline-success" type="button" >US Contacts</button>
                        <button className="btn btn-lg btn-danger" type="button" onClick={props.onHide} >Close</button>
                    </div>
                </Modal.Body>
            </Modal>
        );
    }








    function MyVerticallyCenteredModalC(props) {
        return (
            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        <p >Modal C</p>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div>
                        <p><span className='fw-bold'>Country Name:</span> {modalCData?.country.name}</p>
                        <p><span className='fw-bold'>Country ID:</span> {modalCData?.country.id}</p>
                        <p><span className='fw-bold'>Phone Number:</span> {modalCData?.phone}</p>
                        {
                            modalCData?.country.name === 'Bangladesh' &&
                            <div>
                                <img className='flag-width mx-auto' src={BangladeshFlag} alt="Flag" />
                            </div>
                        }

                        {
                            modalCData?.country.name === 'United States' &&
                            <div>
                                <img className='flag-width mx-auto' src={USAFlag} alt="Flag" />
                            </div>
                        }

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

                        <Link to='/problem-2/modalA'  onClick={handleAllContactsClick}>
                            <button  className="customA" type="button">All Contacts</button>
                        </Link>

                        <Link to='/problem-2/modalB'>
                            <button className="customB" type="button" onClick={handleUSContactsClick}>US Contacts</button>
                        </Link>

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

            <MyVerticallyCenteredModalC
                show={modalShowC}
                onHide={() => setModalShowC(false)}
            />























        </div>
    );
};

export default Problem2;