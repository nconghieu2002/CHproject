import classNames from 'classnames/bind';
import styles from './Client.module.scss';

const cx = classNames.bind(styles);

function Client() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>CLIENTS</div>
            <div className={cx('trademark')}>
                <img
                    className={cx('image')}
                    src="https://www.mlbstatic.com/team-logos/team-cap-on-dark/147.svg"
                    alt=""
                />
            </div>
        </div>
    );
}

export default Client;
