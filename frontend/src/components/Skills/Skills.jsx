import classNames from 'classnames/bind';
import styles from './Skills.module.scss';
import { MdOutlineContentCopy } from 'react-icons/md';
import { BsCameraReels, BsCloudFog } from 'react-icons/bs';
import { BiMessageMinus } from 'react-icons/bi';
import { RiSearchEyeLine } from 'react-icons/ri';
import { CgFilm } from 'react-icons/cg';

const cx = classNames.bind(styles);

function Skills() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('line')}></div>
            <div className={cx('title')}>our skills</div>
            <div className={cx('line')}></div>
            <div className={cx('container')}>
                <div className={cx('card-left')}>
                    <MdOutlineContentCopy className={cx('icon')} />
                    <div className={cx('content')}>
                        <div className={cx('header')}>CONTENT STRATEGY</div>
                        <div className={cx('text')}>
                            CONTEXT IS THE KEY TO CONTENT. WE ENSURE THAT YOUR AUDIENCE CONSUMES THE RIGHT CONTENT, ON
                            THE RIGHT PLATFORM, AT THE RIGHT TIME.
                        </div>
                    </div>
                </div>
                <div className={cx('card-right')}>
                    <BsCameraReels className={cx('icon')} />
                    <div className={cx('content')}>
                        <div className={cx('header')}>BRANDED CONTENT</div>
                        <div className={cx('text')}>
                            TELL STORIES WITH A PURPOSE. FROM CONCEPT TO DELIVERY, WE NURTURE ALL ASPECTS OF BRANDED
                            CONTENT TO BRING YOUR BRAND TO BOLD NEW HEIGHTS.
                        </div>
                    </div>
                </div>
                <div className={cx('card-left')}>
                    <BiMessageMinus className={cx('icon')} />
                    <div className={cx('content')}>
                        <div className={cx('header')}>SOCIAL CONTENT</div>
                        <div className={cx('text')}>
                            A STORY OR A POST, NO MATTER THE NETWORK, WE ASSURE SOCIAL ENGAGEMENT. SHARES, LIKES AND
                            HASHTAGS GUARANTEED.
                        </div>
                    </div>
                </div>
                <div className={cx('card-right')}>
                    <BsCloudFog className={cx('icon')} />
                    <div className={cx('content')}>
                        <div className={cx('header')}>MOTION DESIGN</div>
                        <div className={cx('text')}>
                            REACH BEYOND YOUR REACH. OUR SMART PROMOTIONAL TACTICS GIVE CONTENT THE EXPOSURE IT
                            DESERVES. LET’S MANAGE YOUR AWARENESS TOGETHER.
                        </div>
                    </div>
                </div>
                <div className={cx('card-left')}>
                    <RiSearchEyeLine className={cx('icon')} />
                    <div className={cx('content')}>
                        <div className={cx('header')}>ART DIRECTION + DESIGN</div>
                        <div className={cx('text')}>
                            LOOKING FOR AN IDENTITY FACELIFT? WE WORK WITH ACCOMPLISHED ARTISANS IN CRAFTING MEMORABLE
                            VISUAL SIGNATURES ACROSS ALL PLATFORMS.
                        </div>
                    </div>
                </div>
                <div className={cx('card-right')}>
                    <CgFilm className={cx('icon')} />
                    <div className={cx('content')}>
                        <div className={cx('header')}>CREATIVE COUNSELLING</div>
                        <div className={cx('text')}>
                            A FRESH PERSPECTIVE GOES A LONG WAY. BROADEN YOUR HORIZONS BY BRAINSTORMING WITH US. YOU’LL
                            NEVER LOOK BACK.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
