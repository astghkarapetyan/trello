import React,{ useState } from 'react';
import {EDIT_CARD_TITLE} from "../../../actions/actionType";
import {
    Close,
    CardTravel,
} from '@material-ui/icons';
const CardTitle = ({ title, cardId, listTitle,listId, editCardActions, handelModal }) => {
    const [cardTitle, setCardTitle] = useState(title);
    const [readOnly, setReadOnly] = useState(true);

    const handelCardTitleReadOnly = () => {
        setReadOnly(false)
    };
    const handelCardTitle = (e) => {
        setCardTitle(e.target.value)
    };
    const blurCardTitle = () => {
        editCardActions({
            type:EDIT_CARD_TITLE,
            data: { cardId, listId, value: cardTitle }
        });
        setReadOnly(true)
    };
    return (
        <div className="card-title card-item">
            <div onClick={()=>handelModal(false)} className='closeEditModal' ><Close /></div>
            <span className="modal_icon"> <CardTravel/> </span>
            <div>
                <input
                    onClick={ handelCardTitleReadOnly }
                    onChange={ handelCardTitle }
                    onBlur={ blurCardTitle }
                    value={ cardTitle }
                    readOnly={ readOnly }
                />
            </div>
            <div className="list-title">in list <u>{ listTitle }</u></div>
        </div>
    )
};
export  default CardTitle;