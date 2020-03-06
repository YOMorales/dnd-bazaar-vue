<template>
  <div id="app">
      <SectionWidgets />

      <SectionTables />
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
