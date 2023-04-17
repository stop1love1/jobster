import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import { logout } from '@/services/auth';
import Button from '@/components/Button';
import { DownArrowIcon, PersonRoundIcon } from '@/components/Icons';
import config from '@/config/config';
import { AuthContext } from '@/context/AuthContext';

function Account() {
    const { setIsAuthenticated } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogout = () => {
        logout();
        setIsAuthenticated(false);
        navigate(config.routes.landing);
    };
    return (
        <>
            <Tippy
                interactive
                trigger="click"
                placement="bottom"
                render={(attrs) => (
                    <div tabIndex="-1" {...attrs}>
                        <Button secondary onClick={() => handleLogout()}>
                            Logout
                        </Button>
                    </div>
                )}
            >
                <div>
                    <Button primary leftIcon={<PersonRoundIcon />} rightIcon={<DownArrowIcon />}>
                        Test user
                    </Button>
                </div>
            </Tippy>
        </>
    );
}

export default Account;
