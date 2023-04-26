import classNames from 'classnames/bind';
import styles from './About.module.scss';
import MemberCard from '@/components/MemberCard';
import Slider from '@/components/Slider/Slider';
import Skills from '@/components/Skills/Skills';
import Connective from '@/components/Connective';

const cx = classNames.bind(styles);

function About() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('navbar')}>
                <div className={cx('content')}>
                    <div className={cx('left-line')}></div>
                    <div className={cx('text')}>
                        <a href="#story">Story</a>
                    </div>
                </div>
                <div className={cx('content')}>
                    <div className={cx('left-line')}></div>
                    <a href="#team" className={cx('text')}>
                        Team
                    </a>
                </div>
                <div className={cx('content')}>
                    <div className={cx('left-line')}></div>
                    <a href="#skills" className={cx('text')}>
                        Skills
                    </a>
                </div>
                <div className={cx('content')}>
                    <div className={cx('left-line')}></div>
                    <a href="#clients" className={cx('text')}>
                        Clients
                    </a>
                </div>
            </div>
            <div id="story" className={cx('story')}>
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
            <div id="team" className={cx('team')}>
                <Slider>WE ARE A TIGHTLY-KNIT TEAM.</Slider>
                <MemberCard />
            </div>
            <div id="skills" className={cx('skills')}>
                <Slider>WE WORK DAY IN DAY OUT TO ELEVATE BRANDS.</Slider>
                <Skills />
            </div>
            <div id="clients" className={cx('clients')}>
                <Slider primary>WE CULTIVATE RELATIONSHIPS THROUGH CONTENT.</Slider>
                <div className={cx('line')}></div>
                <Connective />
            </div>
        </div>
    );
}

export default About;
