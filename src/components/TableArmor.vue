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
import _ from 'lodash';
import {DataTable} from 'simple-datatables';
import 'simple-datatables/dist/style.css';

export default {
  name: 'TableArmor',
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
        layout: {
            type: Object,
            required: false,
            default: () => {
                return {
                    top: '{search}',
                    bottom: '{pager}'
                };
            }
        },
        fixedColumns: {
            type: Boolean,
            required: false,
            default: true
        },
        fixedHeight: {
            type: Boolean,
            required: false,
            default: true
        },
        labels: {
            type: Object,
            required: false,
            default: () => {
                return {
                    placeholder: "Search...",
                    noRows: "",
                };
            }
        },
    },
    data() {
        return {
            dataTable: null,
        };
    },
    methods: {
// TODO: move this to a mixin
        titleCase(string) {
            return _.startCase(string.replace('_', ' '));
        }
    },
    mounted() {
        this.dataTable = new DataTable(this.$el, {
            layout: this.layout,
            fixedColumns: this.fixedColumns,
            fixedHeight: this.fixedHeight,
            labels: this.labels
        });
    },
}
</script>

<style>
</style>
