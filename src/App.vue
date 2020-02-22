<template>
  <div id="app">
      <SectionWidgets v-on:shop-selected="loadItems" />

      <SectionTables v-bind:selected_shop='selected_shop' v-bind:shop_items='shop_items' v-bind:backpack_items='backpack_items' />
  </div>
</template>

<script>
import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';
import SectionWidgets from './components/SectionWidgets.vue';
import SectionTables from './components/SectionTables.vue';

const rest_api_url = 'http://localhost:3000/';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
      gained_gp: 3,
      gained_sp: 2,
      gained_cp: 1,
      remaining_gp: 20,
      remaining_sp: 0,
      remaining_cp: 5,
      spent_gp: 0,
      spent_sp: 0,
      spent_cp: 0,
    },
    mutations: {
      addMoney(state, payload) {
        return state[`remaining_${payload.currency}`] += Number(payload.amount);
      },
      addToMoneyGained(state, payload) {
        return state[`gained_${payload.currency}`] += Number(payload.amount);
      },
      addToMoneySpent(state, payload) {
        return state[`spent_${payload.currency}`] += Number(payload.amount);
      },
    }
});

export default {
  name: 'App',
  store,
  components: {
      SectionWidgets,
      SectionTables
  },
  data() {
      return {
         selected_shop: '',
         shop_items: [],
         backpack_items: [],
      }
  },
    methods: {
        loadItems(selected_shop) {
            this.selected_shop = selected_shop;
            // gets items for the shop
            axios.get(rest_api_url + selected_shop)
                .then(response => {
                    // puts response's items in Vue property, allowing it to render the items in the shop
                    this.shop_items = response.data;
                })
                .catch(error => {
                    console.error(error);
                })
                .finally(() => {
                    console.log(this.shop_items);
                });

            // gets items for the backpack
            axios.get(rest_api_url + 'bp_' + selected_shop)
                .then(response => {
                    // puts response's items in Vue property, allowing it to render the items in the backpack
                    this.backpack_items = response.data;
                })
                .catch(error => {
                    console.error(error);
                })
                .finally(() => {
                    console.log(this.backpack_items);
                });
        },
    }
}
</script>

<style>
</style>
