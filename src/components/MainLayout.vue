<template>
  <section class="grid gap-4 p-8 place-content-center min-h-screen">
    <slot></slot>
  </section>
</template>

<style scoped>
article:empty {
  display: none;
}
</style>
