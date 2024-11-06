<template>
  <BlogPosts v-slot="{ posts }" :limit="limit">
    <div v-for="post in posts" :key="post._path">
      <NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
    </div>
  </BlogPosts>
</template>

<script lang="ts" setup>
const props = defineProps({
  limit: {
    type: Number,
    default: null,
  },
});
</script>

<style></style>
