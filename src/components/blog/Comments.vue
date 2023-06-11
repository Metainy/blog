<template>

  <section class="mx-auto max-w-screen-md">

    <h2 class="my-[1em] text-3xl text-center font-bold text-green">Comments</h2>

    <Giscus
      id="comments"
      repo="Metainy/blog"
      repo-id="R_kgDOJrN02Q"
      category="Announcements"
      category-id="DIC_kwDOJrN02c4CW9Iw"
      mapping="pathname"
      strict="0"
      reactions-enabled="1"
      emit-metadata="0"
      input-position="top"
      theme="transparent_dark"
      lang="en"
      loading="eager"
      crossorigin="anonymous"
    />
  </section>

</template>

<script lang="ts">

import { defineComponent } from "vue";

// Components
import Giscus from "@giscus/vue";

export default defineComponent({
  name: "Comments",

  components: { Giscus }
});

</script>
