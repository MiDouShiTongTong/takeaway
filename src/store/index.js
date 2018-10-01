import Vue from 'vue';
import Vuex from 'vuex';

import common from './common';
import food from './food';
import merchant from './merchant';
import account from './account';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    common,
    food,
    merchant,
    account
  }
});
