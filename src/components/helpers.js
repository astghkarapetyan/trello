import React from 'react';
import {
    Person,
    Label,
    CheckBox,
    Schedule,
    PermMedia,
    TrendingFlat,
    FileCopy,
    Payment,
    Visibility,
    AttachFile,
} from '@material-ui/icons';
export const handleClickOutside =({e, textareaRef,saveDescriptionValue,editButtonRef, setFunction}) => {

    if(editButtonRef && editButtonRef.current && editButtonRef.current.contains(e.target)){
        setFunction(true);
        return
    }
    if (textareaRef.current && !textareaRef.current.contains(e.target)) {
        if(saveDescriptionValue) {
            saveDescriptionValue()
        }
        setFunction(false);
    }
};

export const editContentTools = {
    'ADD TO CARD':{
        icons:[<Person/>, <Label/>, <CheckBox/>, <Schedule/>, <AttachFile/>, <PermMedia/>],
        names:['Members','Labels','Checklist','Due Date','Attachment','Cover']
    },
    'POWER-UPS': {
        icons:[],
        names:['Power-Ups']
    },
    'ACTIONS': {
        icons:[<TrendingFlat/>, <FileCopy/>,<Payment/>,<Visibility/>],
        names:['Move','Copy','Make Template','Watch']
    }
};
export const buttonSecondColors = {
    bg: 'rgba(9,30,66,.04)',
    color: '#595959'
};
