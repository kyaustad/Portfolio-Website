<template>
  <section
    class="snap-y relative min-w-screen min-w-full flex flex-col items-center justify-center"
    v-motion-roll-top
  >
    <!-- Particles Background -->
    <div class="absolute inset-0 -z-[1] min-h-screen min-w-full" v-motion-fade>
      <NuxtParticles
        id="tsparticlesMain"
        :options="particleOptions"
        class="min-w-full min-h-full"
      >
      </NuxtParticles>
    </div>
    <!-- Content Container -->
    <div
      class="relative z-[50] flex flex-col items center justify-center w-full"
    >
      <TheHeaderBar />
      <LazyTheAboutSection />
      <LazyTheWorkSection />
      <LazyTheContactSection />
    </div>
  </section>
</template>

<script lang="ts" setup>
import type { ISourceOptions as ParticlesOptions } from "@tsparticles/engine";

const particleOptions: ParticlesOptions = {
  autoPlay: true,
  background: {
    color: "#292626", // Black background
  },
  backgroundMask: {
    enable: false, // No background mask
  },
  clear: true,
  detectRetina: true,
  fpsLimit: 30,
  fullScreen: {
    enable: true,
    zIndex: -1000, // Ensure particles are behind other content
  },

  particles: {
    color: {
      value: ["#ffe9e9", "#ffb2b2", "#7c94ff"], // White particles
    },

    move: {
      enable: true,
      speed: 0.05, // Movement speed of particles
    },
    number: {
      density: {
        enable: true,
        // Density of particles in the canvas
      },
      value: 100, // Number of particles
    },
    opacity: {
      value: 0.25, // Particle opacity
    },
    shape: {
      type: "circle", // Circular particles
    },
    size: {
      value: { min: 1, max: 3 }, // Random size between 1 and 3
    },
  },
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  smooth: true,
  themes: [],
  zLayers: 1,
};
</script>

<style></style>
