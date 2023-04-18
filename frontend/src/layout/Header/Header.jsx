import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useEffect, useState } from 'react';

import logo from '@/assets/images/logo.png';

const cx = classNames.bind(styles);

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.pageYOffset;
            if (currentPosition >= 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={cx('wrapper')}>
            <NavLink to={'/'}>
                <img src={logo} className={cx('logo')} />
            </NavLink>
            <div className={cx('header')}>
                <div className={cx('language')}>
                    <div className={cx('small-wrapper')}>
                        <NavLink>VI</NavLink>
                        <AiOutlineLoading3Quarters className={cx('load-icon')} />
                    </div>
                    <div className={cx('line')}></div>
                    <div className={cx('small-wrapper')}>
                        <NavLink>EN</NavLink>
                        <AiOutlineLoading3Quarters className={cx('load-icon')} />
                    </div>
                </div>
                <div className={cx('nav-bar')}>
                    <div className={cx('small-wrapper')}>
                        <NavLink>WORK</NavLink>
                        <AiOutlineLoading3Quarters className={cx('load-icon')} />
                    </div>
                    <div className={cx('line')}></div>
                    <div className={cx('small-wrapper')}>
                        <NavLink>ABOUT</NavLink>
                        <AiOutlineLoading3Quarters className={cx('load-icon')} />
                    </div>
                    <div className={cx('line')}></div>
                    <div className={cx('small-wrapper')}>
                        <NavLink>STUDIO</NavLink>
                        <AiOutlineLoading3Quarters className={cx('load-icon')} />
                    </div>
                    <div className={cx('line')}></div>
                    <div className={cx('small-wrapper')}>
                        <NavLink>CONTACT</NavLink>
                        <AiOutlineLoading3Quarters className={cx('load-icon')} />
                    </div>
                </div>
                <div className={cx('search')}>
                    <input type="text" placeholder="Search..." className={cx('input')}></input>
                    <CiSearch className={cx('search-icon')} />
                </div>
            </div>
            {isScrolled ? <div className={cx('line-header')}></div> : <div className={cx('to-top')}></div>}
        </div>
    );
}

export default Header;
