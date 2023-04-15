import { Link } from 'react-router-dom';
import images from '@/assets';
import config from '@/config';
import classNames from 'classnames/bind';
import styles from './Landing.module.scss';

const cx = classNames.bind(styles);

function Landing() {
    return (
        <main className={cx('landing')}>
            <nav className={cx('wrapper')}>
                <img src={images.logo} alt="Logo" />
            </nav>
            <div className={cx('page')}>
                <div className={cx('info')}>
                    <h1>
                        job <span>tracking</span> app
                    </h1>
                    <p>
                        Crucifix narwhal street art asymmetrical, humblebrag tote bag pop-up fixie raclette taxidermy
                        craft beer. Brunch bitters synth, VHS crucifix heirloom meggings bicycle rights.
                    </p>
                    <Link className={cx('btn', 'btn-hero')} to={config.routes.register}>Login/Register</Link>
                </div>
                <img src={images.banner} alt="Banner" className={cx('banner')} />
            </div>
        </main>
    );
}

export default Landing;
