<template>
  <slot :posts="posts">
    <section class="not-prose font-mono">
      <div class="column text-gray-400 text-sm">
        <div>Date</div>
        <div>Title</div>
      </div>
      <ul>
        <li v-for="post in posts" :key="post._path">
          <NuxtLink
            :to="post._path"
            class="column hover:bg-gray-200 dark:hover:bg-gray-800"
          >
            <div class="text-gray-500">
              {{ new Date(post.publishedAt).getFullYear() }}
            </div>
            <div>{{ post.title }}</div>
          </NuxtLink>
        </li>
      </ul>
    </section>
  </slot>
</template>

<script lang="ts" setup>
import { data } from "autoprefixer";

const props = defineProps({
  limit: {
    type: Number,
    default: null,
  },
});

const { data: posts, error } = await useAsyncData("blog-list", () => {
  let query = queryContent("/blog")
    .where({ _path: { $ne: "/blog" } })
    .sort({ publishedAt: -1 })
    .only(["_path", "title", "publishedAt"]);

  if (props.limit) {
    query = query.limit(props.limit);
  }

  return query.find();
});
const formattedPosts = computed(() => {
  if (!posts.value) {
    return [];
  }
  const result = [];
  let lastYear = null;
  for (const post of posts.value) {
    const year = new Date(post.publishedAt).getFullYear();
    if (year !== lastYear) {
      result.push({ year, posts: [] });
      lastYear = year;
    }
  }
  return result;
});
</script>

<style scoped>
.column {
  @apply flex items-center space-x-8 py-2 border-b border-gray-200 dark:border-gray-700;
}
</style>
