import Chart from '@/components/Chart';
import DashBoard from './DashBoard';
import classNames from 'classnames/bind';
import styles from './Stats.module.scss';

const cx = classNames.bind(styles);

function Stats() {
    return (
        <main className={cx('stats', 'container')}>
            <div className={cx('dashboard-page')}>
                <DashBoard />
                <section className={cx('monthly')}>
                    <h4>Monthly Applications</h4>
                    <button type="button" className={cx('areaChart-btn')}>
                        Area Chart
                    </button>
                    <Chart />
                </section>
            </div>
        </main>
    );
}

export default Stats;
