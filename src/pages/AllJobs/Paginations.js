import { useCallback, memo } from 'react';
import { NextIcon, PrevIcon } from '@/components/Icons';
import classNames from 'classnames/bind';
import styles from './AllJobs.module.scss';

const cx = classNames.bind(styles);

function Pagination({ numOfPages, onSendPage, currentPage }) {
    const handleClickPage = useCallback(
        (page) => {
            onSendPage(page);
        },
        [onSendPage],
    );

    const pages = Array.from({ length: numOfPages }, (_, index) => {
        const page = index + 1;
        return (
            <button
                key={page}
                type="button"
                className={cx('pageBtn', currentPage === page && 'active')}
                onClick={() => handleClickPage(page)}
            >
                {page}
            </button>
        );
    });

    return (
        <section className={cx('pagination')}>
            <button
                className={cx('prev-btn')}
                onClick={() => handleClickPage(currentPage === 1 ? numOfPages : currentPage - 1)}
            >
                <PrevIcon /> prev
            </button>
            <div className="btn-container">{pages}</div>
            <button
                className={cx('next-btn')}
                onClick={() => handleClickPage(currentPage === numOfPages ? 1 : currentPage + 1)}
            >
                <NextIcon /> next
            </button>
        </section>
    );
}

export default memo(Pagination);
