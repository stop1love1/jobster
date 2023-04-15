import classNames from 'classnames/bind';
import styles from './AddJob.module.scss';

const cx = classNames.bind(styles);

function AddJob() {
    return (
        <div className="container">
            <form className="form wrap">
                <h4>add job</h4>
                <div className="form-center">
                    <div className="form-row">
                        <label className="form-label">position</label>
                        <input id="position" type="text" name="position" className="form-input" defaultValue="" />
                    </div>
                    <div className="form-row">
                        <label className="form-label">company</label>
                        <input id="company" type="text" name="company" className="form-input" defaultValue="" />
                    </div>
                    <div className="form-row">
                        <label className="form-label">job location</label>
                        <input
                            id="jobLocation"
                            type="text"
                            name="jobLocation"
                            className="form-input"
                            defaultValue="vegan food truck"
                        />
                    </div>
                    <div className="form-row">
                        <label className="form-label">status</label>
                        <select name="status" id="status" className="form-select">
                            <option value="interview">interview</option>
                            <option value="declined">declined</option>
                            <option value="pending">pending</option>
                        </select>
                    </div>
                    <div className="form-row">
                        <label className="form-label">status</label>
                        <select name="status" id="status" className="form-select">
                            <option value="interview">interview</option>
                            <option value="declined">declined</option>
                            <option value="pending">pending</option>
                        </select>
                    </div>
                    <div className={cx('btn-container')}>
                        <button type="button" className={cx('btn', 'btn-block', 'clear-btn')}>
                            clear
                        </button>
                        <button type="submit" className={cx('btn', 'btn-block', 'submit-btn')}>
                            submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AddJob;
