<template>

  <div class="inline-flex justify-center gap-2">

    <!--Facebook-->
    <a aria-label="Facebook Share"
       target="_blank"
       rel="noreferrer noopener"
       class="share-button"
       :href="buildURL('Facebook')"
    >
      <Icon icon="fa6-brands:square-facebook" class="w-6 h-6" />
    </a>

    <!--Twitter-->
    <a aria-label="Twitter Share"
       target="_blank"
       rel="noreferrer noopener"
       class="share-button"
       :href="buildURL('Twitter')"
    >
      <Icon icon="fa6-brands:square-twitter" class="w-6 h-6" />
    </a>

    <!--LinkedIn-->
    <a aria-label="LinkedIn Share"
       target="_blank"
       rel="noreferrer noopener"
       class="share-button"
       :href="buildURL('LinkedIn')"
    >
      <Icon icon="fa6-brands:linkedin" class="w-6 h-6" />
    </a>

    <!--WhatsApp-->
    <a aria-label="WhatsApp Share"
       target="_blank"
       rel="noreferrer noopener"
       class="share-button"
       :href="buildURL('WhatsApp')"
    >
      <Icon icon="fa6-brands:square-whatsapp" class="w-6 h-6" />
    </a>

    <!--Mail-->
    <a aria-label="Mail Share"
       target="_blank"
       rel="noreferrer noopener"
       class="share-button"
       :href="buildURL('Mail')"
    >
      <Icon icon="fa6-solid:square-envelope" class="w-6 h-6" />
    </a>

  </div>

</template>

<script lang="ts">

import { defineComponent } from "vue";

// Components
import { Icon } from "@iconify/vue";

export default defineComponent({
  name: "SocialShare",

  components: { Icon },

  props: {
    title: {
      required: true,
      type: String
    },
    url: {
      required: true,
      type: [String, URL]
    }
  },

  methods: {

    /**
     * Build the href based on the type of social network.
     *
     * @param network
     */
    buildURL(network: string) {

      let href;

      switch (network) {

        case "Facebook":
          href = `https://www.facebook.com/sharer.php?u=${this.url}`;
          break;

        case "Twitter":
          href = `https://twitter.com/intent/tweet?url=${this.url}&text=${this.title}`;
          break;

        case "LinkedIn":
          href = `https://www.linkedin.com/shareArticle?mini=true&url=${this.url}&title=${this.title}`;
          break;

        case "WhatsApp":
          href = `https://wa.me/?text=${this.title}%20${this.url}`;
          break;

        case "Mail":
          href = `mailto:?subject=%22${this.title}%22&body=${this.title}%20${this.url}`;
          break;
        default:
          return "";
      }

      return href;
    }
  }
});

</script>

<style scoped>

.share-button {
  @apply text-on-background-muted hover:text-on-background;
}

</style>
