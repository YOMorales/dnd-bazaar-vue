<template>
    <div class="tile is-child notification content" style="background: #EEDB74;">
        <h6>{{ title }}</h6>
        <ul class="unstyled">
            <li>
                <span class="tag is-dark">
                    <span class='icon has-text-warning'>
                        <i class='fas fa-coins'></i>
                    </span>
                    +<span id='gained_gp' v-text="gp">0</span>&nbsp; gp
                </span>
            </li>
            <li>
                <span class="tag is-dark">
                    <span class='icon has-text-grey-lighter'>
                        <i class='fas fa-coins'></i>
                    </span>
                    +<span id='gained_sp' v-text="sp">0</span>&nbsp; sp
                </span>
            </li>
            <li>
                <span class="tag is-dark">
                    <span class='icon' style="color: #C57200;">
                        <i class='fas fa-coins'></i>
                    </span>
                    +<span id='gained_cp' v-text="cp">0</span>&nbsp; cp
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'WidgetMoney',
  props: {
    title: {
        type: String,
        required: true
    }
  },
    data() {
        return {
            gp: 100,
            sp: 50,
            cp: 0
        }
    },
}
</script>

<style>
</style>
