import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import MaterialModal from '@material-ui/core/Modal';
const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: '100%',
        backgroundColor: 'none',
        padding: theme.spacing(2, 2, 3),
        border:'1px solid black',
        outline: 'none',
        margin:'0 auto'
    },
}));

 const Modal = ({ children, handelModal, open = false }) => {
    const classes = useStyles();
    return (
            <MaterialModal
                style={{overflowY: 'scroll'}}
                open={open}
                onClose={()=> handelModal (false)}
            >
                <div className={classes.paper}>
                    { children }
                </div>
            </MaterialModal>
    );
};
Modal.propTypes = {
    open:PropTypes.bool.isRequired,
    handelModal:PropTypes.func.isRequired,
};
export default Modal
