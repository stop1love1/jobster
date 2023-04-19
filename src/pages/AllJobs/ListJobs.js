import { memo, useContext } from 'react';
import { Link } from 'react-router-dom';
import config from '@/config/config';
import { BagIcon, FlyingArrowIcon, ScheduleIcon } from '@/components/Icons';
import { JobContext } from '@/context/JobContext';
import { deleteJob } from '@/services/actions';
import classNames from 'classnames/bind';
import styles from './AllJobs.module.scss';

const cx = classNames.bind(styles);

function ListJobs({ data = [], onSendDelete }) {
    const { setCurrentJob } = useContext(JobContext);
    const handleDelete = async (id) => {
        await deleteJob(id);
        onSendDelete(id);
    };

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
                            <Link
                                className={cx('btn', 'edit-btn')}
                                to={config.routes.addJobs}
                                onClick={() => setCurrentJob(job)}
                            >
                                Edit
                            </Link>
                            <button className={cx('btn', 'delete-btn')} onClick={() => handleDelete(job._id)}>
                                delete
                            </button>
                        </div>
                    </footer>
                </article>
            ))}
        </div>
    );
}

export default memo(ListJobs);
