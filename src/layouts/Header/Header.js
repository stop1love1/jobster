import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Button from '@/components/Button';
import { DownArrowIcon, PersonRoundIcon, ToggleIcon } from '@/components/Icons';
import images from '@/assets';

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
            <Tippy
                interactive
                trigger="click"
                placement="bottom"
                render={(attrs) => (
                    <div tabIndex="-1" {...attrs}>
                        <Button secondary>Logout</Button>
                    </div>
                )}
            >
                <div>
                    <Button primary leftIcon={<PersonRoundIcon />} rightIcon={<DownArrowIcon />}>
                        Test user
                    </Button>
                </div>
            </Tippy>
        </header>
    );
}

export default Header;
