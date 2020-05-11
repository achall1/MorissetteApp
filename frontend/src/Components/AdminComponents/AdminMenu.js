import React from 'react';
import Header from '../header';
import Footer from '../footer';
import { Nav } from 'react-bootstrap'
import '../../Styles/admin_menu_styles.css'
const AdminMenu = () => {
    return (
        <div style={{textAlign:'center'}}>
            <Header />
                <div>
                    <h1 className="header">Admin Menu</h1>
                </div>
                <div>
                    <ul id="list">
                        <li className="listelem">
                            <Nav.Link className="content" >View All Vehicle Delivery Status</Nav.Link>
                        </li>
                        <li className="listelem">
                            <Nav.Link className="content" href='/update-inventory'>Update Vehicle Inventory</Nav.Link>
                        </li>
                        <li className="listelem">
                            <Nav.Link className="content" >View Customer Trade-In Requests</Nav.Link>
                        </li>
                        <li className="listelem">
                            <Nav.Link className="content" href="/">View Customer Information</Nav.Link>
                        </li>
                        <li className="listelem">
                            <Nav.Link className="content" href="/">View All Financing Requests</Nav.Link>
                        </li>
                    </ul>
                </div>
            <Footer />
        </div>
    )
}

export default AdminMenu