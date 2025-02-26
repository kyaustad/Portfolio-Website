import type { WorkEntry } from "~/types/WorkEntry";

export const workEntries: WorkEntry[] = [
    {
      title: "Just Canvas",
      desc: "With a background in Door-to-Door, and development experience, I set out to create a simple app for canvassing and door-to-door. Composed of three parts, the back-end database using MongoDB, the API written in express.js, and the front-end app. The front-end was originally written in Ionic/Vue, but later re-written using Vue3 and PrimeVue. The full-stack is build and deployed to a self-hosted UnRaid server and Docker registry.",
      coverImg: "/justCanvas/justcanvas-banner.png",
      stack: [
        "/js-logo.png",
        "/css.png",
        "/mongo.svg",
        "/vue.png",
        "/express.webp",
        "/git.png",
        "/docker.webp",
      ],
      links: [
        {
          label: "App",
          severity: "info",
          link: "https://app.justcanvas.app",
          icon: "pi pi-check",
        },
        {
          label: "LinkedIn",
          severity: "help",
          link: "https://www.linkedin.com/pulse/justcanvas-app-api-kyle-austad-nsdlc/",
          icon: "pi pi-linkedin",
        },
        {
          label: "Website",
          severity: "info",
          link: "https://justcanvas.app",
          icon: "pi pi-external-link",
        },
      ],
      gallery: [
        { itemImageSrc: "/justCanvas/jc-1.png" },
        { itemImageSrc: "/justCanvas/jc-2.png" },
        { itemImageSrc: "/justCanvas/jc-3.png" },
        { itemImageSrc: "/justCanvas/jc-4.png" },
        { itemImageSrc: "/justCanvas/jc-5.png" },
        { itemImageSrc: "/justCanvas/jc-6.png" },
        { itemImageSrc: "/justCanvas/jc-7.png" },
        { itemImageSrc: "/justCanvas/jc-8.png" },
        { itemImageSrc: "/justCanvas/jc-9.png" },
        { itemImageSrc: "/justCanvas/jc-10.png" },
        { itemImageSrc: "/justCanvas/jc-11.png" },
      ],
    },
    {
      title: "Metro Island",
      desc: "A complete game focused on building an island city and stat management. Build a thriving metropolis on remote islands and manage your city with the buildings you build. Don’t let any of them get too high or too low though! The goal here was to develop a complete game with a cohesive experience. While there are flaws, the core mechanics and art style turned out very fun and cozy!",
      coverImg: "/metro/metro-banner.jpg",
      stack: [
        
        "/cpp.png",
        "/unreal.svg",
        "/git.png",
        "/blender.png",
      ],
      links: [
        {
          label: "Itch.io",
          severity: "info",
          link: "https://thiscketcrab.itch.io/metro-island",
          icon: "pi pi-check",
        },
        
        
      ],
      gallery: [
        { itemImageSrc: "/metro/m-1.jpg" },
        { itemImageSrc: "/metro/m-2.jpg" },
        { itemImageSrc: "/metro/m-3.jpg" },
        { itemImageSrc: "/metro/m-4.jpg" },
        { itemImageSrc: "/metro/m-5.jpg" },
        { itemImageSrc: "/metro/m-6.jpg" },
        { itemImageSrc: "/metro/m-7.jpg" },
        { itemImageSrc: "/metro/m-8.jpg" },
        { itemImageSrc: "/metro/m-9.jpg" },
        { itemImageSrc: "/metro/m-10.jpg" },
        { itemImageSrc: "/metro/m-11.jpg" },
      ],
    },
    {
      title: "Unreal Assets",
      desc: "A wide collection of asset packs made for Unreal Engine, using varying degrees of C++ and Unreal Blueprints. Focused on ease of use and simple implementation of commonly created systems, ranging from objective and quest management, dialogue systems, to a complete re-creation of the spell system from Morrowind.",
      coverImg: "/fab/fab-banner.webp",
      stack: [
        
        "/cpp.png",
        "/unreal.svg",
        "/git.png",
        "/blender.png",
        "/substance.png",
        "/docker.webp",
      ],
      links: [
        {
          label: "Fab",
          severity: "info",
          link: "https://www.fab.com/sellers/Crab%20Interactive",
          icon: "pi pi-external-link",
        },
        {
          label: "Git Repos",
          severity: "help",
          link: "https://git.crabinteractive.com/explore/repos",
          icon: "pi pi-github",
        },
        
        
      ],
      gallery: [
        { itemImageSrc: "/fab/fab-1.webp" },
        { itemImageSrc: "/fab/fab-2.webp" },
        { itemImageSrc: "/fab/fab-3.webp" },
        { itemImageSrc: "/fab/fab-4.webp" },
        { itemImageSrc: "/fab/fab-5.webp" },
        { itemImageSrc: "/fab/fab-6.webp" },
        { itemImageSrc: "/fab/fab-7.webp" },
        { itemImageSrc: "/fab/fab-8.webp" },
        { itemImageSrc: "/fab/fab-9.webp" },
      
      ],
    },
    {
      title: "3D Renders",
      desc: "A selection of renders done using various tools in Blender and beyond with many different styles. From photo-realistic to stylized. Covering a range of subjects from landscapes to portraits.",
      coverImg: "/blender/tv-banner.webp",
      stack: [
        "/git.png",
        "/blender.png",
        "/substance.png",
      ],
      links: [
        
        {
          label: "3D Gallery",
          severity: "help",
          link: "https://git.crabinteractive.com/explore/repos",
          icon: "pi pi-images",
        },
        
        
      ],
      gallery: [
        { itemImageSrc: "/blender/blend-1.webp" },
        { itemImageSrc: "/blender/blend-2.webp" },
        { itemImageSrc: "/blender/blend-3.webp" },
        { itemImageSrc: "/blender/blend-4.webp" },
        { itemImageSrc: "/blender/blend-5.webp" },
        { itemImageSrc: "/blender/blend-6.webp" },
        { itemImageSrc: "/blender/tv-banner.webp" },
        
      ],
    },
  ];