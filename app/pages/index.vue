<script setup>
// label + icon = pill, no label = round icon bubble
const pills = [
  { label: 'Reusable components', icon: '◫', color: 'bg-pill-lime' },
  { label: 'Props', icon: '#', color: 'bg-pill-orange' },
  { label: 'Nuxt layouts', icon: '◎', color: 'bg-pill-pink' },
  { icon: '✦', color: 'bg-pill-yellow' },
  { label: 'Component-based', icon: '✥', color: 'bg-pill-blue' },
  { label: 'Tailwind', icon: '✎', color: 'bg-pill-purple' },
  { icon: '☺', color: 'bg-pill-blue' },
  { label: 'Student info', icon: '☰', color: 'bg-pill-green' },
  { label: 'Prototyping', icon: '⇄', color: 'bg-pill-gray' },
]
</script>

<template>
  <section class="text-center">
    <!-- hello -->
    <p class="text-[15px] text-muted">Hello!</p>

    <!-- headline -->
    <h1 class="mx-auto mt-6 max-w-3xl font-serif text-6xl leading-[0.92] tracking-[-0.03em] sm:text-8xl">
      Welcome to<br />student <em>information</em>
    </h1>

    <!-- description -->
    <div class="mx-auto mt-10 max-w-md">
      <InfoCard
        title="About this site"
        description="A simple website that shows student profiles. Every card, button, header and footer is a reusable component powered by props."
      />
    </div>

    <!-- button -->
    <div class="mt-8">
      <AppButton label="View students" color="dark" to="/students" />
    </div>

    <!-- pills (straight, not clickable) -->
    <div class="mx-auto mt-20 flex max-w-3xl flex-wrap items-center justify-center gap-x-2 gap-y-4">
      <template v-for="(p, i) in pills" :key="i">
        <span v-if="p.label"
          class="flex cursor-default items-center gap-3 rounded-full px-6 py-3.5 font-mono text-[14px] font-medium uppercase tracking-wide transition hover:scale-105"
          :class="p.color">
          {{ p.label }} <span>{{ p.icon }}</span>
        </span>
        <span v-else
          class="flex h-12 w-12 cursor-default items-center justify-center rounded-full transition hover:scale-105"
          :class="p.color">
          {{ p.icon }}
        </span>
      </template>
    </div>
  </section>
</template>