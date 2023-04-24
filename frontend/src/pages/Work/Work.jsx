import classNames from 'classnames/bind';
import styles from './Work.module.scss';
import { NavLink } from 'react-router-dom';

import VideoCard from '@/components/VideoCard';

const cx = classNames.bind(styles);

function Work() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('left-wrapper')}>
                <div className={cx('title')}>Filter:</div>
                <div className={cx('container')}>
                    <div className={cx('content')}>
                        <div className={cx('left-line')}></div>
                        <NavLink className={cx('text')}>All</NavLink>
                    </div>
                    <div className={cx('content')}>
                        <div className={cx('left-line')}></div>
                        <NavLink className={cx('text')}>Ads</NavLink>
                    </div>
                    <div className={cx('content')}>
                        <div className={cx('left-line')}></div>
                        <NavLink className={cx('text')}>Motion</NavLink>
                    </div>
                    <div className={cx('content')}>
                        <div className={cx('left-line')}></div>
                        <NavLink className={cx('text')}>Shorts</NavLink>
                    </div>
                </div>
            </div>
            <div className={cx('right-wrapper')}>
                <div className={cx('left-container')}>
                    <div className={cx('container')}>
                        <div className={cx('title')}>FAQ: What do you guys do?</div>
                        <div className={cx('content')}>We create content that converts.</div>
                    </div>
                    <div className={cx('list-video')}>
                        <div className={cx('line-top')}></div>
                        <div className={cx('video')}>
                            <VideoCard primary />
                        </div>
                        <div className={cx('line-bottom')}></div>
                    </div>
                    <div className={cx('list-video')}>
                        <div className={cx('line-top')}></div>
                        <div className={cx('video')}>
                            <VideoCard primary />
                        </div>
                        <div className={cx('line-bottom')}></div>
                    </div>
                    <div className={cx('list-video')}>
                        <div className={cx('line-top')}></div>
                        <div className={cx('video')}>
                            <VideoCard primary />
                        </div>
                        <div className={cx('line-bottom')}></div>
                    </div>
                </div>
                <div className={cx('main-line')}></div>
                <div className={cx('right-container')}>
                    <div className={cx('list-video', 'list-video-right')}>
                        <div className={cx('line-top')}></div>
                        <div className={cx('video')}>
                            <VideoCard primary />
                        </div>
                        <div className={cx('line-bottom')}></div>
                    </div>
                    <div className={cx('list-video', 'list-video-right')}>
                        <div className={cx('line-top')}></div>
                        <div className={cx('video')}>
                            <VideoCard primary />
                        </div>
                        <div className={cx('line-bottom')}></div>
                    </div>
                    <div className={cx('list-video', 'list-video-right')}>
                        <div className={cx('line-top')}></div>
                        <div className={cx('video')}>
                            <VideoCard primary />
                        </div>
                        <div className={cx('line-bottom')}></div>
                    </div>
                    <div className={cx('container', 'right-container-faq')}>
                        <div className={cx('title')}>FAQ: HOW CAN WE COLLABORATE?</div>
                        <div className={cx('content')}>GIVE US A SHOUT AND WE’D BE HAPPY TO ANSWER THAT TOGETHER.</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Work;
