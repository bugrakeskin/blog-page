<template>
  <div>
    <NuxtLayout>
      <h1>Opps {{ error?.statusCode }}</h1>
      <h2>{{ error?.statusMessage }}</h2>
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
defineProps({ error: Object });
</script>

<style></style>
