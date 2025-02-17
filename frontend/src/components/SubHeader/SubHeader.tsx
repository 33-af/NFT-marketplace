import imageIcon from '../../assets/image.svg'
import pencilIcon from '../../assets/pencil.svg'
import { Link } from 'react-router-dom';
import s from './SubHeader.module.scss';


const SubHeader = () => {

    return (
        <section className={s.subHeader}>
            <div className={s.container}>
                <div className={s.subHeaderLinks}>
                    <Link to='/edit'>
                        <div className={s.subHeaderButton}>
                            Edit cover photo
                            <img src={imageIcon} alt="" className={s.subHeaderImage} />
                        </div>
                    </Link>
                    <Link to='/editProfile'>
                        <div className={s.subHeaderButton}>
                            Edit profile
                            <img src={pencilIcon} alt="" className={s.subHeaderImage} />
                        </div>
                    </Link>
                    <button
                        type='button'
                        className={s.subHeaderButton}
                    >
                        logout
                    </button>
                </div>
            </div>
        </section>
    )
}

export default SubHeader
