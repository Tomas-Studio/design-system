<template>
  <div
    data-testid="pdf-navigation"
    class="pdf__navigation">
    <div class="pdf__navigation-container">
      <p-button
        data-testid="pdf-zoom-out"
        variant="ghost"
        size="xs"
        icon
        @click="zoomOut">
        <IconZoomOut />
      </p-button>
      <span class="pdf__navigation-scale">
        {{ (scale * 100).toFixed(0) }}%
      </span>
      <p-button
        data-testid="pdf-zoom-in"
        variant="ghost"
        size="xs"
        icon
        @click="zoomIn">
        <IconZoomIn />
      </p-button>
      <p-divider vertical />
      <p-select
        v-model="page"
        :options="pages"
        size="xs" />
      <span
        data-testid="pdf-total"
        class="pdf__navigation-total">of {{ totalPage }}</span>
      <p-button
        data-testid="pdf-prev"
        variant="ghost"
        size="xs"
        icon
        @click="prev">
        <IconPrev />
      </p-button>
      <p-button
        data-testid="pdf-next"
        variant="ghost"
        size="xs"
        icon
        @click="next">
        <IconNext />
      </p-button>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
} from 'vue-demi'
import { usePdfContext } from '.'
import IconZoomIn from '@privyid/persona-icon/vue/zoom-in/20.vue'
import IconZoomOut from '@privyid/persona-icon/vue/zoom-out/20.vue'
import IconPrev from '@privyid/persona-icon/vue/chevron-up/20.vue'
import IconNext from '@privyid/persona-icon/vue/chevron-down/20.vue'
import pButton from '../button/Button.vue'
import pDivider from '../divider/Divider.vue'
import pSelect from '../select/Select.vue'
import type { SelectItem } from '../select'

export default defineComponent({
  components: {
    IconZoomIn,
    IconZoomOut,
    IconPrev,
    IconNext,
    pButton,
    pDivider,
    pSelect,
  },
  setup () {
    const {
      page,
      scale,
      totalPage,
      zoomIn,
      zoomOut,
      next,
      prev,
    } = usePdfContext()

    const pages = computed<SelectItem[]>(() => {
      return Array.from({ length: totalPage.value }).map((_, i) => {
        return {
          text : `${i + 1}`,
          value: i + 1,
        }
      })
    })

    return {
      page,
      pages,
      scale,
      totalPage,
      zoomIn,
      zoomOut,
      next,
      prev,
    }
  },
})
</script>

<style lang="postcss">
.pdf {
  &__navigation {
    @apply absolute bottom-4 inset-x-0 justify-center items-center flex w-80 mx-auto z-10;

    &-container {
      @apply flex bg-inverse text-subtlest rounded p-2 space-x-1 items-center;
      @apply dark:text-dark-default;

      > .btn {
        @apply text-subtlest hover:text-muted focus:text-muted;
        @apply dark:text-dark-subtle hover:dark:text-dark-default focus:dark:text-dark-default;
      }

      > .select {
        --p-dropdown-size: theme(width.32);

        @apply w-16;

        > .input {
          @apply bg-default-alpha;
          @apply dark:bg-dark-default-alpha;

          > .input__form {
            @apply border-subtle-alpha bg-default-alpha text-state-emphasis;
            @apply dark:border-dark-subtle-alpha dark:bg-dark-default-alpha dark:text-dark-state-emphasis;
          }
        }
      }

      > .divider {
        @apply border-none bg-dark-subtle-alpha;
      }
    }

    &-page {
      @apply w-20 inline-flex;
    }

    &-total {
      @apply shrink-0;
    }
  }
}
</style>
