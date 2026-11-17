<script setup>
const links = [
  { label: 'Home', to: '/', icon: '⌂' },
  { label: 'Students', to: '/students', icon: '☺' },
]
</script>

<template>
  <header class="fixed inset-x-0 top-4 z-30 flex justify-center px-4">
    <nav class="flex items-center gap-1 rounded-full border border-black/10 bg-white/80 p-1.5 backdrop-blur-xl">
      <NuxtLink v-for="l in links" :key="l.to" :to="l.to"
        class="flex items-center gap-2 rounded-full px-4 py-2.5 text-[15px] text-muted transition hover:text-ink"
        active-class="!bg-black/5 !text-ink">
        <span>{{ l.icon }}</span>{{ l.label }}
      </NuxtLink>
    </nav>
  </header>
</template>