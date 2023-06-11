<template>

  <section class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">

    <a
      v-for="category in categories"
      :href="getBlogPermalink(category.slug, 'category')"
      class="badge-primary justify-between group"
    >

      <span>{{ category.text }}</span>
      <span class="text-sm text-primary group-hover:text-on-primary">{{ category.count }}</span>

    </a>

  </section>

</template>

<script lang="ts">

import { defineComponent } from "vue";
import { getBlogPermalink } from "@utils/permalinks";

// Types
import type { PropType } from "vue";
import type { Category } from "@/types";

export default defineComponent({
  name: "CategoryList",

  props: {
    categories: {
      required: true,
      type: Object as PropType<Category[]>
    },
  },

  methods: { getBlogPermalink },
});

</script>
