import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';

// Définir les routes
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact,
        props: true
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
