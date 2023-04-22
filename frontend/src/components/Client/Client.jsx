import classNames from 'classnames/bind';
import styles from './Client.module.scss';

import Information from '@/components/Information';

const cx = classNames.bind(styles);

function Client() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>CLIENTS</div>
            <div className={cx('line')}></div>
            <div className={cx('clients')}>
                <div className={cx('trademark-top')}>
                    <div className={cx('trademark', 'line-right')}>
                        <img
                            className={cx('image')}
                            src="https://www.mlbstatic.com/team-logos/team-cap-on-dark/147.svg"
                            alt=""
                        />
                        <div className={cx('name')}>New York Yankees</div>
                    </div>
                    <div className={cx('trademark', 'line-right')}>
                        <img
                            className={cx('image')}
                            src="https://www.mlbstatic.com/team-logos/team-cap-on-dark/147.svg"
                            alt=""
                        />
                        <div className={cx('name')}>New York Yankees</div>
                    </div>
                    <div className={cx('trademark', 'line-right')}>
                        <img
                            className={cx('image')}
                            src="https://www.mlbstatic.com/team-logos/team-cap-on-dark/147.svg"
                            alt=""
                        />
                        <div className={cx('name')}>New York Yankees</div>
                    </div>
                    <div className={cx('trademark')}>
                        <img
                            className={cx('image')}
                            src="https://www.mlbstatic.com/team-logos/team-cap-on-dark/147.svg"
                            alt=""
                        />
                        <div className={cx('name')}>New York Yankees</div>
                    </div>
                </div>
                <div className={cx('line')}> </div>
                <div className={cx('trademark-bottom')}>
                    <div className={cx('trademark', 'line-right')}>
                        <img
                            className={cx('image')}
                            src="https://www.mlbstatic.com/team-logos/team-cap-on-dark/147.svg"
                            alt=""
                        />
                        <div className={cx('name')}>New York Yankees</div>
                    </div>
                    <div className={cx('trademark', 'line-right')}>
                        <img
                            className={cx('image')}
                            src="https://www.mlbstatic.com/team-logos/team-cap-on-dark/147.svg"
                            alt=""
                        />
                        <div className={cx('name')}>New York Yankees</div>
                    </div>
                    <div className={cx('trademark', 'line-right')}>
                        <img
                            className={cx('image')}
                            src="https://www.mlbstatic.com/team-logos/team-cap-on-dark/147.svg"
                            alt=""
                        />
                        <div className={cx('name')}>New York Yankees</div>
                    </div>
                    <div className={cx('trademark')}>
                        <img
                            className={cx('image')}
                            src="https://www.mlbstatic.com/team-logos/team-cap-on-dark/147.svg"
                            alt=""
                        />
                        <div className={cx('name')}>New York Yankees</div>
                    </div>
                </div>
                <div className={cx('line')}> </div>
            </div>
            <div className={cx('content')}>IT'S THE RELATIONSHIPS WE'VE BUILT THAT KEEP US DREAMING.</div>
            {/* <Information /> */}
        </div>
    );
}

export default Client;
