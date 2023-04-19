import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { AddJobIcon, CloseIcon, ProfileIcon, StatsIcon } from '@/components/Icons';
import images from '@/assets';
import { Link } from 'react-router-dom';
import config from '@/config';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Sidebar({ showSidebar, onSendShowSidebar }) {
    const items = [
        { title: 'stats', icon: StatsIcon, to: config.routes.stats },
        { title: 'all jobs', icon: AddJobIcon, to: config.routes.allJobs },
        { title: 'add job', icon: AddJobIcon, to: config.routes.addJobs },
        { title: 'profile', icon: ProfileIcon, to: config.routes.profile },
    ];

    const [activeItem, setActiveItem] = useState(0);

    return (
        <div>
            <aside className={cx('sidebar', showSidebar && 'active')}>
                <div className={cx('content')}>
                    <header>
                        <Link to={config.routes.stats}>
                            <img src={images.logo} alt="Logo" className={cx('logo')} />
                        </Link>
                    </header>
                    <nav className={cx('nav-links')}>
                        {items.map((item, index) => (
                            <Link
                                key={index}
                                className={cx('link', `${activeItem === index && 'active'}`)}
                                to={item.to}
                                onClick={() => setActiveItem(index)}
                            >
                                <item.icon className={cx('icon')} />
                                {item.title}
                            </Link>
                        ))}
                    </nav>
                </div>
            </aside>
            <aside className={cx('modal')}>
                <div className={cx('modal-container', !showSidebar && 'active')}>
                    <div className={cx('modal-content')}>
                        <button className={cx('close-btn')} onClick={() => onSendShowSidebar(!showSidebar)}>
                            <CloseIcon />
                        </button>
                        <header>
                            <Link to={config.routes.stats}>
                                <img src={images.logo} alt="Logo" className={cx('logo')} />
                            </Link>
                        </header>
                        <nav className={cx('nav-links')}>
                            {items.map((item, index) => (
                                <Link
                                    key={index}
                                    className={cx('link', `${activeItem === index && 'active'}`)}
                                    to={item.to}
                                    onClick={() => {
                                        setActiveItem(index);
                                        onSendShowSidebar(!showSidebar);
                                    }}
                                >
                                    <item.icon className={cx('icon')} />
                                    {item.title}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            </aside>
        </div>
    );
}

export default Sidebar;
