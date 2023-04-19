const config = {
    routes: {
        stats: '/',
        allJobs: '/all-jobs',
        addJobs: '/add-job',
        profile: '/profile',
        landing: '/landing',
        register: '/register',
    },
    api: {
        jobs: '/jobs',
        stats: '/jobs/stats',
        login: '/auth/login',
        register: '/auth/register',
        updateUser: '/auth/updateUser',
    },
    localStorage: {
        user: 'user',
    },
};

export default config;
