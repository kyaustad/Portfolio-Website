<template>
  <div class="sticky z-[80] top-0 flex min-w-full">
    <header
      class="top-0 left-0 w-full h-[80px] bg-zinc-700 flex justify-between items-center px-4 shadow-lg"
    >
      <div class="inset-0 flex gap-2 justify-between items-center">
        <a href="mailto:me@kyleaustad.com" class="text-center">
          <nuxt-img
            height="24"
            width="24"
            class="rounded-xl transform transition-all duration-300 ease-out hover:scale-[1.2] max-w-[52px]"
            src="/email.png"
          ></nuxt-img>
        </a>

        <a href="https://www.linkedin.com/in/kyle-austad/" class="text-center">
          <nuxt-img
            height="24"
            width="24"
            class="rounded-xl transform transition-all duration-300 ease-out hover:scale-[1.2] max-w-[52px]"
            src="/linkedin.png"
          ></nuxt-img>
        </a>
        <a
          href="https://github.com/kyaustad?tab=repositories"
          class="text-center"
        >
          <nuxt-img
            height="24"
            width="24"
            class="rounded-xl transform transition-all duration-300 ease-out hover:scale-[1.2] max-w-[52px]"
            src="/github.png"
          ></nuxt-img>
        </a>
      </div>
      <div class="inset-0 flex gap-2 justify-between items-center">
        <Button
          @click="scrollToSection('about')"
          label="About"
          size="small"
          :outlined="activeSection !== 'about'"
          severity="info"
        />
        <Button
          @click="scrollToSection('work')"
          label="My Work"
          size="small"
          :outlined="activeSection !== 'work'"
          severity="info"
        />
        <Button
          @click="scrollToSection('contact')"
          label="Contact"
          size="small"
          :outlined="activeSection !== 'contact'"
          severity="info"
        />
      </div>
    </header>
  </div>
</template>

<script lang="ts" setup>
const activeSection = ref<string | null>(null);

const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    // window.scrollTo({ top: section.offsetTop, behavior: "smooth" });
  }
};

const handleScroll = () => {
  const sections = ["about", "work", "contact"];
  for (const sectionId of sections) {
    const section = document.getElementById(sectionId);
    if (section) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 100 && rect.bottom >= 100) {
        activeSection.value = sectionId;
        break;
      }
    }
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style></style>
