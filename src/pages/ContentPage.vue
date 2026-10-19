<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { lang, texts } from '../state'
const route = useRoute()
const t = (key: string) => texts.value[key] ?? key
const path = computed(() => route.path.replace(/\/+$/, '') || '/')
const pageKey: Record<string,string> = {
 '/research':'menu_research_theme','/research_hai':'menu_research_hai','/research_hri':'menu_research_hri',
 '/research_ca':'menu_research_ca','/research_as':'menu_research_as','/research_cn':'menu_research_cn',
 '/research_proj':'menu_research_proj','/member':'members_head','/publication':'publication_journal_head',
 '/publication_journal':'publication_journal_head','/publication_international':'publication_international_head',
 '/publication_domestic':'publication_domestic_head','/activity':'activity_award_head','/activity_award':'activity_award_head',
 '/activity_media':'activity_media_head','/activity_talk':'activity_talk_head','/access':'menu_access',
 '/links':'links_head','/for_collaborations':'menu_for_collaborations','/b3':'menu_b3'
}
const title = computed(() => t(pageKey[path.value] || '404 Not Found'))
const researchKeys = computed(() => {
  if (path.value === '/research') return ['relbot','travot','ag','isc','scains','closer','ai','si','ad','iu','ui']
  const sub = path.value.replace('/research_','')
  const prefix: Record<string,string> = { hai:'hai',hri:'hri',ca:'ca',as:'as',cn:'cn' }
  return prefix[sub] ? [prefix[sub]] : []
})
const researchAssets = computed<Record<string,string>>(() => ({
 ag:'/res/research/ag.png', ai: lang.value === 'ja' ? '/res/research/scain_ja.png' : '/res/research/scain_en.png',
 si:'/res/research/context-situated.png', iu:'/res/research/iu.jpg', ui:'/res/research/ui.png',
}))
const videos: Record<string,string> = {
 relbot:'https://www.ailab.ics.keio.ac.jp/welcome-junior/images/demos_2024/RelBot.mp4',
 travot:'https://www.ailab.ics.keio.ac.jp/welcome-junior/images/demos_2024/TRAVOT.mp4',
 isc:'https://www.ailab.ics.keio.ac.jp/welcome-junior/images/demos_2024/Interactive-SmartClerk.mp4',
 scains:'https://www.ailab.ics.keio.ac.jp/welcome-junior/images/demos_2024/SCAINsPresenter.mp4',
}
const memberGroups = ref<any[]>([])
const pastGroups = ref<any[]>([])
const years = ref<any[]>([])
const loading = ref(false)
const errorMessage = ref('')
const cache = new Map<string, any>()
async function json(url:string) {
  if(cache.has(url)) return cache.get(url)
  const response = await fetch(url, {cache:'no-store'})
  if(!response.ok) throw new Error(`${response.status}`)
  const result = await response.json(); cache.set(url,result); return result
}
function authorText(value:any): string {
 const result = localized(value)
 return (Array.isArray(result) ? result : result ? [result] : []).map((item:any)=>String(item).replace(/_/g,' ')).join(', ')
}
function localized(value:any):any {
 if(value == null) return ''
 if(typeof value !== 'object') return String(value)
 return value[lang.value] ?? Object.values(value)[0] ?? ''
}
async function loadMembers() {
 loading.value=true; errorMessage.value=''
 try {
   const base='https://raw.githubusercontent.com/imai-laboratory/members_data/master/'
   const [current,past]=await Promise.all([json(base+'members.json'),json(base+'past_members.json')])
   memberGroups.value=Array.isArray(current)?current:[]; pastGroups.value=Array.isArray(past)?past:[]
 } catch(e) { errorMessage.value=lang.value==='ja'?'メンバー情報を読み込めませんでした。':'Unable to load member data.'; console.error(e) }
 finally { loading.value=false }
}
async function loadYearly(base:string, type:string) {
 loading.value=true; errorMessage.value=''
 try {
  const list=await json(`${base}${type}/${type}_years.json`)
  years.value=await Promise.all((Array.isArray(list)?list:[]).map(async (year:string)=>({
    year, items:await json(`${base}${type}/${type}_${year}.json`).catch(()=>[])
  })))
 } catch(e) { years.value=[]; errorMessage.value=lang.value==='ja'?'データを読み込めませんでした。':'Unable to load data.'; console.error(e) }
 finally { loading.value=false }
}
watch([path,lang], async()=>{
 if(path.value==='/member') await loadMembers()
 else if(['/publication','/publication_journal','/publication_international','/publication_domestic'].includes(path.value)) {
  const kind=path.value==='/publication_international'?'international':path.value==='/publication_domestic'?'domestic':'journal'
  await loadYearly('https://raw.githubusercontent.com/imai-laboratory/publications_data/master/',kind)
 } else if(['/activity','/activity_award','/activity_media','/activity_talk'].includes(path.value)) {
  const kind=path.value==='/activity_media'?'media':path.value==='/activity_talk'?'talk':'award'
  await loadYearly('https://raw.githubusercontent.com/imai-laboratory/activities_data/master/',kind)
 }
},{immediate:true})
const links=[
 {title:'Imai Laboratory - GitHub',url:'https://github.com/imai-laboratory'},
 {title:'計算理論2017 - お魚天国',url:'http://osakana.ailab.ics.keio.ac.jp'},
 {title:'『心と脳－認知科学入門』コメント・参考文献',url:'http://www.ayu.ics.keio.ac.jp/references/cognitivescience/'},
 {title:'Cognitive Robot Interaction 参考文献',url:'http://www.ailab.ics.keio.ac.jp/webpage_personal/cognitive_robot_interaction/'},
]
function publicationNumber(yearIndex:number, itemIndex:number) {
 const total = years.value.reduce((sum, group) => sum + (group.items?.length || 0), 0)
 const previous = years.value.slice(0, yearIndex).reduce((sum, group) => sum + (group.items?.length || 0), 0)
 return total - previous - itemIndex
}
function pastGrade(grade:string) {
 return grade==='d'?t('members_past_grade_doctor'):grade==='m'?t('members_past_grade_master'):grade==='b'?t('members_past_grade_bachelor'):grade
}
const projects = computed(()=>[
 {title:t('research_proj_crest'),desc:t('research_proj_crest_desc'),url:'http://crest.ailab.ics.keio.ac.jp/context/'},
 {title:t('research_proj_sip'),desc:t('research_proj_sip_desc'),url:'https://www.nedo.go.jp/activities/ZZJP2_100126.html'},
 ...(lang.value==='ja'?[{title:t('research_proj_agv'),desc:'',url:'https://agventurelab.or.jp/'}]:[])
])
</script>

<template>
  <section v-if="pageKey[path]" class="page-hero">
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
    <p v-if="loading" class="status-message">{{ lang==='ja'?'読み込み中…':'Loading…' }}</p><p v-if="errorMessage" class="status-message">{{ errorMessage }} <button class="text-link" @click="loadMembers">{{ lang==='ja'?'再読み込み':'Retry' }}</button></p>
    <section v-for="(group,index) in memberGroups" :key="index" class="member-group">
      <h2 class="section-title">{{ localized(group.role) }}</h2>
      <div class="member-grid">
        <article v-for="(member,i) in (group.members||[])" :key="i" class="member-card glass-panel">
          <img class="member-avatar" :src="member.img ? `https://raw.githubusercontent.com/imai-laboratory/members_data/master/imgs/${member.img}` : '/res/title.png'" :alt="localized(member.name)" loading="lazy" />
          <h3>{{ localized(member.name) }}</h3><p>{{ localized(member.grade) }}</p><a v-if="member.email" :href="`mailto:${member.email}`">{{ member.email }}</a><div v-if="member.option" class="member-option" v-html="member.option"></div>
        </article>
      </div>
    </section>
    <h2 class="section-title">{{ t('members_past_head') }}</h2>
    <div class="past-member-list"><section v-for="(group,index) in pastGroups" :key="index"><h3>{{ group.year }}</h3><p v-for="(member,i) in (group.members||[])" :key="i">{{ localized(member.name) }}<span v-if="member.grade"> ({{ pastGrade(member.grade) }})</span></p></section></div>
  </section>
  <section v-else-if="path.startsWith('/publication')" class="section-wrap content-stack">
    <p v-if="loading" class="status-message">{{ lang==='ja'?'読み込み中…':'Loading…' }}</p><p v-if="errorMessage" class="status-message">{{ errorMessage }}</p>
    <section v-for="(group,groupIndex) in years" :key="group.year" class="year-section"><h2 class="year-heading">{{ group.year }}</h2>
      <div v-for="(paper,index) in (group.items||[])" :key="index" class="publication-row glass-panel"><span class="publication-index">{{ publicationNumber(Number(groupIndex), Number(index)) }}</span><div>
        <p v-if="paper.author"><strong>{{ authorText(paper.author) }}</strong></p>
        <p v-if="paper.title" class="paper-title">“{{ localized(paper.title).replace(/_/g,' ') }}”</p>
        <p class="paper-meta">{{ [paper.book&&localized(paper.book),paper.vol,paper.no,paper.page,paper.year].filter(Boolean).join(', ').replace(/_/g,' ') }}</p>
        <p class="paper-meta">{{ [paper.host_city&&localized(paper.host_city),paper.host_country&&localized(paper.host_country)].filter(Boolean).join(lang==='ja'?'・':', ') }}</p>
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
