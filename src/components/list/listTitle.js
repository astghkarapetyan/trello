import React from 'react';
import PropTypes from 'prop-types';
import MoreVertIcon from '@material-ui/icons/MoreVert';
const ListTitle = ({ title }) => {
    return (
        <div className='list-title-container'>
            <span className='title'>{ title } </span>
            <span className='icon'><MoreVertIcon/></span>
        </div>
    )
};
ListTitle.propTypes = {
    title:PropTypes.string.isRequired
};
export  default ListTitle;
