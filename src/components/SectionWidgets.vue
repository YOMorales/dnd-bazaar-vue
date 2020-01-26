<template>
    <section class="section">
    <div id='container_widgets' class="container">
        <div class="columns">
            <div class="column">
                <div class="card">
                    <div class="card-content content">
                        <p>Lorem ipsum dolor sit amet consectetuer adipiscing elit.</p>
                        <BaseSelect />
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="tile is-ancestor">
                    <div class="tile is-parent is-3">
                        <WidgetWeight title="Weight"/>
                    </div>
                    <div class="tile is-parent is-3">
                        <WidgetMoney title="Money Left"/>
                    </div>
                    <div class="tile is-parent is-3">
                        <WidgetMoney title="Money Spent"/>
                    </div>
                    <div class="tile is-parent is-3">
                        <WidgetMoney title="Money Gained"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
</template>

<script>
import BaseSelect from './BaseSelect.vue';
import WidgetWeight from './WidgetWeight.vue';
import WidgetMoney from './WidgetMoney.vue';

export default {
  name: 'SectionWidgets',
  components: {
    BaseSelect,
    WidgetWeight,
    WidgetMoney
  }
}
</script>

<style>
</style>
