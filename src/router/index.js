import Vue from 'vue/dist/vue.runtime.esm.js';
import VueRouter from 'vue-router';
import SiteMainLayout from '../layouts/site-main.vue';
import IndexPage from '../pages/index.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: SiteMainLayout,
            children: [
                {
                    path: '',
                    name: 'site-index',
                    component: IndexPage,
                },
            ],
        },
    ],
});

export default router;
