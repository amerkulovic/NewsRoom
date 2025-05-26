<script setup lang="ts">
// @ts-ignore
const props = defineProps(["title", "text"]);
</script>
<template>
  <div class="text-center border-r border-slate-200 py-20 my-2 max-md:py-5 w-1/3 max-md:w-full">
    <h1 class="text-4xl font-serif pb-10">{{ title }}</h1>
    <p class="mx-2 font-extralight">{{ text }}</p>
  </div>
</template>
