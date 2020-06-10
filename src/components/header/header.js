import React from 'react';
import  {
    Apps,
    Home,
    Dashboard,
    Add,
    ErrorOutline,
    NotificationsNone

} from '@material-ui/icons/';
import  './header.css';
const Header  = () => {
    return (
        <div className="header-container">
            <div className="start">
                <span><Apps/></span>
                <span><Home/></span>
                <span className='two-items'><Dashboard/> <strong>Board</strong></span>
            </div>
            <div className="middle">
                <span className='two-items disabled'><Dashboard/> <strong>Trello</strong></span>
            </div>
            <div className="end">
                <span><Add/></span>
                <span><ErrorOutline/></span>
                <span><NotificationsNone/></span>
                <span className="user">AK</span>
            </div>
        </div>
    )
};
export default Header;