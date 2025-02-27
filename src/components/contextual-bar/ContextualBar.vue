<template>
  <transition
    name="fade"
    appear
    @enter="onEnter"
    @after-leave="onLeave">
    <div
      v-show="model"
      ref="contextualbar"
      data-testid="contextual-bar"
      class="contextual-bar"
      v-bind="$attrs"
      :class="classNames"
      :style="{ 'background-image': backgroundUrl ? `url('${backgroundUrl}')`: 'none' }">
      <div
        data-testid="contextual-bar-wrapper"
        :class="[{ 'contextual-bar__wrapper--with-message' : (message || $slots.message), 'contextual-bar__wrapper--with-action' : $slots.action } ,'contextual-bar__wrapper']">
        <span
          v-if="$slots.icon"
          data-testid="contextual-bar-icon"
          class="contextual-bar__icon">
          <slot name="icon" />
        </span>
        <div class="contextual-bar__content">
          <div
            v-if="title || $slots.title"
            data-testid="contextual-bar-title"
            class="contextual-bar__content__title">
            <slot name="title">
              <p-subheading v-if="message">
                {{ title }}
              </p-subheading>
              <template v-else>
                {{ title }}
              </template>
            </slot>
          </div>
          <div
            v-if="message || $slots.message"
            data-testid="contextual-bar-message"
            class="contextual-bar__content__message">
            <p-caption>
              <slot name="message">
                {{ message }}
              </slot>
            </p-caption>
          </div>
        </div>
        <div
          v-if="$slots.action"
          data-testid="contextual-bar-action"
          class="contextual-bar__action">
          <slot name="action" />
        </div>
      </div>
      <div
        v-if="dismissable"
        data-testid="contextual-bar-close"
        class="contextual-bar__close"
        @click="close">
        <IconClose />
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import type { PropType } from 'vue-demi'
import {
  computed,
  defineComponent,
  onMounted,
  onBeforeUnmount,
} from 'vue-demi'
import type { AlignVariant } from '../nav'
import { useVModel } from '../input'
import pCaption from '../caption/Caption.vue'
import pSubheading from '../subheading/Subheading.vue'
import IconClose from '@privyid/persona-icon/vue/close/16.vue'
import type { StyleVariant } from '.'

export default defineComponent({
  components: {
    IconClose,
    pCaption,
    pSubheading,
  },
  inheritAttrs: false,
  props       : {
    state: {
      type   : String as PropType<StyleVariant>,
      default: 'info',
    },
    backgroundUrl: {
      type   : String,
      default: undefined,
    },
    dismissable: {
      type   : Boolean,
      default: true,
    },
    title: {
      type   : String,
      default: undefined,
    },
    message: {
      type   : String,
      default: undefined,
    },
    align: {
      type   : String as PropType<AlignVariant>,
      default: 'left',
    },
    modelValue: {
      type   : Boolean,
      default: true,
    },
  },

  models: {
    prop : 'modelValue',
    event: 'update:modelValue',
  },
  emits: [
    'update:modelValue',
    'close',
    'show',
    'hide',
  ],

  setup (props, { emit }) {
    const model = useVModel(props)

    function close (event: Event) : void {
      emit('close', event)

      if (!event.defaultPrevented)
        model.value = false
    }

    const classNames = computed(() => {
      const result: string[] = ['']

      if (props.state)
        result.push(`contextual-bar--${props.state}`)

      if (props.align)
        result.push(`contextual-bar--align-${props.align}`)

      if (props.backgroundUrl)
        result.push('contextual-bar--background-image')

      return result
    })

    function onEnter (target: HTMLDivElement) {
      target.style.setProperty('transform', `translateY(-${target.clientHeight}px)`)

      document.body.classList.add('contextual-bar__body--active')
      document.body.style.setProperty('transform', `translateY(${target.clientHeight}px)`)

      emit('show')
    }

    function onLeave (target: HTMLDivElement) {
      target.style.setProperty('transform', 'translateY(0px)')

      document.body.classList.remove('contextual-bar__body--active')
      document.body.style.removeProperty('transform')

      emit('hide')
    }

    onMounted(() => {
      document.body.classList.add('contextual-bar__body')
    })

    onBeforeUnmount(() => {
      document.body.classList.remove('contextual-bar__body')
    })

    return {
      model,
      classNames,
      close,
      onEnter,
      onLeave,
    }
  },
})
</script>

<style lang="postcss">
.contextual-bar {
  @apply fixed z-50 top-0 left-0 p-6 w-full max-w-[100vw];

  &__body {
    @apply transition-transform;
  }

  &__wrapper {
    @apply px-24 items-center flex mr-9;

    &--with-message {
      @apply items-start;
    }

    &--with-action {
      @apply items-center;

      &.contextual-bar__wrapper--with-message {
        .contextual-bar__icon {
          @apply self-start;
        }
      }
    }
  }

  /**
  * Custom background image
  * are available
  */
  &--background-image {
    @apply bg-no-repeat bg-cover bg-[top_center];
  }

  /**
  * Contextualbar alignment:
  * left, center and right
  */
  &&--align-left {
    .contextual-bar__wrapper {
      @apply justify-start text-left;
    }
  }

  &&--align-center {
    .contextual-bar__wrapper {
      @apply justify-center text-center;

      &--with-action {
        .contextual-bar__content {
          @apply text-left;
        }
      }
    }

    .contextual-bar__action {
      @apply ml-0;
    }
  }

  &&--align-right {
    .contextual-bar__wrapper {
      @apply justify-end text-right;

      &--with-action {
        .contextual-bar__content {
          @apply text-left;
        }
        .contextual-bar__action {
          @apply ml-0;
        }
      }
    }
  }

  &&--align-center,
  &&--align-right {
    .contextual-bar__wrapper {
      &--with-action {
        @apply space-gap-3;

        .contextual-bar__icon {
          @apply mr-0;
        }
      }
    }

    .contextual-bar__content {
      @apply grow-0;
    }
  }

  /**
  * Contextualbar body
  * content
  */
  &__content {
    @apply grow;

    &__message {
      .caption {
        @apply text-subtle;
        @apply dark:text-dark-subtle;
      }
    }

    &__title {
      @apply text-base;
    }
  }

  &__action {
    @apply flex shrink-0 ml-auto space-gap-3;
  }

  &__icon {
    @apply relative mr-4 shrink;

    img {
      @apply max-w-[20px] w-auto;
    }
  }

  /**
  * Dismiss button of
  * contextualbar
  */
  &__close {
    @apply absolute right-6 top-1/2 -translate-y-1/2 cursor-pointer text-default/30 hover:text-default/50;
    @apply dark:text-dark-default/30 hover:dark:text-dark-default/50;
  }

  /**
  * Contextualbar has 4 state
  * variant: error, warning, info
  * and neutral
  */
  &&--info {
    @apply bg-base text-default;
    @apply dark:bg-dark-base dark:text-dark-default;

    .contextual-bar {
      &__icon {
        @apply text-info;
        @apply dark:text-dark-info;
      }
    }
  }

  &&--error,
  &&--warning,
  &&--neutral {
    @apply text-state-emphasis;
    @apply dark:text-dark-state-emphasis;
  }

  &&--error {
    @apply bg-danger-emphasis;
    @apply dark:bg-dark-danger-emphasis;

    .contextual-bar__close {
      @apply text-danger hover:text-danger/50;
      @apply dark:text-dark-danger dark:hover:text-dark-danger/50;
    }
  }

  &&--warning {
    @apply bg-warning-emphasis;
    @apply dark:bg-dark-warning-emphasis;

    .contextual-bar__close {
      @apply text-warning hover:text-warning/50;
      @apply dark:text-dark-warning;
    }
  }

  &&--neutral {
    @apply bg-inverse text-on-emphasis;
    @apply dark:bg-dark-inverse dark:text-dark-on-emphasis;

    .contextual-bar__close {
      @apply text-on-emphasis/30 hover:text-on-emphasis/50;
      @apply dark:text-dark-on-emphasis/30 hover:dark:text-dark-on-emphasis/50;
    }
  }
}
</style>
