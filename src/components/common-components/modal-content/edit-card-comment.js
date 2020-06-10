import React,{ useState, useEffect, useRef, useMemo } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import {
    FlipToFront,
    AttachFile,
    AlternateEmail,
    Mood,
    CardTravel,
} from '@material-ui/icons';
import  { MainButton, DisabledButton } from "../index";
import {ADD_CARD_COMMENT} from "../../../actions/actionType";
import {handleClickOutside, buttonSecondColors} from "../../helpers";

const CardComment = ({cardId, listId, watch, editCardActions}) => {
    const [commentValue, setCommentValue] = useState('');
    const [writeComment, setWriteComment] = useState(false);
    const [watchValue, setWatchValue] = useState(false);
    const textareaRef = useRef(null);
    const editButtonRef = useRef(null);

    useEffect(()=>{
        const clickOutside = (e)=> {
            handleClickOutside({e, textareaRef,editButtonRef, setFunction:setWriteComment})
        };
        if(!commentValue){
            document.addEventListener("click", clickOutside );
            return () => {
                document.removeEventListener("click", clickOutside );
            }
        }else{
            document.removeEventListener("click", clickOutside );
        }

    },[commentValue]);
    const handelWriteComment = () => {
        setWriteComment(true)
    };
    const handelCommentValue = (e) => {
        setCommentValue(e.target.value)
    };
    const handleWatchChange = (event) => {
        setWatchValue(event.target.checked);

    };
    const saveCommentValue = () => {
        if(commentValue.trim()){
            editCardActions({
                type:ADD_CARD_COMMENT,
                data: { cardId, listId, value: {commentValue, watch: watchValue} }
            });
            setCommentValue('');
            setWriteComment(false)
        }

    };
    const renderWatch = useMemo(() => {
        if(commentValue){
            if(!watch){
                return <>
                    <Checkbox
                        name="checkedB"
                        color="primary"
                        checked={ watchValue }
                        onChange={ handleWatchChange }
                    />
                    <span>Watch</span>
                </>
            }
        }
    },[watch, commentValue, watchValue]);
    return (
        <div className="card-item">
            <span className="modal_icon"><FlipToFront/></span>
            <span className="modal_icon user">AK</span>
            <div className="comment_header" >
                <h3>Activity</h3>
                <MainButton
                    bgcolor={ buttonSecondColors.bg }
                    color = { buttonSecondColors.color }
                >
                    Hide Details
                </MainButton>
            </div>
            <div className="comment_area">
                {
                    <span
                        style={{display: writeComment ? 'none' : 'block'}}
                        onClick={handelWriteComment}
                        ref={textareaRef}
                    >
                        Write a comment…
                    </span>
                }
                <div className={`${writeComment ? 'active' : 'inactive' } `}>
                    <textarea
                        placeholder="Write a comment…"
                        value={commentValue}
                        onChange={handelCommentValue}
                        ref={editButtonRef}
                    />
                    <div className='comment_tools'>
                        <div className='save'>
                            <div onClick={saveCommentValue}>
                                { commentValue ?
                                    <MainButton>Save</MainButton> :
                                    <DisabledButton>Save</DisabledButton>
                                }
                            </div>
                            {renderWatch}
                        </div>
                        <div className="comment_icons">
                            <span className='active'><AttachFile/></span>
                            <span><AlternateEmail/></span>
                            <span><Mood/></span>
                            <span><CardTravel/></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default CardComment;