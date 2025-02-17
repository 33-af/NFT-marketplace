import s from "./OneItem.module.scss";
import editIcon from "../../assets/editIcon.svg";
import addIcon from "../../assets/addIcon.svg";
import heart from "../../assets/heart.svg";
import binIcon from "../../assets/bin.svg";;
import nftImage from '../../assets/nft-image.png'
import nftAvatar from '../../assets/avatar.png'

const OneItem: React.FC = () => {
 
    return (
        <section className={`${s.oneItem} ${s.container}`}>
            <img src={nftImage} alt="NFT Image" className={s.oneItem__image} />
            <div className={s.oneItem__info}>
                <h1>NFT Title</h1>
                <div className={s.pricesAndStock}>
                    <div className={s.discover__card__price}> BTC</div>
                    <div className={s.pricesAndStock__inStock}>10 in stock</div>
                </div>
                <div className={s.oneItem__desc}>
                    This NFT Card will give you Access to Special Airdrops. To learn more about UI8 please visit <br />
                    <a
                        className={s.oneItem__desc__link}
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://ui8.net"
                    >
                        https://ui8.net
                    </a>
                </div>
                <div className={s.highestBid}>
                    <div className={s.highestBid__head}>
                        <img src={nftAvatar} alt="" />
                        <div className={s.bidInfo}>
                            <div className={s.bidInfo__head}>
                                Highest bid by <span className={s.name}>None

                                </span>
                            </div>
                            <div className={s.bidInfo__price}>
                                <span className={s.ethereum}>BTC</span>
                            </div>
                        </div>
                    </div>
                    <div className={s.highestBid__buttons}>
                        <button className={s.button_blue} >Purchase now</button>
                        <button className={s.button_dark}  type="button">Place a bid</button>
                    </div>
                    <div className={s.highestBid__bottom}>
                        <span>Service fee</span>
                        <span className={s.whiteText}>1.5%</span>
                        <span> ETH</span>
                    </div>
                </div>
            </div>
            <div className={s.buttons}>
                <button className={s.buttons__button}>
                    <img src={addIcon} alt="" className={s.addBudAuction} />
                </button>
                <button className={s.buttons__button}>
                    <img src={binIcon} alt="" className={s.deleteIcon} />
                </button>
                <button className={s.buttons__button}>
                    <img src={heart} alt="" />
                </button>
                <button className={s.buttons__button}>
                    <img src={editIcon} alt="" className={s.editIcon} />
                </button>
            </div>
        </section >
    );
};

export default OneItem;