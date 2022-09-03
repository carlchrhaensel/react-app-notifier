import { FC } from 'react';
import React from 'react';
import { ReactNode } from 'react';
declare type Props = {
    children?: ReactNode;
};
declare const NotificationContext: React.Context<(obj: object) => void>;
declare const NotificationProvider: FC<Props>;
export { NotificationProvider, NotificationContext };
