<template>
  <div id="app">
      <SectionWidgets v-on:shop-selected="loadItems" />

      <SectionTables v-bind:selected_shop='selected_shop' v-bind:shop_items='shop_items' v-bind:backpack_items='backpack_items' />
  </div>
</template>

<script>
import SectionWidgets from './components/SectionWidgets.vue';
import SectionTables from './components/SectionTables.vue';
import { store } from './store/index.js';

export default {
  name: 'App',
  store,
  components: {
      SectionWidgets,
      SectionTables
  },
    methods: {
    }
}
</script>

<style>
</style>
