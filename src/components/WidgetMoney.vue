<template>
    <div class="tile is-child notification content" style="background: #EEDB74;">
        <h6>{{ title }}</h6>
        <ul class="unstyled">
            <li>
                <span class="tag is-dark">
                    <span class='icon has-text-warning'>
                        <i class='fas fa-coins'></i>
                    </span>
                    +<span id='gained_gp' v-text="gained_gp">0</span>&nbsp; gp
                </span>
            </li>
            <li>
                <span class="tag is-dark">
                    <span class='icon has-text-grey-lighter'>
                        <i class='fas fa-coins'></i>
                    </span>
                    +<span id='gained_sp' v-text="gained_sp">0</span>&nbsp; sp
                </span>
            </li>
            <li>
                <span class="tag is-dark">
                    <span class='icon' style="color: #C57200;">
                        <i class='fas fa-coins'></i>
                    </span>
                    +<span id='gained_cp' v-text="gained_cp">0</span>&nbsp; cp
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'WidgetMoney',
  props: {
    title: {
        type: String,
        required: true
    }
  },
    computed: {
        // someLocalProperty() {},
        // with object-spread operator (...) mix this with the other local computed properties
        ...mapState([
            // map these computed properties to their equivalents in $store.state
            'gained_gp', 'gained_sp', 'gained_cp'
        ]),
    },
}
</script>

<style>
</style>
