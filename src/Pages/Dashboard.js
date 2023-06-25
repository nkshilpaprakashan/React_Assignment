import React from 'react'
import Table from '../Components/Table'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function Dashboard() {
    return (
        <>
            <Navbar/>
            <div className="m-3">
                <Table/>
            </div>
            <Footer/>
        </>
    )
}

export default Dashboard
