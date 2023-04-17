import { memo } from 'react';
import classNames from 'classnames/bind';
import styles from './AllJobs.module.scss';
import { BagIcon, FlyingArrowIcon, ScheduleIcon } from '@/components/Icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ListJobs({ data }) {
    if (!data) {
        return <h1>No jobs to display...</h1>;
    }

    return (
        <div className={cx('jobs')}>
            {data.map((job, index) => (
                <article key={index} className={cx('job-item')}>
                    <header>
                        <div className={cx('main-icon')}>{job.company.charAt(0)}</div>
                        <div className={cx('info')}>
                            <h5>{job.position}</h5>
                            <p>{job.company}</p>
                        </div>
                    </header>
                    <div className={cx('content')}>
                        <div className={cx('content-center')}>
                            <div className={cx('content-item')}>
                                <span>
                                    <FlyingArrowIcon className={cx('icon')} />
                                </span>
                                <span className={cx('text')}>{job.jobLocation}</span>
                            </div>
                            <div className={cx('content-item')}>
                                <span>
                                    <ScheduleIcon className={cx('icon')} />
                                </span>
                                <span className={cx('text')}>Dec 27th, 2021</span>
                            </div>
                            <div className={cx('content-item')}>
                                <span>
                                    <BagIcon className={cx('icon')} />
                                </span>
                                <span className={cx('text')}>{job.jobType}</span>
                            </div>
                            <div className={cx('status', `${job.status}`)}>{job.status}</div>
                        </div>
                    </div>
                    <footer>
                        <div className={cx('actions')}>
                            <Link className={cx('btn', 'edit-btn')}>Edit</Link>
                            <button className={cx('btn', 'delete-btn')}>delete</button>
                        </div>
                    </footer>
                </article>
            ))}
        </div>
    );
}

export default memo(ListJobs);
