<script setup lang="ts">
import { useMyStore } from "../stores/store";

const store = useMyStore();
console.log(store.blogs);
</script>
<template>
  <div class="flex flex-col items-center">
    <container v-for="(object, index) in store.blogs" :key="index" class="flex flex-row w-5/6 py-7 border-b border-slate-400">
      <a :href="object.blog.urlToImage">
        <img class="w-[263px] h-[175px]" :src="object.blog.imageURL" />
      </a>
      <section class="flex flex-col ml-5 w-4/5">
        <p>{{ object.blog.source }}</p>
        <h1 class="text-2xl font-bold font-serif">{{ object.blog.title }}</h1>
        <p>By {{ object.blog.author }}</p>
      </section>
    </container>
  </div>
</template>
