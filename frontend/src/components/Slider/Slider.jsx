import classNames from 'classnames/bind';
import styles from './Slider.module.scss';
import { useEffect, useRef, useState } from 'react';

const cx = classNames.bind(styles);

function Slider({ children, primary }) {
    const [marginLeft, setMarginLeft] = useState('160px');
    const teamRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const teamElement = teamRef.current;

            if (teamElement) {
                const teamElementTop = teamElement.offsetTop;
                const teamElementHeight = teamElement.clientHeight;
                const windowHeight = window.innerHeight;
                const scrollTopMax = teamElementTop + teamElementHeight - windowHeight;
                const scrollTopMin = teamElementTop - windowHeight;

                let newMarginLeft = 100 + ((scrollTop - scrollTopMin) / (scrollTopMax - scrollTopMin)) * 100;

                if (newMarginLeft >= 650) {
                    newMarginLeft = 650;
                }

                const strMarginLeft = `${newMarginLeft}px`;
                setMarginLeft(strMarginLeft);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const classes = cx('wrapper', { primary });

    return (
        <div className={classes}>
            <div className={cx('title')} style={{ marginLeft }} ref={teamRef}>
                {children}
            </div>
        </div>
    );
}

export default Slider;
