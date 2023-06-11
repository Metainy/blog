<template>

  <article class="flex flex-col gap-4 md:gap-4 h-full">

    <!--Cover Image-->
    <a :href="getBlogPermalink(post.slug)"
       class="block relative rounded-lg overflow-hidden group"
    >

      <span
        v-if="post.featured"
        class="absolute right-0 z-10 m-2 p-1 bg-background-offset1 text-accent rounded-full inline-flex justify-center items-center"
      >
            <Icon icon="tabler:star" class="w-4 h-4" />
      </span>

      <img
        v-if="post.cover"
        class="brightness-90 aspect-video object-cover group-hover:scale-105 group-hover:brightness-75 transition-all ease-in-out duration-500"
        :src="post.cover"
        :alt="post.title"
      />

    </a>

    <!--Post Info-->
    <div class="flex items-center gap-10 text-on-background-dim text-sm">

      <div class="flex items-center">

        <Icon icon="tabler:calendar" class="w-5 h-5 inline-block mr-2 -mt-0.5" />
        <span> {{ post.publishDate }}</span>

      </div>

      <a :href="getBlogPermalink(post.category?.slug, 'category')" class="flex items-center group">

        <Icon icon="tabler:folder" class="w-5 h-5 inline-block mr-2" />
        <span class="group-hover:text-primary"> {{ post.category.text }} </span>

      </a>

    </div>

    <!--Post Title-->
    <h2 class="text-2xl font-semibold leading-tight">

      <a
        :href="getBlogPermalink(post.slug)"
        class="link-animation hover:text-primary"
      >
        {{ post.title }}
      </a>

    </h2>

    <!--Post Excerpt-->
    <div class="flex-grow text-on-background-dim text-sm">
      {{ post.excerpt }}
    </div>

    <!--Post Tags-->
    <div class="flex gap-x-2">

      <a
        v-for="tag in post.tags"
        :href="getBlogPermalink(tag.slug, 'tag')"
        class="badge"
      >
        {{ tag.text }}
      </a>

    </div>

  </article>

</template>

<script lang="ts">

import { defineComponent } from "vue";
import { getBlogPermalink } from "@utils/permalinks";

// Components
import { Icon } from "@iconify/vue";

// Types
import type { PropType } from "vue";
import type { Post } from "@/types";

export default defineComponent({
  name: "PostCard",

  components: { Icon },

  props: {
    post: {
      required: true,
      type: Object as PropType<Post>
    }
  },

  methods: {
    getBlogPermalink,
  }
});

</script>
