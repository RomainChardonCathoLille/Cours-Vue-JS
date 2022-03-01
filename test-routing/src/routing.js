import { createRouter, createWebHistory } from "vue-router";

import Accueil from './Home.vue';
import Details from './Details.vue';

const routes = [
    {
        path: '/',
        component: Accueil,
    },
    {
        path: '/details',
        component: Details,
    }
];

export default createRouter({
    history: createWebHistory(),
    routes,
});