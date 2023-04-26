import classNames from 'classnames/bind';
import styles from './MemberCard.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function MemberCard() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('member')}>
                <img className={cx('image')} src="https://5scontent.com/app/uploads/2018/12/ABOUT_Gab.jpg" alt="" />
                <div className={cx('name')}>GABRIEL GARCEAU</div>
                <div className={cx('job')}>DIRECTOR</div>
                <Link className={cx('mail')}>gabriel@abc.com</Link>
            </div>
            <div className={cx('member', 'member-2')}>
                <img className={cx('image')} src="https://5scontent.com/app/uploads/2018/12/ABOUT_Helene.jpg" alt="" />
                <div className={cx('name')}>HELENE HA</div>
                <div className={cx('job')}>PRODUCTION COORDINATOR</div>
                <Link className={cx('mail')}>helena@abc.com</Link>
            </div>
            <div className={cx('member', 'member-3')}>
                <img className={cx('image')} src="https://5scontent.com/app/uploads/2018/12/ABOUT_Jordan.jpg" alt="" />
                <div className={cx('name')}>JORDAN NESS</div>
                <div className={cx('job')}>VIDEOGRAPHER</div>
                <Link className={cx('mail')}>jordan@abc.com</Link>
            </div>
            <div className={cx('member')}>
                <img className={cx('image')} src="https://5scontent.com/app/uploads/2018/12/ABOUT_Anais.jpg" alt="" />
                <div className={cx('name')}>ANAÏS BOYER-LAFRENIÈRE</div>
                <div className={cx('job')}>PRODUCER</div>
                <Link className={cx('mail')}>anais@abc.com</Link>
            </div>
            <div className={cx('member', 'member-2')}>
                <img className={cx('image')} src="https://5scontent.com/app/uploads/2018/12/ABOUT_Kiril.jpg" alt="" />
                <div className={cx('name')}>KIRIL SHMIDOV</div>
                <div className={cx('job')}>CREATIVE DIRECTOR</div>
                <Link className={cx('mail')}>kiril@abc.com</Link>
            </div>
            <div className={cx('member', 'member-3')}>
                <img className={cx('image')} src="https://5scontent.com/app/uploads/2018/12/ABOUT_Helene.jpg" alt="" />
                <div className={cx('name')}>HELENE HA</div>
                <div className={cx('job')}>PRODUCTION COORDINATOR</div>
                <Link className={cx('mail')}>helena@abc.com</Link>
            </div>
        </div>
    );
}

export default MemberCard;
