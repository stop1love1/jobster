import requestHttp, { PATCH, request } from '@/utils/requestHttp';
import notifications, { ERROR, SUCCESS } from '@/utils/notifications';
import config from '@/config';

const demo = async () => {
    const testUser = { email: 'testUser@test.com', password: 'secret' };
    const response = await requestHttp.post(config.api.login, testUser);
    if (response.status === 200) {
        localStorage.setItem(config.localStorage.user, JSON.stringify(response.data.user));
        notifications(SUCCESS, 'Welcome to back ' + response.data.user.name);
        return true;
    }
    return false;
};

const logout = () => {
    notifications(SUCCESS, 'Logging out...');
    localStorage.removeItem(config.localStorage.user);
};

const login = async (email, password) => {
    try {
        const user = { email, password };
        const response = await requestHttp.post(config.api.login, user);
        notifications(SUCCESS, 'Welcome to ' + response.data.user.name);
        localStorage.setItem(config.localStorage.user, JSON.stringify(response.data.user));
        return response;
    } catch (error) {
        notifications(ERROR, error.response.data.msg);
    }
};

const register = async (name, email, password) => {
    try {
        const newUser = { name, email, password };
        const response = await requestHttp.post(config.api.register, newUser);
        if (response.data) {
            await login(email, password);
        } else {
            notifications(ERROR, response.response.data.msg);
        }
        return response;
    } catch (error) {
        notifications(ERROR, error.response.data.msg);
    }
};

const updateUser = async (user) => {
    try {
        const response = await request(PATCH, config.api.updateUser, user);
        localStorage.setItem(config.localStorage.user, JSON.stringify(response.user));
        notifications(SUCCESS, 'User Updated! ');
        return response;
    } catch (error) {
        notifications(ERROR, error.response.data.msg);
    }
};

export { demo, login, logout, register, updateUser };
