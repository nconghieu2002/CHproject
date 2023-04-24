import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({ children, primary, long, short }) {
    const classes = cx('wrapper', {
        primary,
        long,
        short
    });

    return (
        <div className={classes}>
            <div className={cx('circle')}></div>
            <div className={cx('container')}>
                <NavLink className={cx('content')}>{children}</NavLink>
                <div className={cx('line')}></div>
            </div>
        </div>
    );
}

export default Button;
