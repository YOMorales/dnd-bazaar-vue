<template>
    <section class="section">
    <div id='container_widgets' class="container">
        <div class="columns">
            <div class="column">
                <div class="card">
                    <div class="card-content content">
                        <p>Lorem ipsum dolor sit amet consectetuer adipiscing elit.</p>
                        <BaseSelect
                            id="select_shop"
                            class="is-small is-info"
                            v-bind:options="shop_types"
                            v-on:option-selected="fetchAllItems($event)"
                            />
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="tile is-ancestor">
                    <div class="tile is-parent is-3">
                        <WidgetWeight title="Weight"/>
                    </div>
                    <div class="tile is-parent is-3">
                        <WidgetMoney title="Money Left" type='remaining' />
                    </div>
                    <div class="tile is-parent is-3">
                        <WidgetMoney title="Money Spent" type='spent'/>
                    </div>
                    <div class="tile is-parent is-3">
                        <WidgetMoney title="Money Gained" type='gained'/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
</template>

<script>
import BaseSelect from './BaseSelect.vue';
import WidgetWeight from './WidgetWeight.vue';
import WidgetMoney from './WidgetMoney.vue';

export default {
  name: 'SectionWidgets',
  components: {
    BaseSelect,
    WidgetWeight,
    WidgetMoney
  },
  data() {
    return {
        shop_types: [
            {value: 'weapons', name: 'Weapon Shop'},
            {value: 'armor', name: 'Armory'},
            {value: 'gear', name: 'Gear'}
        ],
    }
  },
    methods: {
        fetchAllItems(event) {
            this.$store.dispatch('fetchShopItems', event);
            this.$store.dispatch('fetchBackpackItems', event);
        },
    },
}
</script>

<style>
</style>
