import React from 'react';
import PropTypes from 'prop-types';
import { Visibility, Edit, Subject, CloudQueue} from '@material-ui/icons';
import './card.css';
const CardTitle = ({ title, description, comments, watch }) => {
    return (
        <div className='title-container'>
            <div className='title-container-item'>
                <span>{ title } </span>
                <span className='icon'><Edit/></span>
            </div>
            <div className='title-container-icons'>
                { watch ?<span> <Visibility/> </span>: null }
                { description ? <span> <Subject/> </span> : null }
                { comments.length ? (
                    <span>
                        <CloudQueue/>
                        <strong>
                            { comments.length }
                        </strong>
                    </span> ): null }
            </div>
        </div>

    )
};
CardTitle.propTypes = {
    title:PropTypes.string.isRequired,
    description:PropTypes.string,
    comments:PropTypes.array,
    watch:PropTypes.bool,
};
export  default CardTitle;
