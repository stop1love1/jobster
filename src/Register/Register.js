import images from '@/assets';
import classNames from 'classnames/bind';
import styles from './Register.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Register() {
    const [status, setStatus] = useState(true);
    return (
        <section className={cx('sc')}>
            <form className={cx('form', 'wrapper')}>
                <img src={images.logo} alt="Logo" />
                <h3>{status ? 'Login' : 'Register'}</h3>
                {!status && (
                    <div class="form-row">
                        <label className="form-label">name</label>
                        <input id="name" type="text" name="name" className="form-input" defaultValue="" />
                    </div>
                )}
                <div class="form-row">
                    <label className="form-label">email</label>
                    <input id="email" type="email" name="email" className="form-input" defaultValue="" />
                </div>
                <div class="form-row">
                    <label className="form-label">password</label>
                    <input id="password" type="password" name="password" className="form-input" defaultValue="" />
                </div>
                <button type="submit" className={cx('btn', 'btn-block', 'button')}>
                    submit
                </button>
                <button type="button" className={cx('btn btn-block btn-hipster', 'button')}>
                    demo app
                </button>
                <p className={cx('already')}>
                    {status ? 'Not a member yet?' : ' Already a member?'}
                    <button type="button" className={cx('member-btn')} onClick={() => setStatus(!status)}>
                        {status ? 'Register' : 'Login'}
                    </button>
                </p>
            </form>
        </section>
    );
}

export default Register;
