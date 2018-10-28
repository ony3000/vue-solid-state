import Vue from 'vue/dist/vue.runtime.esm.js';
import './assets/styles/main.scss';
import 'font-awesome/scss/font-awesome.scss';
import './assets/customize.scss';
import SiteApp from './site-app.vue';
import router from './router';
import store from './store';

const vm = new Vue({
    el: '#site-wrapper',
    router,
    store,
    components: {
        SiteApp,
    },
    render(h) {
        return h(SiteApp);
    },
    mounted() {
        this.$nextTick(() => {
            document.querySelector('body').addEventListener('keydown', (event) => {
                if (event.keyCode === 27) {
                    this.$store.dispatch('hideMenu');
                }
            });
        });
    },
});

window.addEventListener('scroll', function () {
    vm.$store.dispatch('checkScroll');
});

window.addEventListener('resize', function () {
    vm.$store.dispatch('checkScroll');
});

window.addEventListener('load', function () {
    vm.$store.dispatch('checkScroll');
});
