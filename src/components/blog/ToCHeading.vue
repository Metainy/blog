<template>

  <li v-for="node in headings" class="grid">

    <a
      class="text-primary leading-4 [&:not(.active)]:text-on-background-muted pl-2 py-1.5 font-medium"
      :href="`#${node.slug}`">{{ node.text }}
    </a>

    <ul
      v-if="node.subheadings && node.subheadings.length"
      class="grid pl-5"
    >
      <ToCHeading :headings="node.subheadings" />
    </ul>

  </li>

</template>

<script lang="ts">

import { defineComponent } from "vue";

export default defineComponent({
  name: "ToCHeading",

  props: {
    headings: {
      required: true,
      type: Array
    }
  }
});

</script>
