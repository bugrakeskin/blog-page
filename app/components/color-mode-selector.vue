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
const colorMode = useColorMode();

// Define the toggleColorMode function
const toggleColorMode = () => {
  colorMode.preference = colorMode.preference === "dark" ? "light" : "dark";
};

// Set initial color mode from localStorage
onMounted(() => {
  const savedColorMode = localStorage.getItem("color-mode");
  if (savedColorMode) {
    colorMode.value = savedColorMode;
  }
});
</script>
