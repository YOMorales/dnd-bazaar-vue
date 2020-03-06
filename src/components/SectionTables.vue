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

                    <TableArmor v-if='shop_items.length > 0 && selected_shop == "armor"' :items='shop_items' :id='`table_${selected_shop}`' />
                    <TableWeapons v-else-if='shop_items.length > 0 && selected_shop == "weapons"' :items='shop_items' :id='`table_${selected_shop}`' />
                    <TableGear v-else-if='shop_items.length > 0 && selected_shop == "gear"' :items='shop_items' :id='`table_${selected_shop}`' />

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

                    <TableArmor v-if='backpack_items.length > 0 && selected_shop == "armor"' :is_backpack='true' :items='backpack_items' :id='`table_bp_${selected_shop}`' />
                    <TableWeapons v-else-if='backpack_items.length > 0 && selected_shop == "weapons"' :is_backpack='true' :items='backpack_items' :id='`table_bp_${selected_shop}`' />
                    <TableGear v-else-if='backpack_items.length > 0 && selected_shop == "gear"' :is_backpack='true' :items='backpack_items' :id='`table_bp_${selected_shop}`' />

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
import { mapState } from 'vuex';

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
    computed: {
        ...mapState({
            selected_shop: state => state.shop.selected_shop,
            shop_items: state => state.shop.shop_items,
            backpack_items: state => state.backpack.backpack_items
        })
    },
    mounted() {
    }
}
</script>

<style>
</style>
