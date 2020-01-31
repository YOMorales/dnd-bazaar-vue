<template>
  <div id="app">
      <SectionWidgets v-on:shop-selected="loadItems" />
  </div>
</template>

<script>
import SectionWidgets from './components/SectionWidgets.vue';

export default {
  name: 'App',
  components: {
      SectionWidgets
  },
  mounted() {
  },
    methods: {
        loadItems(selected_value) {
            console.log('loadItems for: ' + selected_value);
        }
    }
}
</script>

<style>
</style>
