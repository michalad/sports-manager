import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import {closeNotification} from './notificationActions'

class Notifications extends React.Component {

    closed() {
        this.props.closeNotification();
    }

    render() {
        const {notification} = this.props;
        console.log('RENDERING notification: ' + JSON.stringify(notification));
        return (
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={notification.show}
                message={notification.message}
                autoHideDuration={3000}
                SnackbarContentProps={{
                    'aria-describedby': 'message-id',
                }}
                onClose={this.closed.bind(this)}
            />
        );
    }
}

const mapStateToProps = state => ({
    notification: state.notification
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        closeNotification: closeNotification
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);