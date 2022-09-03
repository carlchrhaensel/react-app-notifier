declare type dispatchTpye = {
    message: string;
    timeout: number;
    type?: 'info' | 'error' | 'warning' | 'success';
    onClick?: () => any;
    closeOnClick?: boolean;
};
export declare const useNotification: () => (props: dispatchTpye) => void;
export {};
