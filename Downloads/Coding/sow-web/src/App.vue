<template>
  <div id="app">
    <NavMenu @menuClick="handleMenuClick" @contactClick="handleContactClick" />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavMenu from "./components/NavMenu/index.vue";

export default defineComponent({
  name: "App",
  components: {
    NavMenu,
  },
  methods: {
    handleMenuClick(itemId: number) {
      // Add navigation logic based on itemId
      switch (itemId) {
        case 1:
          this.$router.push("/investment-types");
          break;
        case 2:
          this.$router.push("/philosophy");
          break;
        case 3:
          this.$router.push("/mentors");
          break;
        case 4:
          this.$router.push("/team");
          break;
      }
    },
    handleContactClick() {
      // Add contact button logic here
      console.log("Contact button clicked!");
    },
  },
});
</script>

<style lang="scss">
@use "@/assets/scss/variables" as *;
@use "@/assets/scss/semantic-colors" as *;

body {
  margin: 0;
  padding: 0;
  background-color: black;
  min-height: 100vh;
}

#app {
  font-family: "Poppins", sans-serif;
}
</style>
