<template>
  <div
    data-testid="pdf-loading"
    class="pdf__loading">
    <img
      :src="PDF_LOADING_IMG"
      width="793"
      height="1122">
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue-demi'
import PDF_LOADING_IMG from './assets/pdf-loading.svg'

export default defineComponent({
  setup () {
    return { PDF_LOADING_IMG }
  },
})
</script>

<style lang="postcss">
.pdf__loading {
  @apply shadow-lg mb-4 p-4 bg-default max-w-[var(--p-pdf-container-width)] mx-auto;

  > img {
    @apply max-w-full object-contain h-auto;
  }
}
</style>
