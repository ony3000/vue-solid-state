import Vue from 'vue/dist/vue.runtime.esm.js';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        isHeaderAppeared: false,
        isMenuLocked: false,
    },
    mutations: {
        appearing(state) {
            state.isHeaderAppeared = true;
        },
        disappearing(state) {
            state.isHeaderAppeared = false;
        },
        locking(state) {
            state.isMenuLocked = true;
        },
        unlocking(state) {
            state.isMenuLocked = false;
        },
    },
    actions: {
        // At least for this template, this handler replaces scrollex.
        checkScroll(context) {
            const $header = document.querySelector('#header');
            const $banner = document.querySelector('#banner');

            if (!$banner) {
                if (!context.state.isHeaderAppeared) {
                    context.commit('appearing');
                }
                return;
            }

            const bannerTop = $banner.offsetTop;
            const bannerBottom = bannerTop + $banner.offsetHeight - $header.offsetHeight;
            const viewportTop = window.scrollY;
            const viewportBottom = viewportTop + window.innerHeight;

            if (viewportBottom >= bannerTop && viewportTop <= bannerBottom) {
                if (context.state.isHeaderAppeared) {
                    context.commit('disappearing');
                }
            } else {
                if (!context.state.isHeaderAppeared) {
                    context.commit('appearing');
                }
            }
        },
        lockMenu(context) {
            return new Promise((resolve, reject) => {
                if (!context.state.isMenuLocked) {
                    context.commit('locking');
                    setTimeout(() => {
                        context.commit('unlocking');
                    }, 350);
                    resolve();
                }
            });
        },
        showMenu(context) {
            context.dispatch('lockMenu')
                .then(() => {
                    document.querySelector('body').classList.add('is-menu-visible');
                })
        },
        hideMenu(context) {
            context.dispatch('lockMenu')
                .then(() => {
                    document.querySelector('body').classList.remove('is-menu-visible');
                })
        },
        toggleMenu(context) {
            context.dispatch('lockMenu')
                .then(() => {
                    document.querySelector('body').classList.toggle('is-menu-visible');
                })
        },
    },
});

export default store;
