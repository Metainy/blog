<template>

  <a
    :href="getPermalink(item.raw_url)"
    class="flex gap-2 items-center rounded bg-background hover:bg-background-offset2 mx-2 p-2"
  >

    <div class="hidden md:block w-1/5">
      <img
        v-if="item.meta.image"
        class="brightness-90 aspect-video object-cover rounded transition ease-in-out duration-500"
        :src="item.meta.image"
        :alt="item.meta.title"
      />
    </div>

    <div class="md:w-4/5 text-sm flex flex-col gap-2">

      <p class="mr-1 font-semibold">
        {{ item.meta.title }}
      </p>

      <p class="text-on-background-dim text-xs" v-html="item.excerpt" />
    </div>
  </a>

</template>

<script lang="ts">

import { defineComponent, PropType } from "vue";
import { getPermalink } from "@utils/permalinks";

interface SearchItem {
  raw_url: string;
  content: string;
  excerpt: string;
  meta: { title: string, image: string }
}

export default defineComponent({
  name: "SearchItem",

  props: {
    item: {
      required: true,
      type: Object as PropType<SearchItem>
    }
  },

  methods: {
    getPermalink,
  }
});

</script>
