<script setup lang="ts">
import homePhoto from "../assets/home.jpg";
import InfoBlock from "../components/InfoBlock.vue";
</script>
<template>
  <div class="relative">
    <img :src="homePhoto" class="h-[600px] w-full object-cover" />
    <h1 class="absolute flex text-end right-5 bottom-8 text-white font-extrabold text-4xl w-1/2 font-serif transform translateZ-10 drop-shadow-xl">Unveiling Truths, Igniting Minds: Your Source for Informed Perspectives and Breaking Stories.</h1>
  </div>
  <section class="flex items-center max-md:flex-col">
    <InfoBlock
      title="Discover"
      text="Explore our platform to discover the latest news, trends, and hidden gems, bringing you a world of fascinating stories.
            Delve into the depths of information as you discover unique perspectives and uncover the stories that matter most."
    />
    <InfoBlock
      title="Learn"
      text="Our platform is your go-to destination to learn about diverse subjects, from current events to in-depth analyses, fostering continuous intellectual growth.
            Expand your knowledge base by learning from expertly crafted articles that cover a spectrum of topics, ensuring a rich and enlightening experience."
    />
    <InfoBlock
      title="Think"
      text="Challenge your intellect and stimulate your mind by engaging with content that encourages critical thinking and thoughtful reflection.
            Our articles are crafted to spark intellectual curiosity, inviting you to think deeply about the world around you and consider alternative perspectives."
    />
  </section>
</template>
