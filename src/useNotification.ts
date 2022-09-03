import { useContext } from 'react';
import { v4 } from 'uuid';
import { NotificationContext } from './NotificationProvider/NotificationProvider';

type dispatchTpye = {
    message: string;
    timeout: number;
    type?: 'info' | 'error' | 'warning' | 'success';
    onClick?: () => any;
    closeOnClick?: boolean;
};

export const useNotification = () => {
    const dispatch = useContext(NotificationContext);

    return (props: dispatchTpye) => {
        dispatch({
            type: 'ADD_NOTIFICATION',
            payload: {
                id: v4(),
                ...props,
            },
        });
    };
};
