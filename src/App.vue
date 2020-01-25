<template>
  <div id="app">
    <WidgetMoney title="Money Spent"/>
    <WidgetMoney title="Money Gained"/>
  </div>
</template>

<script>
import WidgetMoney from './components/WidgetMoney.vue';

export default {
  name: 'app',
  components: {
    WidgetMoney
  }
}
</script>

<style>
</style>
