import React from 'react';
import { useStyles } from '../../pages/SignIn/SignIn';
import { ModalBlock } from '../../components/Modals/ModalBlock';

interface LoginModalProps {
    open: boolean;
    onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = ({ open, onClose }): React.ReactElement => { {
    const classes = useStyles();
    return (
        <ModalBlock visible={open} onClose={onClose} classes={classes} title="Войти в аккаунт">
            <div className={classes.loginFormControl}>
                LoginModal
            </div>
        </ModalBlock>
    )
}};