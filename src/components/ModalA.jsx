import React, { useEffect, useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import BangladeshFlag from '../images/Bangladesh.jpg';
import USAFlag from '../images/USA.png';
import AbkhaziaFlag from '../images/Abkhazia.jpeg';
import './Problem-2.css';
import { Link } from 'react-router-dom';
import { PiArrowFatLinesDownFill } from 'react-icons/pi';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';







const ModalA = () => {




    const [countriesData, setCountriesData] = useState([])
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then((res) => res.json())
            .then((data) => setCountriesData(data));
    }, []);





    const [showModal, setShowModal] = useState(true);
    const handleClose = () => setShowModal(false);



    useEffect(() => {
        setShowModal(true);
    }, []);







    const [allContacts, setAllContacts] = useState([])

    useEffect(() => {
        fetch('https://contact.mediusware.com/api/contacts/?page=1')
            .then(res => res.json())
            .then(data => setAllContacts(data.results))
    }, [])

    const handleAllContactsClick = () => {
        setModalShow(true);
        setModalShow1(false);
        setModalShowC(false);
        fetch('https://contact.mediusware.com/api/contacts/?page=1')
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
            const newFilter = allContacts?.length > 0 && modalAPIData.filter(data => data.country.id === 2 || data.country.id === 4 || data.country.id === 6 || data.country.id === 8 || data.country.id === 10 || data.country.id === 12 || data.country.id === 14 || data.country.id === 16 || data.country.id === 18 || data.country.id === 20 || data.country.id === 22 || data.country.id === 24 || data.country.id === 26 || data.country.id === 28 || data.country.id === 30)
            setFilterData(newFilter);
        }
        else {
            // toast.error("Not Checked")
            console.log("Not Checked");
        }
    }















    const [modalShowC, setModalShowC] = useState(false);
    const [modalCData, setModalCData] = useState(null)
    const [modalCFlagData, setModalCFlagData] = useState(null)















    const handleOpenModalC = (data, newData) => {
        console.log("Data: ", data);
        console.log("New Data: ", newData);
        setModalCData(data);
        setModalShowC(true);
        const filterData = newData.find(item => item?.countryName === data?.country?.name)
        console.log("Sakib: ", filterData);
        setModalCFlagData(filterData);



    }























    function MyVerticallyCenteredModalC(props) {
        return (
            <Modal
                {...props}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton className='modal-bg-header'>
                    <Modal.Title id="contained-modal-title-vcenter" >
                        <p >Modal C</p>
                    </Modal.Title>
                </Modal.Header>


                <Modal.Body className='modal-bg-body'>
                    <div>
                        <p><span className='fw-bold'>Country Name:</span> {modalCData?.country.name}</p>
                        <p><span className='fw-bold'>Country ID:</span> {modalCData?.country.id}</p>
                        <p><span className='fw-bold'>Phone Number:</span> {modalCData?.phone}</p>
                        <div>
                            {
                                modalCData?.country?.name === 'Abkhazia' ?
                                    <>
                                        <img className='flag-width mx-auto' src={AbkhaziaFlag} alt="Abkhazia Flag" />
                                    </>
                                    :
                                    <>
                                        <img className='flag-width mx-auto' src={modalCFlagData?.flagImage} alt={modalCData?.country.name + 'Flag'} />
                                    </>
                            }
                        </div>
                    </div>

                </Modal.Body>

            </Modal>
        );
    }


    const [modalAPIData, setModalAPIData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const handleScrollToBottom = (e) => {
        const modal = e.target;
        if (modal.scrollTop + modal.clientHeight >= modal.scrollHeight) {
            console.log('Reached bottom Modal A');
            loadMoreData();
        }
    };


    const loadMoreData = async () => {
        if (currentPage < 31) {
            try {
                setLoading(true);
                setShowModal(true);
                const response = await fetch(`https://contact.mediusware.com/api/contacts/?page=${currentPage}`);
                const newData = await response.json();
                setModalAPIData((prevData) => [...prevData, ...newData.results]);
                setCurrentPage((prevPage) => prevPage + 1);
            }
            catch (error) {
                console.error('error:', error);
            }
            finally {
                setLoading(false);
            }
        }
    };


    useEffect(() => {
        if (showModal) {
            loadMoreData();
        }
    }, [showModal]);

    const handleModalScroll = (e) => {
        const modal = e.target;
        if (modal.scrollTop + modal.clientHeight >= modal.scrollHeight) {
            console.log('Reached bottom');
            loadMoreData();
        }

    };

    const mappedData = modalAPIData.map((api2Country) => {
        const matchingCountry = countriesData.find((api1Country) =>
            api1Country?.name?.common === api2Country?.country?.name
        );
        if (matchingCountry) {
            return {
                countryName: api2Country?.country?.name,
                flagImage: matchingCountry?.flags?.png,
            };
        }
        return null;
    });








    // Create a Set to keep track of unique country names
    const uniqueCountryNames = new Set();
    const uniqueItems = filterData.filter((item) => {
        if (!uniqueCountryNames.has(item?.country?.name)) {
            uniqueCountryNames.add(item?.country?.name);
            return true;
        }
        return false;
    });












    const modalContentRef = useRef(null);
    const scrollToBottom = () => {
        if (modalContentRef.current) {
            modalContentRef.current.scrollTop = modalContentRef.current.scrollHeight;
        }
    };










    const [searchInput, setSearchInput] = useState('');
    const [searchInputAfterButtonClicked, setSearchInputAfterButtonClicked] = useState('');
    const handleGetSearchInput = (e) => {
        setSearchInput(e.target.value);
    }
    const handleSearch = (e) => {
        console.log("Search Input: ", searchInput);
        setSearchInputAfterButtonClicked(searchInput);
        // setSearchInput('');
    }
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };










    return (
        <div>
            <h1 className='text-center mt-5 mb-5'>Modal A</h1>



            <Modal scrollable={true} size="lg" show={showModal} onHide={() => setShowModal(false)}>

                <Modal.Header closeButton>

                    <Modal.Title>Modal A</Modal.Title>
                    <Modal.Title className='mt-3 ms-2'>
                        <PiArrowFatLinesDownFill
                            size={45}
                            className='pulse-animation text-primary icon-class'
                            title='Go To Bottom'
                            onClick={scrollToBottom}
                            data-mdb-toggle="animation"
                            data-mdb-animation-reset="true"
                            data-mdb-animation="slide-out-right"
                        >
                        </PiArrowFatLinesDownFill>
                    </Modal.Title>

                    <InputGroup className="mb-3 w-50 mx-auto">
                        <Form.Control
                            value={searchInput}
                            onChange={handleGetSearchInput}
                            onKeyPress={handleKeyPress}
                            className='border border-secondary'
                            placeholder="Search Here"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <Button onClick={handleSearch} className='px-3' variant="primary" id="button-addon2">
                            Search
                        </Button>
                    </InputGroup>

                </Modal.Header>


                <Modal.Body ref={modalContentRef} onScroll={handleScrollToBottom}>

                    {
                        checked === true ?
                            <>
                                {
                                    uniqueItems?.map((data, index) => (
                                        <div onClick={() => handleOpenModalC(data, mappedData)} className='d-flex  gap-3 bg-color-on-hover' key={index}>
                                            <p className=''>⦿ <span className={`fw-bold `}>Country:</span> <span className={`fw-bold text-primary`}>{data?.country.name}</span></p>
                                            <p>⦿ <span className='fw-bold'>Phone:</span> <span className={`fw-bold text-primary`}>{data?.phone}</span></p>
                                            <p>⦿ <span className='fw-bold'>ID:</span> <span className={`fw-bold text-primary`}>{data?.country.id}</span></p>
                                        </div>
                                    ))
                                }
                            </>

                            :
                            <>


                                {
                                    searchInputAfterButtonClicked?.length > 0
                                    &&
                                    <>
                                        {
                                            modalAPIData.filter((data) => {
                                                return searchInputAfterButtonClicked.toLowerCase() === ''
                                                    ?
                                                    data
                                                    :
                                                    data?.country?.name.includes(searchInputAfterButtonClicked) || data?.country?.name.toLowerCase().includes(searchInputAfterButtonClicked) || data?.country?.name.toUpperCase().includes(searchInputAfterButtonClicked) || data?.phone.includes(searchInputAfterButtonClicked) || data?.phone.toLowerCase().includes(searchInputAfterButtonClicked) || data?.phone.toUpperCase().includes(searchInputAfterButtonClicked)
                                            }).map((data, index) => (
                                                <div onClick={() => handleOpenModalC(data, mappedData)} className='d-flex  gap-3 bg-color-on-hover' key={index}>
                                                    <p className=''>⦿ <span className={`fw-bold `}>Country:</span> <span className={`fw-bold`}>{data?.country.name}</span></p>
                                                    <p>⦿ <span className='fw-bold'>Phone:</span> <span className={`fw-bold`}>{data?.phone}</span></p>
                                                </div>
                                            ))
                                        }
                                    </>
                                }




                                {
                                    searchInput?.length === 0
                                    &&
                                    <>
                                        {
                                            modalAPIData?.map((data, index) => (
                                                <div onClick={() => handleOpenModalC(data, mappedData)} className='d-flex  gap-3 bg-color-on-hover' key={index}>
                                                    <p className=''>⦿ <span className={`fw-bold `}>Country:</span> <span className={`fw-bold`}>{data?.country.name}</span></p>
                                                    <p>⦿ <span className='fw-bold'>Phone:</span> <span className={`fw-bold`}>{data?.phone}</span></p>
                                                </div>
                                            ))
                                        }
                                    </>
                                }



                                {loading && <div className='text-center text-primary fs-4'>Loading...</div>}

                            </>
                    }


                    <div className="d-flex justify-content-center mt-5 gap-3">
                        <button className="custom-colorA" type="button">All Contacts</button>

                        <Link to='/problem-2/modalB'>
                            <button className="custom-colorBNew" type="button" >US Contacts</button>
                        </Link>

                        <button className="custom-colorC" type="button" onClick={handleClose} >Close</button>
                    </div>



                    <div className="text-start  mt-4 mb-3">
                        <label className='border border-success border-2 rounded-1 px-3 py-1'>
                            <input
                                id="checkbox"
                                checked={checked}
                                onChange={handleCheckBoxClicked}
                                className="mt-1 form-check-input mt-0 border border-2 border-dark p-2"
                                type="checkbox"
                                value=""
                                aria-label="Checkbox for following text input"
                            /> <span className='fw-bold mt-1 ml-2'>Only Even</span>
                        </label>
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

export default ModalA;