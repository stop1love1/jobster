import axios from 'axios';
import config from '@/config';

const baseURL = 'https://jobify-prod.herokuapp.com/api/v1/toolkit';

export const GET = 'GET';
export const POST = 'POST';
export const PATCH = 'PATCH';
export const DELETE = 'DELETE';

const requestHttp = axios.create({
    baseURL: baseURL,
    timeout: 30 * 1000,
});

export const request = async (action, path, data) => {
    const token = JSON.parse(localStorage.getItem(config.localStorage.user)).token;
    let request = axios.create({
        baseURL: baseURL,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        timeout: 30 * 1000,
    });
    let response = null;
    switch (action) {
        case GET:
            response = await request.get(path);
            break;
        case POST:
            response = await request.post(path, data);
            break;
        case PATCH:
            response = await request.patch(path, data);
            break;
        case DELETE:
            response = await request.delete(path + '/' + data);
            break;
        default:
            console.error('Invalid actions in requestHttp!');
            break;
    }
    return response.data;
};

export const getJobs = async (search = null, status = 'all', jobType = 'all', sort = 'latest', page = 1) => {
    let params = `status=${status}&jobType=${jobType}&sort=${sort}&page=${page}`;
    if (search !== null && search !== '') {
        params = `search=${search}&` + params;
    }
    return await request(GET, `${config.api.jobs}?${params}`);
};

export default requestHttp;
