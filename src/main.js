import Vue from 'vue/dist/vue.runtime.esm.js';
import './assets/customize.scss';
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

// At least for this template, this handler replaces scrollex.
window.addEventListener('scroll', function () {
    const $header = document.querySelector('#header');
    const $banner = document.querySelector('#banner');

    if (!$banner) {
        $header.classList.remove('alt');
        return;
    }

    const bannerTop = $banner.offsetTop;
    const bannerBottom = bannerTop + $banner.offsetHeight - $header.offsetHeight;
    const viewportTop = window.scrollY;
    const viewportBottom = viewportTop + window.innerHeight;

    if (viewportBottom >= bannerTop && viewportTop <= bannerBottom) {
        $header.classList.add('alt');
    } else {
        $header.classList.remove('alt');
    }
});

window.addEventListener('resize', function () {
    window.dispatchEvent(new Event('scroll'));
});

window.addEventListener('load', function () {
    window.dispatchEvent(new Event('scroll'));
});
