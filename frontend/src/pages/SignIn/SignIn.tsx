import React from 'react';
import { makeStyles, Typography, Button } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleIcon from '@material-ui/icons/PeopleOutline';
import MessageIcon from '@material-ui/icons/ModeCommentOutlined';
import { LoginModal } from '../../components/Modals/LoginModal';
import { RegisterModal } from '../../components/Modals/RegisterModal';

export const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        height: '100vh',
    },
    description: {
        backgroundColor: '#1DA1F2',
        flex: '0 0 50%',
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    blueSideListInfoItem: {
        marginBottom: 40,
    },
    blueSideListInfo: {
        position: 'relative',
        listStyle: 'none',
        padding: 0,
        margin: 0,
        width: 380,
        '& h6': {
            display: 'flex',
            alignItems: 'center',
            color: 'white',
            fontWeight: 700,
            fontSize: 20,
        },
    },
    blueSideListInfoIcon: {
        fontSize: 32,
        marginRight: 15,
    },
    formSettings: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: '0 0 50%',
        flexDirection: 'column'
    },
    loginSideTwitterIcon: {
        fontSize: 45,
    },
    loginSideWrapper: {
        width: 380,
    },
    loginSideTitle: {
        fontWeight: 700,
        fontSize: 24,
    },
    loginSideButtonSignIn: {
        marginBottom: 15
    },
    loginSideSubtitle: {
        fontSize: 16
    },
    loginSideField: {
        marginBottom: 18,
    },
    registerField: {
        marginBottom: theme.spacing(5),
    },
    loginFormControl: {
        marginBottom: theme.spacing(2),
    },
}))

export default function SignIn() {
    const classes = useStyles();

    const [visibleModal, setVisibleModal] = React.useState<'signIn' | 'signUp'>();

    const handleClickOpenSignIn = (): void => {
        setVisibleModal('signIn');
    };

    const handleClickOpenSignUp = (): void => {
        setVisibleModal('signUp');
    };

    const handleCloseModal = (): void => {
        setVisibleModal(undefined);
    };
    return (
        <div className={classes.wrapper}>
            <section className={classes.description}>
                <ul className={classes.blueSideListInfo}>
                    <li className={classes.blueSideListInfoItem}>
                        <Typography variant="h6">
                            <SearchIcon className={classes.blueSideListInfoIcon} />
                            Читайте о том, что вам интересно.
                        </Typography>
                    </li>
                    <li className={classes.blueSideListInfoItem}>
                        <Typography variant="h6">
                            <PeopleIcon className={classes.blueSideListInfoIcon} />
                            Узнайте, о чем говорят в мире.
                        </Typography>
                    </li>
                    <li className={classes.blueSideListInfoItem}>
                        <Typography variant="h6">
                            <MessageIcon className={classes.blueSideListInfoIcon} />
                            Присоединяйтесь к общению.
                        </Typography>
                    </li>
                </ul>
            </section>
            <section className={classes.formSettings}>
                <div className={classes.loginSideWrapper}>
                    <TwitterIcon color="primary" className={classes.loginSideTwitterIcon}/>
                    <Typography
                        gutterBottom
                        variant="h6"
                        className={classes.loginSideTitle}
                    >
                        Узнайте, что происходит в мире прямо сейчас
                    </Typography>
                    <Typography
                        gutterBottom
                        className={classes.loginSideSubtitle}
                    >
                        Присоединяйся к Твиттеру прямо сейчас!
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        className={classes.loginSideButtonSignIn}
                        onClick={handleClickOpenSignUp}
                    >
                        Зарегистрироваться
                    </Button>
                    <Button
                        variant="outlined"
                        color="primary"
                        fullWidth
                        onClick={handleClickOpenSignIn}
                    >
                        Войти
                    </Button>
                </div>
            </section>
            <LoginModal open={visibleModal === 'signIn'} onClose={handleCloseModal} />
            <RegisterModal open={visibleModal === 'signUp'} onClose={handleCloseModal} />
        </div>
    );
}