<template>
  <div
    data-testid="pdf-object-addon"
    class="pdf-object__addon"
    :class="classNames">
    <slot />
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue-demi'
import {
  computed,
  defineComponent,
} from 'vue-demi'
import type { AddonPositionVariant } from '.'

export default defineComponent({
  props: {
    position: {
      type   : String as PropType<AddonPositionVariant>,
      default: 'right',
    },
  },
  setup (props) {
    const classNames = computed(() => {
      const result: string[] = []

      if (props.position)
        result.push(`pdf-object__addon--${props.position}`)

      return result
    })

    return { classNames }
  },
})
</script>

<style lang="postcss">
.pdf-object {
  &__addon {
    @apply absolute;
    @apply dark:text-default;

    &--right {
      @apply top-0 left-full pl-2;
    }

    &--left {
      @apply top-0 right-full pr-2;
    }

    &--top {
      @apply bottom-full left-0 pb-2;
    }

    &--bottom {
      @apply top-full left-0 pt-2;
    }
  }
}
</style>
