import React from 'react';
import { FC, useEffect, useState } from 'react';
import CircleCheck from '../icons/CircleCheck';
import CircleExclamation from '../icons/CircleExclamation';
import CircleInfo from '../icons/CircleInfo';
import CircleXmark from '../icons/CircleXmark';

type Props = {
    timeout: number;
    dispatch: (obj: object) => {};
    onClick: () => {};
    message: string;
    id: string;
    type: string;
    closeOnClick?: boolean;
};

const Notification: FC<Props> = (props) => {
    const [exit, setExit] = useState(false);
    const [time, setTime] = useState(0);
    const [intervalID, setIntervalID] = useState<any>(null);

    const info = '#2f70fd';
    const warning = '#fba200';
    const error = '#cb0000';
    const success = '#00a40a';

    const startTimer = () => {
        const id = setInterval(() => {
            setTime((prev) => {
                if (prev < props.timeout) return prev + 1;

                clearInterval(id);
                return prev;
            });
        }, 1000);

        setIntervalID(id);
    };

    const pauseTimer = () => {
        if (intervalID == null) return;
        clearInterval(intervalID);
    };

    const closeNotification = () => {
        pauseTimer();
        setExit(true);
        setTimeout(() => {
            props.dispatch({
                type: 'REMOVE_NOTIFICATION',
                id: props.id,
            });
        }, 1000);
    };

    useEffect(() => {
        if (time === props.timeout) {
            closeNotification();
        }
    }, [time]);

    useEffect(() => {
        startTimer();
    }, []);

    let color = info;
    let icon = <CircleInfo fill={'white'} />;

    if (props.type == 'success') {
        color = success;
        icon = <CircleCheck fill={'white'} />;
    }
    if (props.type == 'error') {
        color = error;
        icon = <CircleXmark fill={'white'} />;
    }
    if (props.type == 'warning') {
        color = warning;
        icon = <CircleExclamation fill={'white'} />;
    }

    return (
        <div
            onMouseEnter={pauseTimer}
            onMouseLeave={startTimer}
            onClick={() => {
                if (props.closeOnClick == true) {
                    closeNotification();
                }
                props.onClick();
            }}
            style={{ cursor: props.onClick != null ? 'pointer' : 'default', backgroundColor: color }}
            className={`notification notification__${props.type} ${exit ? 'notification__hide' : ''}`}>
            <span className={'notification__icon'}>{icon}</span>
            <p className={'notification__msg'}>{props.message}</p>
        </div>
    );
};

Notification.defaultProps = {
    type: 'info',
    timeout: 10,
    onClick: () => ({}),
};

export default Notification;
