import s from './Notification.module.scss';

const Notification = () => {
 
    return (
        <section className={s.notification}>
            <div className={s.notificationBlock}>
                <div className={s.notificationTop}>
                    <h2 className={s.notificationTitle}>Notification</h2>
                    <button type='button' className={s.notificationButton}>See all</button>
                </div>
            </div>
        </section>
    )
}

export default Notification
