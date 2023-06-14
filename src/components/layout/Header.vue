<template>

  <header
    id="header"
    class="border-b border-background-offset1 top-0 z-30"
    :class="{sticky: headerData?.isSticky}"
  >
    <div class="max-w-7xl flex flex-wrap items-center justify-between mx-auto py-3 md:py-4 px-3 md:px-4">

      <!--Left Section-->
      <div class="flex gap-2 order-1">

        <!--Nav Brand-->
        <a
          :href="getHomePermalink()"
          class="flex items-center justify-center gap-2 group"
          aria-label="Logo"
        >

          <Logo />

        </a>

      </div>

      <!--Navigation-->
      <nav aria-label="Navigation" class="hidden md:block w-full md:w-auto order-3 md:order-2">

        <ul class="navigation-list">
          <li v-for="item in headerData?.nav" class="py-0.5">

            <!--Nav Group-->
            <div v-if="item.links?.length" class="group">

              <!--Dropdown Activator-->
              <button
                class="nav-dropdown-activator"
                @click="expandDropdown($event.target, item.text)"
                :class="{'active-link': getActiveLink(undefined, item.links)}"
              >

                {{ item.text }}
                <Icon icon="tabler:chevron-down" class="nav-dropdown-icon w-5 h-5 ml-2 inline md:inline" />

              </button>

              <!--Dropdown Menu-->
              <ul :data-menu="item.text" class="nav-dropdown-menu hidden">

                <li v-for="subItem in item.links">
                  <a
                    :href="subItem.href" class="nav-sub-link"
                    :class="{'active-link': getActiveLink(subItem.href)}"
                  >
                    {{ subItem.text }}
                  </a>
                </li>

              </ul>

            </div>

            <!--Nav Item-->
            <a v-else :href="item.href" class="nav-link" :class="{'active-link': getActiveLink(item.href)}">
              {{ item.text }}
            </a>

          </li>
        </ul>

        <!--Divider-->
        <div
          v-if="headerData?.actions.length"
          class="md:hidden max-w-md mx-auto my-2 border-t border-background-offset2"
        />

        <!--Mobile Actions-->
        <ul
          v-if="headerData?.actions.length"
          class="md:hidden flex max-w-md mx-auto text-center justify-center p-4 text-on-background font-medium text-xl"
        >

          <li class="py-2.5 !w-full">
            <a
              v-for="action in headerData?.actions"
              :href="action.href"
              :target="action.external ? '_blank' : ''"
              :aria-label="action.ariaLabel"
              class="button-outline !w-full !px-20"
            >

              <Icon v-if="action.icon" :icon="action.icon" class="w-5 h-5 mr-2" />

              {{ action.text }}

            </a>
          </li>

        </ul>

      </nav>

      <!--Right Section-->
      <div class="flex items-center gap-2 order-2 md:order-3">

        <!--Icons-->
        <div class="flex gap-2">

          <!--Search Button-->
          <button
            v-if="headerData?.showSearchButton"
            type="button" class="button-icon"
            aria-label="Search"
            @click="toggleSearch"
          >
            <Icon icon="tabler:search" class="w-6 h-6" />
          </button>

          <!--Theme Toggle Button-->
          <ThemeToggle v-if="headerData?.showThemeToggle" />

          <!--Menu Toggle Button-->
          <MenuToggle />

        </div>

        <!--Actions-->
        <div v-if="headerData?.actions.length" class="hidden lg:flex">

          <a
            v-for="action in headerData?.actions"
            :href="action.href"
            :target="action.external ? '_blank' : ''"
            :aria-label="action.ariaLabel"
            class="button-outline ml-6"
          >

            <Icon v-if="action.icon" :icon="action.icon" class="w-5 h-5 mr-2" />

            {{ action.text }}

          </a>

        </div>

      </div>

    </div>
  </header>

</template>

<script lang="ts">

import { defineComponent } from "vue";
import { getHomePermalink } from "@utils/permalinks";

// Components
import { Icon } from "@iconify/vue";
import ThemeToggle from "@components/layout/ThemeToggle.vue";
import Logo from "@components/layout/Logo.vue";
import MenuToggle from "@components/layout/MenuToggle.vue";

// Types
import type { PropType } from "vue";
import type { HeaderData } from "@/config/header";

export default defineComponent({
  name: "Header",

  components: { MenuToggle, Icon, ThemeToggle, Logo },

  props: {
    headerData: Object as PropType<HeaderData>,
    currentPath: {
      required: true,
      type: String
    }
  },

  methods: {
    getHomePermalink,

    /**
     * Check navigation item or group is active based on the current URL.
     *
     * @param link
     * @param links
     */
    getActiveLink(link: string | undefined, links: any = null) {

      if (this.currentPath === "/") return false;

      // Remove trailing slash if any
      const currentPath = this.currentPath.replace(/\/$/, "");

      if (links) {

        const parsedPath = "/" + currentPath?.split("/")[1];
        return links.some((link: { href: string }) => link.href.startsWith(parsedPath));
      }

      return currentPath === link;
    },

    /**
     * Expand dropdown menus on click.
     *
     * @param target
     * @param itemName
     */
    expandDropdown(target: HTMLElement, itemName: string) {

      const menu = document.querySelector(`[data-menu="${itemName}"]`);

      if (menu) {
        menu.classList.toggle("hidden");
        target.toggleAttribute("aria-expanded");
      }
    },

    /**
     * Open or close search dialog.
     */
    toggleSearch() {

      const dialog = document.getElementById("search-dialog");
      if (dialog) dialog.classList.toggle("hidden");
    }
  }
});

</script>

<style scoped lang="scss">

#header.scroll {
  @apply shadow-md md:shadow-lg md:backdrop-blur bg-background md:bg-background/95;
}

.navigation-list {
  @apply flex flex-col md:flex-row
  max-w-md mx-auto mt-10 md:mt-0 p-4 md:p-0
  text-on-background font-medium text-xl md:text-base;
}

// Navigation link
.nav-link {
  @apply block rounded-lg md:rounded-none
  py-2.5 px-4
  hover:bg-background-offset1 md:hover:bg-transparent md:hover:text-primary
  transition duration-100;
}

// Navigation active link
.active-link {
  @apply text-primary #{!important};
}

// Dropdown menu activator button
.nav-dropdown-activator {
  @apply flex justify-between items-center w-full rounded-lg md:rounded-none
  py-2.5 px-4
  hover:bg-background-offset1 md:hover:bg-transparent md:hover:text-primary;
}

// Dropdown menu toggle icon
.nav-dropdown-icon {
  @apply transition duration-300 md:group-hover:-rotate-180;
}

.nav-dropdown-activator[aria-expanded] svg {
  @apply transition duration-300 -rotate-180;
}

// Dropdown menu
.nav-dropdown-menu {
  @apply md:hidden md:absolute md:group-hover:block md:rounded-lg md:shadow
  md:border md:border-background-offset1 md:bg-background;
}

// Navigation nested link
.nav-sub-link {
  @apply block rounded-lg whitespace-nowrap
  py-2.5 px-8 md:px-6
  hover:bg-background-offset1 md:hover:bg-transparent md:hover:text-primary
  transition duration-100;
}

</style>
