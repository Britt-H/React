function Notifications ({ notifications }) 
    {
        return notifications.length > 0 ? <p>You have {notifications.length} notifications today!</p> : null
    }
export default Notifications