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
        loadItems({ state, commit }, selected_shop) {
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

        buyItem({ getters, commit }, selected_item) {
            let item_id = Number(selected_item.target.parentElement.parentElement.dataset.itemId);

            let item_to_buy = getters.findItemById(item_id);

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
