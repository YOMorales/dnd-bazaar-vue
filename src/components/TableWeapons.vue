<template>
    <table class='table is-striped is-narrow is-hoverable is-fullwidth'>
        <thead>
            <tr>
                <th data-sortable="false" width="24"></th>
                <th class="is-size-8">Name</th>
                <th class="is-size-8">Category</th>
                <th class="is-size-8">Cost</th>
                <th class="is-size-8">Damage</th>
                <th class="is-size-8">Properties</th>
                <th data-sortable="false" width="72"></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in items" :data-item-id='item.id' :key='`weapons_${item.id}`'>
                <td class='has-text-centered'>
                    <span class='icon has-text-info tooltip' :data-tooltip='item.notes'>
                        <i class='fas fa-bolt'></i>
                    </span>
                </td>
                <td class="is-size-8">{{item.name}}</td>
                <td class="is-size-8">{{ titleCase(item.subcategory) }}</td>
                <td class="is-size-8">{{item.cost}} {{item.cost_cur}}</td>
                <td class="is-size-8">{{item.dmg}}</td>
                <td class="is-size-8">
                    <span v-for="(property, index) in item.properties" :key='`weapons_${item.id}_property_${index}`'>
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
import _ from 'lodash';

export default {
  name: 'TableWeapons',
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
// TODO: move this to a mixin
        titleCase(string) {
            return _.startCase(string.replace('_', ' '));
        }
    }
}
</script>

<style>
</style>
