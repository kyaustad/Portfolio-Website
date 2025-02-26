<template>
  <div class="flex flex-col mt-24">
    <h1 class="text-white font-bold text-4xl sm:text-5xl">{{ props.title }}</h1>
    <div
      class="fixed rounded-sm bg-red-500 ml-6 -z-[30] mt-6 min-h-[20px] min-w-[100px] sm:mt-8 sm:ml-8"
    ></div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  title: string;
}>();
</script>

<style></style>
