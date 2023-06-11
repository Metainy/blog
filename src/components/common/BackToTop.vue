<template>

  <button
    id="scroll-button"
    type="button"
    class="fixed hidden lg:hidden z-50 bottom-10 right-10 p-2 button-outline rounded-2xl"
    @click.prevent="toTopHandler"
  >

    <Icon icon="tabler:arrow-up" class=" w-6 h-6" />

  </button>

</template>

<script lang="ts">

import { defineComponent } from "vue";

// Components
import { Icon } from "@iconify/vue";

export default defineComponent({
  name: "BackToTop",

  components: { Icon },

  methods: {

    /**
     * Click handler for back to top button.
     */
    toTopHandler() {

      window.scroll({
        top: 0,
        behavior: "smooth"
      });
    }
  }
});

</script>
