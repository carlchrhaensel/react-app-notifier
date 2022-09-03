import React, { FC, ReactNode } from 'react';

declare type Props = {
    children?: ReactNode;
};
declare const NotificationContext: React.Context<(obj: object) => void>;
declare const NotificationProvider: FC<Props>;

declare type dispatchTpye = {
    message: string;
    timeout: number;
    type?: 'info' | 'error' | 'warning' | 'success';
    onClick?: () => any;
    closeOnClick?: boolean;
};
declare const useNotification: () => (props: dispatchTpye) => void;

export { NotificationContext, NotificationProvider, useNotification };
