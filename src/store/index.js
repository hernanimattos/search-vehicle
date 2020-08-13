import Vue from 'vue';
import Vuex from 'vuex';
import Provider from '../provider/Provider';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    vehicle: {
      namespaced: true,
      state: {},
      mutations: {},
      actions: {
        // eslint-disable-next-line
        async getVehicles({ commit }, _) {
          const response = await Provider.get('/OnlineChallenge/Make');

          console.log(response, ';;;;;');
        },
      },
    },
  },
});
