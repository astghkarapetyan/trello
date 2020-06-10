import React from 'react';
import { connect } from "react-redux";
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import PropTypes from 'prop-types';
import List from '../list';
import CreateCardOrList from '../createCardOrList';
import { dragAction} from "../../actions";
import './index.css';

const Main = ({ lists = [], dragAction }) => {
    const onDragEnd = result => {
        const { destination, source } = result;
        if (!destination) return;
        dragAction({
            startId:source.droppableId,
            endId: destination.droppableId,
            startIndex: source.index,
            endIndex: destination.index,
        });
    };
    return (
        <DragDropContext onDragEnd={ onDragEnd }>
            <Droppable droppableId="all-lists" direction="horizontal">
                {provided => (
                    <div
                        className= 'main-content'
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        { lists.map((list, index) => {
                            const { listId, title, cards } = list;
                            return (
                                <List
                                    listId={ listId }
                                    key={ listId }
                                    listTitle={ title }
                                    cards={ cards }
                                    index={ index }
                                />
                            )
                        })}
                        { provided.placeholder }
                        <CreateCardOrList addList listsLength = { lists.length } />
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    )
};

const mapStateToProps = ({ lists })=>({
    lists
});

const mapDispatchToProps = dispatch => ({
    dragAction: data => dispatch(dragAction(data)),
});

Main.propTypes = {
    lists:PropTypes.array.isRequired,
    dragAction:PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Main)