import s from './Profile.module.scss';
import coins from '../../assets/coins.svg';
import globeIcon from '../../assets/globe.svg';
import facebookIcon from '../../assets/facebook.svg';
import twitterIcon from '../../assets/twitter.svg';
import instagramIcon from '../../assets/Instagram.svg';
import { Link, NavLink, Outlet } from 'react-router-dom';
import avatar from '../../assets/avatar.png'

const Profile = () => {
  
  return (
    <section className={s.container}>
      <div className={s.profile}>
        <aside className={s.aside}>
          <div className={s.profileBlock}>
            <img src={avatar} alt="User" className={s.profileUserLogo} />

            <div className={s.profileBlockInfo}>
              <h2 className={s.profileName}>Username</h2>
              <div className={s.profileQrcode}>
                <p className={s.qrcode}>Email</p>
                <img src={coins} alt="Coins" className={s.profileQrcodeImage} />
              </div>
              <p className={s.profileUserDescription}>Description here</p>
              <div className={s.profileLink}>
                <img src={globeIcon} alt="Website" className={s.socilalLinkImage} />
                <Link to="https://ui8.net" className={s.socilalLink}>https://ui8.net</Link>
              </div>
            </div>

            <button className={s.profileFollowButton}>Follow</button>

            <div className={s.socilalLinks}>
              <img src={twitterIcon} alt="Twitter" className={s.socialImage} />
              <img src={instagramIcon} alt="Instagram" className={s.socialImage} />
              <img src={facebookIcon} alt="Facebook" className={s.socialImage} />
            </div>

            <span className={s.profileLine}></span>
            <p className={s.profileDate}>Member since </p>
          </div>
        </aside>

        <div className={s.content}>
          <div className={s.tabs}>
            <NavLink to="/profile/created" className={({ isActive }) => isActive ? `${s.tabsButton} ${s.active}` : s.tabsButton}>
              Created
            </NavLink>
            <NavLink to="/profile/favorites" className={({ isActive }) => isActive ? `${s.tabsButton} ${s.active}` : s.tabsButton}>
              Favorites
            </NavLink>
            <NavLink to="/following" className={({ isActive }) => isActive ? `${s.tabsButton} ${s.active}` : s.tabsButton}>
              Following
            </NavLink>
            <NavLink to="/followers" className={({ isActive }) => isActive ? `${s.tabsButton} ${s.active}` : s.tabsButton}>
              Followers
            </NavLink>
                 <NavLink to="/profile/collectibles" className={({ isActive }) => isActive ? `${s.tabsButton} ${s.active}` : s.tabsButton}>
              Collectibles
            </NavLink>
          </div>

          <div className={s.tabsResult}>
            <Outlet />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;

