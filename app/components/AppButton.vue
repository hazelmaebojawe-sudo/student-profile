<script setup>
const props = defineProps({
  label: { type: String, default: 'Button' },
  color: { type: String, default: 'dark' },
  to: { type: String, default: '' },
})

const colors = {
  dark: 'bg-ink text-white hover:bg-black/80',
  yellow: 'bg-pill-yellow text-ink hover:brightness-95',
  lime: 'bg-pill-lime text-ink hover:brightness-95',
  pink: 'bg-pill-pink text-ink hover:brightness-95',
  blue: 'bg-pill-blue text-ink hover:brightness-95',
  purple: 'bg-pill-purple text-ink hover:brightness-95',
  light: 'bg-white text-ink border border-black/10 hover:bg-pill-gray',
}
const classes = computed(
  () => `inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-mono text-[13px] font-medium uppercase tracking-wide transition active:scale-95 ${colors[props.color] ?? colors.dark}`
)
</script>

<template>
  <NuxtLink v-if="to" :to="to" :class="classes">{{ label }} <span>→</span></NuxtLink>
  <button v-else :class="classes">{{ label }}</button>
</template>