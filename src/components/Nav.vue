<script setup lang="ts">
import { format } from "date-fns";
import { ref } from "vue";

const currentDate = new Date();
let formattedDated = format(currentDate, "yyyy-MM-dd");
let searchTerm = ref("");

fetch(`https://newsapi.org/v2/everything?q=${searchTerm.value}&from=${formattedDated}&sortBy=publishedAt&apiKey=892b19836a66459fbcfa80157d62b45a`);
</script>
<template>
  <container class="flex justify-between py-5 px-5 absolute w-full z-20">
    <div class="flex text-center font-serif text-4xl">
      <h1 class="font-extrabold bg-white p-3">News</h1>
      <h1 class="font-thin bg-black text-white p-3">Room</h1>
    </div>
    <div className="opacity-90 hover:opacity-100 flex items-center justify-center text-center w-1/3">
      <input className="h-6 w-1/4 px-4 rounded-tl-xl rounded-bl-xl bg-white bg-opacity-25 outline-none" v-model="searchTerm" />
      <router-link to="/search"><button className="p-2 h-6 max-sm:px-1 bg-white bg-opacity-25 rounded-none rounded-tr-xl rounded-br-xl flex items-center">S</button></router-link>
    </div>
  </container>
</template>
