import React from 'react';
import PropTypes from 'prop-types';
import CardTitle from './edit-card-title';
import CardDescription from './edit-card-description';
import CardComment from './edit-card-comment';
import CardCommentList from './edit-card-comment-list';
import { CropFree, Share } from '@material-ui/icons';
import { editContentTools, buttonSecondColors } from "../../helpers";
import  { MainButton } from "../index";
import '../index.css';

const EditCardModalContent = ({ listTitle, handelModal, card, listId, editCardActions }) => {
    const { cardId, comments, description, title, watch  } = card;
    return (
     <div className='edit-content-container'>
        <CardTitle
            title={title}
            listTitle={listTitle}
            handelModal={handelModal}
            cardId={cardId}
            listId={listId}
            editCardActions={editCardActions}
        />
        <div className='main-action'>
            <div>
                <CardDescription
                    description={description}
                    cardId={cardId}
                    listId={listId}
                    editCardActions={editCardActions}
                />
                <CardComment
                    cardId={cardId}
                    listId={listId}
                    editCardActions={editCardActions}
                    watch={watch}
                />
                <CardCommentList
                    comments={comments}
                />
            </div>
            <div className="edit-content-tools">
                {
                    Object.keys(editContentTools).map( item => (
                        <div className='tools-item-container' key={item}>
                            <h3> { item }</h3>
                            {
                                <div className='tools-item-list'>
                                    {
                                        editContentTools[item].names.map((name, index)=>(
                                            <div className='tools-item' key={name}>
                                                <MainButton bgcolor = { buttonSecondColors.bg } color= { buttonSecondColors.color }>
                                                    <span>{ editContentTools[item].icons[index] }</span>
                                                    <span>{ name }</span>
                                                </MainButton>
                                            </div>
                                        ))
                                    }
                                </div>
                            }
                        </div>
                    ))
                }
                <div className='tools-item-container'>
                    <div className='tools-item-list'>
                        <div className='tools-item'>
                            <MainButton bgcolor = { buttonSecondColors.bg } color= { buttonSecondColors.color } >
                                <span><CropFree/></span>
                                <span>Archive</span>
                            </MainButton>
                        </div>
                        <div className='tools-item'>
                            <MainButton bgcolor = { buttonSecondColors.bg } color= { buttonSecondColors.color }>
                                <span><Share/></span>
                                <span>Share</span>
                            </MainButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    )
};

EditCardModalContent.propTypes = {
    listId:PropTypes.string.isRequired,
    listTitle:PropTypes.string.isRequired,
    card:PropTypes.array,
    handelModal:PropTypes.func,
    editCardActions:PropTypes.func,
};
export default EditCardModalContent;