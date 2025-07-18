<template>
  <div
    class="p-[1px] max-w-[95px] items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-blue-500 transform transition-all duration-300 ease-out shadow-xl"
    ref="avatar"
    :style="{
      transform: `scale(${scale}) rotateX(${tiltY}deg) rotateY(${tiltX}deg)`,
    }"
    @mousemove="handleMouseMove"
    @mouseleave="resetRotation"
    v-motion-fade-visible
  >
    <div
      class="flex flex-col items-center justify-center gap-1 text-center p-4 rounded-xl bg-[#292626] flex-grow h-full"
    >
      <nuxt-img
        :src="props.img"
        height="40"
        alt="Skill Icon"
        class="max-w-[30px] md:max-w-[50px] max-h-[30px] md:max-h-[50px] rounded"
      />
      <h3 class="mb-0 text-sm md:text-base">{{ props.name }}</h3>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  img: string;
  name: string;
}>();

const avatar = ref<HTMLElement | null>(null);
const scale = ref(1);
const tiltX = ref(0);
const tiltY = ref(0);

const handleMouseMove = (event: MouseEvent) => {
  if (avatar.value) {
    const rect = avatar.value.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const offsetX = (event.clientX - centerX) / rect.width;
    const offsetY = (event.clientY - centerY) / rect.height;

    tiltX.value = offsetX * 80;
    tiltY.value = offsetY * 80 * -1;

    scale.value = 1.15;
  }
};

const resetRotation = () => {
  tiltX.value = 0;
  tiltY.value = 0;
  scale.value = 1;
};
</script>

<style></style>
