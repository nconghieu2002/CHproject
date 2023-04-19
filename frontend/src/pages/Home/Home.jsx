import classNames from 'classnames/bind';
import styles from './Home.module.scss';

import Represent from '@/components/Represent';
import CardItem from '@/components/CardItem';
import Client from '@/components/Client/Client';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div>
            <div className={cx('wrapper')}>
                <div className={cx('slogan')}>IT TAKES 7 SECONDS TO MAKE AN IMPRESSION WE DO IT IN 5</div>
                <div className={cx('container')}>
                    <div className={cx('header')}>
                        <video
                            className={cx('video')}
                            src="https://5scontent.com/app/uploads/2022/08/LANDR-Studio_Snippet-2.mp4"
                            controls
                            loop
                            // autoplay
                        ></video>
                        <div className={cx('play-reel')}>
                            <div className={cx('play')}>PLAY</div>
                            <div className={cx('reel')}>REEL</div>
                        </div>
                    </div>
                </div>
            </div>
            <Represent />
            <div className={cx('line')}></div>
            <div className={cx('bottom')}>
                <div className={cx('project')}>PROJECTS THAT MAKE US BLUSH</div>
                <CardItem className={cx('test')} />
            </div>
            <div className={cx('big-line')}></div>
            <Client />
        </div>
    );
}

export default Home;
