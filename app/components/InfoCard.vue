<script setup>
defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
})
</script>

<template>
  <div class="rounded-[28px] border border-black/10 bg-white p-6 text-center">
    <p class="font-mono text-[11px] uppercase tracking-widest text-muted">{{ title }}</p>
    <p class="mt-3 text-[16px] leading-relaxed text-ink/80">{{ description }}</p>
  </div>
</template>