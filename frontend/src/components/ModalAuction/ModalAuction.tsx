import s from './ModalAuction.module.scss'

const ModalAuction = () => {
    
    return (
        <section className={s.modal}>
            <div className={s.modalContent}>
                <h1 className={s.createTitle}>Create Auction?</h1>
                <div className={s.modalButtons}>
                    <button className={s.modalAdd} >Create Auction</button>
                    <button className={s.modalCancel}>Cancel</button>
                </div>
            </div>
        </section >
    )
}

export default ModalAuction
