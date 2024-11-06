<template>
  <button @click="toggleColorMode" class="pr-4 md:p-2 text-4xl md:text-base">
    <Icon
      v-if="colorMode.value === 'dark'"
      name="line-md:moon-filled-alt-to-sunny-filled-loop-transition"
      class="text-white"
    />
    <Icon v-else name="line-md:moon-loop" class="text-black" />
  </button>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
const colorMode = useColorMode();

function toggleColorMode() {
  colorMode.value = colorMode.value === "dark" ? "light" : "dark";
  /*  console.log("Color mode toggled to:", colorMode.value); */
}

// Check the initial value of colorMode on mount
/* onMounted(() => {
  console.log("Initial color mode:", colorMode.value);
}); */
</script>
