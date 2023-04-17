import { useEffect, useState } from 'react';
import Chart from '@/components/Chart';
import DashBoard from './DashBoard';
import { get } from '@/utils/requestHttp';
import classNames from 'classnames/bind';
import styles from './Stats.module.scss';

const cx = classNames.bind(styles);

function Stats() {
    const [data, setdata] = useState([]);
    const [typeChart, setTypeChart] = useState('bar');

    useEffect(() => {
        const getData = async () => setdata(await get('/jobs/stats'));
        getData();
    }, []);
    return (
        <main className={cx('stats', 'container')}>
            <div className={cx('dashboard-page')}>
                <DashBoard data={data.defaultStats} />
                <section className={cx('monthly')}>
                    <h4>Monthly Applications</h4>
                    <button
                        type="button"
                        className={cx('areaChart-btn')}
                        onClick={() => setTypeChart(typeChart === 'bar' ? 'area' : 'bar')}
                    >
                        {typeChart === 'bar' ? 'area' : 'bar'} Chart
                    </button>
                    {data.monthlyApplications && <Chart data={data.monthlyApplications} type={typeChart} />}
                </section>
            </div>
        </main>
    );
}

export default Stats;
