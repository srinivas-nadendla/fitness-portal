import React from 'react';
import {Link} from 'react-router-dom';
import './Sidebar.scss';

function Sidebar() {
    return (
        <div className="sidebar box-shadow-card">
            <ul className="sidebar-list">
                <li className="sidebar-list-item">
                    <Link to="/dashboard"><i className="fa fa-th-large"></i>DASHBOARD</Link>
                </li>
                <li className="sidebar-list-item">
                    <Link to="/members"><i className="fa fa-users"></i>MEMBERS</Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;