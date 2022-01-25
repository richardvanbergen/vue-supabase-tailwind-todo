<template>
  <li class="p-2">
    <strong class="block" role="heading" aria-level="3">
      <slot name="title" />
    </strong>

    <slot name="description" required />
  </li>
</template>
