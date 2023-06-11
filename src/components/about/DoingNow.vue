<template>

  <ol class="space-y-4 ">

    <li v-for="item in items" class="flex">

      <span
        class="flex items-center justify-center rounded-full w-8 h-8 mr-4 text-on-background-dim bg-background-offset1">
        <Icon :icon="item.icon" class="h-5 w-5 p-px" />
      </span>

      <h2 class="flex items-center mb-px text-sm font-medium text-gray-900 dark:text-white">
        {{ item.text }}
      </h2>
    </li>

  </ol>

</template>

<script lang="ts">

import { defineComponent } from "vue";

// Components
import { Icon } from "@iconify/vue";

export default defineComponent({
  name: "DoingNow",

  components: { Icon },

  data: () => ({
    items: [
      { text: "Learning Frappe framework", icon: "ph:app-window" },
      { text: "Tinkering with NestJS", icon: "ph:file-js" },
      { text: "Drinking lots of coffee", icon: "ph:coffee" },
      { text: "Exploring front-end world", icon: "ph:layout" },
      { text: "Reading about technical analysis", icon: "ph:chart-line-up" },
      { text: "Hoarding awesome wallpapers", icon: "ph:alien" },
    ]
  }),
});

</script>
