<template>
  <p class="mb-10">Take look my github peojects</p>
  <section v-if="pending">Loading...</section>
  <section v-else-if="error">Error...</section>
  <section v-else>
    <ul class="grid grid-cols-1 gap-4">
      <li
        v-for="repository in repos"
        :key="repository.id"
        class="border border-gray-300 dark:border-gray-700 rounded-sm p-4 hover:bg-gray-200 dark:hover:bg-gray-600 font-mono text-sm"
      >
        <a :href="repository.html_url" target="_blank">
          <div class="flex items-center justify-between">
            <div class="font-semibold">{{ repository.name }}</div>
            <div>{{ repository.stargazers_count }} ★</div>
          </div>
          <p class="text-sm">
            {{ repository.description }}
          </p>
        </a>
      </li>
    </ul>
  </section>
</template>

<script lang="ts" setup>
interface Repository {
  id: number;
  name: string;
  description: string;
  stargazers_count: number;
}

const { error, pending, data } = await useFetch<{ data: Repository[] }>(
  "https://api.github.com/users/piotr-jura-udemy/repos"
);
const repos = computed(() =>
  Array.isArray(data.value)
    ? data.value
        .filter((repo: Repository) => repo.description)
        .sort(
          (a: Repository, b: Repository) =>
            b.stargazers_count - a.stargazers_count
        )
    : []
);
</script>

<style></style>
