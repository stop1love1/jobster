import { memo } from 'react';
import { InterviewsScheduledIcon, JobsDeclinedIcon, PendingApplicationsIcon } from '@/components/Icons';

import classNames from 'classnames/bind';
import styles from './Stats.module.scss';

const cx = classNames.bind(styles);

function DashBoard({ data }) {
    return (
        <section className={cx('sc')}>
            <article className={cx('item')}>
                <header>
                    <span className={cx('count')}>{data ? data.pending : 0}</span>
                    <span className={cx('icon-img')}>
                        <PendingApplicationsIcon className={cx('icon')} />
                    </span>
                </header>
                <h5 className={cx('title')}>pending applications</h5>
            </article>
            <article className={cx('item')}>
                <header>
                    <span className={cx('count')}>{data ? data.interview : 0}</span>
                    <span className={cx('icon-img')}>
                        <InterviewsScheduledIcon className={cx('icon')} />
                    </span>
                </header>
                <h5 className={cx('title')}>interviews scheduled</h5>
            </article>
            <article className={cx('item')}>
                <header>
                    <span className={cx('count')}>{data ? data.declined : 0}</span>
                    <span className={cx('icon-img')}>
                        <JobsDeclinedIcon className={cx('icon')} />
                    </span>
                </header>
                <h5 className={cx('title')}>jobs declined</h5>
            </article>
        </section>
    );
}

export default memo(DashBoard);
