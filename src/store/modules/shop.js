import axios from 'axios';

const rest_api_url = 'http://localhost:3000/';

export const shop = {
    state: {
        selected_shop: '',
        shop_items: []
    },
    getters: {
        findItemById: (state) => (item_id) => {
            return state.shop_items.find(item => item.id === item_id);
        }
    },
    mutations: {
        changeShop(state, payload) {
            state.selected_shop = payload.selected_shop;
        },
        fillShopItems(state, payload) {
            state.shop_items = payload.shop_items;
        },
    },
    actions: {
        fetchShopItems({ state, commit }, selected_shop) {
            commit('changeShop', {selected_shop: selected_shop});
            // gets items for the shop
            axios.get(rest_api_url + selected_shop)
                .then(response => {
                    // puts response's items in Vue property, allowing it to render the items in the shop
                    commit('fillShopItems', {shop_items: response.data});
                })
                .catch(error => {
                    console.error(error);
                })
                .finally(() => {
                    console.log(state.shop_items);
                });
        },

        buyItem({ getters, commit, dispatch, rootState }, selected_item) {
            let item_id = Number(selected_item.target.closest('.btn_add_item').dataset.itemId);

            let item_to_buy = getters.findItemById(item_id);

            // check if has enough money and can buy
            let can_buy_item = getters.canBuy({cost: item_to_buy.cost, cost_cur: item_to_buy.cost_cur});
            if (! can_buy_item) {
                // checks if a higher currency can be converted, and how much
                let {higher_currency_amount_needed, higher_currency} = getters.checkMoneyConversion({cost: item_to_buy.cost, cost_cur: item_to_buy.cost_cur});

                if (higher_currency_amount_needed <= rootState.purse[`remaining_${higher_currency}`]) {
                    // TODO: doing a simple alert for now; improve later
                    let will_convert = confirm(`You don't have ${item_to_buy.cost} ${item_to_buy.cost_cur} to buy that item.\rBut you can convert ${higher_currency_amount_needed} ${higher_currency} to cover that cost.`);

                    if (will_convert) {
                        dispatch('convertMoney', {
                            from_currency_amount: higher_currency_amount_needed,
                            from_currency: higher_currency,
                            to_currency: item_to_buy.cost_cur
                        });
                    } else {
                        // TODO: implement Noty or a cool alert; in a separate method?
                        console.log('cannot buy 1');
                        return false;
                    }
                } else {
                    // TODO: implement Noty or a cool alert; in a separate method?
                    console.log('cannot buy 2');
                    return false;
                }
            }

            // add cost to Spent
            commit('addToMoneySpent', {
                amount: item_to_buy.cost,
                currency: item_to_buy.cost_cur
            });

            // subtract cost from Money remaining
            commit('subtractMoney', {
                amount: item_to_buy.cost,
                currency: item_to_buy.cost_cur
            });

            // add weight to total Weight
            commit('addToWeight', {
                weight: item_to_buy.weight
            })
        },
    }
};
