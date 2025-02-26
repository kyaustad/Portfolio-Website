<template>
  <section id="about">
    <div
      class="snap-start gap-36 flex flex-col items-center mt-[25px] w-full min-h-[1800px]"
      v-motion-fade-visible
    >
      <SectionHeader title="About" />

      <img src="/headshot.png" class="max-w-[200px]" />
      <div
        class="text-center items-center flex max-w-[360px] border-red-500 border-2 p-7 rounded-xl"
      >
        <p class="text-white text-xl font-base">
          Having a lifelong passion for learning and growth, I have been able to
          develop skills through various verticals. I'm a passionate developer
          for full-stack web applications using JavaScript, Vue, Nuxt, MongoDB,
          or express.js. I believe technology should be used to empower
          indivuduals and their creative visions, whether it is C++ and
          Blueprints in Unreal Engine or the latest in Progressive Web Apps.
          With a unique background in sales, I know how to be a self-starter,
          and keep my excitement and passion for all things 'development'.
        </p>
      </div>

      <SkillColumn />
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style></style>
