<template>
    <div id='select_shop' class="select is-small is-info is-rounded is-gap">
        <select v-model="selected_shop" v-on:change="loadItems">
            <option v-for="shop in shop_types" v-bind:key="`option-${shop.value}`" v-bind:value="shop.value">{{ shop.name }}</option>
        </select>
    </div>
</template>

<script>
export default {
  name: 'WidgetWeight',
    data() {
        return {
            selected_shop: null,
            shop_types: [
                {value: 'weapons', name: 'Weapon Shop'},
                {value: 'armor', name: 'Armory'},
                {value: 'gear', name: 'Gear'}
            ],
        }
    },
    methods: {
        loadItems() {
            // had to disable this because console gave me fatal error
            console.log('loadItems for: ' + this.selected_shop);
        }
    }
}
</script>

<style>
</style>
