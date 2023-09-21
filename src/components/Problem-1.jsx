import React, { useState } from 'react';
import toast from 'react-hot-toast';

const Problem1 = () => {

    const [show, setShow] = useState('all');





    const [arrayInfo, setArrayInfo] = useState([]);
    const [name, setName] = useState('');
    const [status, setStatus] = useState('');

    const [formData, setFormData] = useState({
        name: '',
        status: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };





    const handleProblem1Submit = (event) => {
        event.preventDefault();



        if (formData.name === '' || formData.status === '') {
            return toast.error("You can not submit empty value")
        }

        // console.log('Submitted Data:', formData);
        setArrayInfo([...arrayInfo, formData]);
        setName(formData?.name)
        setStatus(formData?.status);

        setFormData({
            name: '',
            status: '',
        });

    };



    // const handleClick = (val) => {
    //     setShow(val);
    // }



    const [allClick, setAllClick] = useState(true)
    const [activeClick, setActiveClick] = useState(false)
    const [completedClick, setCompletedClick] = useState(false)




    const [all, setAll] = useState([]);
    const [sortData, setSortData] = useState([])
    const handleAllClick = () => {
        setActiveClick(false);
        setCompletedClick(false)
        setAllClick(true)
        console.log("All");
        setAll(arrayInfo);

        const newData = arrayInfo.sort((a, b) => {
            if (a.status === 'Active' && b.status !== 'Active') {
                return -1;
            } else if (a.status !== 'Active' && b.status === 'Active') {
                return 1;
            } else if (a.status === 'Completed' && b.status !== 'Completed') {
                return -1;
            } else if (a.status !== 'Completed' && b.status === 'Completed') {
                return 1;
            } else {
                return 0;
            }
        });
        setSortData(newData)

    }
    // console.log("Array Info Outside: ", all);
    console.log("Sort Data: ", sortData);



    const [active, setActive] = useState([])
    const handleActiveClick = () => {
        setActiveClick(true);
        setAllClick(false);
        setCompletedClick(false)
        const filterActive = arrayInfo?.filter((data) => data.status === 'Active' || data.status === 'active' || data.status === 'ACTIVE');
        console.log("Active: ", filterActive);
        setActive(filterActive)
    }
    // console.log("Active Outside: ", active);



    const [complete, setComplete] = useState([])
    const handleCompletedClick = () => {
        setCompletedClick(true);
        setAllClick(false);
        setActiveClick(false);
        const filterComplete = arrayInfo?.filter((data) => data.status === 'Completed' || data.status === 'completed' || data.status === 'COMPLETED');
        // console.log("Completed : ", filterComplete);
        setComplete(filterComplete)
    }





    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form onSubmit={handleProblem1Submit} className="row gy-2 gx-3 align-items-center mb-4">
                        <div className="col-auto">
                            <input type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="form-control" placeholder="Name" />
                        </div>
                        <div className="col-auto">
                            <input type="text"
                                id="status"
                                name="status"
                                value={formData.status}
                                onChange={handleChange}
                                className="form-control" placeholder="Status" />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button className={`nav-link ${allClick && 'bg-primary text-white'} `} type="button" onClick={handleAllClick}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${activeClick && 'bg-primary text-white'}`} type="button" onClick={handleActiveClick}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${completedClick && 'bg-primary text-white'}`} type="button" onClick={handleCompletedClick}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>






                            {
                                allClick &&
                                <>
                                    {
                                        arrayInfo?.map((data, index) => (
                                            <tr key={index}>
                                                <td>{data.name}</td>
                                                <td>{data.status}</td>
                                            </tr>
                                        ))
                                    }
                                </>
                            }




                            {
                                activeClick &&
                                <>
                                    {
                                        active.length > 0
                                        &&
                                        <>
                                            {
                                                active?.map((data, index) => (
                                                    <tr key={index}>
                                                        <td>{data.name}</td>
                                                        <td>{data.status}</td>
                                                    </tr>
                                                ))
                                            }
                                        </>
                                    }
                                </>
                            }


                            {
                                completedClick &&
                                <>
                                    {
                                        complete.length > 0
                                        &&
                                        <>
                                            {
                                                complete?.map((data, index) => (
                                                    <tr key={index}>
                                                        <td>{data.name}</td>
                                                        <td>{data.status}</td>
                                                    </tr>
                                                ))
                                            }
                                        </>
                                    }
                                </>
                            }















                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;