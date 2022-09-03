import { FC } from 'react';
declare type Props = {
    timeout: number;
    dispatch: (obj: object) => {};
    onClick: () => {};
    message: string;
    id: string;
    type: string;
    closeOnClick?: boolean;
};
declare const Notification: FC<Props>;
export default Notification;
