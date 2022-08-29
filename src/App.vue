<template>
  <div id="app">
    <div class="container mt-3">
      <Login />

      <router-view />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Login from "./pages/Login.vue";
export default defineComponent({
  name: "App",
});
</script>