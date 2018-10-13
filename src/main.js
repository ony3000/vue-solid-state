import Vue from 'vue/dist/vue.runtime.esm.js';
import SiteApp from './site-app.vue';
import router from './router';
import store from './store';

new Vue({
    el: '#site-wrapper',
    router,
    store,
    components: {
        SiteApp,
    },
    render(h) {
        return h(SiteApp);
    },
});

window.addEventListener('load', function () {
    setTimeout(function () {
        document.querySelector('body').classList.remove('is-preload');
    }, 100);
});
