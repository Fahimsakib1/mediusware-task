import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import BangladeshFlag from '../images/Bangladesh.jpg';
import USAFlag from '../images/USA.png';
import './Problem-2.css';
import { Link } from 'react-router-dom';





const ModalB = () => {

    const [showModal, setShowModal] = useState(true);
    const handleClose = () => setShowModal(false);



    const [USContacts, setUSContacts] = useState([])
    useEffect(() => {
        fetch('https://contact.mediusware.com/api/country-contacts/United States/')
            .then(res => res.json())
            .then(data => setUSContacts(data.results))
    }, [])


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



    const [modalShowC, setModalShowC] = useState(false);
    const [modalCData, setModalCData] = useState(null)
    const handleOpenModalC = (data) => {
        console.log("Data: ", data);
        setModalCData(data);
        setModalShowC(true);
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
            <h1 className='text-center my-5'>Modal B</h1>


            <Modal size="lg" show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal B</Modal.Title>
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
                        
                        <Link to='/problem-2/modalA'  onClick={handleAllContactsClick}>
                            <button  className="custom-colorANew" type="button">All Contacts</button>
                        </Link>

                        <button className="custom-colorB" type="button" >US Contacts</button>
                        <button className="custom-colorC" type="button" onClick={handleClose} >Close</button>
                    </div>
                </Modal.Body>


            </Modal>



            
            <MyVerticallyCenteredModalC
                show={modalShowC}
                onHide={() => setModalShowC(false)}
            />



        </div>
    );
};

export default ModalB;