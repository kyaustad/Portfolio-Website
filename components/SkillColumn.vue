<template>
  <div class="flex flex-col m-2 text-center">
    <h3 class="text-white font-base text-3xl sm:text-4xl mb-10">Skills</h3>
    <p class="text-[7px] font-base md:text-[10px] mb-3">... hover me</p>
    <div
      class="grid grid-cols-1 justify-between md:grid-cols-4 gap-4 md:gap-x-8"
    >
      <!-- First Column -->
      <div class="flex md:flex-col gap-4 items-center justify-around">
        <SkillAvatar img="/js-logo.png" name="JavaScript" />
        <SkillAvatar img="/node-logo.png" name="Node.js" />
        <SkillAvatar img="/vue.png" name="Vue 3" />
        <SkillAvatar img="/nuxt.png" name="Nuxt" />
      </div>

      <!-- Second Column -->
      <div class="flex md:flex-col gap-4 items-center justify-between">
        <SkillAvatar img="/html.png" name="HTML" />
        <SkillAvatar img="/css.png" name="CSS" />
        <SkillAvatar img="/tailwind.png" name="Tailwind CSS" />
        <SkillAvatar img="/express.webp" name="express.js" />
      </div>

      <!-- Third Column -->
      <div class="flex md:flex-col gap-4 items-center justify-around">
        <SkillAvatar img="/docker.webp" name="Docker" />
        <SkillAvatar img="/mongo.webp" name="MongoDB" />
        <SkillAvatar img="/cpp.png" name="C++" />
        <SkillAvatar img="/unreal.webp" name="Unreal Engine" />
      </div>

      <div class="flex w-full md:flex-col gap-4 items-center justify-between">
        <SkillAvatar img="/blender.png" name="Blender" />
        <SkillAvatar img="/git.png" name="Git" />
        <SkillAvatar img="/substance.png" name="Substance Painter" />
        <SkillAvatar img="/brain.png" name="A Brain" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
