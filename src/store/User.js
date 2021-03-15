export const UserModule = {
    namespaced: true,
    state: {
        user: null
    },

    // Mutation are directly effect the STATE
    mutations: {
        SET_USER(state, user) {
            state.user = user;
        }
    },

    // Action are function that you call through your app called MUTATIONS
    actions: {
        setUser({ commit }, user) {
            commit('SET_USER', user);
        }
    },
}