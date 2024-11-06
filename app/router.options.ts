import type { RouterConfig } from "@nuxt/schema";
import { createMemoryHistory } from "vue-router";

export default {
  // https://router.vuejs.org/api/interfaces/routeroptions.html
  history: (base) =>
    import.meta.client ? createMemoryHistory(base) : createMemoryHistory(base),
} satisfies RouterConfig;
