import { createContext, FC, useReducer } from 'react';
import { Notification } from '../Notification';
import React from 'react';

import { ReactNode } from 'react';

type Props = {
    children?: ReactNode;
};

const NotificationContext = createContext((obj: object) => {});

const NotificationProvider: FC<Props> = (props) => {
    const [state, dispatch] = useReducer((state: any, action: any) => {
        switch (action.type) {
            case 'ADD_NOTIFICATION':
                return [...state, { ...action.payload }];
            case 'REMOVE_NOTIFICATION':
                return state.filter((el: any) => el.id !== action.id);
            default:
                return state;
        }
    }, []);

    return (
        <NotificationContext.Provider value={dispatch}>
            <div id={'notification-container'}>
                {state.map((note: any) => {
                    return (
                        <Notification
                            dispatch={dispatch}
                            key={note.id}
                            {...note}
                        />
                    );
                })}
            </div>
            {props.children}
        </NotificationContext.Provider>
    );
};

export { NotificationProvider, NotificationContext };
