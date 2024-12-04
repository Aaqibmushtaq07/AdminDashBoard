/* eslint-disable jsx-a11y/no-static-element-interactions */
import DashboardIcon from '@mui/icons-material/Dashboard';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ColorContext } from '../../ColorContext/darkContext';
import './Sidebar.scss';

function Sidebar() {
    // color state management using react context
    const { darkMode, dispatch } = useContext(ColorContext);

    return (
        <div className="sidebar">
            <div className="logo">
                <Link to="/users" style={{ textDecoration: 'none', fontsize: '100px' }}>
                    <h5 className="text_none">ADMIN-DASHBOARD</h5>
                </Link>
            </div>

            <div className="links">
                <ul>
                    <p className="spann">Main</p>
                    <Link to="/users" style={{ textDecoration: 'none', marginleft: '50px' }}>
                        <li>
                            <DashboardIcon className="icon" /> Users
                        </li>
                    </Link>
                    <Link to="/roles" style={{ textDecoration: 'none' }}>
                        <li>
                            <DashboardIcon className="icon" /> Roles
                        </li>
                    </Link>
                    <Link to="/permission" style={{ textDecoration: 'none' }}>
                        <li>
                            <DashboardIcon className="icon" /> Permission
                        </li>
                    </Link>

                    {/* <p className="spann">lists</p>
                    <Link to="/users" style={{ textDecoration: 'none' }}>
                        <li>
                            <PersonIcon className="icon" /> Users
                        </li>
                    </Link> */}

                    {/* <Link to="/products" style={{ textDecoration: 'none' }}>
                        <li>
                            <TableChartIcon className="icon" /> Products
                        </li>
                    </Link> */}
                    {/* <Link to="/orders" style={{ textDecoration: 'none' }}>
                        <li>
                            <CreditCardIcon className="icon" /> Orders
                        </li>
                    </Link>
                    <li>
                        <CreditCardIcon className="icon" /> Balance
                    </li>
                    <li>
                        <BarChartIcon className="icon" /> Status
                    </li>

                    <p className="spann">Seetings</p>
                    <li>
                        <AccountCircleIcon className="icon" /> Profile
                    </li>
                    <li>
                        <SettingsRoundedIcon className="icon" /> Setting
                    </li>
                    <li>
                        <LogoutIcon className="icon" /> Log Out
                    </li> */}
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
