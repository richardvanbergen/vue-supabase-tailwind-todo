<template>
  <header class="px-8 min-h-[6rem] flex place-content-center shadow-sm">
    <div
      class="flex items-center content-center justify-between w-full max-w-7xl"
    >
      <slot name="logo" />

      <slot name="links" />
    </div>
  </header>
</template>
