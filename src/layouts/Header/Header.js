import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { ToggleIcon } from '@/components/Icons';
import images from '@/assets';
import Account from './Account';

const cx = classNames.bind(styles);

function Header({ showSidebar, onSendShowSidebar }) {
    return (
        <header className={cx('header', 'container')}>
            <button
                name="toggleBtn"
                className={cx('toggle-btn')}
                onClick={() => {
                    onSendShowSidebar(!showSidebar);
                }}
            >
                <ToggleIcon />
            </button>
            <div className={cx('title')}>
                <img src={images.logo} alt="Logo" className={cx('logo')} />
                <h3>dashboard</h3>
            </div>
            <Account />
        </header>
    );
}

export default Header;
