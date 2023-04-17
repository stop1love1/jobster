import axios from 'axios';

const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MjUxZWZhZDJjZmE3YTI5NjM1MDE3MjUiLCJpYXQiOjE2ODE3NDk3ODYsImV4cCI6MTY4MTgzNjE4Nn0.LhgKDVofZavwNIqKCGQJKcPKndVG17QbtrNXmCDCuHw';

const requestHttp = axios.create({
    baseURL: 'https://jobify-prod.herokuapp.com/api/v1/toolkit',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    timeout: 30 * 1000,
});

export const get = async (path) => {
    const response = await requestHttp.get(path);
    return response.data;
};

export const getJobs = async (search = null, status = 'all', jobType = 'all', sort = 'latest', page = 1) => {
    let params = `status=${status}&jobType=${jobType}&sort=${sort}&page=${page}`;
    if (search !== null && search !== '') {
        params = `search=${search}&` + params;
    }
    return await get(`/jobs?${params}`);
};

export default requestHttp;
