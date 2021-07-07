import React from "react";
import { useStyles } from '../../pages/SignIn/SignIn';
import { ModalBlock } from './ModalBlock';

interface RegisterModalProps {
    open: boolean;
    onClose: () => void;
}

export const RegisterModal: React.FC<RegisterModalProps> = ({ open, onClose }): React.ReactElement => { {
    const classes = useStyles();
    return (
        <ModalBlock visible={open} onClose={onClose} classes={classes} title="Войти в аккаунт">
            <div className={classes.loginFormControl}>
                RegisterModal
            </div>
        </ModalBlock>
    )
}};