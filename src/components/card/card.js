import React, { useState } from 'react';
import { connect } from "react-redux";
import { Draggable } from 'react-beautiful-dnd';
import PropTypes from 'prop-types';
import CardTitle from './cardTitle';
import  { Modal, EditCardModalContent } from '../common-components';
import './card.css';
import { editCardActions } from "../../actions";
const Card = ({ cardId, title ,index, comments = [], description, watch, listTitle, listId, editCardActions }) => {
    const [open, setOpen] = useState(false);
    const handelModal = (open) => {
        open ? setOpen(true) : setOpen(false)
    };
    return (
        <Draggable draggableId={String(cardId)} index={index}>
            {provided => (
                <>
                    <div className='card-container'
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                        onClick = { ()=> handelModal(true) }
                    >
                        <CardTitle
                            title = { title }
                            comments={ comments }
                            description = { description }
                            watch={watch}
                        />

                    </div>
                    <Modal handelModal={handelModal} open={open}>
                        { EditCardModalContent({
                            listTitle,
                            handelModal,
                            listId,
                            card: {cardId, title, comments, description, watch },
                            editCardActions })
                        }
                    </Modal>
                </>

            )}
        </Draggable>
    )
};
const mapDispatchToProps = dispatch => ({
    editCardActions: ({ type, data }) => dispatch(editCardActions(type, data)),
});

Card.propTypes = {
    cardId:PropTypes.string.isRequired,
    listId:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    listTitle:PropTypes.string.isRequired,
    description:PropTypes.string,
    index:PropTypes.number.isRequired,
    watch:PropTypes.bool,
    comments:PropTypes.array,
    editCardActions:PropTypes.func,
};
export default connect(null, mapDispatchToProps)(Card);