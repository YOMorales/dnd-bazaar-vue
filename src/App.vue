<template>
  <div id="app">
      <SectionWidgets v-on:shop-selected="loadItems" />
  </div>
</template>

<script>
import axios from 'axios';
import SectionWidgets from './components/SectionWidgets.vue';

const rest_api_url = 'http://localhost:3000/';

export default {
  name: 'App',
  components: {
      SectionWidgets
  },
  data() {
      return {
         shop_items: [],
         backpack_items: [],
      }
  },
    methods: {
        loadItems(selected_shop) {
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
