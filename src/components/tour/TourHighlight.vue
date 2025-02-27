<template>
  <div class="tour__backdrop">
    <div
      ref="highlight"
      class="tour__highlight"
      v-bind="$attrs" />
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue-demi'
import {
  defineComponent,
  toRef,
  watchEffect,
} from 'vue-demi'
import { autoUpdate } from '@floating-ui/dom'
import { templateRef } from '@vueuse/core'

export default defineComponent({
  inheritAttrs: false,
  props       : {
    target: {
      type   : Object as PropType<HTMLElement>,
      default: undefined,
    },
  },
  setup (props) {
    const target     = toRef(props, 'target')
    const hightlight = templateRef<HTMLDivElement>('highlight')

    watchEffect((onCleanup) => {
      if (hightlight.value && target.value) {
        const cleanup = autoUpdate(target.value, hightlight.value, () => {
          const bounding = target.value.getBoundingClientRect()
          const padding  = 16

          hightlight.value.style.width  = `${bounding.width + padding}px`
          hightlight.value.style.height = `${bounding.height + padding}px`
          hightlight.value.style.left   = `${bounding.left - padding / 2}px`
          hightlight.value.style.top    = `${bounding.top - padding / 2}px`
        }, { animationFrame: true })

        onCleanup(cleanup)
      }
    })

    return {}
  },
})
</script>

<style lang="postcss">
.tour {
  &__backdrop {
    @apply fixed inset-0 overflow-hidden w-full h-full z-[var(--p-tour-backdrop-z-index)];
  }

  &__highlight {
    @apply z-[var(--p-tour-z-index)] absolute shadow-mask cursor-pointer rounded-tn;
  }
}
</style>
