<template>

  <nav
    v-if="hasPages"
    class="flex justify-center gap-x-2 mt-14 md:mt-16 lg:mt-20"
    aria-label="Pagination"
  >

    <!--Previous Page Button-->
    <a
      :href="(currentPage - 1) === 1 ? getBlogPermalink() : getBlogPermalink(currentPage - 1)"
      class="button-pagination h-10 w-10"
      :class="{'disabled': !hasPreviousPage}"
    >

      <span class="sr-only">Previous</span>
      <Icon icon="tabler:chevron-left" class="w-5 h-5" />

    </a>

    <!--Pages Buttons-->
    <a
      v-for="(page) in totalPages"
      :href='page === 1 ? getBlogPermalink() : getBlogPermalink(page)'
      aria-current="Page"
      class="button-pagination h-10 w-10"
      :class="{'active': page === currentPage}"
    >

      <span class="sr-only">Previous</span>

      {{ page }}

    </a>

    <!--Next Page Button-->
    <a
      :href="getBlogPermalink(currentPage + 1)"
      class="button-pagination h-10 w-10"
      :class="{'disabled': !hasNextPage}"
    >

      <span class="sr-only">Next</span>

      <Icon icon="tabler:chevron-right" class="w-5 h-5" />

    </a>

  </nav>

</template>

<script lang="ts">

import { defineComponent } from "vue";
import { getBlogPermalink } from "@utils/permalinks";

// Components
import { Icon } from "@iconify/vue";

export default defineComponent({
  name: "Pagination",

  components: { Icon },

  props: {
    totalPages: { required: true, type: Number },
    currentPage: { required: true, type: Number }
  },

  methods: { getBlogPermalink },

  computed: {

    hasPages() {
      return this.totalPages > 1;
    },

    hasPreviousPage() {
      return this.currentPage > 1;
    },

    hasNextPage() {
      return this.totalPages > this.currentPage;
    }
  }
});

</script>
