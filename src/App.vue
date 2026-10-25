<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { RouterLink, RouterView, useRoute } from "vue-router";
import { lang, changeLang } from "./state";
import { NAVIGATION } from "./data/navigation";
import { useTranslation } from "./composables/useTranslation";
import { css } from "../styled-system/css";
import {
  brand,
  b3Button,
  button,
  chevron,
  dropdownLink,
  glassPanel,
  languageSelect,
  mainNav as mainNavClass,
  menuToggle,
  navActions,
  navDropdown,
  navGroup,
  navLink,
  primaryButton,
  siteHeader,
  socialButton,
} from "./design-system/styles";

type NavChild = { to: string; label: string };
type NavItem = { to: string; label: string; children?: NavChild[] };

const route = useRoute();

const mobileMenuOpen = ref(false);
const openNavGroup = ref<string | null>(null);

const { t } = useTranslation();

const toggleNavGroup = (path: string): void => {
  openNavGroup.value = openNavGroup.value === path ? null : path;
};
const isNavItemActive = (item: NavItem): boolean => {
  return (
    route.path === item.to ||
    Boolean(
      item.children?.some(
        (child) => route.path === child.to || route.path.startsWith(`${child.to}/`),
      ),
    )
  );
};

watch(
  () => route.fullPath,
  () => {
    mobileMenuOpen.value = false;
    openNavGroup.value = null;
  },
);
watch(
  () => t("title"),
  (value: string) => {
    document.title = value;
  },
  { immediate: true },
);

const mainNav = computed<NavItem[]>(() =>
  NAVIGATION.map((item) => ({
    to: item.to,
    label: t(item.labelKey),
    children: item.children?.map((child) => ({ to: child.to, label: t(child.labelKey) })),
  })),
);
</script>

<template>
  <div :class="['site-shell', css({ minHeight: '100vh' })]">
    <header :class="['site-header', siteHeader, 'glass-panel', glassPanel]">
      <RouterLink :class="['brand', brand]" to="/" aria-label="Imai Laboratory home">
        <img src="/res/title.png" alt="Imai Laboratory" />
      </RouterLink>
      <button
        :class="['menu-toggle', menuToggle, { 'is-open': mobileMenuOpen }]"
        type="button"
        :aria-expanded="mobileMenuOpen"
        aria-label="Toggle navigation"
        @click="mobileMenuOpen = !mobileMenuOpen"
      >
        <span></span><span></span><span></span>
      </button>
      <nav
        :class="['main-nav', mainNavClass, { 'is-open': mobileMenuOpen }]"
        aria-label="Main navigation"
      >
        <template v-for="item in mainNav" :key="item.to + item.label">
          <div
            v-if="item.children"
            :class="[
              'nav-group',
              navGroup,
              { 'is-open': openNavGroup === item.to, 'is-active': isNavItemActive(item) },
            ]"
            @mouseenter="openNavGroup = item.to"
            @mouseleave="openNavGroup = null"
          >
            <button
              :class="['nav-link nav-parent', navLink, { 'is-active': isNavItemActive(item) }]"
              type="button"
              :aria-expanded="openNavGroup === item.to"
              @click="toggleNavGroup(item.to)"
            >
              {{ item.label }}
              <span
                :class="[chevron, { 'is-open': openNavGroup === item.to }]"
                aria-hidden="true"
              ></span>
            </button>
            <div :class="['nav-dropdown', navDropdown, { 'is-open': openNavGroup === item.to }]">
              <RouterLink
                v-for="child in item.children"
                :key="child.to"
                :to="child.to"
                :class="['dropdown-link', dropdownLink]"
                @click="openNavGroup = null"
                >{{ child.label }}</RouterLink
              >
            </div>
          </div>
          <RouterLink v-else :to="item.to" :class="['nav-link', navLink]">{{
            item.label
          }}</RouterLink>
        </template>
        <div :class="['nav-actions', navActions]">
          <label class="sr-only" for="language">{{ t("language") }}</label>
          <select
            id="language"
            :class="['language-select', languageSelect]"
            :value="lang"
            @change="changeLang(($event.target as HTMLSelectElement).value)"
          >
            <option value="ja">日本語</option>
            <option value="en">English</option>
          </select>
          <a
            :class="['button button-primary', button, primaryButton, b3Button]"
            href="https://www.ailab.ics.keio.ac.jp/welcome-junior/"
            >{{ t("menu_b3") }}</a
          >
          <a
            :class="['social-button', socialButton]"
            href="https://twitter.com/imailab"
            aria-label="Imai Laboratory on X"
            target="_blank"
            rel="noreferrer"
            >𝕏</a
          >
        </div>
      </nav>
    </header>

    <main>
      <RouterView v-slot="{ Component }">
        <component :is="Component" />
      </RouterView>
    </main>
    <footer :class="['site-footer', 'glass-panel', glassPanel]">
      <div class="footer-copy">{{ t("footer") }}</div>
      <div class="footer-banners">
        <img src="/res/jka-subsidy-completion-banner.png" alt="JKA subsidy completion notice" />
        <div class="footer-social-banner">
          <a href="https://www.jka-cycle.jp" target="_blank" rel="noreferrer">
            <img src="/res/jka-social-action-banner.png" alt="JKA Social Action" />
          </a>
          <a href="https://www.jka-cycle.jp" target="_blank" rel="noreferrer"
            >https://www.jka-cycle.jp</a
          >
        </div>
      </div>
    </footer>
  </div>
</template>
