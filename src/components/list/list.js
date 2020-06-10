import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import PropTypes from 'prop-types';
import CreateCardOrList from '../createCardOrList';
import ListTitle from './listTitle';
import Card from '../card';
import './list.css';

const List = ({ listId ,listTitle, index , cards }) => {
    return (
        <Droppable droppableId={String(listId)} index={index} type="card">
            { provided => (
                <div className='list-container'>
                    <ListTitle
                        title = { listTitle }
                        listId = { listId }
                    />
                    <div {...provided.droppableProps} ref={provided.innerRef}>
                        {cards.map((card, index) => {
                            const { cardId ,title, comments , description, watch } = card;
                            return  <Card
                                        key={cardId}
                                        cardId={cardId}
                                        index={index}
                                        title={title}
                                        comments={comments}
                                        description={description}
                                        listTitle = { listTitle }
                                        listId={listId}
                                        watch={watch}
                                    />
                        })}
                        {provided.placeholder}
                        <CreateCardOrList listId = {listId} cardLength = { cards.length } />
                    </div>
                </div>
            )}
        </Droppable>
    )
};

List.propTypes = {
    listId:PropTypes.string.isRequired,
    listTitle:PropTypes.string.isRequired,
    index:PropTypes.number.isRequired,
    cards:PropTypes.array.isRequired
};
export default List;