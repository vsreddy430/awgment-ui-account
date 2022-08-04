import React, { useContext } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Spinner from '../components/common/Spinner';
import Notification from 'tsf_notification/dist/components/notification';
import { BACKGROUND_COLOR } from '../theme/colors';
import ConfirmDialog from 'tsf_confirm_dialog/dist/components/confirmDialog';
import ConfirmationContext from '../contexts/confirmationContext/confirmation-context';
import NotificationContext from '../contexts/notificationContext/notification-context';

const useStyles = makeStyles({
    appMain: {
        width: '100%',
        minHeight: '100%',
        backgroundColor: BACKGROUND_COLOR,
    },
});

const Layout: React.FC = ({ children }) => {
    const classes = useStyles();
    const { notification, pushNotification } = useContext(NotificationContext);
    const { confirmation, showConfirmation } = useContext(ConfirmationContext);

    const closeNotification = () => {
        pushNotification({
            ...notification,
            isOpen: false,
        });
    };

    const closeConfirmation = () => {
        showConfirmation({
            ...confirmation,
            isOpen: false,
        });
    };
    // const { keycloak, initialized } = useKeycloak();
    // if (initialized && keycloak.authenticated) {
    return (
        <div className={classes.appMain}>
            {/* <TopBar /> */}
            {children}
            <Notification
                isOpen={notification.isOpen}
                type={notification.type}
                message={notification.message}
                handleClose={closeNotification}
            />
            <ConfirmDialog
                title={confirmation.title}
                subTitle={confirmation.subTitle}
                confirmButtonLabel={confirmation.confirmButtonLabel}
                isOpen={confirmation.isOpen}
                onConfirm={confirmation.onConfirm}
                onHide={closeConfirmation}
            />
            <Spinner />
        </div>
    );
    // }
    // return <div>Loading ... </div>;
};

export default Layout;
