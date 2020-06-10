import React,{ useState, useEffect, useRef, useCallback } from 'react';
import {
    Close,
    Subject
} from '@material-ui/icons';
import  { MainButton } from "../index";
import {EDIT_CARD_DESCRIPTION} from "../../../actions/actionType";
import {handleClickOutside, buttonSecondColors} from "../../helpers";

const CardDescription = ({description, cardId, listId, editCardActions}) => {
    const [descriptionValue, setDescriptionValue] = useState(description);
    const [writeDescription, setWriteDescription] = useState(false);
    const textareaRef = useRef(null);
    const editButtonRef = useRef(null);
    const saveDescriptionValue = useCallback(()=>{
        if(descriptionValue !== description ){
            editCardActions({
                type:EDIT_CARD_DESCRIPTION,
                data: { cardId, listId, value: descriptionValue }
            });
        }

    },[description,descriptionValue,cardId,listId,editCardActions]);
    useEffect(()=>{

        const clickOutside = (e)=> {
            handleClickOutside({
                e,
                textareaRef,
                editButtonRef,
                saveDescriptionValue,
                setFunction:setWriteDescription
            })
        };
        document.addEventListener("click", clickOutside );
        return () => {
            document.removeEventListener("click", clickOutside);
        };
    },[saveDescriptionValue]);
    const handelDescriptionValue = (e) => {
        setDescriptionValue(e.target.value)
    };
    const focusedTextarea = () => {
        setWriteDescription(true)
    };

    const descriptionClose = () => {
        setDescriptionValue(description)
    };
    return(
        <div className="card-item">
            <span className="modal_icon"><Subject/></span>
            <div className='description-title'>
                <h3>Description</h3>
                { description ? (
                    <span
                        ref={editButtonRef}
                        onClick={focusedTextarea}
                        className='description-edit'
                    >
                        Edit
                    </span>
                ) : null }
            </div>
            <div>
                <textarea
                    className={`${ writeDescription ? 'focused' : null }  description_textarea`}
                    placeholder="Add a more detailed description…"
                    value={descriptionValue}
                    onChange={handelDescriptionValue}
                    onClick={ focusedTextarea }
                    ref={textareaRef}
                />
                {
                    writeDescription &&  (
                        <div className='description-tools'>
                            <div className='save'>
                                <div onClick={saveDescriptionValue}><MainButton>Save</MainButton></div>
                                <Close onClick = { descriptionClose } />
                            </div>
                            <MainButton
                                bgcolor={buttonSecondColors.bg}
                                color = {buttonSecondColors.color}
                            >
                                Formatting help
                            </MainButton>
                        </div>
                    )
                }
            </div>
        </div>
    )
};
export default CardDescription;