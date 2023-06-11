<template>

  <div class="flex flex-col text-center mb-12 sm:mb-16 lg:mb-20">

    <h1 class="page-heading">{{ title }}</h1>

    <span class="text-sm text-on-background-muted h-0">{{ subtitle }}</span>

  </div>

</template>

<script lang="ts">

import { defineComponent } from "vue";

export default defineComponent({
  name: "PageHeading",

  props: {
    title: {
      required: true,
      type: String
    },
    subtitle: {
      type: String
    }
  }
});

</script>

<style scoped>

.page-heading {
  @apply mb-4 text-4xl font-semibold leading-tight;
}

.page-heading:after {
  @apply mx-auto mt-2 block h-1 w-10 rounded-full bg-primary content-[""];
}

</style>
