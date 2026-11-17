<script setup>
const props = defineProps({
  name: { type: String, required: true },
  studentId: { type: String, default: '' },
  year: { type: String, default: '' },
  program: { type: String, default: '' },
  description: { type: String, default: '' },
  email: { type: String, default: '' },
  phone: { type: String, default: '' },
  status: { type: String, default: 'Enrolled' },
  cover: { type: String, default: 'bg-pill-blue' },
})

const initials = computed(() =>
  props.name.split(' ').map((n) => n[0]).slice(0, 2).join('')
)

const statusStyles = {
  Enrolled: { text: 'text-green-600', dot: 'bg-green-500' },
  Dropped: { text: 'text-red-600', dot: 'bg-red-500' },
  Graduated: { text: 'text-blue-600', dot: 'bg-blue-500' },
  'On Leave': { text: 'text-orange-600', dot: 'bg-orange-500' },
}
const statusStyle = computed(
  () => statusStyles[props.status] ?? { text: 'text-muted', dot: 'bg-black/30' }
)
</script>

<template>
  <article class="flex h-full flex-col rounded-[32px] border border-black/10 bg-white p-2 transition hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]">
    <!-- cover + status -->
    <div class="relative h-32 rounded-[26px]" :class="cover">
      <span
        class="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-white px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-wide shadow-sm"
        :class="statusStyle.text"
      >
        <span class="h-2 w-2 rounded-full" :class="statusStyle.dot" />
        {{ status }}
      </span>
    </div>

    <!-- avatar -->
    <div class="relative z-10 -mt-12 flex justify-center">
      <div class="flex h-24 w-24 items-center justify-center rounded-full border-[5px] border-white bg-ink font-serif text-4xl text-white">
        {{ initials }}
      </div>
    </div>

    <!-- info -->
    <div class="flex-1 px-5 pb-5 pt-3 text-center">
      <h3 class="font-serif text-[34px] leading-none tracking-tight">{{ name }}</h3>

      <div class="mt-4 flex flex-wrap items-center justify-center gap-2">
        <span class="rounded-full bg-pill-yellow px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-wide">{{ year }}</span>
        <span class="rounded-full bg-pill-gray px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-wide">{{ program }}</span>
      </div>

      <p class="mt-4 text-[15px] leading-relaxed text-muted">{{ description }}</p>
    </div>

    <!-- contact list -->
    <div class="mx-3 mb-3 divide-y divide-black/5 overflow-hidden rounded-2xl bg-paper text-left text-[14px]">
      <div class="flex items-center justify-between gap-3 px-4 py-3">
        <span class="font-mono text-[11px] uppercase tracking-wide text-muted">Student ID</span>
        <span class="font-medium">{{ studentId }}</span>
      </div>
      <div class="flex items-center justify-between gap-3 px-4 py-3">
        <span class="font-mono text-[11px] uppercase tracking-wide text-muted">Email</span>
        <a :href="`mailto:${email}`" class="truncate font-medium">{{ email }}</a>
      </div>
      <div class="flex items-center justify-between gap-3 px-4 py-3">
        <span class="font-mono text-[11px] uppercase tracking-wide text-muted">Phone</span>
        <a :href="`tel:${phone.replace(/\s/g, '')}`" class="font-medium">{{ phone }}</a>
      </div>
    </div>
  </article>
</template>