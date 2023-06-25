import React, {useState} from 'react'
import DataTable from 'react-data-table-component'
import Button from "react-bootstrap/Button"
import {AiOutlinePlus} from 'react-icons/ai'
import {BiFilterAlt} from 'react-icons/bi'
import Swal from 'sweetalert2';
import styled from 'styled-components'
import AddPayment from './AddPayment'
import {Modal, ModalHeader} from 'reactstrap'
import {AiOutlineClose} from 'react-icons/ai'


function Table() {

    const [modal, setModal] = useState(false)

    const CustomButton = styled.button `
    background-color: #5e6570; 
    color: white;
    font-weight: bold;
    border-radius: 9999px;
    padding: 0.5rem 1rem;
    margin: 0.5rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
   
  `;

    const GreenButton = styled.button `
  background-color: #589137; 
  color: white;
  font-weight: bold;
  border-radius: 9999px;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;
    const columns = [
        {
            name: 'Receipt',
            selector: row => row.receipt,
            sortable: true
        },
        {
            name: 'Status',
            cell: (row) => <CustomStatusButton row={row}
                onClick={handleStatusChange}/>,
            sortable: true
        },
        {
            name: 'Date Paid',
            selector: row => row.date_paid,
            sortable: true
        },
        {
            name: 'Grave Site',
            selector: row => row.grave_site,
            sortable: true
        }, {
            name: 'Paid By',
            selector: row => row.paid_by,
            sortable: true

        }, {
            name: 'No. of Payment',
            selector: row => row.no_of_payment,
            sortable: true
        }, {
            name: 'Total',
            selector: row => row.total,
            sortable: true
        }
    ]

    const [data, setData] = useState([
        {
            id: 1,
            receipt: '1231',
            status: 'Unposted',
            date_paid: '01-23-2023',
            grave_site: '01-1001-03.0',
            paid_by: 'Lorraine & Russ Stewart',
            no_of_payment: 2,
            total: 50
        },
        {
            id: 2,
            receipt: '1232',
            status: 'Posted',
            date_paid: '01-23-2023',
            grave_site: '01-1001-04.0',
            paid_by: 'Marley Aminof',
            no_of_payment: 2,
            total: 50
        },
        {
            id: 3,
            receipt: '1233',
            status: 'Unposted',
            date_paid: '01-23-2023',
            grave_site: '01-1001-05.0',
            paid_by: 'Emary Dias',
            no_of_payment: 2,
            total: 50
        },
        {
            id: 4,
            receipt: '1234',
            status: 'Posted',
            date_paid: '01-23-2023',
            grave_site: '01-1001-06.0',
            paid_by: 'Ziare Levin',
            no_of_payment: 2,
            total: 50
        }, {
            id: 5,
            receipt: '1235',
            status: 'Posted',
            date_paid: '01-23-2023',
            grave_site: '01-1001-08.0',
            paid_by: 'Hanna Gaidet',
            no_of_payment: 2,
            total: 50
        }, {
            id: 6,
            receipt: '1236',
            status: 'Unposted',
            date_paid: '01-23-2023',
            grave_site: '01-1001-20.0',
            paid_by: 'Hailey Herwitz',
            no_of_payment: 2,
            total: 50
        }, {
            id: 7,
            receipt: '1237',
            status: 'Posted',
            date_paid: '01-23-2023',
            grave_site: '01-1001-43.0',
            paid_by: 'Lorraine & Russ StewartDesirae',
            no_of_payment: 2,
            total: 50
        }, {
            id: 8,
            receipt: '1238',
            status: 'Posted',
            date_paid: '01-23-2023',
            grave_site: '01-1001-13.0',
            paid_by: 'Lorraine & Russ Stewart',
            no_of_payment: 2,
            total: 50
        }, {
            id: 9,
            receipt: '1239',
            status: 'Unposted',
            date_paid: '01-23-2023',
            grave_site: '01-1001-54.0',
            paid_by: 'Lorraine & Russ Stewart',
            no_of_payment: 2,
            total: 50
        }, {
            id: 10,
            receipt: '1240',
            status: 'Posted',
            date_paid: '01-23-2023',
            grave_site: '01-121-03.0',
            paid_by: 'Lorraine & Russ Stewart',
            no_of_payment: 2,
            total: 50
        }, {
            id: 11,
            receipt: '1241',
            status: 'Unposted',
            date_paid: '01-23-2023',
            grave_site: '01-1321-03.0',
            paid_by: 'Lorraine & Russ Stewart',
            no_of_payment: 2,
            total: 50
        }, {
            id: 12,
            receipt: '1242',
            status: 'Posted',
            date_paid: '01-23-2023',
            grave_site: '01-1001-28.0',
            paid_by: 'Lorraine & Russ Stewart',
            no_of_payment: 2,
            total: 50
        }
    ])


    const [defaultData, setDefaultData] = useState([
        {
            id: 1,
            receipt: '1231',
            status: 'Unposted',
            date_paid: '01-23-2023',
            grave_site: '01-1001-03.0',
            paid_by: 'Lorraine & Russ Stewart',
            no_of_payment: 2,
            total: 50
        },
        {
            id: 2,
            receipt: '1232',
            status: 'Posted',
            date_paid: '01-23-2023',
            grave_site: '01-1001-03.0',
            paid_by: 'Marley Aminof',
            no_of_payment: 2,
            total: 50
        },
        {
            id: 3,
            receipt: '1233',
            status: 'Unposted',
            date_paid: '01-23-2023',
            grave_site: '01-1001-03.0',
            paid_by: 'Emary Dias',
            no_of_payment: 2,
            total: 50
        },
        {
            id: 4,
            receipt: '1234',
            status: 'Posted',
            date_paid: '01-23-2023',
            grave_site: '01-1001-03.0',
            paid_by: 'Ziare Levin',
            no_of_payment: 2,
            total: 50
        }, {
            id: 5,
            receipt: '1235',
            status: 'Posted',
            date_paid: '01-23-2023',
            grave_site: '01-1001-03.0',
            paid_by: 'Hanna Gaidet',
            no_of_payment: 2,
            total: 50
        }, {
            id: 6,
            receipt: '1236',
            status: 'Unposted',
            date_paid: '01-23-2023',
            grave_site: '01-1001-03.0',
            paid_by: 'Hailey Herwitz',
            no_of_payment: 2,
            total: 50
        }, {
            id: 7,
            receipt: '1237',
            status: 'Posted',
            date_paid: '01-23-2023',
            grave_site: '01-1001-03.0',
            paid_by: 'Lorraine & Russ StewartDesirae',
            no_of_payment: 2,
            total: 50
        }, {
            id: 8,
            receipt: '1238',
            status: 'Posted',
            date_paid: '01-23-2023',
            grave_site: '01-1001-08.0',
            paid_by: 'Lorraine & Russ Stewart',
            no_of_payment: 2,
            total: 50
        }, {
            id: 9,
            receipt: '1239',
            status: 'Unposted',
            date_paid: '01-23-2023',
            grave_site: '01-1001-05.0',
            paid_by: 'Lorraine & Russ Stewart',
            no_of_payment: 2,
            total: 50
        }, {
            id: 10,
            receipt: '1240',
            status: 'Posted',
            date_paid: '01-23-2023',
            grave_site: '01-1001-03.0',
            paid_by: 'Lorraine & Russ Stewart',
            no_of_payment: 2,
            total: 50
        }, {
            id: 11,
            receipt: '1241',
            status: 'Unposted',
            date_paid: '01-23-2023',
            grave_site: '01-1001-03.0',
            paid_by: 'Lorraine & Russ Stewart',
            no_of_payment: 2,
            total: 50
        }, {
            id: 12,
            receipt: '1242',
            status: 'Posted',
            date_paid: '01-23-2023',
            grave_site: '01-1001-03.0',
            paid_by: 'Lorraine & Russ Stewart',
            no_of_payment: 2,
            total: 50
        }
    ])


    const CustomStatusButton = ({row, onClick}) => {
        const handleButtonClick = async () => {


            const confirmResult = await Swal.fire({
                title: 'Are you Sure?',
                text: 'Do you want to change the status?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'Yes',
                cancelButtonText: 'No'
            });

            if (confirmResult.isConfirmed) {
                const updatedRow = {
                    ...row
                };
                updatedRow.status = updatedRow.status === 'Unposted' ? 'Posted' : 'Unposted';
                if (updatedRow.status === "Unposted") {

                    setCount(count + 1)
                } else {
                    setCount(count - 1)
                }
                onClick(updatedRow);
            };
        }


        return (
            <Button onClick={handleButtonClick}
                style={
                    {
                        width: '100px',
                        backgroundColor: row.status === 'Unposted' ? 'orange' : 'green'
                    }
            }>
                {
                row.status
            } </Button>
        );
    };

    const handleStatusChange = (updatedRow) => {
        setData((prevData) => {
            const newData = [...prevData];
            const rowIndex = newData.findIndex((item) => item.id === updatedRow.id);
            newData[rowIndex] = updatedRow;
            return newData;
        });

    };


    function handleFilter(event) {
        const newData = data.filter(row => {
            return row.paid_by.toLowerCase().includes(event.target.value.toLowerCase()) || row.receipt.includes(event.target.value) || row.grave_site.includes(event.target.value)
        })
        setData(newData)
        if (event.target.value === "") {
            setData(defaultData)
        }

    }

    const [count, setCount] = useState(5)


    const containerStyle = {
        border: '1px solid black',
        padding: '20px'
    };
    return (
        <>

            <div className="flex flex-col lg:flex-row items-center justify-between">
                <div className="flex items-center">
                    <h1 className="text-left">Payments</h1>
                </div>

                <div className="flex items-center justify-end">
                    <input className="shadow appearance-none border rounded w-64 py-2 px-3 text-black-700 text-lg leading-tight focus:outline-none focus:shadow-outline mr-2" placeholder="Search by Receipt, Grave site, Payor" type="text"
                        onChange={handleFilter}/>
                    <CustomButton className="mr-2">
                        <BiFilterAlt className="mr-1"/>
                        Filter
                    </CustomButton>
                    <Modal size="lg"
                        isOpen={modal}
                        toggle={
                            () => setModal(!modal)
                    }>
                        <AddPayment/>
                        <ModalHeader toggle={
                            () => setModal(!modal)
                        }></ModalHeader>
                    </Modal>
                    <GreenButton onClick={
                        () => setModal(true)
                    }>
                        <AiOutlinePlus className="mr-1"/>
                        Payment
                    </GreenButton>
                </div>
            </div>
            <div className="bg-dark text-white px-3 py-2 rounded d-flex justify-content-between align-items-center">
                <div>{count} Payments have not been posted</div>
                <AiOutlineClose/>
            </div>
            <div className="custom-div"
                style={containerStyle}>

                <div className='container mt-5'>

                    <DataTable columns={columns}
                        data={data}
                        selectableRows
                        fixedHeader
                        pagination></DataTable>

                </div>
            </div>
        </>

    )
}

export default Table
