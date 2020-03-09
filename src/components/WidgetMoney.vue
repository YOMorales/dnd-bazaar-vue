<template>
    <div class="tile is-child notification content" style="background: #EEDB74;">
        <h6>{{ title }}</h6>
        <ul class="unstyled">
            <li>
                <span class="tag is-dark">
                    <span class='icon has-text-warning'>
                        <i class='fas fa-coins'></i>
                    </span>
                    <template v-if="type == 'gained'">+<span id='gained_gp' v-text="gained_gp">0</span>&nbsp; gp</template>
                    <template v-else-if="type == 'remaining'">+<span id='remaining_gp' v-text="remaining_gp">0</span>&nbsp; gp</template>
                    <template v-else-if="type == 'spent'">-<span id='spent_gp' v-text="spent_gp">0</span>&nbsp; gp</template>
                </span>
            </li>
            <li>
                <span class="tag is-dark">
                    <span class='icon has-text-grey-lighter'>
                        <i class='fas fa-coins'></i>
                    </span>
                    <template v-if="type == 'gained'">+<span id='gained_sp' v-text="gained_sp">0</span>&nbsp; sp</template>
                    <template v-else-if="type == 'remaining'">+<span id='remaining_sp' v-text="remaining_sp">0</span>&nbsp; sp</template>
                    <template v-else-if="type == 'spent'">-<span id='spent_sp' v-text="spent_sp">0</span>&nbsp; sp</template>
                </span>
            </li>
            <li>
                <span class="tag is-dark">
                    <span class='icon' style="color: #C57200;">
                        <i class='fas fa-coins'></i>
                    </span>
                    <template v-if="type == 'gained'">+<span id='gained_cp' v-text="gained_cp">0</span>&nbsp; cp</template>
                    <template v-else-if="type == 'remaining'">+<span id='remaining_cp' v-text="remaining_cp">0</span>&nbsp; cp</template>
                    <template v-else-if="type == 'spent'">-<span id='spent_cp' v-text="spent_cp">0</span>&nbsp; cp</template>
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
    },
    type: {
        type: String,
        required: true,
    }
  },
    computed: {
        // someLocalProperty() {},
        // with object-spread operator (...) mix this with the other local computed properties
        ...mapState({
            gained_gp: state => state.purse.gained_gp,
            gained_sp: state => state.purse.gained_sp,
            gained_cp: state => state.purse.gained_cp,
            remaining_gp: state => state.purse.remaining_gp,
            remaining_sp: state => state.purse.remaining_sp,
            remaining_cp: state => state.purse.remaining_cp,
            spent_gp: state => state.purse.spent_gp,
            spent_sp: state => state.purse.spent_sp,
            spent_cp: state => state.purse.spent_cp,
        })
    },
}
</script>

<style>
</style>
