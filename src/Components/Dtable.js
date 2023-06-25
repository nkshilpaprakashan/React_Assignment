import React, { useState } from 'react';
import DataTable from 'react-data-table-component';

const CustomStatusButton = ({ row, onClick }) => {
  const handleButtonClick = () => {
    const updatedRow = { ...row };
    updatedRow.status = updatedRow.status === 'Unpost' ? 'Post' : 'Unpost';
    onClick(updatedRow);
  };

  return (
    <button
      onClick={handleButtonClick}
      style={{ backgroundColor: row.status === 'Unpost' ? 'red' : 'green' }}
    >
      {row.status}
    </button>
  );
};

const App = () => {
  const [data, setData] = useState([
    {
        id: 1,
        receipt: '1231',
        status: 'Unpost',
        date_paid: '01-23-2023',
        grave_site: '01-1001-03.0',
        paid_by: 'Lorraine & Russ Stewart',
        no_of_payment: 2,
        total: 50
    },
    {
        id: 2,
        receipt: '1232',
        status: 'Post',
        date_paid: '01-23-2023',
        grave_site: '01-1001-03.0',
        paid_by: 'Marley Aminof',
        no_of_payment: 2,
        total: 50
    },
    {
        id: 3,
        receipt: '1233',
        status: 'Unpost',
        date_paid: '01-23-2023',
        grave_site: '01-1001-03.0',
        paid_by: 'Emary Dias',
        no_of_payment: 2,
        total: 50
    },
    {
        id: 4,
        receipt: '1234',
        status: 'Post',
        date_paid: '01-23-2023',
        grave_site: '01-1001-03.0',
        paid_by: 'Ziare Levin',
        no_of_payment: 2,
        total: 50
    }, {
        id: 5,
        receipt: '1235',
        status: 'Post',
        date_paid: '01-23-2023',
        grave_site: '01-1001-03.0',
        paid_by: 'Hanna Gaidet',
        no_of_payment: 2,
        total: 50
    }, {
        id: 6,
        receipt: '1236',
        status: 'Unpost',
        date_paid: '01-23-2023',
        grave_site: '01-1001-03.0',
        paid_by: 'Hailey Herwitz',
        no_of_payment: 2,
        total: 50
    }, {
        id: 7,
        receipt: '1237',
        status: 'Post',
        date_paid: '01-23-2023',
        grave_site: '01-1001-03.0',
        paid_by: 'Lorraine & Russ StewartDesirae',
        no_of_payment: 2,
        total: 50
    }, {
        id: 8,
        receipt: '1238',
        status: 'Post',
        date_paid: '01-23-2023',
        grave_site: '01-1001-03.0',
        paid_by: 'Lorraine & Russ Stewart',
        no_of_payment: 2,
        total: 50
    }, {
        id: 9,
        receipt: '1239',
        status: 'Unpost',
        date_paid: '01-23-2023',
        grave_site: '01-1001-03.0',
        paid_by: 'Lorraine & Russ Stewart',
        no_of_payment: 2,
        total: 50
    }, {
        id: 10,
        receipt: '1240',
        status: 'Post',
        date_paid: '01-23-2023',
        grave_site: '01-1001-03.0',
        paid_by: 'Lorraine & Russ Stewart',
        no_of_payment: 2,
        total: 50
    }, {
        id: 11,
        receipt: '1241',
        status: 'Unpost',
        date_paid: '01-23-2023',
        grave_site: '01-1001-03.0',
        paid_by: 'Lorraine & Russ Stewart',
        no_of_payment: 2,
        total: 50
    }, {
        id: 12,
        receipt: '1242',
        status: 'Post',
        date_paid: '01-23-2023',
        grave_site: '01-1001-03.0',
        paid_by: 'Lorraine & Russ Stewart',
        no_of_payment: 2,
        total: 50
    }
  ]);

  const handleStatusChange = (updatedRow) => {
    setData((prevData) => {
      const newData = [...prevData];
      const rowIndex = newData.findIndex((item) => item.name === updatedRow.name);
      newData[rowIndex] = updatedRow;
      return newData;
    });
  };

  const columns = [
    
    {
      name: 'Status',
      cell: (row) => <CustomStatusButton row={row} onClick={handleStatusChange} />,
      sortable: true,
    },
    {
        name: 'Receipt',
        selector: row => row.receipt,
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
  ];

  return (
    <div>
      <h1>Data Table</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default App;
