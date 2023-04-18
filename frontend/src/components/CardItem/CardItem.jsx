import classNames from 'classnames/bind';
import styles from './CardItem.module.scss';

const cx = classNames.bind(styles);

function CardItem() {
    return (
        <div className={cx('wrapper')}>
            <video
                className={cx('video')}
                src="https://5scontent.com/app/uploads/2022/04/Snippet_KOTI-1.mp4"
                controls
                loop
                // autoplay
            />
            <div className={cx('name')}>CONG HIEU</div>
            <div className={cx('slider')}>
                <div className={cx('title')}>CONG HIEU</div>
                <div className={cx('title')}>CONG HIEU</div>
                <div className={cx('title')}>CONG HIEU</div>
                <div className={cx('title')}>CONG HIEU</div>
                <div className={cx('title')}>CONG HIEU</div>
                <div className={cx('title')}>CONG HIEU</div>
            </div>
            <div className={cx('line')}></div>
        </div>
    );
}

export default CardItem;
