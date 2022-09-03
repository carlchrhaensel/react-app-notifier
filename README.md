# react-app-notifier
## Usage
### Installation
```
npm install react-app-notifier
```

### Add NotificationProvider
```
root.render(
    <React.StrictMode>
        <NotificationProvider>
            <App/>
        </NotificationProvider>
    </React.StrictMode>
);
```

### Show notification
```
const ExampleComponent: FC = () => {
    const dispatchNotification = useNotification();

    const showNotification = () => {
        dispatchNotification({message: 'An example text', timeout: 10, type: 'error'});
    }
    
    return (
        <button onClick={showNotification}>click me</button>
    );
}
```


## Credits
- Icons by [Font Awesome](https://fontawesome.com/)
