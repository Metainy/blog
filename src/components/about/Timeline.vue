<template>

  <ol class="relative space-y-4 border-l border-background-offset1 ml-3.5">

    <li v-for="item in timeline" class="ml-8">

        <span
          class="absolute flex items-center justify-center w-8 h-8 -left-4 rounded-full"
          :class="item.style"
        >
          <Icon :icon="item.icon" class="h-5 w-5 p-px" />
        </span>

      <h2 class="flex items-center mb-px text-sm font-medium text-gray-900 dark:text-white">
        {{ item.text }}
      </h2>

      <time class="block text-xs font-medium leading-none text-gray-400 dark:text-gray-500">
        {{ item.date }}
      </time>

    </li>

  </ol>

</template>

<script lang="ts">

import { defineComponent } from "vue";

// Components
import { Icon } from "@iconify/vue";

export default defineComponent({
  name: "AboutTimeline",

  components: { Icon },

  data: () => ({
    timeline: [
      {
        text: "Started working remotely",
        date: "May, 2020",
        icon: "heroicons:computer-desktop",
        style: "bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-300"
      },
      {
        text: "Working as back-end developer",
        date: "October, 2018",
        icon: "heroicons:server-stack",
        style: "bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-300"
      },
      {
        text: "Transitioned to back-end",
        date: "December, 2017",
        icon: "heroicons:light-bulb",
        style: "bg-amber-100 dark:bg-amber-700 text-amber-600 dark:text-amber-200"
      },
      {
        text: "Started working as a freelance",
        date: "November, 2015",
        icon: "heroicons:globe-alt",
        style: "bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-300"
      },
      {
        text: "Released my first blog",
        date: "January, 2015",
        icon: "heroicons:clipboard-document-list",
        style: "bg-pink-100 dark:bg-pink-700 text-pink-600 dark:text-pink-200"
      },
      {
        text: "Full time Android developer",
        date: "March, 2014",
        icon: "heroicons:briefcase",
        style: "bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-300"
      },
      {
        text: "Landed my first Android training",
        date: "April, 2013",
        icon: "heroicons:trophy",
        style: "bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-300"
      },
      {
        text: "Started an auto parts business",
        date: "December, 2012",
        icon: "heroicons:building-office",
        style: "bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-300"
      },
      {
        text: "Graduated from University",
        date: "August, 2012",
        icon: "heroicons:academic-cap",
        style: "bg-green-100 dark:bg-green-800 text-green-600 dark:text-green-300"
      },
    ]
  })
});

</script>
