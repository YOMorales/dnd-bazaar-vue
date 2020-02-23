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
import { mapState } from 'vuex'

export default {
  name: 'WidgetWeight',
  props: {
    title: {
        type: String,
        required: true
    }
  },
    computed: {
        ...mapState([
            // map these computed properties to their equivalents in $store.state
            'total_weight',
        ]),
    },
}
</script>

<style>
</style>
