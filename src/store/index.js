import Vue from 'vue/dist/vue.runtime.esm.js';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        isMenuLocked: false,
    },
});

export default store;
