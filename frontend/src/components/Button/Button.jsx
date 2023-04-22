import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('circle')}></div>
            <div className={cx("container")}>
                <NavLink className={cx('content')}>Learn more</NavLink>
                <div className={cx('line')}></div>
            </div>
        </div>
    );
}

export default Button;
