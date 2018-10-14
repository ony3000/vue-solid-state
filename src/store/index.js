import Vue from 'vue/dist/vue.runtime.esm.js';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        isMenuLocked: false,
    },
    mutations: {
        locking(state) {
            state.isMenuLocked = true;
        },
        unlocking(state) {
            state.isMenuLocked = false;
        },
    },
    actions: {
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
