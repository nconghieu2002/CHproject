import classNames from 'classnames/bind';
import styles from './Represent.module.scss';

import Button from '@/components/Button';

const cx = classNames.bind(styles);

function Represent() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('line')}></div>
            <div className={cx('container')}>
                <video
                    className={cx('video')}
                    src="https://5scontent.com/app/uploads/2020/02/5S-COUNTDOWN_02.mp4"
                    controls
                    loop
                    // autoplay
                ></video>
                <div className={cx('body')}>
                    <div className={cx('content')}>
                        5S IS A CREATIVE STUDIO BORN AND BRED IN MONTREAL. OUR APPROACH INFUSES STRATEGIC INSIGHT INTO
                        STORYTELLING FOR BRANDS AND AGENCIES SEEKING TO STAND OUT.
                    </div>
                    <div className={cx('btn')}>
                        <Button>Learn more</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Represent;
