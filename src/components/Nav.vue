<script setup lang="ts">
// @ts-ignore
import { format, sub } from "date-fns";
// @ts-ignore
import { ref } from "vue";
// @ts-ignore
import { useMyStore } from "../stores/store";
import { Blog } from "../classes/Classes";

const store = useMyStore();

const currentDate = new Date();
const oneDayPriorDate = sub(currentDate, { days: 1 });
let formattedDate = format(oneDayPriorDate, "yyyy-MM-dd");
let searchTerm = ref("");

const searchNews = async () => {
  try {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${searchTerm.value}&from=${formattedDate}&sortBy=publishedAt&apiKey=892b19836a66459fbcfa80157d62b45a`);
    const data = await response.json();
    store.blogs = [];
    for (let i = 0; i < data.articles.length; i++) {
      const element = data.articles[i];
      const blog = new Blog(element.title, element.description, element.url, element.urlToImage, element.author, element.source.name, element.content);

      if (element.title !== "[Removed]") {
        store.blogs.push({ blog });
      }
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
</script>
<template>
  <container class="flex justify-between py-5 px-5 absolute w-full z-20">
    <router-link to="/">
      <div class="flex text-center font-serif text-4xl">
        <h1 class="font-extrabold bg-white p-3">News</h1>
        <h1 class="font-thin bg-black text-white p-3">Room</h1>
      </div>
    </router-link>
    <div className="opacity-90 hover:opacity-100 flex items-center justify-center text-center w-1/3">
      <input className="h-6 w-1/4 px-4 rounded-tl-xl rounded-bl-xl bg-white bg-opacity-25 outline-none" v-model="searchTerm" />
      <router-link to="/search"
        ><button className="p-2 h-6 max-sm:px-1 bg-white bg-opacity-25 rounded-none rounded-tr-xl rounded-br-xl flex items-center" @click="searchNews"><font-awesome-icon icon="fa-solid fa-magnifying-glass" class="h-3 w-4" /></button
      ></router-link>
    </div>
  </container>
</template>
