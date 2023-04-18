import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

import Header from '@/layout/Header';
import Footer from '@/layout/Footer';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>{children}</div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
