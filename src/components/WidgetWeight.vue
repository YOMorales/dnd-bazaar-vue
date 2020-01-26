<template>
    <div class="tile is-child notification content" style="background: #AFCA90;">
        <h6>{{ title }}</h6>
        <ul class="unstyled">
            <li>
                <span class="tag is-dark">
                    <span class='icon has-text-warning'>
                        <i class='fas fa-balance-scale'></i>
                    </span>
                    <span id='total_weight' v-text="total_weight">0</span>&nbsp; lbs
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'WidgetWeight',
  props: {
    title: {
        type: String,
        required: true
    }
  },
    data() {
        return {
            total_weight: 10,
        }
    },
}
</script>

<style>
</style>
