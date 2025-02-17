import s from "./modalToken.module.scss"
import closeIcon from '../../assets/cancel.png'

const ModalToken = () => {
 
    return (
        <section className={s.modalWrapper}>
            <div className={s.modalWrapper__top}>
                <h1 className={s.modalWrapper__top__title}>Transfer token</h1>
                <img src={closeIcon} alt="" className={s.closeIcon}  />
            </div>
            <div className={s.modalWrapper__purshasing}>
                You can transfer tokens from your address to another
            </div>
            <form className={s.modalWrapper__form}>
                <label htmlFor="modalWrapper__input">Receiver address</label>
                <input
                    type="text"
                    id="receiverWalletId"
                    name="receiverWalletId"
                    className={s.modalWrapper__input}
                    placeholder="Paste Address"
                />
                <label htmlFor="modalWrapper__input">Amount</label>
                <input
                    type="number"
                    id="amountInput"
                    name="amount"
                    className={s.modalWrapper__input}
                    placeholder="Amount"
                />
            </form>
            <div className={s.modalWrapper__buttons}>
                <button className={s.modalWrapper__buttons__countine}>
                    Continue
                </button>
                <button className={s.modalWrapper__buttons__cancel}>
                    Cancel
                </button>
            </div>
        </section>
    )
}

export default ModalToken;