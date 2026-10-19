<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { lang, texts } from '../state'
import { PAGE_TITLE_KEYS, PROJECTS, RESEARCH_ASSETS, RESEARCH_KEYS, RESEARCH_SUBPAGES, RESEARCH_VIDEOS, LINKS } from '../data/siteContent'
import { useRemoteContent } from '../composables/useRemoteContent'
import { localized, localizedString } from '../utils/localization'
import type { Activity, Publication } from '../types/content'
const route = useRoute()
const t = (key: string) => texts.value[key] ?? key
const path = computed(() => route.path.replace(/\/+$/, '') || '/')
const title = computed(() => t(PAGE_TITLE_KEYS[path.value] || '404 Not Found'))
const researchKeys = computed(() => {
  if (path.value === '/research') return RESEARCH_KEYS
  const sub = path.value.replace('/research_','')
  return RESEARCH_SUBPAGES[sub] ? [RESEARCH_SUBPAGES[sub]] : []
})
const { memberGroups, pastGroups, years, loading, errorMessage, refresh } = useRemoteContent(path, lang)
const links = LINKS
const researchAssets = computed<Record<string, string>>(() => ({ ...RESEARCH_ASSETS, ai: lang.value === 'ja' ? '/res/research/scain_ja.png' : '/res/research/scain_en.png' }))
const videos = RESEARCH_VIDEOS
function authorText(value: Publication['author']): string {
  const result = localized(value, lang.value)
  return (Array.isArray(result) ? result : result ? [result] : []).map(item => item.replace(/_/g, ' ')).join(', ')
}
function publicationNumber(yearIndex:number, itemIndex:number) {
 const total = years.value.reduce((sum, group) => sum + (group.items?.length || 0), 0)
 const previous = years.value.slice(0, yearIndex).reduce((sum, group) => sum + (group.items?.length || 0), 0)
 return total - previous - itemIndex
}
function pastGrade(grade:string) {
 return grade==='d'?t('members_past_grade_doctor'):grade==='m'?t('members_past_grade_master'):grade==='b'?t('members_past_grade_bachelor'):grade
}
const projects = computed(() => PROJECTS
  .filter(project => project.titleKey !== 'research_proj_agv' || lang.value === 'ja')
  .map(project => ({ title: t(project.titleKey), desc: project.descKey ? t(project.descKey) : '', url: project.url })))
</script>

<template>
  <section v-if="PAGE_TITLE_KEYS[path]" class="page-hero">
    <div class="hero-content"><p class="eyebrow">IMAI LABORATORY</p><h1>{{ title }}</h1></div>
  </section>
  <section v-if="path==='/research'" class="section-wrap content-stack">
    <div v-for="key in researchKeys" :id="'research_section_'+key" :key="key" class="research-block">
      <div class="subsection-heading"><h2>{{ t(`research_${key}_head`) }}</h2><span>↗</span></div>
      <div class="research-content">
        <div v-if="researchAssets[key]" class="research-media"><img :src="researchAssets[key]" :alt="t(`research_${key}_head`)" loading="lazy" /></div>
        <div v-else-if="videos[key]" class="research-media"><video :src="videos[key]" controls preload="metadata"></video></div>
        <div class="research-description"><p>{{ t(`research_${key === 'scains' ? 'scains1' : key}_exp`) }}</p>
          <p v-if="key==='scains'">{{ t('research_scains2_exp') }}</p>
          <video v-if="key==='scains'" src="https://www.ailab.ics.keio.ac.jp/welcome-junior/images/demos_2024/SCAINs_algo.mp4" controls preload="metadata"></video>
        </div>
      </div>
    </div>
  </section>
  <section v-else-if="path.startsWith('/research_') && path!=='/research_proj'" class="section-wrap content-stack">
    <div v-for="key in researchKeys" :key="key" class="glass-card research-content">
      <img v-if="researchAssets[key]" :src="researchAssets[key]" :alt="t(`research_${key}_head`)" />
      <div><h2>{{ t(`research_${key}_head`) }}</h2><p>{{ t(`research_${key}_exp`) }}</p></div>
    </div>
  </section>
  <section v-else-if="path==='/research_proj'" class="section-wrap card-list">
    <article v-for="project in projects" :key="project.title" class="glass-card info-card"><h2>{{ project.title }}</h2><p>{{ project.desc }}</p><a class="button button-primary" :href="project.url" target="_blank" rel="noreferrer">here ↗</a></article>
  </section>
  <section v-else-if="path==='/member'" class="section-wrap content-stack">
    <p v-if="loading" class="status-message">{{ lang==='ja'?'読み込み中…':'Loading…' }}</p><p v-if="errorMessage" class="status-message">{{ errorMessage }} <button class="text-link" @click="refresh">{{ lang==='ja'?'再読み込み':'Retry' }}</button></p>
    <section v-for="(group,index) in memberGroups" :key="index" class="member-group">
      <h2 class="section-title">{{ localizedString(group.role, lang) }}</h2>
      <div class="member-grid">
        <article v-for="(member,i) in (group.members||[])" :key="i" class="member-card glass-panel">
          <img class="member-avatar" :src="member.img ? `https://raw.githubusercontent.com/imai-laboratory/members_data/master/imgs/${member.img}` : '/res/title.png'" :alt="localizedString(member.name, lang)" loading="lazy" />
          <h3>{{ localizedString(member.name, lang) }}</h3><p>{{ localizedString(member.grade, lang) }}</p><a v-if="member.email" :href="`mailto:${member.email}`">{{ member.email }}</a><div v-if="member.option" class="member-option" v-html="member.option"></div>
        </article>
      </div>
    </section>
    <h2 class="section-title">{{ t('members_past_head') }}</h2>
    <div class="past-member-list"><section v-for="(group,index) in pastGroups" :key="index"><h3>{{ group.year }}</h3><p v-for="(member,i) in (group.members||[])" :key="i">{{ localizedString(member.name, lang) }}<span v-if="member.grade"> ({{ pastGrade(member.grade) }})</span></p></section></div>
  </section>
  <section v-else-if="path.startsWith('/publication')" class="section-wrap content-stack">
    <p v-if="loading" class="status-message">{{ lang==='ja'?'読み込み中…':'Loading…' }}</p><p v-if="errorMessage" class="status-message">{{ errorMessage }}</p>
    <section v-for="(group,groupIndex) in years" :key="group.year" class="year-section"><h2 class="year-heading">{{ group.year }}</h2>
      <div v-for="(paper,index) in (group.items||[])" :key="index" class="publication-row glass-panel"><span class="publication-index">{{ publicationNumber(Number(groupIndex), Number(index)) }}</span><div>
        <p v-if="paper.author"><strong>{{ authorText(paper.author) }}</strong></p>
        <p v-if="paper.title" class="paper-title">“{{ localizedString(paper.title, lang).replace(/_/g,' ') }}”</p>
        <p class="paper-meta">{{ [paper.book&&localizedString(paper.book, lang),paper.vol,paper.no,paper.page,paper.year].filter(Boolean).join(', ').replace(/_/g,' ') }}</p>
        <p class="paper-meta">{{ [paper.host_city&&localizedString(paper.host_city, lang),paper.host_country&&localizedString(paper.host_country, lang)].filter(Boolean).join(lang==='ja'?'・':', ') }}</p>
        <p v-if="paper.event_duration" class="paper-meta">{{ lang==='ja'?'開催期間: ':'Event duration: ' }}{{ paper.event_duration }}</p>
        <p v-if="paper.presentation_date" class="paper-meta">{{ lang==='ja'?'発表日: ':'Presentation date: ' }}{{ paper.presentation_date }}</p>
        <div class="paper-links"><a v-if="paper.draft_pdf_url" :href="paper.draft_pdf_url" target="_blank" rel="noreferrer">[PDF]</a><a v-if="paper.appendix_url" :href="paper.appendix_url" target="_blank" rel="noreferrer">[Appendix]</a></div>
      </div></div>
    </section>
  </section>
  <section v-else-if="path.startsWith('/activity')" class="section-wrap content-stack">
    <p v-if="loading" class="status-message">{{ lang==='ja'?'読み込み中…':'Loading…' }}</p><p v-if="errorMessage" class="status-message">{{ errorMessage }}</p>
    <section v-for="group in years" :key="group.year" class="year-section"><h2 class="year-heading">{{ group.year }}</h2>
      <article v-for="(item,index) in (group.items||[])" :key="index" class="activity-row glass-panel"><strong>{{ item.title }}</strong><div v-if="item.description" v-html="item.description"></div></article>
    </section>
  </section>
  <section v-else-if="path==='/access'" class="section-wrap access-layout">
    <div class="glass-card access-copy"><p>{{ t('access_location_exp') }}</p><p class="multiline">{{ t('access_address') }}</p><p class="multiline">{{ t('access_rooms') }}</p><p class="multiline">{{ t('access_tel') }}</p><a class="button button-primary" href="https://www.keio.ac.jp/ja/maps/" target="_blank" rel="noreferrer">{{ t('access_accessmap_link2') }} ↗</a></div>
    <div class="glass-card map-frame"><iframe title="Map to Keio University Yagami Campus" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3245.9341102634576!2d139.6515391506741!3d35.55532944437713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185f9c5d6e11e5%3A0x2781d6958786ab3a!2z5oW25oeJ576p5aG-5aSn5a2mIOefouS4iuOCreODo-ODs-ODkeOCuQ!5e0!3m2!1sja!2sjp!4v1502181984198" loading="lazy" allowfullscreen></iframe></div>
  </section>
  <section v-else-if="path==='/links'" class="section-wrap card-list">
    <article v-for="link in links" :key="link.url" class="glass-card info-card"><h2>{{ link.title }}</h2><a class="button button-primary" :href="link.url" target="_blank" rel="noreferrer">here ↗</a></article>
  </section>
  <section v-else-if="path==='/for_collaborations'" class="section-wrap content-stack">
    <article class="glass-card info-card"><h2>{{ t('for_collaborations_about') }}</h2></article>
    <article class="glass-card info-card"><h2>{{ t('for_collaborations_example') }}</h2><ul><li v-for="i in 5" :key="i">{{ t(`for_collaborations_example${i}`) }}</li></ul></article>
    <article class="glass-card info-card"><h2>{{ t('for_collaborations_contact') }}</h2><p>{{ t('for_collaborations_access') }}</p><p><strong>Email: </strong><a :href="`mailto:${t('for_collaborations_email')}`">{{ t('for_collaborations_email') }}</a></p></article>
  </section>
  <section v-else-if="path==='/b3'" class="section-wrap"><div class="glass-card status-message">{{ t('b3_preparing') }}</div></section>
  <section v-else class="section-wrap"><div class="glass-card status-message"><h2>404 Not Found</h2><RouterLink to="/" class="text-link">{{ t('menu_home') }} ↗</RouterLink></div></section>
</template>
