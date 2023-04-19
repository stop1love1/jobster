import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import { logout } from '@/services/auth';
import Button from '@/components/Button';
import { DownArrowIcon, PersonRoundIcon } from '@/components/Icons';
import config from '@/config/config';
import { AuthContext } from '@/context/AuthContext';
import { UserContext } from '@/context/UserContext';

function Account() {
    const { setIsAuthenticated } = useContext(AuthContext);
    const { user } = useContext(UserContext);
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
                        {user.name}
                    </Button>
                </div>
            </Tippy>
        </>
    );
}

export default Account;
