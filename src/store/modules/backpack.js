import axios from 'axios';

const rest_api_url = 'http://localhost:3000/';

export const backpack = {
    state: {
        selected_backpack: '',
        backpack_items: []
    },
    getters: {
        findBackpackItemById: (state) => (item_id) => {
            return state.backpack_items.find(item => item.id === item_id);
        }
    },
    mutations: {
        changeBackpack(state, payload) {
            state.selected_backpack = payload.selected_backpack;
        },
        fillBackpackItems(state, payload) {
            state.backpack_items = payload.backpack_items;
        },
    },
    actions: {
        fetchBackpackItems({ state, commit }, selected_backpack) {
            commit('changeBackpack', {selected_backpack: selected_backpack});
            // gets items for the backpack
            axios.get(rest_api_url + 'bp_' + selected_backpack)
                .then(response => {
                    // puts response's items in Vue property, allowing it to render the items in the backpack
                    commit('fillBackpackItems', {backpack_items: response.data});
                })
                .catch(error => {
                    console.error(error);
                })
                .finally(() => {
                    console.log(state.backpack_items);
                });
        },

        sellItem({ getters, commit }, selected_item) {

            let item_id = Number(selected_item.target.closest('.btn_subtract_item').dataset.itemId);
            let item_to_sell = getters.findBackpackItemById(item_id);

            // items won't be sold at the full price, so here we modify it based on the sell_cost_percentage property
            let sell_price = getters.getSellPrice({cost: item_to_sell.cost});

            // if the sell price contains decimals, then we have a fraction of a currency unit (and hence an amount of a lower currency)
            if (Number.isInteger(sell_price) === false) {
                // get the fraction by subtracting the floor, leaving only the decimals
                let fractional_price = sell_price - Math.floor(sell_price);
                // subtracts the fraction from sell_price because we will be adding sell_price to money gained and remaining, further below
                sell_price -= fractional_price;
                // now, gets the currency lower in value to the item's one
                let lower_currency = getters.getNextValueCurrency({base_currency: item_to_sell.cost_cur, comparison: 'lower'});
                // determines how much of this lower currency we will gain
                let lower_currency_amount = getters.getCurrencyConversion({amount: fractional_price, from_currency: item_to_sell.cost_cur, to_currency: lower_currency});

                // adds the amount of lower currency
                commit('addToMoneyGained', {
                    amount: lower_currency_amount,
                    currency: lower_currency
                });
                commit('addMoney', {
                    amount: lower_currency_amount,
                    currency: lower_currency
                });
            }

            // add cost to Money Gained
            commit('addToMoneyGained', {
                amount: sell_price,
                currency: item_to_sell.cost_cur
            });

            // add cost to Money Remaining
            commit('addMoney', {
                amount: sell_price,
                currency: item_to_sell.cost_cur
            });

            // subtract weight from Total Weight
            commit('subtractFromWeight', {
                weight: item_to_sell.weight
            });
        },
    }
};
