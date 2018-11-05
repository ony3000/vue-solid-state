import Vue from 'vue/dist/vue.runtime.esm.js';
import VueRouter from 'vue-router';
import SiteMainLayout from '../layouts/site-main.vue';
import SiteSubLayout from '../layouts/site-sub.vue';
import IndexPage from '../pages/index.vue';
import GenericPage from '../pages/generic.vue';
import ElementsPage from '../pages/elements.vue';

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
        {
            path: '/generic',
            component: SiteSubLayout,
            children: [
                {
                    path: '',
                    name: 'site-generic',
                    component: GenericPage,
                },
            ],
        },
        {
            path: '/elements',
            component: SiteSubLayout,
            children: [
                {
                    path: '',
                    name: 'site-elements',
                    component: ElementsPage,
                },
            ],
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 };
    },
});

router.afterEach((to, from) => {
    document.querySelector('body').classList.add('is-preload');
    setTimeout(() => {
        document.querySelector('body').classList.remove('is-preload');
    }, 100);
});

export default router;
