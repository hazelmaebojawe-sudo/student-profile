<template>
  <div class="flex min-h-screen flex-col bg-paper">
    <AppHeader />
    <main class="mx-auto w-full max-w-5xl flex-1 px-5 pb-16 pt-32">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>