import requestHttp from '@/utils/requestHttp';
import notifications, { SUCCESS } from '@/utils/notifications';

const demo = async () => {
    const testUser = { email: 'testUser@test.com', password: 'secret' };
    const response = await requestHttp.post('/auth/login', testUser);
    if (response.status === 200) {
        localStorage.setItem('user', JSON.stringify(response.data.user));
        notifications(SUCCESS, 'Welcome to back ' + response.data.user.name);
        return true;
    }
    return false;
};

const logout = () => {
    notifications(SUCCESS, 'Logging out...');
    localStorage.removeItem('user');
};

const login = () => {};

const register = () => {};

export { demo, login, logout, register };
