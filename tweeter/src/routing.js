import { createRouter, createWebHistory } from "vue-router";

import Accueil from './Accueil.vue'
import Details from './Detail.vue'
import Profile from './Profile.vue'

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
        path: '/profile',
        component: Profile,
    },
    {
        path: '/:pathMatch(.*)*',
        component: Accueil,
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});