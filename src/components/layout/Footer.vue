<template>

  <footer class="border-t border-background-offset1 fade-enter" style="--enter-stage:3">
    <div class="max-w-7xl flex flex-col gap-6 justify-center items-center mx-auto px-4 py-8">

      <!--Social Icons-->
      <div class="flex gap-4 items-center">

        <a v-for="social in footerData?.socialLinks"
           class="button-icon"
           :aria-label="social.ariaLabel"
           :href="social.href"
           :target="social.external ? '_blank' : ''"
        >

          <Icon :icon="social.icon" class="w-6 h-6" />

        </a>

      </div>

      <!--Copyright-->
      <div class="flex flex-col items-center gap-2 text-sm text-on-background-dim">

        <p>
          © {{ footerData.copyright.year }}
          <a href="#" class="link-animation font-medium text-on-background">{{ footerData.copyright.author }}</a>
        </p>

        <p>
          Powered by
          <a class="link-animation font-medium text-on-background" href="https://astro.build/">Astro</a>
          and
          <a class="link-animation font-medium text-on-background"
             href="https://tailwindcss.com/">TailwindCSS</a>
        </p>

      </div>

    </div>
  </footer>

</template>

<script lang="ts">

import { defineComponent } from "vue";

// Components
import { Icon } from "@iconify/vue";

// Types
import type { PropType } from "vue";

interface FooterData {
  socialLinks: SocialLink[],
  copyright: Copyright
}

interface Copyright {
  year: string,
  author: string,
  href: string
}

interface SocialLink {
  ariaLabel: string,
  icon: string,
  href: string,
  external: boolean
}

export default defineComponent({
  name: "Footer",

  components: { Icon },

  props: {
    footerData: Object as PropType<FooterData>
  }
});

</script>
