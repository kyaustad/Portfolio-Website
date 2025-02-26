<template>
  <div class="card flex justify-center">
    <Galleria
      v-model:visible="displayBasic"
      :fullScreen="true"
      :showItemNavigators="false"
      containerClass="bg-zinc-950 pt-6"
      class="bg-zinc-900"
      :value="images"
      :responsiveOptions="responsiveOptions"
      :showIndicators="true"
      :showThumbnails="false"
      :changeItemOnIndicatorHover="true"
    >
      <template #item="slotProps">
        <nuxt-img
          :src="slotProps.item.itemImageSrc"
          class="max-w-[80%] max-h-[80%] block"
        ></nuxt-img>
      </template>
    </Galleria>
    <div>
      <Button
        label="Images"
        severity="info"
        size="small"
        icon="pi pi-eye"
        @click="displayBasic = true"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const displayBasic = ref(false);

const responsiveOptions = ref([
  {
    breakpoint: "1300px",
    numVisible: 4,
  },
  {
    breakpoint: "575px",
    numVisible: 1,
  },
]);

const props = defineProps<{
  images: { itemImageSrc: string }[];
}>();
</script>

<style></style>
