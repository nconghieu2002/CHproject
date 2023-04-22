import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { NavLink } from 'react-router-dom';

import Button from '@/components/Button';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('bottom')}>
            <div className={cx('wrapper')}>
                <div className={cx('line')}></div>
                <div className={cx('information')}>
                    <div className={cx('contact')}>
                        <NavLink className={cx('email')}>NCONGHIEU2002@</NavLink>
                        <NavLink className={cx('website')}>CONGHIEUSTUDIO.COM</NavLink>
                        <NavLink className={cx('phone')}>(84) 123-456-789</NavLink>
                    </div>
                    <div className={cx('address')}>BA DINH, HA NOI, VIET NAM</div>
                    <div className={cx('social')}>
                        <NavLink className={cx('facebook')}>FACEBOOK</NavLink>
                        <NavLink className={cx('instagram')}>INSTAGRAM</NavLink>
                        <NavLink className={cx('twitter ')}>TWITTER</NavLink>
                    </div>
                </div>
            </div>
            <div className={cx('line')}></div>
            <div className={cx('slider')}>
                <div className={cx('title')}>WELCOME TO MY WEBSITE</div>
            </div>
            <div className={cx('line')}></div>
            <div className='button'>
                <div className={cx('work-btn')}>WORK</div>
                <div className={cx('about-btn')}>ABOUT</div>
                <div className={cx('studio-btn')}>STUDIO</div>
                <div className={cx('contact-btn')}>CONTACT</div>
                <Button />
            </div>
        </div>
    );
}

export default Footer;
