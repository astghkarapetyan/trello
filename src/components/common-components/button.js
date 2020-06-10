import React from 'react';
import { Button } from '@material-ui/core';
import './index.css'
const MainButton = ({ children, bgcolor = 'green', color = 'white' }) => {
    return (
        <Button
            variant="contained"
            style={{backgroundColor: bgcolor, color}}
        >
            { children }
        </Button>
    )
};

const DisabledButton= ({ children }) => {
    return (
        <Button className = 'button-disabled' variant="contained" disabled>
            { children }
        </Button>

    )
};

export {
    MainButton,
    DisabledButton
}