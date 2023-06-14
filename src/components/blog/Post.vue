<template>

  <!--Post Header-->
  <div class="flex flex-col text-sm">

    <!--Post Cover(For Search)-->
    <img
      v-if="post.cover"
      class="hidden brightness-90 aspect-video object-cover group-hover:scale-105 transition ease-in-out duration-500"
      :src="post.cover"
      :alt="post.title"
      width="50"
      height="50"
      data-pagefind-meta="image[src]"
    />

    <!--Category-->
    <a
      :href="getBlogPermalink(post.category?.slug, 'category')"
      class="flex w-fit items-center text-on-background-dim group"
    >
      <Icon icon="tabler:folder" class="w-5 h-5 inline-block mr-2" />
      <span class="group-hover:text-primary"> {{ post.category.text }} </span>
    </a>

    <!--Title-->
    <h1 class="text-3xl md:text-5xl font-bold tracking-tight mt-2 mb-4">
      {{ post.title }}
    </h1>

    <div class="flex gap-8 text-on-background-dim" data-pagefind-ignore>

      <!--Post Date-->
      <div class="flex items-center">

        <Icon icon="tabler:calendar" class="w-5 h-5 inline-block mr-2 -mt-0.5" />
        <span>{{ post.publishDate }}</span>

      </div>

      <!--Reading Time-->
      <div class="flex items-center">

        <Icon icon="tabler:book" class="w-5 h-5 inline-block mr-2 -mt-0.5 " />
        <span>{{ post.readingTime }} minutes read</span>

      </div>

    </div>

    <!--Post Tags-->
    <div class="flex gap-x-2 mt-6">

      <a
        v-for="tag in post.tags"
        :href="getBlogPermalink(tag.slug, 'tag')"
        class="badge"
      >
        {{ tag.text }}
      </a>

    </div>

  </div>

  <!--Post Content-->
  <div class="grid grid-cols-12 gap-12 items-start max-w-5xl mx-auto py-12 sm:py-14 lg:py-16">

    <!--Table of Contents-->
    <nav v-if="post.side" class="col-span-3 hidden lg:block order-2 sticky top-24 mt-1" data-pagefind-ignore>
      <ToC :headings="post.headings"></ToC>
    </nav>

    <!--Article-->
    <article class="col-span-full lg:col-span-9 max-w-none  blog slide-enter-content">
      <slot />
    </article>
  </div>

  <!--Post Footer-->
  <div class="flex items-center justify-between" data-pagefind-ignore>

    <!--Back Link-->
    <a :href="getBlogPermalink()" class="button-outline !border-0 !px-1.5 !pr-2.5 text-sm">
      <Icon icon="tabler:chevron-left" class="w-5 h-5 inline-block  mr-2" />
      <span>Back to Blog</span>
    </a>

    <!--Social Share-->
    <SocialShare :title="post.title" :url="getCanonicalURL" />

  </div>

  <!--Similar Posts-->
  <!--  <div data-pagefind-ignore>-->
  <!--    <div class="page-heading text-3xl mb-0">Similar Posts</div>-->
  <!--  </div>-->

  <!--Comments-->
  <!--  <div data-pagefind-ignore>-->
  <!--    <Comments />-->
  <!--  </div>-->

</template>

<script lang="ts">

import { defineComponent, PropType } from "vue";
import { getBlogPermalink, getCanonical } from "@utils/permalinks";

// Components
import { Icon } from "@iconify/vue";
import ToC from "@components/blog/ToC.vue";
import Comments from "@components/blog/Comments.vue";
import SocialShare from "@components/common/SocialShare.vue";

// Types
import type { Post } from "@/types";

export default defineComponent({
  name: "Post",

  components: { Icon, ToC, SocialShare, Comments },

  props: {
    post: {
      required: true,
      type: Object as PropType<Post>
    },
    similarPosts: {
      required: true,
      type: Object as PropType<Post[]>
    },
  },

  computed: {

    /**
     * Get the canonical URL for the post.
     */
    getCanonicalURL() {
      return this.getCanonical(this.getBlogPermalink(this.post.slug));
    }
  },

  methods: {
    getCanonical,
    getBlogPermalink,
  }
});

</script>
