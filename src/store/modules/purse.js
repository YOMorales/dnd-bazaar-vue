export const purse = {
    state: {
      gained_gp: 3,
      gained_sp: 2,
      gained_cp: 1,
      remaining_gp: 20,
      remaining_sp: 0,
      remaining_cp: 5,
      spent_gp: 9,
      spent_sp: 8,
      spent_cp: 7,
      // TODO: this total_weight should go to the backpack module
      total_weight: 33,
    },
    getters: {
        // example(state, getters, rootState) {
        //   return state.count + rootState.count
        // }
    },
    mutations: {
        // `state` is the local module state
      addMoney(state, payload) {
        return state[`remaining_${payload.currency}`] += Number(payload.amount);
      },
      addToMoneyGained(state, payload) {
        return state[`gained_${payload.currency}`] += Number(payload.amount);
      },
      addToMoneySpent(state, payload) {
        return state[`spent_${payload.currency}`] += Number(payload.amount);
      },
      addToWeight(state, payload) {
        return state.total_weight += Number(payload.weight);
      },
      subtractFromWeight(state, payload) {
        return state.total_weight -= Number(payload.weight);
      },
      subtractMoney(state, payload) {
        return state[`remaining_${payload.currency}`] -= Number(payload.amount);
      },
    },
    actions: {
        // remember: we are destructuring the context param and extracting its object elements
        // context.state will expose the local state, and root state will be exposed as context.rootState
        // example({ state, commit, rootState }) {
        //   if ((state.count + rootState.count) % 2 === 1) {
        //     commit('increment')
        //   }
        // }
    }
};
