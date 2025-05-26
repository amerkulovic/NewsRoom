<script setup lang="ts">
import naImage from "../assets/na.png";
// @ts-ignore
import { useMyStore } from "../stores/store";
import Loading from "./Loading.vue";

const store = useMyStore();
</script>
<template>
  <Loading v-if="store.blogs.length === 0" />
  <div class="flex flex-col items-center pt-[110px]">
    <container v-for="(object, index) in store.blogs" :key="index" class="flex flex-row w-5/6 py-7 border-b border-slate-400">
      <a :href="object.blog.url" target="_blank">
        <img v-if="object.blog.imageURL" class="w-[263px] h-[175px]" :src="object.blog.imageURL" />
        <img v-else class="w-[263px] h-[175px]" :src="naImage" />
      </a>
      <section class="flex flex-col ml-5 w-4/5">
        <p class="font-extralight">{{ object.blog.source }}</p>
        <a :href="object.blog.url" target="_blank">
          <h1 class="text-2xl font-bold font-serif hover:underline">{{ object.blog.title }}</h1>
        </a>
        <p v-if="object.blog.author" class="font-extralight">By {{ object.blog.author }}</p>
      </section>
    </container>
  </div>
</template>
