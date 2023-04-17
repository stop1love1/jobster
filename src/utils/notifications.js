import { toast } from 'react-toastify';

export const SUCCESS = 'SUCESS';
export const WARNING = 'WARNING';
export const ERROR = 'ERROR';

const notifications = (type, message, positon = toast.POSITION.TOP_CENTER) => {
    switch (type) {
        case SUCCESS:
            toast.success(message, {
                position: positon,
            });
            break;
        case WARNING:
            toast.warn(message, {
                position: positon,
            });
            break;
        case ERROR:
            toast.error(message, {
                position: positon,
            });
            break;
        default:
            console.error(new Error('Invalid type notifications!'));
            break;
    }
};

export default notifications;
