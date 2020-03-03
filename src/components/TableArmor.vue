<template>
    <table class='table is-striped is-narrow is-hoverable is-fullwidth'>
        <thead>
            <tr>
                <th data-sortable="false" width="24"></th>
                <th class="is-size-8">Name</th>
                <th class="is-size-8">Category</th>
                <th class="is-size-8">Cost</th>
                <th class="is-size-8">AC</th>
                <th class="is-size-8">Max Dex</th>
                <th class="is-size-8">Strength</th>
                <th class="is-size-8">Properties</th>
                <th data-sortable="false" width="72"></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in items" :data-item-id='item.id' :key='`armor_${item.id}`'>
                <td class='has-text-centered'>
                    <span class='icon has-text-info tooltip' :data-tooltip='item.notes'>
                        <i class='fas fa-shield-alt'></i>
                    </span>
                </td>
                <td class="is-size-8">{{item.name}}</td>
                <td class="is-size-8">{{ titleCase(item.subcategory) }}</td>
                <td class="is-size-8">{{item.cost}} {{item.cost_cur}}</td>
                <td class="is-size-8">{{item.ac}}</td>
                <td class="is-size-8">{{item.max_dex}}</td>
                <td class="is-size-8">{{item.strength}}</td>
                <td class="is-size-8">
                    <span v-for="(property, index) in item.properties" :key='`armor_${item.id}_property_${index}`'>
                        {{property}}
                    </span>
                </td>
                <td class='has-text-right'>
                    <a v-if="is_backpack == false" class='btn_add_item'>
                        <span class='icon has-text-success'>
                            <i class='fas fa-plus-square'></i>
                        </span>
                    </a>
                    <a v-else class='btn_subtract_item'>
                        <span class='icon has-text-danger'>
                            <i class='fas fa-minus-square'></i>
                        </span>
                    </a>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { mapActions } from 'vuex';
import CommonMethods from './mixins/CommonMethods';
import RenderDatatable from './mixins/RenderDatatable';

export default {
  name: 'TableArmor',
  mixins: [CommonMethods, RenderDatatable],
    props: {
        is_backpack: {
            type: Boolean,
            required: false,
            default: false
        },
        items: {
            type: Array,
            required: true,
            default: () => []
        },
    },
    methods: {
        ...mapActions([
            'buyItem',
            'sellItem'
        ])
    }
}
</script>

<style>
</style>
