import { useCallback, useState, useEffect } from 'react';
import { useDebounce } from '@/hooks';
import ListJobs from './ListJobs';
import { getJobs } from '@/utils/requestHttp';
import Loading from '@/components/Loading';
import Pagination from './Paginations';
import classNames from 'classnames/bind';
import styles from './AllJobs.module.scss';

const cx = classNames.bind(styles);

function AllJobs() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const [status, setStatus] = useState('all');
    const [jobType, setJobType] = useState('all');
    const [sort, setSort] = useState('latest');
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const debouncedSearchTerm = useDebounce(search);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const result = await getJobs(debouncedSearchTerm, status, jobType, sort, 1);
            setData(result);
            setLoading(false);
            setPage(1);
        };
        fetchData();
    }, [debouncedSearchTerm, status, jobType, sort]);

    const handlePaging = useCallback(
        async (activePage) => {
            setPage(activePage);
            setLoading(true);
            setData(await getJobs(search, status, jobType, sort, activePage));
            setLoading(false);
        },
        [search, status, jobType, sort],
    );

    const handleSearch = (value) => {
        setSearch(value);
    };

    const handleDelete = (id) => {
        setData({ ...data, totalJobs: data.jobs.length - 1, jobs: data.jobs.filter((job) => job._id !== id) });
    };

    const handleClear = (e) => {
        e.preventDefault();
        setSearch('');
        setStatus('all');
        setJobType('all');
        setSort('latest');
        setPage(1);
    };

    return (
        <div className={cx('all-jobs', 'container')}>
            <div className={cx('page')}>
                <form className={cx('form', 'wrap')}>
                    <h4>search form</h4>
                    <div className={cx('form-center')}>
                        <div className={cx('form-row')}>
                            <label className={cx('form-label')}>search</label>
                            <input
                                id="search"
                                type="text"
                                name="search"
                                className={cx('form-input')}
                                defaultValue=""
                                onChange={(e) => handleSearch(e.target.value)}
                            />
                        </div>
                        <div className={cx('form-row')}>
                            <label className={cx('form-label')}>status</label>
                            <select
                                name="searchStatus"
                                id="searchStatus"
                                className={cx('form-select')}
                                onChange={(e) => setStatus(e.target.value)}
                            >
                                <option value="all">all</option>
                                <option value="interview">interview</option>
                                <option value="declined">declined</option>
                                <option value="pending">pending</option>
                            </select>
                        </div>
                        <div className={cx('form-row')}>
                            <label className={cx('form-label')}>type</label>
                            <select
                                name="searchType"
                                id="searchType"
                                className={cx('form-select')}
                                onChange={(e) => setJobType(e.target.value)}
                            >
                                <option value="all">all</option>
                                <option value="full-time">full-time</option>
                                <option value="part-time">part-time</option>
                                <option value="remote">remote</option>
                                <option value="internship">internship</option>
                            </select>
                        </div>
                        <div className={cx('form-row')}>
                            <label className={cx('form-label')}>sort</label>
                            <select
                                name="sort"
                                id="sort"
                                className="form-select"
                                onChange={(e) => setSort(e.target.value)}
                            >
                                <option value="latest">latest</option>
                                <option value="oldest">oldest</option>
                                <option value="a-z">a-z</option>
                                <option value="z-a">z-a</option>
                            </select>
                        </div>
                        <button
                            type="submit"
                            className={cx('btn', 'btn-danger', 'btn-block', 'clear-btn')}
                            onClick={handleClear}
                        >
                            clear filters
                        </button>
                    </div>
                </form>

                {loading ? (
                    <Loading />
                ) : (
                    <>
                        {data.totalJobs > 0 ? (
                            <>
                                <section className={cx('sc')}>
                                    <h5>{data.totalJobs} jobs found</h5>
                                    <ListJobs data={data.jobs} onSendDelete={handleDelete} />
                                </section>
                                <Pagination numOfPages={data.numOfPages} currentPage={page} onSendPage={handlePaging} />
                            </>
                        ) : (
                            <h2>No job to display...</h2>
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

export default AllJobs;
