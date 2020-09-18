import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import { Modal } from '@material-ui/core';

import styles from './CustomModal.module.css'

export type ModalProps={
    children?:React.ReactElement
    classNameText?: string
    open: boolean
    handleClose(): void
    text?: string
}

const CustomModal: React.FC<ModalProps> = ({children, classNameText, open, handleClose, text}): React.ReactElement =>{
    return (
        <Modal
            onClose={handleClose}
            open={open}
        >
            <div className={styles.body}>
                {text && <Typography className={classNameText}>{text}</Typography>}
                {children}
            </div>
        </Modal>
    );

}

export default CustomModal;