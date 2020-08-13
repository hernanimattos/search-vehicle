import Provider from '../provider/Provider';
export default {
  car: {
    namespaced: true,
    state: {
      brands: [],
      models: [],
      versionModels: [],
      vehicles: [],
    },
    mutations: {
      setBrands(state, payload) {
        state.brands = payload;
      },
      setModels(state, payload) {
        state.models = payload;
      },
      setVersionModels(state, payload) {
        state.versionModels = payload;
      },
      setVehicles(state, payload) {
        state.vehicles = payload;
      },
    },
    actions: {
      // eslint-disable-next-line
      async getVehicles({ commit }, _) {
        const { data } = await Provider.get('/Vehicles', { Page: 1 });

        commit('setVehicles', data);
      },
      // eslint-disable-next-line
      async getBrands({ commit }, _) {
        try {
          const { data } = await Provider.get('/Make');

          commit('setBrands', data);
          return data;
        } catch (e) {
          return Promise.reject(e);
        }
      },
      async getModels({ commit }, MakeID) {
        const { data } = await Provider.get('/Model', { MakeID });
        commit('setModels', data);
      },
      async getVersionModels({ commit }, ModelID) {
        const { data } = await Provider.get('/Version', { ModelID });
        commit('setVersionModels', data);
      },
    },
  },
};
