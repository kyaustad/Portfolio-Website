<template>
  <section id="about">
    <div
      class="snap-start gap-36 flex flex-col items-center mt-[25px] w-full min-h-[1800px]"
      v-motion-fade-visible
    >
      <SectionHeader title="About" />

      <img src="/headshot.webp" class="max-w-[200px] rounded-full" />
      <div
        class="text-center items-center flex flex-col justify-around gap-6 max-w-[360px] border-red-500 border-2 p-7 rounded-xl"
      >
        <div class="flex grow flex-row gap-2" style="color: gray">
          <i class="pi pi-map-marker"></i>
          <p class="text-gray-400 text-sm">Anywhere You Need</p>
        </div>
        <p class="text-white text-xl font-base">
          I am a full-stack developer. With a background in sales, I know how to
          work hard.
        </p>
      </div>

      <SkillColumn />
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style></style>
