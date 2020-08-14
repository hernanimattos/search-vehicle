import Provider from '../provider/Provider';
export default {
  car: {
    namespaced: true,
    state: {
      brands: [],
      models: [],
      versionModels: [],
      vehicles: [],
      page: 1,
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
      nextPage(state, payload) {
        state.page = payload;
      },
      prevPage(state, payload) {
        state.page = payload;
      },
    },
    actions: {
      // eslint-disable-next-line
      async getVehicles({ commit }, Page = 1) {
        try {
          const { data } = await Provider.get('/Vehicles', { Page });

          commit('setVehicles', data);
          return Promise.resolve(data);
        } catch (e) {
          return Promise.reject(e);
        }
      },
      // eslint-disable-next-line
      async getBrands({ commit }, _) {
        try {
          const { data } = await Provider.get('/Make');

          commit('setBrands', data);
          return Promise.resolve(data);
        } catch (e) {
          return Promise.reject(e);
        }
      },
      async getModels({ commit }, MakeID) {
        try {
          const { data } = await Provider.get('/Model', { MakeID });
          commit('setModels', data);

          return Promise.resolve(data);
        } catch (e) {
          return Promise.reject(e);
        }
      },
      async getVersionModels({ commit }, ModelID) {
        try {
          const { data } = await Provider.get('/Version', { ModelID });
          commit('setVersionModels', data);

          return Promise.resolve(data);
        } catch (e) {
          return Promise.reject(e);
        }
      },
    },
  },
};
