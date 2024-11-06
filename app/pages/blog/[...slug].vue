<template>
  <article
    class="prose max-w-none dark:prose-invert prose-pre:bg-white dark:prose-pre:bg-gray-800 prose-pre:text-gray-400"
  >
    <ContentDoc>
      <template #not-found>
        <h4>The Post you are looking For</h4>
        <h1>Not found (404)</h1>
        <p>Please check the URL...</p>
      </template>
    </ContentDoc>
  </article>
</template>

<script lang="ts" setup>
/* const route = useRoute();
console.log(route.params.slug); */
</script>

<style></style>
