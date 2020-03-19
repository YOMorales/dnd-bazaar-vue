const currency_order = ['cp', 'sp', 'gp'];
const currency_conversions = {
    'cp': {'sp': 0.10, 'gp': 0.01},
    'sp': {'cp': 10, 'gp': 0.10},
    'gp': {'cp': 100, 'sp': 10},
};

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
        canBuy: (state) => (params) => {
            return params.cost <= state[`remaining_${params.cost_cur}`];
        },
        checkMoneyConversion: (getters) => (params) => {
            var higher_currency = null;
            var higher_currency_amount_needed = null;

            for (let index = currency_order.indexOf(params.cost_cur); index < currency_order.length - 1; index++) {
                higher_currency = getters.getNextValueCurrency({base_currency: currency_order[index], comparison: 'higher'});
                higher_currency_amount_needed = Math.ceil(getters.getCurrencyConversion({amount: params.cost, from_currency: params.cost_cur, to_currency: higher_currency}));
            }

            return {higher_currency: higher_currency, higher_currency_amount_needed: higher_currency_amount_needed};
        },
        getCurrencyConversion: () => (params) => {
            return params.amount * currency_conversions[params.from_currency][params.to_currency];
        },
        getNextValueCurrency: () => (params) => {
            let index = currency_order.indexOf(params.base_currency);

            switch (params.comparison) {
                case 'higher':
                default:
                    if (index !== currency_order.length - 1) {
                        index += 1;
                    }
                    break;

                case 'lower':
                    if (index !== 0) {
                        index -= 1;
                    }
                    break;
            }

            return currency_order[index];
        },
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
        convertMoney({ getters, commit }, params) {
            // need to calculate again the currency conversion since we cannot use the original item's cost
            let to_currency_amount = getters.getCurrencyConversion({amount: params.from_currency_amount, from_currency: params.from_currency, to_currency: params.to_currency});

            commit('subtractMoney', {
                amount: params.from_currency_amount,
                currency: params.from_currency
            });

            commit('addMoney', {
                amount: to_currency_amount,
                currency: params.to_currency
            });
        },
    }
};
