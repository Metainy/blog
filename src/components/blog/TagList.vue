<template>

  <section class="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">

    <a
      v-for="tag in tags"
      :href="getBlogPermalink(tag.slug, 'tag')"
      class="badge-primary justify-between group"
    >

      <span>{{ tag.text }}</span>
      <span class="text-sm text-primary group-hover:text-on-primary">{{ tag.count }}</span>

    </a>

  </section>

</template>

<script lang="ts">

import { defineComponent } from "vue";
import { getBlogPermalink } from "@utils/permalinks";

// Types
import type { PropType } from "vue";
import type { Tag } from "@/types";

export default defineComponent({
  name: "TagList",

  props: {
    tags: {
      required: true,
      type: Object as PropType<Tag[]>
    },
  },

  methods: { getBlogPermalink },
});

</script>
