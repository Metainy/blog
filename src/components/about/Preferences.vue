<template>

  <div class="grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">

    <div v-for="item in items"
         class="flex rounded shadow bg-background-offset1 hover:bg-background-offset2 p-4 items-center justify-between group">

      <div class="flex flex-col">

        <span class="font-semibold text-xs text-on-background-muted pb-px">{{ item.category }}</span>
        <span class="font-medium text-sm md:text-base" :class="item.color">{{ item.text }}</span>

      </div>

      <span
        class="text-on-background-muted transition duration-300 group-hover:rotate-[360deg] group-hover:scale-110 "
      >
        <Icon :icon="item.icon" class="h-6 w-6 md:w-8 md:h-8" />
      </span>

    </div>

  </div>

</template>

<script lang="ts">

import { defineComponent } from "vue";

// Components
import { Icon } from "@iconify/vue";

export default defineComponent({
  name: "AboutInterests",

  components: { Icon },

  data: () => ({
    items: [
      {
        category: "Born",
        text: "August 25th",
        icon: "ph:cake-light",
        color: "text-blue-500"
      },
      {
        category: "Game",
        text: "Factorio",
        icon: "ph:game-controller-light",
        color: "text-green-500"
      },
      {
        category: "OS",
        text: "Windows 11",
        icon: "ph:desktop-light",
        color: "text-violet-500"
      },
      {
        category: "Drink",
        text: "Coffee",
        icon: "ph:coffee-light",
        color: "text-rose-500"
      },
      {
        category: "IDE",
        text: "JetBrains",
        icon: "ph:terminal-window-light",
        color: "text-indigo-500"
      },

      {
        category: "Movies",
        text: "Sci-Fi",
        icon: "ph:film-reel-light",
        color: "text-cyan-500"
      },
      {
        category: "Color",
        text: "Gray",
        icon: "ph:paint-brush-light",
        color: "text-gray-500"
      },
      {
        category: "Food",
        text: "Chicken",
        icon: "ph:bowl-food-light",
        color: "text-sky-500"
      },
      {
        category: "Fruit",
        text: "Mango",
        icon: "ph:flower-tulip-light",
        color: "text-orange-500"
      },
      {
        category: "Animal",
        text: "Horses",
        icon: "ph:cat-light",
        color: "text-lime-500"
      }
    ]
  })
});

</script>
