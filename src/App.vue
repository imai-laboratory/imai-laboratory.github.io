<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { lang, texts, changeLang } from './state'
import { css } from '../styled-system/css'

type NavChild = { to: string; label: string }
type NavItem = { to: string; label: string; children?: NavChild[] }

const route = useRoute()
const mobileMenuOpen = ref(false)
const openNavGroup = ref<string | null>(null)
const t = (key: string) => texts.value[key] ?? key
function toggleNavGroup(path: string) {
  openNavGroup.value = openNavGroup.value === path ? null : path
}

watch(() => route.fullPath, () => {
  mobileMenuOpen.value = false
  openNavGroup.value = null
})
watch(texts, value => { document.title = value.title }, { immediate: true })

const mainNav = computed<NavItem[]>(() => [
  { to: '/', label: t('menu_home') },
  { to: '/research', label: t('menu_research'), children: [
    { to: '/research', label: t('menu_research_theme') },
    { to: '/research_proj', label: t('menu_research_proj') },
  ] },
  { to: '/publication_journal', label: t('menu_publication'), children: [
    { to: '/publication_journal', label: t('menu_publication_journal') },
    { to: '/publication_international', label: t('menu_publication_international') },
    { to: '/publication_domestic', label: t('menu_publication_domestic') },
  ] },
  { to: '/activity_award', label: t('menu_activity'), children: [
    { to: '/activity_award', label: t('menu_activity_award') },
    { to: '/activity_media', label: t('menu_activity_media') },
    { to: '/activity_talk', label: t('menu_activity_talk') },
  ] },
  { to: '/member', label: t('menu_member') },
  { to: '/access', label: t('menu_access') },
  { to: '/links', label: t('menu_links') },
  { to: '/for_collaborations', label: t('menu_for_collaborations') },
])
</script>

<template>
  <div :class="['site-shell', css({ minHeight: '100vh' })]">
    <header class="site-header glass-panel">
      <RouterLink class="brand" to="/" aria-label="Imai Laboratory home">
        <img src="/res/title.png" alt="Imai Laboratory" />
      </RouterLink>
      <button class="menu-toggle" type="button" :aria-expanded="mobileMenuOpen" aria-label="Toggle navigation" @click="mobileMenuOpen = !mobileMenuOpen">
        <span></span><span></span><span></span>
      </button>
      <nav class="main-nav" :class="{ 'is-open': mobileMenuOpen }" aria-label="Main navigation">
        <template v-for="item in mainNav" :key="item.to + item.label">
          <div v-if="item.children" class="nav-group" :class="{ 'is-open': openNavGroup === item.to }" @mouseenter="openNavGroup = item.to" @mouseleave="openNavGroup = null">
            <button class="nav-link nav-parent" type="button" :aria-expanded="openNavGroup === item.to" @click="toggleNavGroup(item.to)">{{ item.label }} <span class="chevron">⌄</span></button>
            <div class="nav-dropdown">
              <RouterLink v-for="child in item.children" :key="child.to" :to="child.to" class="dropdown-link">{{ child.label }}</RouterLink>
            </div>
          </div>
          <RouterLink v-else :to="item.to" class="nav-link">{{ item.label }}</RouterLink>
        </template>
        <div class="nav-actions">
          <label class="sr-only" for="language">{{ t('language') }}</label>
          <select id="language" class="language-select" :value="lang" @change="changeLang(($event.target as HTMLSelectElement).value)">
            <option value="ja">日本語</option><option value="en">English</option>
          </select>
          <a class="button button-primary" href="https://www.ailab.ics.keio.ac.jp/welcome-junior/">{{ t('menu_b3') }}</a>
          <a class="social-button" href="https://twitter.com/imailab" aria-label="Imai Laboratory on X" target="_blank" rel="noreferrer">𝕏</a>
        </div>
      </nav>
    </header>

    <main>
      <RouterView v-slot="{ Component }">
        <component :is="Component" />
      </RouterView>
    </main>
    <footer class="site-footer glass-panel">
      <div class="footer-copy">{{ t('footer') }}</div>
      <div class="footer-banners">
        <img src="/res/jka-subsidy-completion-banner.png" alt="JKA subsidy completion notice" />
        <div class="footer-social-banner">
          <a href="https://www.jka-cycle.jp" target="_blank" rel="noreferrer">
            <img src="/res/jka-social-action-banner.png" alt="JKA Social Action" />
          </a>
          <a href="https://www.jka-cycle.jp" target="_blank" rel="noreferrer">https://www.jka-cycle.jp</a>
        </div>
      </div>
    </footer>
  </div>
</template>
