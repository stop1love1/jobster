import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import images from '@/assets';
import { demo, login, register } from '@/services/auth';
import { AuthContext } from '@/context/AuthContext';
import config from '@/config/config';
import classNames from 'classnames/bind';
import styles from './Register.module.scss';

const cx = classNames.bind(styles);

function Register() {
    const navigate = useNavigate();
    const { setIsAuthenticated } = useContext(AuthContext);
    const [status, setStatus] = useState(true);
    const [loading, setLoading] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const demoApp = async () => {
        setLoading(true);
        const res = await demo();
        if (res) {
            setLoading(false);
            setIsAuthenticated(true);
            navigate(config.routes.stats);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (!status) {
            const res = await register(name, email, password);
            if (res) {
                setIsAuthenticated(true);
                navigate(config.routes.stats);
            }
        } else {
            const res = await login(email, password);
            if (res) {
                setIsAuthenticated(true);
                navigate(config.routes.stats);
            }
        }
        setLoading(false);
    };

    return (
        <section className={cx('sc')}>
            <form className={cx('form', 'wrapper')}>
                <img src={images.logo} alt="Logo" />
                <h3>{status ? 'Login' : 'Register'}</h3>
                {!status && (
                    <div className="form-row">
                        <label className="form-label">name</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            className="form-input"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                )}
                <div className="form-row">
                    <label className="form-label">email</label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        className="form-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-row">
                    <label className="form-label">password</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        className="form-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className={cx('btn', 'btn-block', 'button')} onClick={handleSubmit}>
                    {loading ? 'Loading...' : 'submit'}
                </button>
                <button type="button" className={cx('btn btn-block btn-hipster', 'button')} onClick={() => demoApp()}>
                    {loading ? 'Loading...' : 'demo app'}
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
