import axios from 'axios';

const rest_api_url = 'http://localhost:3000/';

export const shop = {
    state: {
        selected_shop: '',
        shop_items: []
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

        buyItem(state) {
console.log(state);
        },
    }
};
