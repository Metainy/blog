<template>

  <div id="search-dialog" class="hidden" aria-hidden="true" aria-modal="true">

    <div class="modal-backdrop" tabindex="0" @click="closeDialog" />

    <div class="modal">
      <div class="modal-content">

        <!--Search Input-->
        <div class="relative">

          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-on-background-dim">
            <Icon icon="tabler:search" class=" w-5 h-5" />
          </div>

          <input type="text"
                 class="block w-full px-4 py-3 pl-10 text-sm rounded-lg outline-0
                 bg-background text-on-background
                 border border-background-offset2 focus:ring-2 focus:ring-primary focus:border-primary"
                 placeholder="What are you looking for?"
                 required
                 @input="searchInput">

        </div>

        <!--Search Results-->
        <div class="flex flex-col flex-grow overflow-y-auto gap-4">

          <div v-if="!results.length" class="text-on-background-dim text-center mt-6">
            Search for anything...
          </div>

          <SearchItem v-for="item in results" :item="item" />

        </div>

        <!--Footer-->
        <div class="px-4 text-xs text-center text-on-background-muted">
          Click anywhere to close
        </div>

      </div>
    </div>

  </div>

</template>

<script lang="ts">

import { defineComponent } from "vue";

// Components
import { Icon } from "@iconify/vue";
import SearchItem from "@components/common/SearchItem.vue";

export default defineComponent({
  name: "SearchModal",

  components: { Icon, SearchItem },

  data: () => ({
    pageFind: null,
    results: [] as any
  }),

  methods: {

    /**
     * Close the search modal.
     */
    closeDialog() {

      const dialog = document.getElementById("search-dialog");
      if (dialog) dialog.classList.toggle("hidden");
    },

    /**
     * Search input handler.
     *
     * @param event
     */
    async searchInput(event: any) {

      // Clear the results
      this.results = [];

      const pageFind = await this.getPageFind();

      const value = event.target.value;
      const res = await pageFind.search(value);

      res.results.map(async (result: any) => {

        const data = await result.data();
        this.results.push(data);
      });
    },

    /**
     * Get PageFind instance.
     */
    async getPageFind() {

      if (this.pageFind) return this.pageFind;

      let pageFindPath = "/_pagefind/pagefind.js";

      if (import.meta.env.DEV) pageFindPath = "../../../dist/_pagefind/pagefind.js";

      const pageFind = await import(/* @vite-ignore */ pageFindPath);
      this.pageFind = pageFind;

      return pageFind;
    }
  }
});

</script>

<style scoped>

.modal-backdrop {
  @apply fixed z-40 top-0 left-0 w-full h-screen bg-slate-950 opacity-50;
}

.modal {
  @apply fixed z-50 top-0 left-0 w-full h-full pointer-events-none
  flex justify-center items-center p-8;
}

.modal-content {
  @apply w-full max-w-xl h-2/3 max-h-full flex flex-col gap-8 pointer-events-auto
  px-6 py-8 rounded-lg shadow bg-background-offset1;
}

</style>
