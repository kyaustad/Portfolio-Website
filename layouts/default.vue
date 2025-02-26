<template>
  <div class="relative min-h-screen items-center justify-center text-center">
    <!-- Text Container -->
    <div
      class="absolute inset-0 z-[50] items-center justify-center text-center flex flex-col"
      v-motion-pop
    >
      <h1 class="text-white text-4xl md:text-5xl font-base">Hi,</h1>
      <div class="flex">
        <h1 class="text-white text-4xl md:text-5xl font-base">my name is</h1>
        <h1 class="text-blue-500 text-4xl md:text-5xl font-bold ml-4">Kyle</h1>
        <h1 class="text-white text-4xl md:text-5xl font-base">.</h1>
      </div>
      <h1 class="text-white text-3xl md:text-4xl font-base mt-10 mb-6">
        I like to code things.
      </h1>
      <Button
        @click="handleClick"
        class="mt-10 min-w-[20%]"
        label="See My Work"
        severity="info"
        raised
        size="large"
        icon="pi pi-chevron-down"
      >
      </Button>
    </div>
    <div
      class="relative min-h-screen min-w-full flex bg-stone-900 shadow-md"
      v-motion-fade
    >
      <!-- Particles -->
      <NuxtParticles
        id="tsparticles"
        :options="particleOptions"
        class="min-w-full"
      >
      </NuxtParticles>
    </div>
  </div>
  <!-- Main Content -->
  <main class="pt-[0px]">
    <slot />
  </main>
</template>

<script lang="ts" setup>
import type { ISourceOptions as ParticlesOptions } from "@tsparticles/engine";

const router = useRouter();

const handleClick = () => {
  router.push("/#about");
};

const particleOptions: ParticlesOptions = {
  autoPlay: true,
  background: {
    color: "#1c1917", // Black background
  },
  backgroundMask: {
    enable: false, // No background mask
  },
  clear: true,
  detectRetina: true,
  fpsLimit: 60,
  fullScreen: {
    enable: false,
    zIndex: -100, // Ensure particles are behind other content
  },
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push", // Add particles on click
      },
      onHover: {
        enable: true,
        mode: ["bubble", "grab", "connect", "trail"], // Repulse particles on hover
      },
    },
    modes: {
      push: {
        quantity: 4, // Number of particles to add on click
      },
      repulse: {
        distance: 100, // Distance of repulsion
        duration: 0.4,
      },
      attract: {
        distance: 150, // Distance to attract particles
        duration: 0.4, // Duration of the attraction effect
        speed: 0.3, // Speed of attraction
      },
      trail: {
        delay: 2, // Delay between trail particles
        quantity: 1, // Number of particles in the trail
      },
      slow: {
        factor: 0.5, // Speed reduction factor (0.5 = 50% slower)
        radius: 200, // Radius of the slowdown effect
      },
      grab: {
        distance: 200, // Distance to grab particles
        links: {
          opacity: 0.5, // Opacity of the connecting lines
        },
      },
      connect: {
        distance: 220, // Maximum distance to connect particles
        links: {
          opacity: 0.5, // Opacity of the connecting lines
        },
      },
      bubble: {
        distance: 200, // Distance from the cursor to activate the effect
        size: 10, // Size increase of particles
        duration: 2, // Duration of the effect
        opacity: 0.8, // Opacity change during the effect
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff", // White particles
    },
    links: {
      color: "#ff9090", // White links
      distance: 150, // Maximum distance between linked particles
      enable: true, // Enable links between particles
      opacity: 0.25, // Link opacity
      width: 0.85, // Link width
    },
    move: {
      enable: true,
      speed: 0.45, // Movement speed of particles
    },
    number: {
      density: {
        enable: true,
        // Density of particles in the canvas
      },
      value: 160, // Number of particles
    },
    opacity: {
      value: 0.5, // Particle opacity
    },
    shape: {
      type: "circle", // Circular particles
    },
    size: {
      value: { min: 1, max: 2 }, // Random size between 1 and 3
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
