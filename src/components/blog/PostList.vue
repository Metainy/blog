<template>

  <section class="grid gap-8 gap-y-12 grid-cols-1 md:grid-cols-2">

    <div
      v-for="(post, index) in posts"
      :class="{ 'col-span-1 md:col-span-2 2xl:col-span-1' : index === 0 && homeView}"
    >

      <PostCard :post="post" />

    </div>

  </section>

</template>

<script lang="ts">

import { defineComponent } from "vue";

import type { PropType } from "vue";
import type { Post } from "@/types";

// Components
import PostCard from "@components/blog/PostCard.vue";

export default defineComponent({
  name: "PostList",

  components: { PostCard },

  props: {
    posts: {
      required: true,
      type: Object as PropType<Post[]>
    },
    homeView: {
      required: false,
      type: Boolean,
      default: false
    }
  }
});

</script>
