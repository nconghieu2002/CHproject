import classNames from 'classnames/bind';
import styles from './About.module.scss';
import { NavLink } from 'react-router-dom';

import MemberCard from '@/components/MemberCard';
import Slider from '@/components/Slider/Slider';
import Connective from '@/components/Connective';

const cx = classNames.bind(styles);

function About() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('navbar')}>
                <div className={cx('content')}>
                    <div className={cx('left-line')}></div>
                    <NavLink className={cx('text')}>Story</NavLink>
                </div>
                <div className={cx('content')}>
                    <div className={cx('left-line')}></div>
                    <NavLink className={cx('text')}>Team</NavLink>
                </div>
                <div className={cx('content')}>
                    <div className={cx('left-line')}></div>
                    <NavLink className={cx('text')}>Skills</NavLink>
                </div>
                <div className={cx('content')}>
                    <div className={cx('left-line')}></div>
                    <NavLink className={cx('text')}>Clients</NavLink>
                </div>
            </div>
            <div className={cx('story')}>
                <div className={cx('title')}>
                    WE'VE BROKEN FREE OF AGENCY VS. PRODUCTION SILOS AND HAVE DEVELOPED A PLACE WHERE BOTH CREATIVE AND
                    ANALYTICAL MINDS CAN THRIVE.
                </div>
                <div className={cx('content')}>
                    <div className={cx('left-content')}>
                        5S IS A FULL-SERVICE CREATIVE STUDIO WITH NO HIDDEN AGENDA. FUELLED BY TRANSPARENCY AND
                        INSIGHTS, WE HELP OUR CLIENTS BREAK BOUNDARIES. SIMPLY PUT - WE CREATE CONTENT THAT CONVERTS.
                    </div>
                    <div className={cx('right-content')}>
                        MOST IMPORTANTLY, 5S CARES AS MUCH ABOUT ELEVATING YOUR BRAND OR AGENCY AS IT DOES ABOUT
                        PRODUCING PROJECTS THAT WOW, MOVE AND EXCITE AUDIENCES. READY TO MAKE AN IMPRESSION TOGETHER?
                    </div>
                </div>
            </div>
            <div className={cx('team')}>
                <Slider>WE ARE A TIGHTLY-KNIT TEAM.</Slider>
                <MemberCard />
            </div>
            <div className={cx('team')}>
                <Slider>WE ARE A TIGHTLY-KNIT TEAM.</Slider>
                <MemberCard />
            </div>
            <div className={cx('clients')}></div>
        </div>
    );
}

export default About;
