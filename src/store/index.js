// where we assemble modules and export the store

import Vue from 'vue';
import Vuex from 'vuex';
import { purse } from './modules/purse.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    modules: {
        purse: purse,
    }
});
