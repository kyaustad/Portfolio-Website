<template>
  <section id="work">
    <div class="snap-start gap-36 flex flex-col items-center mt-[25px] w-full">
      <SectionHeader title="My Work" />
      <LazyWorkCard v-for="entry in workEntries" :entry="entry">
        <ImageGallery :images="entry.gallery" />
      </LazyWorkCard>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { workEntries } from "~/assets/WorkEntries";
</script>

<style></style>
