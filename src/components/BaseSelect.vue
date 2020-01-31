<template>
    <div class="select is-rounded is-gap">
        <select
            v-model="selected_value"
            v-on:change="$emit('option-selected', selected_value)">
            <option
                v-for="option in options"
                v-bind:key="`option-${option.value}`"
                v-bind:value="option.value"
                >
                {{ option.name }}
            </option>
        </select>
    </div>
</template>

<script>
export default {
  name: 'BaseSelect',
    props: {
        options: {
            type: Array,
            required: true,
            default: () => []
        }
    },
    data() {
        return {
            selected_value: null,
        }
    }
}
</script>

<style>
</style>
