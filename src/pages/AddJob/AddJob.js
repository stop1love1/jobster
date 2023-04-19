import { useContext, useRef, useState } from 'react';
import { JobContext } from '@/context/JobContext';
import { addJob, editJob } from '@/services/actions';
import classNames from 'classnames/bind';
import styles from './AddJob.module.scss';

const cx = classNames.bind(styles);

function AddJob() {
    const { currentJob, setCurrentJob } = useContext(JobContext);
    const [isEditing, setIsEditing] = useState(currentJob ? true : false);

    const positionRef = useRef();
    const companyRef = useRef();
    const jobLocationRef = useRef();
    const statusRef = useRef();
    const jobTypeRef = useRef();

    const onUpdateJob = async (e) => {
        e.preventDefault();
        const newJob = {
            company: companyRef.current.value,
            jobLocation: jobLocationRef.current.value,
            jobType: jobTypeRef.current.value,
            position: positionRef.current.value,
            status: statusRef.current.value,
        };
        if (isEditing) {
            const res = await editJob(currentJob._id, newJob);
            if (res) {
                setCurrentJob({ _id: currentJob._id, ...newJob });
            }
        } else {
            await addJob(newJob);
        }
    };

    const handleClear = () => {
        setIsEditing(false);
        positionRef.current.value = '';
        companyRef.current.value = '';
        jobLocationRef.current.value = 'vegan food truck';
        statusRef.current.selectedIndex = 0;
        jobTypeRef.current.selectedIndex = 0;
        setCurrentJob(null);
    };

    return (
        <div className="container">
            <form onSubmit={onUpdateJob} className="form wrap">
                <h4>{isEditing ? 'edit' : 'add'} job</h4>
                <div className="form-center">
                    <div className="form-row">
                        <label className="form-label">position</label>
                        <input
                            ref={positionRef}
                            id="position"
                            type="text"
                            name="position"
                            className="form-input"
                            defaultValue={currentJob && currentJob.position}
                        />
                    </div>
                    <div className="form-row">
                        <label className="form-label">company</label>
                        <input
                            ref={companyRef}
                            id="company"
                            type="text"
                            name="company"
                            className="form-input"
                            defaultValue={currentJob && currentJob.company}
                        />
                    </div>
                    <div className="form-row">
                        <label className="form-label">job location</label>
                        <input
                            ref={jobLocationRef}
                            id="jobLocation"
                            type="text"
                            name="jobLocation"
                            className="form-input"
                            defaultValue={currentJob && currentJob.jobLocation}
                        />
                    </div>
                    <div className="form-row">
                        <label className="form-label">status</label>
                        <select
                            ref={statusRef}
                            name="status"
                            id="status"
                            className="form-select"
                            defaultValue={currentJob && currentJob.status}
                        >
                            <option value="interview">interview</option>
                            <option value="declined">declined</option>
                            <option value="pending">pending</option>
                        </select>
                    </div>
                    <div className="form-row">
                        <label className="form-label">Job Type</label>
                        <select
                            ref={jobTypeRef}
                            name="jobType"
                            id="jobType"
                            className="form-select"
                            defaultValue={currentJob && currentJob.jobType}
                        >
                            <option value="full-time">full-time</option>
                            <option value="part-time">part-time</option>
                            <option value="remote">remote</option>
                            <option value="internship">internship</option>
                        </select>
                    </div>
                    <div className={cx('btn-container')}>
                        <button
                            type="button"
                            className={cx('btn', 'btn-block', 'clear-btn')}
                            onClick={() => handleClear()}
                        >
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
