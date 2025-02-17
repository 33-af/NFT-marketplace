import s from "./Header.module.scss";
import headerLogo from "../../assets/logo.png";
import seachIcon from "../../assets/search.svg";
import notificationicon from "../../assets/notification.svg";
import dropdown from "../../assets/dropdown.svg";
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <>
            <header className={s.header}>
                <div className={s.container}>
                    <div className={s.header__content}>
                        <div className={s.header__left}>
                            <Link to={'/'}>
                                <img src={headerLogo} alt="Logo" className={s.header__logo} />
                            </Link>
                            <span className={s.header__border}></span>
                            <nav className={s.header__menu}>
                                <ul className={s.header__list}>
                                    <li><Link to={"/discover"}>Discover</Link></li>
                                    <li><Link to={"/frequently"}>How it works</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className={s.header__right}>
                            <div className={s.search__form}>
                                <input type="text" placeholder="Search" className={s.search__input} />
                                <img src={seachIcon} alt="Icon" className={s.search__icon} />
                            </div>
                            <button className={s.right__notification} type='button' >
                                <img src={notificationicon} alt="Icon" className={s.notification__icon} />
                                <span className={s.notification__counter}>0</span>
                            </button>

                            <div className={s.header__buttons}>
                                <button
                                    className={s.button__upload}>
                                    Profile
                                </button>
                            </div>
                            <button className={s.header__dropdown}>
                                <img src={dropdown} alt="Icon" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
