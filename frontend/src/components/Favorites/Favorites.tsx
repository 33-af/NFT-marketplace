import s from './Favorite.module.scss'
import candlesticks from '../../assets/candlesticks.png'
import nftImage from '../../assets/nft-image.png'
const Favorites = () => {

    return (
        <section className={s.onSale}>
            <div className={s.tabBlock}>
                <img src={nftImage} alt="Favorite image" className={s.nftImg} />
                <div className={s.nftInfo}>
                    <div className={s.infoTop}>
                        <p className={s.nftTitle}>Title</p>
                        <p className={s.nftPrice}>Price BTC</p>
                    </div>
                    <span className={s.nftInfoLine}></span>
                    <div className={s.infoBottom}>
                        <img src={candlesticks} alt="candlesticks-image" />
                        <p className={s.bottomTitle}>
                            Highest bid <span className={s.bottomPRoce}>Current Bid BTC</span>
                        </p>
                        <p className={s.bottomNewBild}>New bid 🔥</p>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Favorites;