import React, { useState, memo, useMemo } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { Add, Close } from '@material-ui/icons';
import { TextareaAutosize } from '@material-ui/core';
import  { MainButton } from "../common-components";
import { addListAction, addCardAction } from '../../actions';
import './index.css';

const CreateCardOrList = ({
      addList = false,
      listId,
      cardLength,
      listsLength,
      addListAction,
      addCardAction
}) => {
    const [showInput, setShowInput] = useState(false);
    const [title, setTitle] = useState('');
    const openInputField = () => {
        setShowInput(true);
    };
    const closeInputField = () => {
        setShowInput(false);
    };
    const handleAddList = () => {
        if(title){
           addListAction(title);
           setTitle('');
        }
    };
    const handleAddCard = () => {
        if(title){
            addCardAction({listId , title});
            setTitle('');
        }

    };
    const handleTitle = (e) => {
       setTitle(e.target.value);
    };
    const showListOrCard = useMemo(()=> {
        if(addList){
            return listsLength ? 'Add another list' : 'Add a list'
        }
        return cardLength ? 'Add another card' : 'Add a card'
    },[listsLength, cardLength, addList]) ;
    return (
        <div className = 'create-container'>
            {
                showInput ? (
                    <div className= 'create-add-block'>
                        <TextareaAutosize
                            value = { title }
                            onChange = { handleTitle }
                            className= {`${addList ? 'addListTextArea' : 'addCardTextArea'}`}
                            aria-label="textarea"
                            placeholder={`${addList ? 'Enter list title...' : 'Enter title for this card...'}`}
                            style={{ height:`${addList ? '31px' : '50px' }`}}
                        />
                        <div  className= 'crete-control-block'>
                            <div onClick={ addList ? handleAddList : handleAddCard}>
                                <MainButton>
                                    { addList ? 'Add list' : 'Add card' }
                                </MainButton>
                            </div>
                            <Close onClick = { closeInputField } />
                        </div>
                    </div>
                ) : (
                    <div
                        className={`${addList ? 'addList' : 'addCard'} commonStyle `}
                        onClick={ openInputField }
                    >
                        <Add/>
                        <span>
                            { showListOrCard }
                        </span>
                    </div>
                )
            }
        </div>
    )
};
const mapDispatchToProps = dispatch => ({
    addListAction: title => dispatch(addListAction(title)),
    addCardAction: ({ listId, title }) => dispatch(addCardAction({ listId, title })),
});

CreateCardOrList.propTypes = {
    addList:PropTypes.bool,
    listId:PropTypes.string,
    cardLength:PropTypes.number,
    listsLength:PropTypes.number,
    addCardAction:PropTypes.func.isRequired,
    addListAction:PropTypes.func.isRequired,
};
export default connect(null, mapDispatchToProps)(memo(CreateCardOrList));