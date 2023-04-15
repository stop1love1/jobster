import config from '@/config';
import Stats from '@/pages/Stats';
import AllJobs from '@/pages/AllJobs';
import AddJob from '@/pages/AddJob';
import Profile from '@/pages/Profile';
import Landing from '@/pages/Landing';
import Register from '@/Register';

const publicRoutes = [
    { path: config.routes.stats, component: Stats, layout: true },
    { path: config.routes.allJobs, component: AllJobs, layout: true },
    { path: config.routes.addJobs, component: AddJob, layout: true },
    { path: config.routes.profile, component: Profile, layout: true },
    { path: config.routes.landing, component: Landing, layout: false },
    { path: config.routes.register, component: Register, layout: false },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
