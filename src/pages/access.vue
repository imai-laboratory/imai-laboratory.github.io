<script setup lang="ts">
import { texts } from "../state";
import PageHero from "../components/PageHero.vue";

const t = (key: string) => texts.value[key] ?? key;
</script>

<template>
  <PageHero :title="t('menu_access')" :translate="t" />
  <section class="section-wrap access-layout">
    <div class="glass-card access-copy">
      <p>{{ t("access_location_exp") }}</p>
      <p class="multiline">{{ t("access_address") }}</p>
      <p class="multiline">{{ t("access_rooms") }}</p>
      <p class="multiline">{{ t("access_tel") }}</p>
      <a
        class="button button-primary"
        href="https://www.keio.ac.jp/ja/maps/"
        target="_blank"
        rel="noreferrer"
        >{{ t("access_accessmap_link2") }} ↗</a
      >
    </div>
    <div class="glass-card map-frame">
      <iframe
        title="Map to Keio University Yagami Campus"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3245.9341102634576!2d139.6515391506741!3d35.55532944437713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185f9c5d6e11e5%3A0x2781d6958786ab3a!2z5oW25oeJ576p5aG-5aSn5a2mIOefouS4iuOCreODo-ODs-ODkeOCuQ!5e0!3m2!1sja!2sjp!4v1502181984198"
        loading="lazy"
        allowfullscreen
      ></iframe>
    </div>
  </section>
</template>
