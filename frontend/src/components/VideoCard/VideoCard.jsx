import classNames from 'classnames/bind';
import styles from './VideoCard.module.scss';

const cx = classNames.bind(styles);

function VideoCard({ primary }) {
    const classes = cx('wrapper', { primary });

    return (
        <div className={classes}>
            <div className={cx('container')}>
                <video
                    className={cx('video')}
                    src="https://5scontent.com/app/uploads/2022/04/Snippet_KOTI-1.mp4"
                    controls
                    loop
                    // autoplay
                />
            </div>
            <div className={cx('bottom')}>
                <div className={cx('name')}>CONG HIEU</div>
                <div className={cx('slider')}>
                    <div className={cx('title')}>CONG HIEU</div>
                    <div className={cx('title')}>CONG HIEU</div>
                    <div className={cx('title')}>CONG HIEU</div>
                    <div className={cx('title')}>CONG HIEU</div>
                    <div className={cx('title')}>CONG HIEU</div>
                    <div className={cx('title')}>CONG HIEU</div>
                </div>
            </div>
            <div className={cx('line')}></div>
        </div>
    );
}

export default VideoCard;
