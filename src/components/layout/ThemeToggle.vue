<template>

  <button
    type="button"
    class="button-icon"
    aria-label="Theme"
    @click="toggleTheme()"
  >

    <Icon :icon=" theme === 'light' ? 'tabler:sun' : 'tabler:moon'" class="w-6 h-6" />

  </button>

</template>

<script lang="ts">

import { defineComponent } from "vue";

// Components
import { Icon } from "@iconify/vue";

export default defineComponent({
  name: "ThemeToggle",

  components: { Icon },

  data: () => ({
    theme: "light"
  }),

  methods: {

    toggleTheme() {

      this.theme = this.theme === "dark" ? "light" : "dark";

      if (this.theme === "dark") {
        document.documentElement.classList.add("dark");

      } else {
        document.documentElement.classList.remove("dark");
      }

      localStorage.setItem("theme", this.theme);
    }
  },

  mounted() {
    this.theme = localStorage.getItem("theme") ?? "light";
  }
});

</script>
