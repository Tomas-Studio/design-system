<template>
  <div
    class="step"
    data-testid="step">
    <slot
      :step="step"
      :next="next"
      :prev="prev"
      :total="total"
      :can-prev="canPrev"
      :can-next="canNext"
      :to-step="toStep" />
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue-demi'
import {
  defineComponent,
} from 'vue-demi'
import type { TravelHook } from '.'
import { useStep } from '.'

export default defineComponent({
  name : 'Step',
  props: {
    onBeforePrev: {
      type   : Function as PropType<TravelHook>,
      default: () => true,
    },
    onBeforeNext: {
      type   : Function as PropType<TravelHook>,
      default: () => true,
    },
  },
  setup (props) {
    const {
      canNext,
      canPrev,
      toStep,
      step,
      total,
      next,
      prev,
      onBeforeNext,
      onBeforePrev,
    } = useStep()

    // Registering Hooks
    onBeforeNext(props.onBeforeNext)
    onBeforePrev(props.onBeforePrev)

    return {
      canNext,
      canPrev,
      toStep,
      prev,
      next,
      total,
      step,
    }
  },
})
</script>
