<template>
  <div
    class="w-[90%] h-[550px] md:h-[450px] md:w-[80%] lg:w-[60%] bg-gradient-to-tr from-red-500 to-red-400 flex flex-col sm:flex-row rounded-xl justify-between items-center"
  >
    <div
      class="rounded-xl flex flex-col sm:max-w-[60%] align-middle items-center justify-between grow hover:scale-[0.98] m-2 p-2 bg-zinc-800 h-[95%] transform transition-all duration-300 ease-out shadow-xl text-center"
    >
      <h3 class="text-white text-wrap mb-1 mt-0 font-bold text-lg md:text-2xl">
        {{ entry.title }}
      </h3>
      <div
        class="max-h-[300px] flex justify-center hover:scale-[1.02] transform transition-all duration-300 ease-out"
      >
        <a :href="entry.coverImg">
          <nuxt-img
            :src="`${entry.coverImg}`"
            class="aspect-auto max-h-[95%]"
          />
        </a>
      </div>
      <div
        class="max-h-[18px] sm:max-h-[26px] gap-4 md:max-h-[32px] md:mb-2 align-middle flex flex-row justify-around"
      >
        <!-- <h3 class="text-white font-base text-xs mt-0">Tech Stack:</h3> -->
        <nuxt-img
          :src="`${img}`"
          class="aspect-auto max-h-[18px] max-w-[18px] sm:max-h-[26px] sm:max-w-[26px] md:max-h-[32px] md:max-w-[32px]"
          v-for="img in entry.stack"
        />
      </div>
    </div>

    <div
      class="rounded-xl flex flex-col justify-around sm:max-w-[40%] hover:scale-[0.98] m-2 p-2 bg-zinc-800 h-[95%] transform transition-all duration-300 ease-out shadow-xl text-center"
    >
      <p class="text-white text-wrap m-2 font-base text-base">
        {{ entry.desc }}
      </p>
      <div class="flex w-full justify-around">
        <Button
          severity="help"
          icon="pi pi-link"
          @click="showAlert = true"
          size="small"
          label="Links"
        />

        <Dialog
          v-model:visible="showAlert"
          modal
          :header="`${entry.title} Links`"
          :style="{ width: '25rem' }"
        >
          <div
            class="flex items-center justify-center gap-4 mb-8"
            v-for="item in entry.links"
          >
            <a :href="item.link">
              <Button
                :severity="item.severity"
                :label="item.label"
                :icon="item.icon"
            /></a>
          </div>
        </Dialog>

        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { WorkEntry } from "~/types/WorkEntry";

const props = defineProps<{
  entry: WorkEntry;
}>();

const showAlert = ref(false);
</script>

<style></style>
