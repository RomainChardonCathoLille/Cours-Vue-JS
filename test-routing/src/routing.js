import { createRouter, createWebHistory } from "vue-router";

import Accueil from './Home.vue'
import Details from './Details.vue'
import NotFound from './NotFound.vue'

const routes = [
    {
        path: '/',
        component: Accueil,
    },
    {
        path: '/details',
        component: Details,
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFound,
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});