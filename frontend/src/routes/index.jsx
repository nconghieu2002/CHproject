import Home from '@/pages/Home';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import Work from '@/pages/Work';
import Studio from '@/pages/Studio';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/work', component: Work },
    { path: '/studio', component: Studio }
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
