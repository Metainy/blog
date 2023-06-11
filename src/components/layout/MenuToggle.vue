<template>

  <button
    data-toggle-menu
    type="button"
    aria-label="Menu"
    class="button-icon md:hidden ml-2 sm:ml-4 stroke-on-background-dim"
  >

    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">

      <path
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round" stroke-width="1.6" d="M4 8h16"
      />

      <path
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round" stroke-width="1.6" d="M4 16h16"
      />

    </svg>

  </button>

</template>

<script lang="ts">

import { defineComponent } from "vue";

export default defineComponent({
  name: "MenuToggle",
});

</script>

<style scoped>

[data-toggle-menu] path {
  @apply transition;
}

[data-toggle-menu].expanded path:first-child {
  @apply -rotate-45 translate-y-[15px] translate-x-[-3px];
}

[data-toggle-menu].expanded path:last-child {
  @apply rotate-45 translate-y-[-8px] translate-x-[14px];
}

</style>
