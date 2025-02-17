import s from "./Discover.module.scss";
import search from "../../assets/search-white.svg";
import close from "../../assets/close.svg"



const Discover = () => {

    return (
        <section className={s.discover}>
            <div className={s.container}>
                <form className={s.yourKeywords}>
                    <button type="submit" className={s.yourKeywords__searchButton}>
                        <img src={search} alt="search icon" />
                    </button>
                    <input
                        type="text"
                        className={s.yourKeywords__input}
                        placeholder="Type your keywords"
                    />
                </form>
                <div className={s.content}>
                    <div className={s.content__head}>
                        <ul className={s.content__head__navigation}>
                            <li>
                                <a href="#">All items</a>
                            </li>
                            <li>
                                <a href="#">Art</a>
                            </li>
                            <li>
                                <a href="#">Game</a>
                            </li>
                            <li>
                                <a href="#">Photography</a>
                            </li>
                            <li>
                                <a href="#">Music</a>
                            </li>
                            <li>
                                <a href="#">Video</a>
                            </li>
                        </ul>
                    </div>
                    <div className={s.discover__content}>
                        <div className={s.filter}>
                            <div className={s.filter__content}>
                                <div className={s.filter__price}>
                                    <div className={s.filter__price__title}>Price range</div>
                                    <div className={s.filter__range}>
                                        <input
                                            type="range"
                                            min="0.01"
                                            max="10"
                                            step="0.01"

                                        />
                                        <div className={s.filter__range__value}> BTC</div>
                                    </div>
                                    <div className={s.filter__range__labels}>
                                        <span>0.01 BTC</span>
                                        <span>10 BTC</span>
                                    </div>
                                </div>
                                <div className={s.filter__likes}>
                                    likes
                                </div>
                                <div className={s.filter__colors}>
                                    open
                                </div>
                                <div className={s.filter__creator}>
                                    creator
                                </div>
                            </div>
                            <div className={s.filter__reset}>
                                <img src={close} alt="" />
                                Reset filter
                            </div>
                        </div>
                        <div className={s.discover__cards}>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Discover;
