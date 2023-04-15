import classNames from 'classnames/bind';
import styles from './AllJobs.module.scss';
import { BagIcon, FlyingArrowIcon, NextIcon, PrevIcon, ScheduleIcon } from '@/components/Icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function AllJobs() {
    return (
        <div className={cx('all-jobs', 'container')}>
            <div className={cx('page')}>
                <form className={cx('form', 'wrap')}>
                    <h4>search form</h4>
                    <div className={cx('form-center')}>
                        <div className={cx('form-row')}>
                            <label className={cx('form-label')}>search</label>
                            <input id="search" type="text" name="search" className={cx('form-input')} defaultValue="" />
                        </div>
                        <div className={cx('form-row')}>
                            <label className={cx('form-label')}>status</label>
                            <select name="searchStatus" id="searchStatus" className={cx('form-select')}>
                                <option value="all">all</option>
                                <option value="interview">interview</option>
                                <option value="declined">declined</option>
                                <option value="pending">pending</option>
                            </select>
                        </div>
                        <div className={cx('form-row')}>
                            <label className={cx('form-label')}>type</label>
                            <select name="searchType" id="searchType" className={cx('form-select')}>
                                <option value="all">all</option>
                                <option value="full-time">full-time</option>
                                <option value="part-time">part-time</option>
                                <option value="remote">remote</option>
                                <option value="internship">internship</option>
                            </select>
                        </div>
                        <div className={cx('form-row')}>
                            <label className={cx('form-label')}>sort</label>
                            <input id="search" type="text" name="search" className={cx('form-input')} defaultValue="" />
                        </div>
                        <button className={cx('btn', 'btn-danger', 'btn-block', 'clear-btn')}>clear filters</button>
                    </div>
                </form>
                <section className={cx('sc')}>
                    <h5>75 jobs found</h5>
                    <div className={cx('jobs')}>
                        <article className={cx('job-item')}>
                            <header>
                                <div className={cx('main-icon')}>B</div>
                                <div className={cx('info')}>
                                    <h5>Civil Engineer</h5>
                                    <p>Bechtelar-Bednar</p>
                                </div>
                            </header>
                            <div className={cx('content')}>
                                <div className={cx('content-center')}>
                                    <div className={cx('content-item')}>
                                        <span>
                                            <FlyingArrowIcon className={cx('icon')} />
                                        </span>
                                        <span className={cx('text')}>Kiamba</span>
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
                                        <span className={cx('text')}>Internship</span>
                                    </div>
                                    <div className={cx('status', 'declined')}>declined</div>
                                </div>
                            </div>
                            <footer>
                                <div className={cx('actions')}>
                                    <Link className={cx('btn', 'edit-btn')}>Edit</Link>
                                    <button className={cx('btn', 'delete-btn')}>delete</button>
                                </div>
                            </footer>
                        </article>
                        <article className={cx('job-item')}>
                            <header>
                                <div className={cx('main-icon')}>B</div>
                                <div className={cx('info')}>
                                    <h5>Civil Engineer</h5>
                                    <p>Bechtelar-Bednar</p>
                                </div>
                            </header>
                            <div className={cx('content')}>
                                <div className={cx('content-center')}>
                                    <div className={cx('content-item')}>
                                        <span>
                                            <FlyingArrowIcon className={cx('icon')} />
                                        </span>
                                        <span className={cx('text')}>Kiamba</span>
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
                                        <span className={cx('text')}>Internship</span>
                                    </div>
                                    <div className={cx('status', 'declined')}>declined</div>
                                </div>
                            </div>
                            <footer>
                                <div className={cx('actions')}>
                                    <Link className={cx('btn', 'edit-btn')}>Edit</Link>
                                    <button className={cx('btn', 'delete-btn')}>delete</button>
                                </div>
                            </footer>
                        </article>
                        <article className={cx('job-item')}>
                            <header>
                                <div className={cx('main-icon')}>B</div>
                                <div className={cx('info')}>
                                    <h5>Civil Engineer</h5>
                                    <p>Bechtelar-Bednar</p>
                                </div>
                            </header>
                            <div className={cx('content')}>
                                <div className={cx('content-center')}>
                                    <div className={cx('content-item')}>
                                        <span>
                                            <FlyingArrowIcon className={cx('icon')} />
                                        </span>
                                        <span className={cx('text')}>Kiamba</span>
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
                                        <span className={cx('text')}>Internship</span>
                                    </div>
                                    <div className={cx('status', 'declined')}>declined</div>
                                </div>
                            </div>
                            <footer>
                                <div className={cx('actions')}>
                                    <Link className={cx('btn', 'edit-btn')}>Edit</Link>
                                    <button className={cx('btn', 'delete-btn')}>delete</button>
                                </div>
                            </footer>
                        </article>
                        <article className={cx('job-item')}>
                            <header>
                                <div className={cx('main-icon')}>B</div>
                                <div className={cx('info')}>
                                    <h5>Civil Engineer</h5>
                                    <p>Bechtelar-Bednar</p>
                                </div>
                            </header>
                            <div className={cx('content')}>
                                <div className={cx('content-center')}>
                                    <div className={cx('content-item')}>
                                        <span>
                                            <FlyingArrowIcon className={cx('icon')} />
                                        </span>
                                        <span className={cx('text')}>Kiamba</span>
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
                                        <span className={cx('text')}>Internship</span>
                                    </div>
                                    <div className={cx('status', 'declined')}>declined</div>
                                </div>
                            </div>
                            <footer>
                                <div className={cx('actions')}>
                                    <Link className={cx('btn', 'edit-btn')}>Edit</Link>
                                    <button className={cx('btn', 'delete-btn')}>delete</button>
                                </div>
                            </footer>
                        </article>
                    </div>
                </section>
                <section className={cx('pagination')}>
                    <button className={cx('prev-btn')}>
                        <PrevIcon /> prev
                    </button>
                    <div className="btn-container">
                        <button type="button" className={cx('pageBtn', 'active')}>
                            1
                        </button>
                        <button type="button" className={cx('pageBtn')}>
                            2
                        </button>
                        <button type="button" className={cx('pageBtn')}>
                            3
                        </button>
                        <button type="button" className={cx('pageBtn')}>
                            4
                        </button>
                        <button type="button" className={cx('pageBtn')}>
                            5
                        </button>
                        <button type="button" className={cx('pageBtn')}>
                            6
                        </button>
                        <button type="button" className={cx('pageBtn')}>
                            7
                        </button>
                        <button type="button" className={cx('pageBtn')}>
                            8
                        </button>
                    </div>
                    <button className={cx('next-btn')}>
                        <NextIcon /> next
                    </button>
                </section>
            </div>
        </div>
    );
}

export default AllJobs;
