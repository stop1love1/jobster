import config from '@/config';
import Stats from '@/pages/Stats';
import AllJobs from '@/pages/AllJobs';
import AddJob from '@/pages/AddJob';
import Profile from '@/pages/Profile';
import Landing from '@/pages/Landing';
import Register from '@/Register';

const publicRoutes = [
    { path: config.routes.landing, component: Landing },
    { path: config.routes.register, component: Register },
];

const privateRoutes = [
    { path: config.routes.stats, component: Stats, isPrivate: true },
    { path: config.routes.allJobs, component: AllJobs, isPrivate: true },
    { path: config.routes.addJobs, component: AddJob, isPrivate: true },
    { path: config.routes.profile, component: Profile, sPrivate: true },
];

export { publicRoutes, privateRoutes };
