import { DELETE, PATCH, POST, request } from '@/utils/requestHttp';
import notifications, { ERROR, SUCCESS } from '@/utils/notifications';
import config from '@/config';

export const addJob = async (job) => {
    try {
        const response = await request(POST, config.api.jobs, job);
        notifications(SUCCESS, 'Added New Job!');
        return response;
    } catch (error) {
        notifications(ERROR, error.response.data.msg);
    }
};

export const editJob = async (id, job) => {
    try {
        const response = await request(PATCH, `${config.api.jobs}/${id}`, job);
        notifications(SUCCESS, 'Edited Job!');
        return response;
    } catch (error) {
        notifications(ERROR, error.response.data.msg);
    }
};

export const deleteJob = async (id) => {
    try {
        const response = await request(DELETE, config.api.jobs, id);
        notifications(SUCCESS, response.msg);
        return response;
    } catch (error) {
        notifications(ERROR, error.response.data.msg);
    }
};
