<template>
  <div class="flex bg-sky-400 min-w-[40%] min-h-[80%] rounded-xl p-4">
    <div
      class="flex flex-row justify-between gap-4 bg-zinc-900 grow p-4 rounded-xl"
    >
      <a href="mailto:me@kyleaustad.com" class="text-center">
        <nuxt-img
          class="rounded-xl transform transition-all duration-300 ease-out hover:scale-[1.2] max-w-[52px]"
          src="/email.png"
        ></nuxt-img>
        <p>Email</p>
      </a>

      <a href="https://www.linkedin.com/in/kyle-austad/" class="text-center">
        <nuxt-img
          class="rounded-xl transform transition-all duration-300 ease-out hover:scale-[1.2] max-w-[52px]"
          src="/linkedin.png"
        ></nuxt-img>
        <p>LinkedIn</p>
      </a>
      <a
        href="https://github.com/kyaustad?tab=repositories"
        class="text-center"
      >
        <nuxt-img
          class="rounded-xl transform transition-all duration-300 ease-out hover:scale-[1.2] max-w-[52px]"
          src="/github.png"
        ></nuxt-img>
        <p>GitHub</p>
      </a>
      <a
        href="https://git.crabinteractive.com/explore/repos"
        class="text-center"
      >
        <nuxt-img
          class="rounded-xl transform transition-all duration-300 ease-out hover:scale-[1.2] max-w-[52px]"
          src="/gitea.webp"
        ></nuxt-img>
        <p>Gitea</p>
      </a>
    </div>
  </div>

  <div class="flex bg-sky-400 min-w-[30%] min-h-[80%] rounded-xl p-4">
    <div
      class="flex flex-row align-middle text-center justify-between gap-4 bg-zinc-900 grow p-4 rounded-xl"
    >
      <a
        href="/KyleAustadResume.docx"
        class="text-center justify-center align-middle items-center flex flex-col"
      >
        <nuxt-img
          class="rounded-xl transform transition-all duration-300 ease-out hover:scale-[1.2] max-w-[52px] max-h-[52px]"
          height="52"
          width="52"
          src="/doc.webp"
        ></nuxt-img>
        <p>Resume.docx</p>
      </a>
      <h4 class="text-white text-3xl font-bold">Resume</h4>
      <a
        href="/KyleAustadResume.pdf"
        class="text-center justify-center align-middle items-center flex flex-col"
      >
        <nuxt-img
          class="rounded-xl transform transition-all duration-300 ease-out hover:scale-[1.2] max-w-[52px] max-h-[52px]"
          src="/pdf.webp"
        ></nuxt-img>
        <p>Resume.pdf</p>
      </a>
    </div>
  </div>

  <div
    class="flex bg-sky-400 max-w-[60%] sm:max-w-[40%] min-h-[20%] rounded-xl p-2"
  >
    <div
      class="flex flex-col justify-between gap-4 bg-zinc-900 text-center grow p-2 rounded-xl"
    >
      <h3 class="text-white font-base text-sm">
        This website was made using Nuxt 3, PrimeVue, jsParticles, and
        TailwindCSS.
      </h3>
      <h3 class="text-white font-base text-sm">
        Thank you to the open source community!
      </h3>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
