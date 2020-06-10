import React from 'react';
import { Mood } from '@material-ui/icons';
const CardCommentList = ({ comments }) => {
    return (
        <div className="card-item comment-list">
            {
                comments.map(comment => (
                    <div key={comment} className='comment-item'>
                        <div className='user-info'>
                            <span className="modal_icon user">AK</span>
                            <strong>Astghik Karapetyan</strong>
                        </div>
                        <div className='comment-body'>{ comment }</div>
                        <div className='comment-control'>
                            <Mood/>  -  <u>Edit</u>  - <u>Delete</u>
                        </div>
                    </div>
                ))
            }
        </div>
    )
};
export default CardCommentList