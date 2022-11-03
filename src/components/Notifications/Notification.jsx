import PropTypes from 'prop-types';
import { Message } from '../Notifications/Notification.styled';

const Notification = ({ message }) => {
  return <Message>{message}</Message>;
};

Notification.propTypes = {
   message: PropTypes.string.isRequired,
};

export default Notification;