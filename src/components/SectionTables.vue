<template>
    <section class="section">
    <div id="container_shop_backpack" class="container">
        <div class="columns">
            <div class="column is-6">
                <div class="card">
                    <header class="card-header">
                        <p id='title_shop' class="card-header-title">Weapon Shop</p>
                    </header>

                    <div class="card-content">
                    <div class="content" id='container_shop_items'>

                    <template v-for="(items, subcategory) in shop_items">
                        <TableArmor v-if='items.length > 0 && selected_shop == "armor"' :items='items' :key='`table_${subcategory}`' :id='`table_${subcategory}`' />
                        <TableWeapons v-else-if='items.length > 0 && selected_shop == "weapons"' :items='items' :key='`table_${subcategory}`' :id='`table_${subcategory}`' />
                        <TableGear v-else-if='items.length > 0 && selected_shop == "gear"' :items='items' :key='`table_${subcategory}`' :id='`table_${subcategory}`' />
                    </template>

                    </div>
                    </div>

                    <footer class="card-footer">
                    </footer>
                </div>
            </div>

            <div class="column is-6">
                <div class="card">
                    <header class="card-header">
                        <p class="card-header-title">Your Backpack</p>
                    </header>

                    <div class="card-content">
                    <div class="content" id='container_backpack_items'>

                    <template v-for="(items, subcategory) in backpack_items">
                        <TableArmor v-if='items.length > 0 && selected_shop == "armor"' :is_backpack='true' :items='items' :key='`table_bp_${subcategory}`' :id='`table_bp_${subcategory}`' />
                        <TableWeapons v-else-if='items.length > 0 && selected_shop == "weapons"' :is_backpack='true' :items='items' :key='`table_bp_${subcategory}`' :id='`table_bp_${subcategory}`' />
                        <TableGear v-else-if='items.length > 0 && selected_shop == "gear"' :is_backpack='true' :items='items' :key='`table_bp_${subcategory}`' :id='`table_bp_${subcategory}`' />
                    </template>

                    </div>
                    </div>

                    <footer class="card-footer">
                    </footer>
                </div>
            </div>
        </div>
    </div>
    </section>



</template>

<script>
import TableArmor from './TableArmor.vue';
import TableWeapons from './TableWeapons.vue';
import TableGear from './TableGear.vue';

export default {
  name: 'SectionTables',
  components: {
    TableArmor,
    TableWeapons,
    TableGear
  },
    props: {
        selected_shop: {
            type: String,
            required: true,
            default: null
        },
        shop_items: {
            type: Object,
            required: true,
            default: () => {}
        },
        backpack_items: {
            type: Object,
            required: true,
            default: () => {}
        },
    },
}
</script>

<style>
</style>
