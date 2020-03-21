import axios from 'axios';

const rest_api_url = 'http://localhost:3000/';

export const backpack = {
    state: {
        selected_backpack: '',
        backpack_items: []
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
        fetchItems({ state, commit }, selected_backpack) {
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

        sellItem(state) {
console.log(state);
        },
    }
};
